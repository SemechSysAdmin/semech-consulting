import { writeFileSync, existsSync } from "node:fs";

const BASE_URL = "https://semechconsult.ng";

const entries = [
  { path: "/", priority: "1.0" },
  { path: "/about", priority: "0.8" },
  { path: "/services", priority: "0.9" },
  { path: "/industries", priority: "0.8" },
  { path: "/team", priority: "0.7" },
  { path: "/insights", priority: "0.7" },
  { path: "/contact", priority: "0.8" },
];

const urls = entries
  .map(
    (e) =>
      `  <url><loc>${BASE_URL}${e.path}</loc><changefreq>weekly</changefreq><priority>${e.priority}</priority></url>`,
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

if (!existsSync("dist/client")) {
  throw new Error("dist/ doesn't exist run vite build first");
}

writeFileSync("dist/client/sitemap.xml", xml);
