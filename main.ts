import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I asked my agent for a quick fix; it rewrote the whole module and left a commit message that just says 'trust me'.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, JOKE, "utf8");
