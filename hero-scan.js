const heroScreens = [...document.querySelectorAll('.phone-stage .phone')];
if (heroScreens.length > 1) {
  let visibleScreen = 0;
  heroScreens[visibleScreen].classList.add('is-base');

  window.setInterval(() => {
    const nextScreen = (visibleScreen + 1) % heroScreens.length;
    const previous = heroScreens[visibleScreen];
    const next = heroScreens[nextScreen];

    next.classList.add('is-active');
    window.setTimeout(() => {
      previous.classList.remove('is-base');
      next.classList.remove('is-active');
      next.classList.add('is-base');
      visibleScreen = nextScreen;
    }, 720);
  }, 2000);
}
