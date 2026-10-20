window.addEventListener('DOMContentLoaded', () => {
  const grid=document.querySelector('#project-grid');
  if(!grid||!window.projects)return;
  const device=()=>`<div class="cover-device"><div class="mini-chart"><i></i><i></i><i></i><i></i><i></i></div></div>`;
  grid.innerHTML=window.projects.map(p=>`<a class="project-card" data-categories="${p.categories.join('|')}" href="/projects/${p.slug}/"><div class="project-cover"><div class="cover-art ${p.cover}"><img class="project-cover-image" src="${p.assets?.cover||''}" alt="" onerror="window.imageFormatFallback(this)" onload="this.parentElement.querySelector('.cover-device')?.remove()">${device()}</div><div class="cover-tags">${p.categories.map(c=>`<span class="tag">${c}</span>`).join('')}</div></div><div class="project-meta"><div class="project-title-row"><h3 class="project-title">${p.name}</h3>${p.status?`<span class="status ${p.status==='Released'?'status-released':'status-concept'}">${p.status}</span>`:''}</div><p class="project-desc">${p.description}</p></div></a>`).join('');

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
