window.addEventListener('DOMContentLoaded', () => {
  const typewriter = document.querySelector('[data-code-typewriter]');
  if (typewriter) {
    const source = 'VStack(spacing: 12) {\n      Text("Overview")\n      ProgressView(value: completion)';
    const tokenPattern = /(VStack|Text|ProgressView|12|"Overview"|completion)/g;
    const classForToken = token => {
      if (/^(VStack|Text|ProgressView)$/.test(token)) return 'swift-type';
      if (token === '12') return 'swift-number';
      if (token === '"Overview"') return 'swift-string';
      return 'swift-property';
    };
    const escapeHtml = value => value.replace(/[&<>"']/g, char => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[char]);
    const renderPrefix = length => {
      const prefix = source.slice(0, length);
      typewriter.innerHTML = prefix.replace(tokenPattern, token =>
        `<span class="${classForToken(token)}">${escapeHtml(token)}</span>`
      );
    };
    const typeDelay = 3000 / source.length;
    const deleteDelay = 1500 / source.length;
    const erase = () => {
      if (typewriter.textContent.length === 0) {
        renderPrefix(0);
        setTimeout(type, 0);
        return;
      }
      renderPrefix(typewriter.textContent.length - 1);
      setTimeout(erase, deleteDelay);
    };
    const type = () => {
      if (typewriter.textContent.length === source.length) {
        setTimeout(erase, 1500);
        return;
      }
      renderPrefix(typewriter.textContent.length + 1);
      setTimeout(type, typeDelay);
    };

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      renderPrefix(source.length);
      typewriter.nextElementSibling?.remove();
    } else {
      type();
    }
  }

  const grid=document.querySelector('#project-grid');
  if(!grid||!window.projects)return;
  grid.innerHTML=window.projects.map(p=>`<a class="project-card" data-categories="${p.categories.join('|')}" href="/projects/${p.slug}/"><div class="project-cover"><div class="cover-art image-loading ${p.cover}"><img class="project-cover-image" src="${p.assets?.cover||''}" alt="" loading="lazy" decoding="async" onerror="window.imageFormatFallback(this)" onload="this.parentElement.classList.remove('image-loading')"></div><div class="cover-tags">${p.categories.map(c=>`<span class="tag">${c}</span>`).join('')}</div></div><div class="project-meta"><div class="project-title-row"><h3 class="project-title">${p.name}</h3>${p.status?`<span class="status ${p.status==='Released'?'status-released':'status-concept'}">${p.status}</span>`:''}</div><p class="project-desc">${p.description}</p></div></a>`).join('');

  const filters=[...document.querySelectorAll('.filter-chip')];
  let activeFilter=null;
  const updateProjects=()=>{
    grid.querySelectorAll('.project-card').forEach(card=>{
      const categories=(card.dataset.categories||'').split('|');
      card.hidden=Boolean(activeFilter&&!categories.includes(activeFilter));
    });
    filters.forEach(button=>{
      const selected=button.dataset.filter===activeFilter;
      button.classList.toggle('is-active',selected);
      button.setAttribute('aria-pressed',String(selected));
    });
  };
  filters.forEach(button=>button.addEventListener('click',()=>{
    activeFilter=activeFilter===button.dataset.filter?null:button.dataset.filter;
    updateProjects();
  }));
});
