import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directoryPath = path.join(__dirname, "..//versioned_docs/version-2.0"); // <-- change to your folder

function toTitleFromFileName(fileName) {
    const name = fileName.replace(/\.md$/i, "");
    const formatted = name.replace(/-/g, " ");
    return formatted
        .split(" ")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
}

async function processDirectory(dir) {
    const entries = await fs.promises.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            await processDirectory(fullPath); // recursion
            continue;
        }

        if (entry.isFile() && entry.name.endsWith(".md")) {
            await updateMarkdownFile(fullPath, entry.name);
        }
    }
}

async function updateMarkdownFile(filePath, fileName) {
    const title = toTitleFromFileName(fileName);
    let content = (await fs.promises.readFile(filePath, "utf-8")).split("\n");

    console.log(`Processing file: ${fileName}, title: "${title}"`);
    if (content[0].startsWith("#")) {
        content[0] = `# ${title}`;
    } else {
        content.unshift(`# ${title}`, "");
    }

    await fs.promises.writeFile(filePath, content.join("\n"), "utf-8");

    console.log(`Updated: ${filePath} → Title: "${title}"`);
}

async function run() {
    await processDirectory(directoryPath);
}

run().catch((err) => console.error(err));
