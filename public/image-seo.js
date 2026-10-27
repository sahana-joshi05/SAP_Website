(() => {
  const describe = (image) => {
    if (!image.getAttribute("title")) {
      const alt = image.getAttribute("alt")?.trim();
      const filename = (image.currentSrc || image.src || "")
        .split("/").pop()?.replace(/\.[a-z0-9]+$/i, "").replace(/[-_]+/g, " ").trim();
      image.setAttribute("title", alt || filename || "SV CurioTech course resource");
    }
    if (!image.hasAttribute("alt")) image.setAttribute("alt", "SV CurioTech course resource");
    if (!image.hasAttribute("decoding")) image.setAttribute("decoding", "async");
  };

  const update = (root = document) => root.querySelectorAll?.("img").forEach(describe);
  update();
  new MutationObserver((entries) => entries.forEach(({ addedNodes }) => addedNodes.forEach((node) => {
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    if (node.matches?.("img")) describe(node);
    update(node);
  }))).observe(document.documentElement, { childList: true, subtree: true });
})();
