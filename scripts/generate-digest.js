import fs from 'fs';
import path from 'path';

const outDir = 'src/content/digests';
fs.mkdirSync(outDir, { recursive: true });

const today = new Date().toISOString().split('T')[0];
const filePath = path.join(outDir, `${today}.md`);

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(
    filePath,
    `---
title: "Daily Digest – ${today}"
date: ${today}
---

Placeholder digest.
`
  );
  console.log('Digest created:', filePath);
} else {
  console.log('Digest already exists:', filePath);
}
