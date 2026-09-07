import { readFile, writeFile, rename } from "node:fs/promises";

const containerTypes = new Set([
  "moov",
  "trak",
  "mdia",
  "minf",
  "stbl",
  "edts",
  "dinf",
  "udta",
  "ilst",
]);

function readBoxSize(buffer, offset) {
  const size32 = buffer.readUInt32BE(offset);
  if (size32 === 1) {
    return Number(buffer.readBigUInt64BE(offset + 8));
  }
  return size32 || buffer.length - offset;
}

function readTopLevelBoxes(buffer) {
  const boxes = [];
  let offset = 0;
  while (offset + 8 <= buffer.length) {
    const size = readBoxSize(buffer, offset);
    if (size < 8 || offset + size > buffer.length) {
      throw new Error(`Invalid MP4 box at byte ${offset}`);
    }
    boxes.push({
      offset,
      size,
      type: buffer.toString("ascii", offset + 4, offset + 8),
    });
    offset += size;
  }
  return boxes;
}

function patchChunkOffsets(buffer, start, end, shift) {
  let offset = start;
  while (offset + 8 <= end) {
    const size = readBoxSize(buffer, offset);
    if (size < 8 || offset + size > end) {
      return;
    }

    const type = buffer.toString("ascii", offset + 4, offset + 8);
    const headerSize = buffer.readUInt32BE(offset) === 1 ? 16 : 8;
    const payloadStart = offset + headerSize;
    const boxEnd = offset + size;

    if (type === "stco") {
      const entryCount = buffer.readUInt32BE(payloadStart + 4);
      for (let i = 0; i < entryCount; i += 1) {
        const pos = payloadStart + 8 + i * 4;
        buffer.writeUInt32BE(buffer.readUInt32BE(pos) + shift, pos);
      }
    } else if (type === "co64") {
      const entryCount = buffer.readUInt32BE(payloadStart + 4);
      for (let i = 0; i < entryCount; i += 1) {
        const pos = payloadStart + 8 + i * 8;
        buffer.writeBigUInt64BE(buffer.readBigUInt64BE(pos) + BigInt(shift), pos);
      }
    } else if (containerTypes.has(type)) {
      patchChunkOffsets(buffer, payloadStart, boxEnd, shift);
    } else if (type === "meta") {
      patchChunkOffsets(buffer, payloadStart + 4, boxEnd, shift);
    }

    offset = boxEnd;
  }
}

const input = process.argv[2];
if (!input) {
  throw new Error("Usage: node scripts/faststart-mp4.mjs <file.mp4>");
}

const original = await readFile(input);
const boxes = readTopLevelBoxes(original);
const moov = boxes.find((box) => box.type === "moov");
const mdat = boxes.find((box) => box.type === "mdat");
const ftyp = boxes.find((box) => box.type === "ftyp");

if (!moov || !mdat || !ftyp) {
  throw new Error("Missing required ftyp, moov, or mdat MP4 box");
}

if (moov.offset < mdat.offset) {
  console.log(`${input} already has front-loaded metadata.`);
  process.exit(0);
}

const patchedMoov = Buffer.from(original.subarray(moov.offset, moov.offset + moov.size));
patchChunkOffsets(patchedMoov, 8, patchedMoov.length, moov.size);

const outputParts = [];
for (const box of boxes) {
  if (box.type === "moov") continue;
  outputParts.push(original.subarray(box.offset, box.offset + box.size));
  if (box.type === "ftyp") {
    outputParts.push(patchedMoov);
  }
}

const tmp = `${input}.faststart`;
await writeFile(tmp, Buffer.concat(outputParts));
await rename(input, `${input}.bak`);
await rename(tmp, input);
console.log(`Moved moov atom before mdat for ${input}. Backup: ${input}.bak`);
