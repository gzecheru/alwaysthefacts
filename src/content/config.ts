import fs from 'fs';
import path from 'path';

const outDir = 'src/content/digests';
fs.mkdirSync(outDir, { recursive: true });

const now = new Date();
const yyyy = now.getFullYear();
const mm = String(now.getMonth() + 1).padStart(2, '0');
const dd = String(now.getDate()).padStart(2, '0');
const date = `${yyyy}-${mm}-${dd}`;

const startOfYear = new Date(yyyy, 0, 0);
const diff =
  now - startOfYear +
  (startOfYear.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));

const filePath = path.join(outDir, `${date}.md`);

if (!fs.existsSync(filePath)) {
  const content = `---
title: "Daily Digest – ${date}"
date: ${date}
dayOfYear: ${dayOfYear}
dominantTheme: "Global overview"
executiveSummary: "Automated placeholder summary."
continents:
  - Global
implications: "Placeholder implications. To be generated."
---

This is a placeholder digest body.
`;

  fs.writeFileSync(filePath, content);
  console.log('Digest created:', filePath);
} else {
  console.log('Digest already exists:', filePath);
}
