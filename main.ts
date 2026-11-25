// Alien Field Notes: The Two Day Earth Review
// One original line: a review of planet Earth left by an alien tourist.
// Writes the line to /output/entry.txt (gate: UTF-8 text, 1-200 chars).
import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "Visited Earth for two days. The oceans are magnificent, the sunsets unreal, and the natives queue politely to buy back their own water. Four stars. Would abduct again.";

// Gate self-check: the entry must be UTF-8 text of 1 to 200 characters.
if (REVIEW.length < 1 || REVIEW.length > 200) {
  throw new Error(`Review is ${REVIEW.length} characters; the gate allows 1-200.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");
