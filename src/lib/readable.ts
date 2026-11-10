/**
 * Readability helper: splits paragraphs longer than ~70 words into two at the sentence boundary
 * closest to the middle. The wording is unchanged; only the paragraph break moves.
 * Sentence boundaries are ". " / "! " / "? " followed by an upper-case letter, digit, £ or quote,
 * so decimals such as £3.50 and abbreviations inside a sentence are never split.
 */
const BOUNDARY = /(?<=[.!?])\s+(?=[A-ZÇĞİÖŞÜ0-9£"“(])/u;

export function readable(paras: string[], max = 70): string[] {
  return paras.flatMap((p) => {
    const words = p.split(/\s+/).length;
    if (words <= max) return [p];
    const parts = p.split(BOUNDARY);
    if (parts.length < 2) return [p];
    let best = 1, bestDiff = Infinity, acc = 0;
    for (let i = 0; i < parts.length - 1; i++) {
      acc += parts[i].split(/\s+/).length;
      const diff = Math.abs(acc - words / 2);
      if (diff < bestDiff) { bestDiff = diff; best = i + 1; }
    }
    const out = [parts.slice(0, best).join(" "), parts.slice(best).join(" ")];
    // Safety: never change the text itself.
    return out.join(" ").replace(/\s+/g, " ") === p.replace(/\s+/g, " ") ? out : [p];
  });
}
