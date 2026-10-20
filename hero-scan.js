const heroScreens = [...document.querySelectorAll('.phone-stage .phone')];
if (heroScreens.length > 1) {
  let visibleScreen = 0;
  const hiddenClip = 'inset(0 100% 0 0)';
  const fullClip = 'inset(0 0 0 0)';

  heroScreens.forEach((screen, index) => {
    screen.style.clipPath = index === 0 ? fullClip : hiddenClip;
    screen.style.zIndex = index === 0 ? '1' : '0';
  });

  window.setInterval(() => {
    const nextIndex = (visibleScreen + 1) % heroScreens.length;
    const previous = heroScreens[visibleScreen];
    const next = heroScreens[nextIndex];

    // Reset the next image to the same left edge before every scan, including the wrap to image 01.
    next.getAnimations().forEach((animation) => animation.cancel());
    next.style.clipPath = hiddenClip;
    next.style.zIndex = '2';
    next.animate(
      [{ clipPath: hiddenClip }, { clipPath: fullClip }],
      { duration: 720, easing: 'linear', fill: 'forwards' },
    );

    window.setTimeout(() => {
      previous.style.clipPath = hiddenClip;
      previous.style.zIndex = '0';
      next.style.clipPath = fullClip;
      next.style.zIndex = '1';
      visibleScreen = nextIndex;
    }, 720);
  }, 2000);
}
