import { mkdirSync, writeFileSync } from "node:fs";

// One original fortune-cookie line for a software developer.
// Revised: sharper and more original — the tired senior engineer
// recognises themselves in both the curse and the code it curses.
const ENTRY =
  "The legacy code you curse was written by someone tired, rushed, and certain — exactly like you.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
