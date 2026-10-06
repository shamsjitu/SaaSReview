// Runs AFTER `vite build`. Creates a real HTML file for every article
// (dist/blog/<slug>/index.html) with its own <title>, meta description,
// canonical, Open Graph tags, JSON-LD and the full article text, so Google
// sees the content immediately without having to run JavaScript.
// React still loads on top and takes over as usual.
// If anything fails, the build is NOT broken: the site just stays a normal SPA.
import fs from "node:fs";
import path from "node:path";

const SITE = "https://shamsstack.com";
const DIST = "dist";

try {
  main();
} catch (err) {
  console.warn("[prerender] skipped because of an error:", err);
  process.exit(0);
}

function main() {
  const template = fs.readFileSync(path.join(DIST, "index.html"), "utf8");
  const { posts, author } = loadData();

  let count = 0;
  for (const p of posts) {
    const url = `${SITE}/blog/${p.slug}`;
    const img = absUrl(p.image);
    const iso = toISO(p.date);
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: p.title,
      description: p.excerpt,
      image: img ? [img] : undefined,
      datePublished: iso || undefined,
      dateModified: iso || undefined,
      author: { "@type": "Person", name: author },
      publisher: { "@type": "Organization", name: "ShamsStack", url: SITE },
      mainEntityOfPage: url,
    };

    const body = `<article style="max-width:760px;margin:0 auto;padding:24px;font-family:system-ui,sans-serif;line-height:1.7">
<nav><a href="/">ShamsStack</a> / <a href="/blog">Blog</a></nav>
<h1>${esc(p.title)}</h1>
<p>${esc(p.category || "")} · ${esc(p.date || "")} · ${esc(p.readTime || "")}</p>
${img ? `<img src="${esc(p.image)}" alt="${esc(p.title)}" style="max-width:100%;height:auto">` : ""}
${md(p.content || "")}
<hr>
<h2>More reviews and guides</h2>
<ul>
${posts.filter((x) => x.slug !== p.slug).map((x) => `<li><a href="/blog/${x.slug}">${esc(x.title)}</a></li>`).join("\n")}
</ul>
</article>`;

    write(`blog/${p.slug}/index.html`, buildPage(template, {
      title: p.title, description: p.excerpt, url, image: img, type: "article", jsonLd, body,
    }));
    count++;
  }

  // /blog listing with plain links to every article
  const listBody = `<main style="max-width:760px;margin:0 auto;padding:24px;font-family:system-ui,sans-serif;line-height:1.7">
<h1>ShamsStack Blog: Software Reviews, Comparisons and Deals</h1>
<ul>
${posts.map((x) => `<li><a href="/blog/${x.slug}">${esc(x.title)}</a><br>${esc(x.excerpt || "")}</li>`).join("\n")}
</ul>
</main>`;
  write("blog/index.html", buildPage(template, {
    title: "ShamsStack Blog: Software Reviews, Comparisons and Deals",
    description: "In-depth SaaS reviews, comparisons and lifetime-deal guides from ShamsStack.",
    url: `${SITE}/blog`, image: null, type: "website", body: listBody,
  }));

  console.log(`[prerender] done: ${count} articles + /blog`);
}

// ---------- helpers ----------

function loadData() {
  const file = findFile("src", "siteData.ts");
  if (!file) throw new Error("siteData.ts not found under src/");
  let code = fs.readFileSync(file, "utf8")
    .replace(/export\s+const\s+SITE_DATA\s*=/, "return ")
    .replace(/\}\s*;?\s*$/, "}");
  const data = new Function(code)();
  const seen = new Set();
  const posts = (data.blogPosts || []).filter((p) => p.slug && !seen.has(p.slug) && seen.add(p.slug));
  return { posts, author: data.author?.name || "Shams Jitu" };
}

function findFile(dir, name) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) { const h = findFile(full, name); if (h) return h; }
    else if (e.name === name) return full;
  }
  return null;
}

function write(rel, html) {
  const out = path.join(DIST, rel);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
}

