#!/usr/bin/env bun
import { fontSplit } from '@konghayao/cn-font-split';
import { mkdir, rm, readFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';

const OUTPUT_DIR = 'merge';

const splitFonts = async () => {
  console.log('Starting Source Han Sans Font split process...');

  await rm(OUTPUT_DIR, { recursive: true, force: true });
  await mkdir(OUTPUT_DIR, { recursive: true });

  const fontPath = resolve('fonts/SourceHanSansSC-VF.ttf');
  const cssFamily = 'S';

  console.log(`\n--- Processing Source Han Sans SC ---`);
  console.log(`  Reading font from: ${fontPath}`);
  
  const fontBuffer = await readFile(fontPath);

  console.log(`  Splitting into WOFF2: merge/woff2`);
  
  await fontSplit({
    FontPath: fontBuffer,
    destFold: join(OUTPUT_DIR, 'woff2'),
    css: {
      fontFamily: cssFamily,
      fontWeight: '100 900',
    }
  });

  console.log('\nAll done! Fonts saved in merge/woff2/');
};

try {
  await splitFonts();
} catch (err) {
  console.error('Fatal error:', err);
}
