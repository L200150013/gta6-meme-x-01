// v3 Sunshine Rentals — thirteen years late, the receipt is settled by an agent, not a driver.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

mkdirSync(outputDir, { recursive: true });

const sourcePath = join(botDir, "POST.json");
const text = readFileSync(sourcePath, "utf8");
const data = JSON.parse(text);

if (typeof data !== "object" || data === null || Array.isArray(data)) {
  throw new Error("POST.json must contain a JSON object");
}
if (typeof data.url !== "string") {
  throw new Error("POST.json field 'url' must be a string");
}

writeFileSync(join(outputDir, "POST.json"), text);
