const slug = location.pathname.split('/').filter(Boolean).pop();
const project = (window.projects || []).find((item) => item.slug === slug);

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
    let foundPath = '';
    for (const extension of ['png', 'jpg']) {
      const path = `${folder}/${fileNumber}.${extension}`;
      if (await imageExists(path)) {
        foundPath = path;
        break;
      }
    }
    if (!foundPath) break;
    paths.push(foundPath);
  }

  return paths;
};

if (project) {
  document.title = `${project.name} — Hyunju Cho`;

  (async () => {
  const galleryImages = await findGalleryImages(project.assets?.gallery);

  const escapeHTML = (value = '') => String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[char]);
  const chip = (label) => `<span class="detail-chip">${escapeHTML(label)}</span>`;
  const otherProjects = (window.projects || []).filter((item) => item.slug !== project.slug);
  const roleItems = (project.role || '').split('·').map((value) => value.trim()).filter(Boolean);
  const workItems = project.work || project.categories || [];
  const toolItems = project.tools || [];

  document.querySelector('main').innerHTML = `
    <section class="detail-intro">
      <div class="app-icon-placeholder" role="img" aria-label="${escapeHTML(project.name)} app icon"><img src="${escapeHTML(project.assets?.icon || '')}" alt="" onerror="window.imageFormatFallback(this)"></div>
      <h1 class="detail-heading">${escapeHTML(project.headline || project.name)}</h1>
      <p class="detail-lead">${escapeHTML(project.description)}</p>
      ${project.url ? `<a class="detail-visit" href="${escapeHTML(project.url)}" target="_blank" rel="noopener noreferrer">View Project</a>` : ''}
      <div class="detail-hero-image-frame"><img class="detail-hero-image" src="${escapeHTML(project.assets?.cover || '')}" alt="${escapeHTML(project.name)} project cover" onerror="window.imageFormatFallback(this)"></div>
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
        <div class="detail-fact"><h2>Duration</h2><p class="detail-period">${escapeHTML(project.duration || project.period || '—')}</p></div>
      </div>
    </section>

    <section class="detail-case-images" aria-label="${escapeHTML(project.name)} project images" ${galleryImages.length ? '' : 'hidden'}>
      ${galleryImages.map((src, index) => `<div class="case-image"><img src="${escapeHTML(src)}" alt="${escapeHTML(project.name)} project detail ${index + 1}" onerror="window.imageFormatFallback(this)"></div>`).join('')}
    </section>

    <section class="more-projects content-width">
      <h2>More Project</h2>
      <div class="more-project-grid">${otherProjects.map((item) => `
        <a class="more-project-card" href="/projects/${encodeURIComponent(item.slug)}/">
          <div class="more-project-cover ${escapeHTML(item.cover)}">
            <img class="more-project-cover-image" src="${escapeHTML(item.assets?.cover || '')}" alt="" onerror="window.imageFormatFallback(this)" onload="this.parentElement.querySelector('.cover-device')?.remove()">
            <div class="cover-tags">${item.categories.map((category) => `<span class="tag">${escapeHTML(category)}</span>`).join('')}</div>
            <div class="cover-device" aria-hidden="true"><div class="mini-chart"><i></i><i></i><i></i><i></i><i></i></div></div>
          </div>
          <div class="more-project-meta">
            <div class="project-title-row"><h3 class="project-title">${escapeHTML(item.name)}</h3>${item.status ? `<span class="status ${item.status === 'Released' ? 'status-released' : 'status-concept'}">${escapeHTML(item.status)}</span>` : ''}</div>
            <p class="project-desc">${escapeHTML(item.description)}</p>
          </div>
        </a>`).join('')}
      </div>
    </section>`;
  })();
}
