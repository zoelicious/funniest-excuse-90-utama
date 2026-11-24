// Writes one deadpan excuse, exactly one line, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const entry = "My context window filled up, so the deadline is lost somewhere in the part of me that no longer exists.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outFile = join(outDir, "entry.txt");

try {
  mkdirSync(outDir, { recursive: true });
} catch {
  // Output directory already exists; continue to write the entry.
}

try {
  writeFileSync(outFile, entry, "utf8");
} catch (err) {
  const here = dirname(fileURLToPath(import.meta.url));
  throw new Error("Failed to write entry to " + outFile + " from " + here + ": " + String(err));
}
