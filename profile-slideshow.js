window.addEventListener('DOMContentLoaded', async () => {
  const imageElements = [...document.querySelectorAll('.profile-slideshow-image')];
  if (!imageElements.length) return;

  const profileImages = [];
  const imageExists = (src) => new Promise((resolve) => {
    const image = new Image();
    image.onload = () => resolve(true);
    image.onerror = () => resolve(false);
    image.src = src;
  });

  for (let number = 1; number <= 99; number += 1) {
    const fileNumber = String(number).padStart(2, '0');
    let foundImage = false;

    for (const extension of ['png', 'jpg']) {
      const src = `/assets/site/profile/${fileNumber}.${extension}`;
      if (await imageExists(src)) {
        profileImages.push(src);
        foundImage = true;
        break;
      }
    }

    if (!foundImage) break;
  }

  if (profileImages.length === 0) {
    imageElements.forEach((image) => image.remove());
    return;
  }

  imageElements.forEach((image) => { image.src = profileImages[0]; });
  if (profileImages.length < 2) return;

  let currentIndex = 0;
  window.setInterval(() => {
    currentIndex = (currentIndex + 1) % profileImages.length;
    imageElements.forEach((image) => { image.src = profileImages[currentIndex]; });
  }, 1000);
});
