// gta6-meme-x-01: "Post a GTA 6 meme on X".
// The entry itself is the X post named in POST.json. This program only
// copies POST.json into the output directory, nothing more: the house
// reads the post from X itself and builds the judge dossier, so nothing
// this program writes is judged. Standard library only, no network.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

// Create the output directory if it is missing. Never remove it: on the
// grader it is a mount point, so only its contents may change.
mkdirSync(outDir, { recursive: true });

// Fail loudly on a malformed post file instead of copying garbage: the
// post file must be a JSON object with a url string. The bytes copied
// are still exactly the file's own bytes, so repeated runs agree.
const postPath = join(botDir, "POST.json");
const post = JSON.parse(readFileSync(postPath, "utf8"));
if (typeof post !== "object" || post === null || typeof post.url !== "string") {
  throw new Error("POST.json must be a JSON object with a url string");
}
copyFileSync(postPath, join(outDir, "POST.json"));
