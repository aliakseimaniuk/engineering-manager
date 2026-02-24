import fs from "fs";
import path from "path";

const docsDir = path.join(process.cwd(), "versioned_docs/version-2.0");
const baseUrl = "https://engineeringmanager.info/docs";

// Remove prefixes like: 11_Delegation → Delegation
function cleanName(name) {
  return name.replace(/^\d+[_\-. ]*/, "").trim();
}

function extractTitle(filePath) {
  const content = fs.readFileSync(filePath, "utf8");

  const match = content.match(/^#\s+(.*)/m);
  if (match) return cleanName(match[1].trim());

  return cleanName(path.basename(filePath).replace(/\.(md|mdx)$/, ""));
}

function encodeUrlPath(pathStr) {
  return pathStr
    .split("/")
    .map(seg => encodeURIComponent(seg)) // encode each segment individually
    .join("/");
}

function walkDocs(dir, parentPath = "") {
  let result = [];

  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    const relPath = path.join(parentPath, item.name);

    if (item.isDirectory()) {
      result = result.concat(walkDocs(fullPath, relPath));
      continue;
    }

    if (item.isFile() && /\.(md|mdx)$/.test(item.name)) {
      const id = relPath.replace(/\\/g, "/").replace(/\.(md|mdx)$/, "");

      const rawCategory = parentPath.split(path.sep)[0] || "root";
      const category = cleanName(rawCategory);

      const title = extractTitle(fullPath);

      // Clean for correct Docusaurus routing
      const cleanPath = id
        .split("/")
        .map(seg => cleanName(seg))
        .join("/");

      // Encode for a correct Markdown link
      const encodedUrl = `${baseUrl}/${encodeUrlPath(cleanPath)}`;

      result.push({
        category,
        title,
        url: encodedUrl,
      });
    }
  }

  return result;
}

const sitemap = walkDocs(docsDir);

// Group by category
const grouped = sitemap.reduce((acc, item) => {
  if (!acc[item.category]) acc[item.category] = [];
  acc[item.category].push(item);
  return acc;
}, {});

// ---------- Markdown OUTPUT ----------
let md = "";

// ROOT at the top
if (grouped["root"]) {
  md += `## Engineering Manager\n\n`;
  md += grouped["root"]
    .map(i => `- [${i.title}](${i.url})`)
    .join("\n");
  md += "\n\n";
}

for (const category of Object.keys(grouped).sort()) {
  if (category === "root") continue;

  md += `### ${category}\n\n`;
  md += grouped[category]
    .map(i => `- [${i.title}](${i.url})`)
    .join("\n");
  md += "\n\n";
}

fs.writeFileSync("sitemap.md", md);

console.log("Generated sitemap.md with URL encoding for all links.");
