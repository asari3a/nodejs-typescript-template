import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';

import { zipSync } from 'fflate';

const dist = new URL('../dist/', import.meta.url);

const archive = zipSync(
  {
    'index.mjs': await readFile(new URL('index.mjs', dist)),
    'index.mjs.map': await readFile(new URL('index.mjs.map', dist)),
  },
  // Keep ZIP timestamps stable so identical input files produce the same hash.
  { mtime: new Date(1980, 0, 1) },
);

const hash = createHash('sha256').update(archive).digest('hex');
const filename = `lambda-${hash}.zip`;

await writeFile(new URL(filename, dist), archive);
console.log(filename);
