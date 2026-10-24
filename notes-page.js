(() => {
  const userAgent = navigator.userAgent;
  if (/Macintosh/i.test(userAgent) && /Safari/i.test(userAgent) && !/(Chrome|Chromium|CriOS|Edg|OPR)/i.test(userAgent)) {
    document.documentElement.classList.add('is-safari');
  }
  const notes = window.portfolioNotes || [];
  const locale = ['ja', 'ko', 'en'].includes(localStorage.getItem('portfolio-language'))
    ? localStorage.getItem('portfolio-language') : 'ja';
  const copy = {
    ja: { readAll: 'View all', readMore: 'Read More', notes: 'Notes', back: 'Notes一覧へ' },
    ko: { readAll: 'View all', readMore: 'Read More', notes: 'Notes', back: '노트 목록으로' },
    en: { readAll: 'View all', readMore: 'Read More', notes: 'Notes', back: 'All notes' },
  }[locale];
  const dateText = (iso) => {
    const date = new Date(`${iso}T00:00:00`);
    return locale === 'ja' ? `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`
      : locale === 'ko' ? `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`
      : date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };
  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
  const headingText = (value) => escapeHtml(value).replace(/([\u3040-\u30ff\u3400-\u9fff々〆〇ヶヵー]+)/g, '<span class="note-japanese-glyph">$1</span>');
  const tags = (note) => note.tags[locale].map((tag) => `<span>${escapeHtml(tag)}</span>`).join('');
  const image = (note, alt, className = '') => `<span class="note-image-frame image-loading ${className}"><img src="${escapeHtml(note.cover)}" alt="${escapeHtml(alt)}" loading="lazy" decoding="async" onload="this.parentElement.classList.remove('image-loading')" onerror="window.imageFormatFallback(this)"></span>`;
  const cardMarkup = (note) => {
    const text = note.content[locale];
    return `<a class="note-list-card" href="/notes/${note.slug}/">
      ${image(note, text.title)}
      <div class="note-list-card-copy"><div class="note-list-card-meta"><div class="note-list-card-tags">${tags(note)}</div><time datetime="${note.date}">${dateText(note.date)}</time></div>
      <h2>${headingText(text.title)}</h2><p>${escapeHtml(text.summary)}</p></div>
    </a>`;
  };
  const home = document.querySelector('#home-notes-grid');
  if (home && notes.length) {
    const [featured, ...rest] = notes;
    const main = featured.content[locale];
    home.innerHTML = `<a class="note-featured" href="/notes/${featured.slug}/">
      <span class="note-featured-image note-image-frame image-loading"><img src="${escapeHtml(featured.cover)}" alt="${escapeHtml(main.title)}" loading="lazy" decoding="async" onload="this.parentElement.classList.remove('image-loading')" onerror="window.imageFormatFallback(this)"><span class="note-tags">${tags(featured)}</span></span>
      <span class="note-copy"><time datetime="${featured.date}">${dateText(featured.date)}</time><h3>${headingText(main.title)}</h3><p>${escapeHtml(main.summary)}</p></span>
    </a><div class="notes-side-list">${rest.map((note) => {
      const text = note.content[locale];
      return `<a class="note-row" href="/notes/${note.slug}/">${image(note, text.title)}<span class="note-row-copy"><span class="note-row-meta"><span class="note-row-tags">${tags(note)}</span><time datetime="${note.date}">${dateText(note.date)}</time></span><h3>${headingText(text.title)}</h3></span></a>`;
    }).join('')}</div>`;
    const heading = document.querySelector('#notes-preview-title');
    if (heading) heading.textContent = copy.notes;
    const more = document.querySelector('.notes-read-all');
    if (more) more.innerHTML = `${copy.readAll} <svg class="notes-read-all-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`;
  }

  const list = document.querySelector('#notes-list');
  if (list && notes.length) {
    const [featured, ...rest] = notes;
    const text = featured.content[locale];
    list.innerHTML = `<div class="notes-list-featured"><a class="notes-featured-copy" href="/notes/${featured.slug}/">
      <span class="note-tags">${tags(featured)}</span><time datetime="${featured.date}">${dateText(featured.date)}</time>
      <h1>${headingText(text.title)}</h1><p>${escapeHtml(text.summary)}</p><span class="notes-read-more">${copy.readMore}<svg class="notes-read-more-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span>
    </a><a class="notes-featured-image note-image-frame image-loading" href="/notes/${featured.slug}/"><img src="${escapeHtml(featured.cover)}" alt="${escapeHtml(text.title)}" loading="lazy" decoding="async" onload="this.parentElement.classList.remove('image-loading')" onerror="window.imageFormatFallback(this)"></a></div>
    <div class="notes-list-grid">${rest.map(cardMarkup).join('')}</div>`;
  }

  const article = document.querySelector('#note-article');
  if (article) {
    const slug = article.dataset.slug;
    const note = notes.find((item) => item.slug === slug);
    if (!note) { article.innerHTML = '<p>Note not found.</p>'; return; }
    const text = note.content[locale];
    article.innerHTML = `<a class="note-back-link" href="/notes/">← ${copy.back}</a>
      <header class="note-article-header"><div class="note-article-tags">${tags(note)}</div><time datetime="${note.date}">${dateText(note.date)}</time><h1>${headingText(text.title)}</h1><p>${escapeHtml(text.summary)}</p></header>
      <div class="note-article-cover note-image-frame image-loading"><img src="${escapeHtml(note.cover)}" alt="${escapeHtml(text.title)}" loading="lazy" decoding="async" onload="this.parentElement.classList.remove('image-loading')" onerror="window.imageFormatFallback(this)"></div>
      <div class="note-article-body">${text.sections.map(([heading, paragraphs], index) => `${note.articleImages?.[index] ? `<figure class="note-article-inline-image note-image-frame image-loading"><img src="${escapeHtml(note.articleImages[index])}" alt="${escapeHtml(heading)}" loading="lazy" decoding="async" onload="this.parentElement.classList.remove('image-loading')" onerror="this.parentElement.remove()"></figure>` : ''}<section class="note-article-section${note.articleImages?.[index] ? ' note-article-section-after-image' : ''}"><h2>${escapeHtml(heading)}</h2>${paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('')}</section>`).join('')}</div>
      <a class="note-back-link note-back-bottom" href="/notes/">← ${copy.back}</a>`;
    document.title = `${text.title} — Notes — Cho Hyunju`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', text.summary);
  }
})();
