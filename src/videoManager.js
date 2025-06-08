// videoManager.js - 비디오 관련 기능 관리
const demoVideo = document.getElementById('demoVideo');
const backgroundBlur = document.querySelector('.background-blur');

// Video sources
const videoSources = ['medeasy_demo.mp4', 'chack_demo.mp4'];
let currentVideoIndex = 0;

// Video switching function
function switchVideo(index) {
  if (!demoVideo || index < 0 || index >= videoSources.length) return;

  // Fade out current video
  demoVideo.classList.add('fade-out');

  // Update background blur effect
  if (backgroundBlur) {
    backgroundBlur.style.backgroundImage = `url('${videoSources[index]}')`;
  }

  // Wait for fade out, then switch video
  setTimeout(() => {
    demoVideo.src = videoSources[index];
    demoVideo.load();

    // Handle video load success
    demoVideo.onloadeddata = () => {
      demoVideo.play().catch((e) => {
        console.warn('Video autoplay prevented:', e);
      });

      // Fade in new video
      demoVideo.classList.remove('fade-out');
      demoVideo.classList.add('fade-in');

      // Clean up fade-in class
      setTimeout(() => {
        demoVideo.classList.remove('fade-in');
      }, 400);
    };

    // Handle video load error
    demoVideo.onerror = () => {
      console.error('Failed to load video:', videoSources[index]);
      demoVideo.classList.remove('fade-out');
    };
  }, 400);
}

// Navigation handlers
function goToPrevious() {
  currentVideoIndex =
    (currentVideoIndex - 1 + videoSources.length) % videoSources.length;
  switchVideo(currentVideoIndex);
}

function goToNext() {
  currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
  switchVideo(currentVideoIndex);
}

// Video error handling and fallback
function setupVideoErrorHandling() {
  if (demoVideo) {
    demoVideo.addEventListener('error', (e) => {
      console.error('Video error:', e);

      // Try to load alternative video or show fallback
      const fallbackIndex = (currentVideoIndex + 1) % videoSources.length;
      if (fallbackIndex !== currentVideoIndex) {
        console.log('Trying fallback video...');
        currentVideoIndex = fallbackIndex;
        switchVideo(currentVideoIndex);
      }
    });

    // Handle video stall
    demoVideo.addEventListener('stalled', () => {
      console.warn('Video stalled, attempting to reload...');
      demoVideo.load();
    });
  }
}

// Preload videos for better performance
function preloadVideos() {
  videoSources.forEach((src, index) => {
    if (index === currentVideoIndex) return; // Skip current video

    const video = document.createElement('video');
    video.src = src;
    video.preload = 'metadata';
    video.load();
  });
}

// Setup video manager
export function setupVideoManager() {
  setupVideoErrorHandling();

  // Preload videos after a short delay
  setTimeout(preloadVideos, 2000);

  // Initial video setup
  if (demoVideo) {
    demoVideo.addEventListener('loadeddata', () => {
      demoVideo.play().catch((e) => {
        console.warn('Initial video autoplay prevented:', e);
      });
    });
  }

  // Export functions for external use
  window.portfolioControls = {
    switchVideo,
    goToNext,
    goToPrevious,
    getCurrentVideoIndex: () => currentVideoIndex,
    getVideoSources: () => [...videoSources],
  };
}

// Export functions for use in other modules
export { switchVideo, goToPrevious, goToNext };
