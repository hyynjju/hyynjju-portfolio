const projectSection=document.querySelector('.projects-section');
const projectGrid=document.querySelector('#project-grid');
const projectCursor=projectSection?.querySelector('.project-hover-cursor');
const cursorCard=projectCursor?.querySelector('.project-hover-cursor-card');
const canHoverProjects=window.matchMedia('(hover: hover) and (pointer: fine)');

if(projectGrid&&projectCursor&&cursorCard&&canHoverProjects.matches){
  let hoveredCard=null;

  const moveCursor=(event)=>{
    projectCursor.style.transform=`translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
  };

  const showPreview=(card)=>{
    if(!card||card===hoveredCard)return;
    hoveredCard=card;
    cursorCard.replaceChildren();
    const slug=card.getAttribute('href')?.split('/').filter(Boolean).pop();
    const project=(window.projects||[]).find((item)=>item.slug===slug);
    if(project?.assets?.icon){
      const preview=document.createElement('img');
      preview.className='cursor-preview-icon';
      preview.src=project.assets.icon;
      preview.alt='';
      preview.classList.add('is-loading');
      preview.onload=()=>preview.classList.remove('is-loading');
      preview.onerror=()=>window.imageFormatFallback(preview);
      cursorCard.append(preview);
    }
    requestAnimationFrame(()=>projectCursor.classList.add('is-visible'));
  };

  const hidePreview=()=>{
    hoveredCard=null;
    projectCursor.classList.remove('is-visible');
  };

  projectGrid.addEventListener('pointermove',moveCursor);
  projectGrid.addEventListener('pointerover',(event)=>{
    const card=event.target.closest('.project-card');
    if(card&&projectGrid.contains(card))showPreview(card);
  });
  projectGrid.addEventListener('pointerout',(event)=>{
    const next=event.relatedTarget?.closest?.('.project-card');
    if(!next||!projectGrid.contains(next))hidePreview();
  });
  projectGrid.addEventListener('pointerleave',hidePreview);
}
