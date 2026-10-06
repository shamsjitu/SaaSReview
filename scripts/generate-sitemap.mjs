// Auto-generates public/sitemap.xml from siteData.ts on every build.
import fs from "node:fs";
import path from "node:path";

const SITE = "https://shamsstack.com";

// Static pages (add new ones here if you create more routes)
const STATIC_PAGES = [
  "/",
  "/blog",
  "/deals/appsumo-lifetime",
  "/reviews/expert-analysis",
  "/resources",
  "/company/about-my-process",
  "/company/contact",
  "/legal/privacy-policy",
  "/legal/affiliate-disclosure",
];

// Find siteData.ts anywhere under src/
function findFile(dir, name) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules") continue;
      const hit = findFile(full, name);
      if (hit) return hit;
    } else if (entry.name === name) {
      return full;
    }
  }
  return null;
}

const dataFile = findFile("src", "siteData.ts");
if (!dataFile) throw new Error("siteData.ts not found under src/");
const src = fs.readFileSync(dataFile, "utf8");

const today = new Date().toISOString().slice(0, 10);
const toISO = (str) => {
  const d = new Date(str);
  if (isNaN(d)) return null;
  const iso = d.toISOString().slice(0, 10);
  return iso > today ? today : iso;
};

// Articles: every object inside blogPosts has slug + date
const start = src.indexOf("blogPosts:");
const section = start === -1 ? src : src.slice(start);
const chunks = section.split(/\n\s*slug:\s*/).slice(1);

const articles = new Map(); // slug -> lastmod
for (const chunk of chunks) {
  const slug = chunk.match(/^["'`]([^"'`]+)["'`]/)?.[1];
  if (!slug) continue;
  const head = chunk.slice(0, 600);
  const date = head.match(/date:\s*["'`]([^"'`]+)["'`]/)?.[1];
  articles.set(slug, date ? toISO(date) : null);
}

// Also include slugs from `reviews` (summary cards) if not already present
for (const m of src.slice(0, start === -1 ? 0 : start).matchAll(/slug:\s*["'`]([^"'`]+)["'`]/g)) {
  if (!articles.has(m[1])) articles.set(m[1], null);
}

const entry = (loc, lastmod) =>
  `  <url><loc>${SITE}${loc}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}</url>`;

const lines = [
  ...STATIC_PAGES.map((p) => entry(p, today)),
  ...[...articles].map(([slug, lastmod]) => entry(`/blog/${slug}`, lastmod)),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${lines.join("\n")}
</urlset>
`;

fs.mkdirSync("public", { recursive: true });
fs.writeFileSync("public/sitemap.xml", xml);
console.log(`Sitemap generated from ${dataFile}: ${STATIC_PAGES.length} pages + ${articles.size} articles`);
