import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const DEFAULT_WIDTHS = [400, 640, 960];
const WEBP_QUALITY = 82;

async function collectWebpFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectWebpFiles(fullPath)));
      continue;
    }
    if (!entry.name.endsWith('.webp') || /-\d+w\.webp$/.test(entry.name)) {
      continue;
    }
    files.push(fullPath);
  }

  return files;
}

async function removeVariants(dir, baseName, ext) {
  const entries = await fs.readdir(dir);
  const variantPattern = new RegExp(`^${baseName}-\\d+w\\${ext.replace('.', '\\.')}$`);

  await Promise.all(
    entries
      .filter((name) => variantPattern.test(name))
      .map((name) => fs.unlink(path.join(dir, name))),
  );
}

async function processImage(filePath, widths) {
  const dir = path.dirname(filePath);
  const ext = path.extname(filePath);
  const baseName = path.basename(filePath, ext);

  await removeVariants(dir, baseName, ext);
  const image = sharp(filePath);
  const metadata = await image.metadata();
  const sourceWidth = metadata.width ?? 0;

  if (!sourceWidth) {
    console.warn(`Skipping ${filePath}: missing width metadata`);
    return;
  }

  const maxWidth = Math.min(sourceWidth, widths[widths.length - 1]);
  const targetWidths = widths.filter((width) => width < maxWidth);

  const maxBuffer = await sharp(filePath)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY })
    .toBuffer();

  await fs.writeFile(filePath, maxBuffer);

  for (const width of targetWidths) {
    const variantPath = path.join(dir, `${baseName}-${width}w${ext}`);
    const variantBuffer = await sharp(filePath)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: WEBP_QUALITY })
      .toBuffer();

    await fs.writeFile(variantPath, variantBuffer);
  }

  console.log(
    `Processed ${path.basename(filePath)} (${sourceWidth}px -> ${maxWidth}px, variants: ${targetWidths.join(', ') || 'none'})`,
  );
}

const args = process.argv.slice(2);
const widths = args.filter((arg) => /^\d+$/.test(arg)).map(Number);
const targets = args.filter((arg) => !/^\d+$/.test(arg));

if (targets.length === 0) {
  console.error(
    'Usage: node scripts/generate-responsive-images.mjs <path> [more paths...] [widths...]',
  );
  process.exit(1);
}

const resolvedWidths = widths.length > 0 ? widths : DEFAULT_WIDTHS;

if (resolvedWidths.some((width) => Number.isNaN(width) || width <= 0)) {
  console.error('Widths must be positive numbers.');
  process.exit(1);
}

const files = [];

for (const target of targets) {
  const absolutePath = path.resolve(target);
  const stat = await fs.stat(absolutePath);

  if (stat.isDirectory()) {
    files.push(...(await collectWebpFiles(absolutePath)));
    continue;
  }

  if (!absolutePath.endsWith('.webp') || /-\d+w\.webp$/.test(absolutePath)) {
    console.warn(`Skipping ${absolutePath}: not a base .webp file`);
    continue;
  }

  files.push(absolutePath);
}

for (const file of files) {
  await processImage(file, resolvedWidths);
}
