// interactionHandlers.js - 사용자 상호작용 핸들러
import { goToPrevious, goToNext } from './videoManager.js';

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Keyboard navigation
function handleKeydown(e) {
  switch (e.key) {
    case 'ArrowLeft':
      e.preventDefault();
      goToPrevious();
      break;
    case 'ArrowRight':
      e.preventDefault();
      goToNext();
      break;
    case ' ':
      e.preventDefault();
      goToNext();
      break;
  }
}

// Touch gesture support
let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(e) {
  touchStartX = e.changedTouches[0].screenX;
}

function handleTouchEnd(e) {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipeGesture();
}

function handleSwipeGesture() {
  const swipeThreshold = 50;
  const swipeDistance = touchEndX - touchStartX;

  if (Math.abs(swipeDistance) > swipeThreshold) {
    if (swipeDistance > 0) {
      goToPrevious(); // Swipe right -> previous
    } else {
      goToNext(); // Swipe left -> next
    }
  }
}

// Button click handlers with visual feedback
function setupButtonHandlers() {
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevBtn.style.transform = 'translateY(-50%) scale(0.95)';
      setTimeout(() => {
        prevBtn.style.transform = 'translateY(-50%) scale(1)';
      }, 150);
      goToPrevious();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextBtn.style.transform = 'translateY(-50%) scale(0.95)';
      setTimeout(() => {
        nextBtn.style.transform = 'translateY(-50%) scale(1)';
      }, 150);
      goToNext();
    });
  }
}

// Social links handler
function setupSocialLinks() {
  const socialLinks = document.querySelectorAll('.social-links__item');
  const externalLinks = document.querySelectorAll('.external-link');

  // Add click handlers for social links
  socialLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const linkText = link.textContent.toLowerCase();

      // Add your actual URLs here
      const urls = {
        contact: 'mailto:your-email@example.com',
        instagram: 'https://instagram.com/your-profile',
        github: 'https://github.com/your-profile',
      };

      if (urls[linkText]) {
        window.open(urls[linkText], '_blank');
      }
    });
  });

  // Add click handlers for external links
  externalLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const linkText = link
        .querySelector('.external-link__text')
        .textContent.toLowerCase();

      // Add your actual URLs here
      const urls = {
        instagram: 'https://instagram.com/medeasy-app',
        hp: 'https://your-homepage.com',
        github: 'https://github.com/medeasy-project',
      };

      if (urls[linkText]) {
        window.open(urls[linkText], '_blank');
      }
    });
  });
}

// Language selector
function setupLanguageSelector() {
  const langItems = document.querySelectorAll('.lang-selector__item');

  langItems.forEach((item) => {
    item.addEventListener('click', () => {
      // Remove active class from all items
      langItems.forEach((i) =>
        i.classList.remove('lang-selector__item--active')
      );

      // Add active class to clicked item
      item.classList.add('lang-selector__item--active');

      // Here you can add language switching logic
      const selectedLang = item.textContent;
      console.log(`Language switched to: ${selectedLang}`);

      // You can implement actual language switching here
      // switchLanguage(selectedLang);
    });
  });
}

// Setup all interaction handlers
export function setupInteractionHandlers() {
  setupButtonHandlers();
  setupSocialLinks();
  setupLanguageSelector();

  // Add global event listeners
  document.addEventListener('keydown', handleKeydown);
  document.addEventListener('touchstart', handleTouchStart, { passive: true });
  document.addEventListener('touchend', handleTouchEnd, { passive: true });
}