function buildPage(template, { title, description, url, image, type, jsonLd, body }) {
  let html = template
    .replace(/<title>[\s\S]*?<\/title>/i, "")
    .replace(/<link[^>]+rel=["']canonical["'][^>]*>/gi, "")
    .replace(/<meta[^>]+(?:name|property)=["'](?:description|keywords|og:[^"']+|twitter:[^"']+)["'][^>]*>/gi, "");

  const head = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description || "")}">`,
    `<link rel="canonical" href="${url}">`,
    `<meta property="og:type" content="${type}">`,
    `<meta property="og:site_name" content="ShamsStack">`,
    `<meta property="og:title" content="${esc(title)}">`,
    `<meta property="og:description" content="${esc(description || "")}">`,
    `<meta property="og:url" content="${url}">`,
    image ? `<meta property="og:image" content="${image}">` : "",
    `<meta name="twitter:card" content="${image ? "summary_large_image" : "summary"}">`,
    `<meta name="twitter:title" content="${esc(title)}">`,
    `<meta name="twitter:description" content="${esc(description || "")}">`,
    image ? `<meta name="twitter:image" content="${image}">` : "",
    jsonLd ? `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, "\\u003c")}</script>` : "",
  ].filter(Boolean).join("\n");

  html = html.replace(/<\/head>/i, `${head}\n</head>`);
  const rootRe = /<div id=["']root["']>\s*<\/div>/i;
  if (rootRe.test(html)) html = html.replace(rootRe, () => `<div id="root">${body}</div>`);
  else console.warn("[prerender] <div id=\"root\"></div> not found, body content skipped");
  return html;
}

function absUrl(p) {
  if (!p) return null;
  return /^https?:\/\//.test(p) ? p : SITE + (p.startsWith("/") ? p : "/" + p);
}

function toISO(s) {
  const d = new Date(s);
  if (isNaN(d)) return null;
  const iso = d.toISOString().slice(0, 10);
  const today = new Date().toISOString().slice(0, 10);
  return iso > today ? today : iso;
}

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// ---------- tiny markdown -> HTML (headings, lists, tables, images, links, bold/italic) ----------

function inline(text) {
  let t = esc(text);
  t = t.replace(/`([^`]+)`/g, "<code>$1</code>");
  t = t.replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, '<img src="$2" alt="$1" style="max-width:100%;height:auto">');
  t = t.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>');
  t = t.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  t = t.replace(/(^|[^*\w])\*([^*\n]+)\*(?!\*)/g, "$1<em>$2</em>");
  return t;
}

function md(src) {
  const lines = src.replace(/\r/g, "").split("\n");
  const out = [];
  let i = 0;
  const isBlank = (l) => /^\s*$/.test(l);
  const isTableSep = (l) => /^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?\s*$/.test(l) && l.includes("-");
  const listRe = /^(\s*)([-*+]|\d+\.)\s+(.*)$/;
  const cells = (l) => l.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => c.trim());

  while (i < lines.length) {
    const line = lines[i];
    if (isBlank(line)) { i++; continue; }

    let m;
    if ((m = line.match(/^(#{1,6})\s+(.*)$/))) {
      out.push(`<h${m[1].length}>${inline(m[2])}</h${m[1].length}>`); i++; continue;
    }
    if (/^\s*(-{3,}|\*{3,})\s*$/.test(line)) { out.push("<hr>"); i++; continue; }

    if (line.trim().startsWith("|") && i + 1 < lines.length && isTableSep(lines[i + 1])) {
      const head = cells(line); i += 2;
      const rows = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) { rows.push(cells(lines[i])); i++; }
      out.push(`<div style="overflow-x:auto"><table border="1" cellpadding="6" style="border-collapse:collapse"><thead><tr>${head.map((c) => `<th>${inline(c)}</th>`).join("")}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${inline(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`);
      continue;
    }

    if (listRe.test(line)) {
      const stack = []; // {indent, tag}
      let html = "";
      while (i < lines.length && !isBlank(lines[i]) || (i < lines.length && isBlank(lines[i]) && i + 1 < lines.length && listRe.test(lines[i + 1]))) {
        if (isBlank(lines[i])) { i++; continue; }
        const lm = lines[i].match(listRe);
        if (!lm) break;
        const indent = lm[1].replace(/\t/g, "    ").length;
        const tag = /\d/.test(lm[2]) ? "ol" : "ul";
        while (stack.length && indent < stack[stack.length - 1].indent) { html += `</li></${stack.pop().tag}>`; }
        if (!stack.length || indent > stack[stack.length - 1].indent) {
          html += `<${tag}>`; stack.push({ indent, tag });
        } else { html += "</li>"; }
        html += `<li>${inline(lm[3])}`;
        i++;
      }
      while (stack.length) html += `</li></${stack.pop().tag}>`;
      out.push(html);
      continue;
    }

    // paragraph: gather until blank line or a new block
    const buf = [];
    while (i < lines.length && !isBlank(lines[i]) && !/^(#{1,6})\s/.test(lines[i]) && !listRe.test(lines[i]) &&
           !(lines[i].trim().startsWith("|") && i + 1 < lines.length && isTableSep(lines[i + 1])) &&
           !/^\s*(-{3,}|\*{3,})\s*$/.test(lines[i])) {
      buf.push(lines[i].trim()); i++;
    }
    if (buf.length) out.push(`<p>${inline(buf.join(" "))}</p>`);
  }
  return out.join("\n");
}
