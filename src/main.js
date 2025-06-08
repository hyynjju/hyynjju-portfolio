// main.js - 메인 초기화 및 전역 제어
import { setupVideoManager } from './videoManager.js';
import { setupInteractionHandlers } from './interactionHandlers.js';

// DOM Elements
const phoneContainer = document.getElementById('phoneContainer');
const demoVideo = document.getElementById('demoVideo');

// 3D Rotation Logic
const targetRotation = { x: 0, y: 0 };
let currentRotation = { x: 0, y: 0 };

// Mouse movement handler
function handleMouseMove(e) {
  const x = (e.clientX / window.innerWidth - 0.5) * 2;
  const y = (e.clientY / window.innerHeight - 0.5) * 2;

  targetRotation.y = x * 15; // Increased rotation intensity
  targetRotation.x = -y * 15;
}

// Touch movement handler
function handleTouchMove(e) {
  if (e.touches.length > 0) {
    const touch = e.touches[0];
    const x = (touch.clientX / window.innerWidth - 0.5) * 2;
    const y = (touch.clientY / window.innerHeight - 0.5) * 2;

    targetRotation.y = x * 15;
    targetRotation.x = -y * 15;
  }
}

// Animation loop for smooth rotation
function animate() {
  requestAnimationFrame(animate);

  // Smooth interpolation
  const lerp = 0.08;
  currentRotation.x += (targetRotation.x - currentRotation.x) * lerp;
  currentRotation.y += (targetRotation.y - currentRotation.y) * lerp;

  // Apply transform
  if (phoneContainer) {
    phoneContainer.style.transform = `
      rotateX(${currentRotation.x}deg)
      rotateY(${currentRotation.y}deg)
    `;
  }
}

// Intersection Observer for performance optimization
function setupIntersectionObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Phone is visible, enable mouse tracking
          document.addEventListener('mousemove', handleMouseMove);
          document.addEventListener('touchmove', handleTouchMove, {
            passive: true,
          });
        } else {
          // Phone is not visible, disable mouse tracking for performance
          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('touchmove', handleTouchMove);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  if (phoneContainer) {
    observer.observe(phoneContainer);
  }
}

// Initialize everything when DOM is loaded
function init() {
  console.log('Portfolio initialized');

  // Start animation loop
  animate();

  // Setup all managers
  setupIntersectionObserver();
  setupVideoManager();
  setupInteractionHandlers();

  // Handle page visibility changes for performance
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      // Page is hidden, pause video to save resources
      if (demoVideo && !demoVideo.paused) {
        demoVideo.pause();
      }
    } else {
      // Page is visible, resume video
      if (demoVideo && demoVideo.paused) {
        demoVideo.play().catch((e) => {
          console.warn('Video resume failed:', e);
        });
      }
    }
  });
}

// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
