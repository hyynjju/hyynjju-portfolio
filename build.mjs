import { cp, mkdir, rm } from 'node:fs/promises';
import { build } from 'esbuild';

const siteEntries = [
  'index.html', 'about.html', 'styles.css', 'projects.js', 'app.js',
  'detail.js', 'i18n.js', 'notes-data.js', 'notes-page.js', 'hero-scan.js', 'project-hover.js', 'search-ui.js',
  'profile-slideshow.js', 'assets', 'projects', 'notes',
  'site.webmanifest',
];

await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
for (const entry of siteEntries) {
  await cp(entry, `dist/${entry}`, { recursive: true });
}

await build({
  entryPoints: ['vercel-analytics.js'],
  bundle: true,
  format: 'iife',
  platform: 'browser',
  outfile: 'dist/vercel-analytics.js',
  define: { 'process.env.NODE_ENV': '"production"' },
});
