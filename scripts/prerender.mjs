import { spawn } from 'node:child_process';
import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { getPrerenderPaths } from './prerender-routes.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const localBrowsersPath = path.join(
  root,
  'node_modules',
  'playwright-core',
  '.local-browsers',
);

if (fs.existsSync(localBrowsersPath)) {
  process.env.PLAYWRIGHT_BROWSERS_PATH = localBrowsersPath;
} else if (process.env.PLAYWRIGHT_BROWSERS_PATH === undefined) {
  process.env.PLAYWRIGHT_BROWSERS_PATH = '0';
}

const dist = path.join(root, 'dist');
const port = 4173;
const baseUrl = `http://127.0.0.1:${port}`;

function routeToOutputFile(routePath) {
  const segments = routePath.replace(/\/$/, '').split('/').filter(Boolean);
  return path.join(dist, ...segments, 'index.html');
}

async function waitForServer(url, timeoutMs = 60_000) {
  const started = Date.now();

  while (Date.now() - started < timeoutMs) {
    try {
      const response = await fetch(url);
      if (response.ok || response.status === 404) {
        return;
      }
    } catch {
      // Preview not ready yet
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  throw new Error(`Preview server did not start at ${url}`);
}

function startPreview() {
  const child = spawn('npx', ['vite', 'preview', '--port', String(port), '--strictPort'], {
    cwd: root,
    stdio: 'inherit',
    env: { ...process.env },
  });

  return child;
}

async function main() {
  try {
    await fsp.access(dist);
  } catch {
    console.error('dist/ not found. Run vite build first.');
    process.exit(1);
  }

  const { chromium } = await import('playwright');
  const preview = startPreview();

  try {
    await waitForServer(baseUrl);

    const browser = await chromium.launch({ headless: true });
    const failures = [];

    for (const route of getPrerenderPaths()) {
      const page = await browser.newPage();

      try {
        await page.goto(`${baseUrl}${route}`, {
          waitUntil: 'networkidle',
          timeout: 60_000,
        });
        await page.waitForSelector('html[data-i18n-ready="true"]', {
          timeout: 30_000,
        });
        await page.waitForFunction(
          () => {
            const description = document.querySelector('meta[name="description"]');
            const rootEl = document.querySelector('#root');
            return Boolean(
              description?.getAttribute('content') &&
                rootEl &&
                rootEl.textContent.trim().length > 40,
            );
          },
          { timeout: 15_000 },
        );

        const html = await page.content();
        const outFile = routeToOutputFile(route);
        await fsp.mkdir(path.dirname(outFile), { recursive: true });
        await fsp.writeFile(outFile, html, 'utf8');

      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        failures.push({ route, message });
        console.error(`✗ ${route}: ${message}`);
      } finally {
        await page.close();
      }
    }

    await browser.close();

    if (failures.length > 0) {
      process.exit(1);
    }
  } finally {
    preview.kill('SIGTERM');
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
