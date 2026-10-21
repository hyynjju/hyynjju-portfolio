const slug = location.pathname.split('/').filter(Boolean).pop();
const project = (window.projects || []).find((item) => item.slug === slug);
const main = document.querySelector('main');

const findGalleryImages = async (folder) => {
  if (!folder) return [];
  const paths = [];
  const imageExists = (src) => new Promise((resolve) => {
    const image = new Image();
    image.onload = () => resolve(true);
    image.onerror = () => resolve(false);
    image.src = src;
  });

  for (let number = 1; number <= 99; number += 1) {
    const fileNumber = String(number).padStart(2, '0');
    const candidates = ['png', 'jpg'].map((extension) => `${folder}/${fileNumber}.${extension}`);
    const results = await Promise.all(candidates.map(imageExists));
    const match = results.findIndex(Boolean);
    if (match < 0) break;
    paths.push(candidates[match]);
  }
  return paths;
};

if (project && main) {
  document.title = `${project.name} — Hyunju Cho`;

  const escapeHTML = (value = '') => String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[char]);
  const chip = (label) => `<span class="detail-chip">${escapeHTML(label)}</span>`;
  const otherProjects = (window.projects || []).filter((item) => item.slug !== project.slug);
  const roleItems = (project.role || '').split('·').map((value) => value.trim()).filter(Boolean);
  const workItems = project.work || project.categories || [];
  const toolItems = project.tools || [];

  main.innerHTML = `
    <section class="detail-intro">
      <div class="app-icon-placeholder image-loading" role="img" aria-label="${escapeHTML(project.name)} app icon"><img src="${escapeHTML(project.assets?.icon || '')}" alt="" onload="this.parentElement.classList.remove('image-loading')" onerror="window.imageFormatFallback(this)"></div>
      <h1 class="detail-heading">${escapeHTML(project.headline || project.name)}</h1>
      <p class="detail-lead">${escapeHTML(project.description)}</p>
      ${project.url ? `<a class="detail-visit" href="${escapeHTML(project.url)}" target="_blank" rel="noopener noreferrer">View Project</a>` : ''}
      <div class="detail-hero-image-frame image-loading"><img class="detail-hero-image" src="${escapeHTML(project.assets?.cover || '')}" alt="${escapeHTML(project.name)} project cover" onload="this.parentElement.classList.remove('image-loading')" onerror="window.imageFormatFallback(this)"></div>
    </section>

    <section class="detail-overview content-width" id="about">
      <div class="detail-about-copy">
        <h2>About</h2>
        <p>${escapeHTML(project.about || project.summary || project.description)}</p>
      </div>
      <div class="detail-facts">
        ${project.status ? `<div class="detail-fact"><h2>Status</h2><div class="detail-chips"><span class="detail-chip ${project.status === 'Released' ? 'status-released' : 'status-concept'}">${escapeHTML(project.status)}</span></div></div>` : ''}
        <div class="detail-fact"><h2>Role</h2><div class="detail-chips">${roleItems.map(chip).join('')}</div></div>
        <div class="detail-fact"><h2>Work</h2><div class="detail-chips">${workItems.map(chip).join('')}</div></div>
        <div class="detail-fact"><h2>Tools</h2><div class="detail-chips">${toolItems.map(chip).join('')}</div></div>
        ${project.award ? `<div class="detail-fact"><h2>Award</h2><div class="detail-award-list">${(Array.isArray(project.award) ? project.award : [{ title: project.award }]).map((award) => `<p class="detail-period">${award.date ? `<span class="detail-award-date">${escapeHTML(award.date)}</span><br>` : ''}${escapeHTML(award.title)}</p>`).join('')}</div></div>` : ''}
        ${(project.duration || project.period) ? `<div class="detail-fact"><h2>Duration</h2><p class="detail-period">${escapeHTML(project.duration || project.period)}</p></div>` : ''}
      </div>
    </section>

    <section class="detail-case-images" aria-label="${escapeHTML(project.name)} project images" hidden></section>

    <section class="more-projects content-width">
      <h2>More Project</h2>
      <div class="more-project-grid">${otherProjects.map((item) => `
        <a class="more-project-card" href="/projects/${encodeURIComponent(item.slug)}/">
          <div class="more-project-cover image-loading ${escapeHTML(item.cover)}">
            <img class="more-project-cover-image" src="${escapeHTML(item.assets?.cover || '')}" alt="" onload="this.parentElement.classList.remove('image-loading')" onerror="window.imageFormatFallback(this)">
            <div class="cover-tags">${item.categories.map((category) => `<span class="tag">${escapeHTML(category)}</span>`).join('')}</div>
          </div>
          <div class="more-project-meta">
            <div class="project-title-row"><h3 class="project-title">${escapeHTML(item.name)}</h3>${item.status ? `<span class="status ${item.status === 'Released' ? 'status-released' : 'status-concept'}">${escapeHTML(item.status)}</span>` : ''}</div>
            <p class="project-desc">${escapeHTML(item.description)}</p>
          </div>
        </a>`).join('')}
      </div>
    </section>`;

  main.setAttribute('aria-busy', 'false');

  if (!document.querySelector('.portfolio-footer')) {
    main.insertAdjacentHTML('afterend', `
      <footer class="portfolio-footer">
        <div class="footer-columns" aria-hidden="true">
          <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
        </div>
        <div class="portfolio-footer-content">
          <a class="footer-email" href="mailto:hyynjju@gmail.com">hyynjju@gmail.com</a>
          <nav class="footer-socials" aria-label="Social links">
            <a href="https://www.linkedin.com/in/hyynjju" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.behance.net/hyynjju" target="_blank" rel="noopener noreferrer">Behance</a>
            <a href="https://student.redesigner.jp/students/f2f66c47732c8ff908a5c6ccc66bcaf8" target="_blank" rel="noopener noreferrer">ReDesigner</a>
            <a href="https://github.com/hyynjju" target="_blank" rel="noopener noreferrer">GitHub</a>
          </nav>
        </div>
      </footer>`);
  }

  // Gallery discovery runs after project copy and layout have rendered, so image checks never delay text.
  findGalleryImages(project.assets?.gallery).then((images) => {
    if (!images.length) return;
    const gallery = main.querySelector('.detail-case-images');
    gallery.innerHTML = images.map((src, index) => `<div class="case-image"><img src="${escapeHTML(src)}" alt="${escapeHTML(project.name)} project detail ${index + 1}" loading="lazy" onerror="window.imageFormatFallback(this)"></div>`).join('');
    gallery.hidden = false;
  });
}
