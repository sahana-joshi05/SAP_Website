import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs/promises";
import path from "node:path";
import leadHandler from "./api/lead.js";

function createDevResponse(res) {
  return {
    setHeader(name, value) {
      res.setHeader(name, value);
    },
    status(code) {
      res.statusCode = code;
      return this;
    },
    json(payload) {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(payload));
    },
  };
}

function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      if (!body) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(error);
      }
    });
    req.on("error", reject);
  });
}

function localApiPlugin() {
  return {
    name: "local-api",
    configureServer(server) {
      server.middlewares.use("/api/lead", async (req, res) => {
        try {
          req.body = await readRequestBody(req);
          if (!process.env.LEAD_WEBHOOK_URL && !process.env.VITE_LEAD_WEBHOOK_URL) {
            const lead = {
              ...req.body,
              savedAt: new Date().toISOString(),
            };
            const leadsPath = path.resolve(server.config.root, "local-leads.json");
            let leads = [];
            try {
              leads = JSON.parse(await fs.readFile(leadsPath, "utf8"));
            } catch {
              leads = [];
            }
            leads.push(lead);
            await fs.writeFile(leadsPath, `${JSON.stringify(leads, null, 2)}\n`);
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ ok: true, local: true }));
            return;
          }

          await leadHandler(req, createDevResponse(res));
        } catch {
          res.statusCode = 400;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ ok: false, error: "Invalid lead request." }));
        }
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), localApiPlugin()],
});
