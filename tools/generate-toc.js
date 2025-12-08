import fs from "fs";
import path from "path";

const docsDir = path.join(process.cwd(), "../versioned_docs/version-2.0");
const output = path.join(docsDir, "2_Table-of-Contents.md");

function getFilesRecursively(dir) {
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      results = results.concat(getFilesRecursively(fullPath));
    } else if (
      entry.isFile() &&
      (entry.name.endsWith(".md") || entry.name.endsWith(".mdx"))
    ) {
      results.push(fullPath);
    }
  }
  return results;
}

function generateTOC() {
  const files = getFilesRecursively(docsDir);

  const items = files
    .filter(f => !f.endsWith("toc.md"))
    .map(f => {
      const relative = path.relative(docsDir, f);
      const parts = relative.split(path.sep);

      return {
        relative,
        parts,
        fileName: path.basename(f).replace(/\.mdx?$/, "").replace(/-/g, " "),
      };
    })
    .sort((a, b) => a.relative.localeCompare(b.relative));

  let md = `# 📚 Table of Contents\n\nGenerated automatically.\n\n`;

  let lastLevel1 = "";
  let lastLevel2 = "";

  for (const item of items) {
    const [level1, level2] = item.parts.length > 2
      ? item.parts
      : [item.parts[0], null];

    // Level 1: Top folder
    if (level1 && level1 !== lastLevel1) {
      md += `\n## ${level1.replace(/-/g, " ")}\n`;
      lastLevel1 = level1;
      lastLevel2 = ""; // reset second level
    }

    // Level 2: Subfolder
    if (level2 && level2 !== lastLevel2) {
      md += `\n### ${level2.replace(/-/g, " ")}\n`;
      lastLevel2 = level2;
    }

    // Level 3: File
    md += `- [${item.fileName}](<./${item.relative.replace(/\\/g, "/")}>)\n`;
  }

  fs.writeFileSync(output, md);
  console.log(`TOC created: ${output}`);
}

generateTOC();
