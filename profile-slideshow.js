window.addEventListener('DOMContentLoaded', async () => {
  const imageElements = [...document.querySelectorAll('.profile-slideshow-image')];
  if (!imageElements.length) return;

  // Show the first local portrait immediately; keep the neutral gray backing visible during decode.
  imageElements.forEach((image) => { image.src = '/assets/site/profile/01.png'; });

  const profileImages = [];
  const imageExists = (src) => new Promise((resolve) => {
    const image = new Image();
    image.onload = () => resolve(true);
    image.onerror = () => resolve(false);
    image.src = src;
  });

  for (let number = 1; number <= 99; number += 1) {
    const fileNumber = String(number).padStart(2, '0');
    const candidates = ['png', 'jpg'].map((extension) => `/assets/site/profile/${fileNumber}.${extension}`);
    const results = await Promise.all(candidates.map(imageExists));
    const found = results.findIndex(Boolean);
    if (found < 0) break;
    profileImages.push(candidates[found]);
  }

  if (profileImages.length < 2) return;
  let currentIndex = 0;
  window.setInterval(() => {
    currentIndex = (currentIndex + 1) % profileImages.length;
    imageElements.forEach((image) => { image.src = profileImages[currentIndex]; });
  }, 1000);
});
