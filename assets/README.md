# Uploading portfolio images

Project descriptions, tags, roles, tools, durations, and links are managed in the single file `projects.js`.
Only image files need to be placed in the folders below.

For each project folder under `assets/projects/`, use these filenames:

- `cover/cover.png` or `cover/cover.jpg` — project cover used on the homepage, in search, and on the detail page
- `icon/icon.png` or `icon/icon.jpg` — app or project icon shown at the top of its detail page
- `gallery/01.png` or `gallery/01.jpg`, then `02`, `03`, and onward — all numbered images are shown in order

Project folders: `yomeruyo`, `pay-id`, `ontime`, `poom`, `mekki`, `yakk`, `qgenie`, `intone`.

Shared site images:

- `site/hero-screens/01.png` or `01.jpg` — UI screen
- `site/hero-screens/02.png` or `02.jpg` — data screen
- `site/hero-screens/03.png` or `03.jpg` — code screen
- `site/logo.svg` — optional header logo; the `ju` wordmark stays visible until this file is uploaded
- `site/profile/01.png` or `site/profile/01.jpg`, then `02.png` or `02.jpg`, and so on

Use either PNG or JPG files with those names for project and hero images; the site checks PNG first, then JPG. Gallery images are detected automatically up to `99` and displayed at their original aspect ratios. Number gallery files consecutively starting at `01`; do not skip a number. Profile photos can use either format and switch every second without a transition. Number profile photos consecutively starting at `01`; do not skip a number. Project folders and image paths are listed in `projects.js`.
