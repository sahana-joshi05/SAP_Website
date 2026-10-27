import { defineConfig, loadEnv } from "vite";
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
          if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
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

function standaloneSeoPagesPlugin() {
  const standalonePages = {
    "/data-analytics-course-in-raichur": "public/data-analytics-course-in-raichur/index.html",
    "/sap-abap-training-in-bangalore": "public/sap-abap-training-in-bangalore/index.html",
  };

  return {
    name: "standalone-seo-pages",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url?.split("?")[0];

        if (url === "/courses/sap-abap" || url === "/courses/sap-abap/") {
          res.statusCode = 308;
          res.setHeader("Location", "/sap-abap-training-in-bangalore/");
          res.end();
          return;
        }

        const standalonePath = Object.keys(standalonePages).find((pagePath) => url === pagePath);
        if (standalonePath) {
          res.statusCode = 308;
          res.setHeader("Location", `${standalonePath}/`);
          res.end();
          return;
        }

        const standalonePage = Object.entries(standalonePages).find(
          ([pagePath]) => url === `${pagePath}/`,
        );
        if (standalonePage) {
          const filePath = path.resolve(server.config.root, standalonePage[1]);
          const html = await fs.readFile(filePath, "utf8");
          res.statusCode = 200;
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          res.end(html);
          return;
        }

        next();
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  Object.assign(process.env, env);

  return {
    plugins: [react(), localApiPlugin(), standaloneSeoPagesPlugin()],
    build: {
      minify: "esbuild",
      cssMinify: true,
      sourcemap: false,
      rollupOptions: {
        output: {
          compact: true,
          manualChunks: {
            react: ["react", "react-dom", "react-router-dom"],
            icons: ["lucide-react"],
          },
        },
      },
    },
  };
});
