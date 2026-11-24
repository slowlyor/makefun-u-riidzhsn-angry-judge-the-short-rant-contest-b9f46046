import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A short, funny rant about a small everyday annoyance:
// the self-checkout machine that treats every shopper like a suspect.
const RANT =
  "The self-checkout just accused me of stealing my own groceries. " +
  "'Unexpected item in the bagging area.' The item was the bag. " +
  "I scanned it. It saw the barcode. And still it froze, flashed red, " +
  "and summoned a human to confirm I am not, in fact, a milk thief.";

const MAX_CHARS = 400;

function main(): void {
  const text = RANT.trim();
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(
      `entry must be 1-${MAX_CHARS} characters, got ${text.length}`,
    );
  }
  if (!/\S/.test(text)) {
    throw new Error("entry must not be only whitespace");
  }

  const outDir = "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, text, "utf8");
  console.log(`Wrote ${text.length} characters to ${outPath}`);
}

main();
