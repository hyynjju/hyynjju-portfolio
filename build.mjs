import { cp, mkdir, rm } from 'node:fs/promises';

const siteEntries = [
  'index.html', 'about.html', 'styles.css', 'projects.js', 'app.js',
  'detail.js', 'i18n.js', 'hero-scan.js', 'project-hover.js', 'search-ui.js',
  'profile-slideshow.js', 'assets', 'projects',
];

await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
for (const entry of siteEntries) {
  await cp(entry, `dist/${entry}`, { recursive: true });
}
