(() => {
  const projects = window.projects || [];
  const trigger = document.querySelector('.search-pill');
  if (!trigger) return;

  const categories = [...new Set(projects.flatMap((project) => project.categories || []))];
  const escapeHTML = (value = '') => String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[char]);
  const icon = '<svg class="lucide-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>';
  const closeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m18 6-12 12M6 6l12 12"/></svg>';

  const overlay = document.createElement('div');
  overlay.className = 'search-overlay';
  overlay.hidden = true;
  overlay.innerHTML = `
    <section class="search-dialog" role="dialog" aria-modal="true" aria-label="Project search">
      <div class="search-dialog-top">
        <label class="search-input-wrap">${icon}<input class="search-input" type="search" autocomplete="off" placeholder="Search projects or tags..." aria-label="Search projects or tags"><button class="search-clear" type="button" aria-label="Clear search" hidden>${closeIcon}</button></label>
      </div>
      <div class="search-content">
        <nav class="search-categories" aria-label="Filter projects"></nav>
        <div class="search-results-wrap"><p class="search-results-label">Projects</p><div class="search-results" aria-live="polite"></div></div>
      </div>
    </section>`;
  document.body.append(overlay);

  const input = overlay.querySelector('.search-input');
  const clearButton = overlay.querySelector('.search-clear');
  const categoryNav = overlay.querySelector('.search-categories');
  const results = overlay.querySelector('.search-results');
  let activeCategory = 'All projects';

  categoryNav.innerHTML = ['All projects', ...categories].map((category) =>
    `<button class="search-category${category === activeCategory ? ' is-active' : ''}" type="button" data-category="${escapeHTML(category)}">${escapeHTML(category)}</button>`
  ).join('');

  const thumbMarkup = (project) => `<div class="search-thumb ${escapeHTML(project.cover)}" aria-hidden="true"><img src="${escapeHTML(project.assets?.cover || '')}" alt="" onerror="window.imageFormatFallback(this)" onload="this.parentElement.querySelector('.cover-device')?.remove()"><div class="cover-device"><div class="mini-chart"><i></i><i></i><i></i><i></i><i></i></div></div></div>`;
  const renderResults = () => {
    const query = input.value.trim().toLocaleLowerCase();
    clearButton.hidden = input.value.length === 0;
    const matches = projects.filter((project) => {
      const categoryMatch = activeCategory === 'All projects' || (project.categories || []).includes(activeCategory);
      const searchable = [project.name, project.description, project.headline, project.summary, ...(project.categories || [])].join(' ').toLocaleLowerCase();
      return categoryMatch && (!query || searchable.includes(query));
    });
    overlay.querySelector('.search-results-label').textContent = `${matches.length} ${matches.length === 1 ? 'Project' : 'Projects'}`;
    results.innerHTML = matches.length ? matches.map((project) => `
      <a class="search-result" href="/projects/${encodeURIComponent(project.slug)}/">
        ${thumbMarkup(project)}
        <span class="search-result-copy"><strong>${escapeHTML(project.name)}</strong><span class="search-result-tags">${(project.categories || []).map((category) => `<em>${escapeHTML(category)}</em>`).join('')}</span></span>
      </a>`).join('') : '<p class="search-empty">No projects found.</p>';
  };

  let closeTimer;
  const close = () => {
    if (overlay.hidden || overlay.classList.contains('is-closing')) return;
    overlay.classList.remove('is-open');
    overlay.classList.add('is-closing');
    document.body.classList.remove('search-open');
    window.clearTimeout(closeTimer);
    closeTimer = window.setTimeout(() => {
      overlay.hidden = true;
      overlay.classList.remove('is-closing');
      trigger.focus();
    }, 240);
  };
  const open = () => {
    window.clearTimeout(closeTimer);
    overlay.hidden = false;
    overlay.classList.remove('is-closing');
    document.body.classList.add('search-open');
    renderResults();
    requestAnimationFrame(() => { overlay.classList.add('is-open'); input.focus(); });
  };

  trigger.addEventListener('click', open);
  clearButton.addEventListener('click', () => { input.value = ''; renderResults(); input.focus(); });
  overlay.addEventListener('click', (event) => { if (event.target === overlay) close(); });
  input.addEventListener('input', renderResults);
  categoryNav.addEventListener('click', (event) => {
    const button = event.target.closest('[data-category]');
    if (!button) return;
    activeCategory = button.dataset.category;
    categoryNav.querySelectorAll('.search-category').forEach((item) => item.classList.toggle('is-active', item === button));
    renderResults();
  });
  document.addEventListener('keydown', (event) => {
    if (overlay.hidden) return;
    if (event.key === 'Escape') close();
    if (event.key === 'Tab') {
      const focusable = [...overlay.querySelectorAll('button:not(:disabled),input,a[href]')];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
})();
