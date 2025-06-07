const wrapper = document.querySelector('.phone-wrapper');
const demoVideo = document.getElementById('demo-video');
const backgroundVideo = document.getElementById('background-video');
const leftBtn = document.querySelector('.chevron.left');
const rightBtn = document.querySelector('.chevron.right');

const videoSources = ['/medeasy_demo.mp4', '/chack_demo.mp4'];
let currentIndex = 0;

// 회전 로직
const targetRotation = { x: 0, y: 0 };
let currentRotation = { x: 0, y: 0 };

document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 2;
  const y = (e.clientY / window.innerHeight - 0.5) * 2;
  targetRotation.y = x * 10;
  targetRotation.x = -y * 10;
});

document.addEventListener('touchmove', (e) => {
  if (e.touches.length > 0) {
    const t = e.touches[0];
    const x = (t.clientX / window.innerWidth - 0.5) * 2;
    const y = (t.clientY / window.innerHeight - 0.5) * 2;
    targetRotation.y = x * 10;
    targetRotation.x = -y * 10;
  }
});

function animate() {
  requestAnimationFrame(animate);
  currentRotation.x += (targetRotation.x - currentRotation.x) * 0.08;
  currentRotation.y += (targetRotation.y - currentRotation.y) * 0.08;
  wrapper.style.transform = `
    rotateX(${currentRotation.x}deg)
    rotateY(${currentRotation.y}deg)
  `;
}
animate();

// 🔁 영상 전환 함수
function switchVideo(index) {
  // 페이드 아웃
  demoVideo.classList.add('fade-out');
  backgroundVideo.classList.add('fade-out');

  // 잠깐 기다렸다가 변경
  setTimeout(() => {
    demoVideo.src = videoSources[index];
    backgroundVideo.src = videoSources[index];

    demoVideo.load();
    backgroundVideo.load();

    demoVideo.play();
    backgroundVideo.play();

    // 페이드 인
    demoVideo.classList.remove('fade-out');
    demoVideo.classList.add('fade-in');

    backgroundVideo.classList.remove('fade-out');
    backgroundVideo.classList.add('fade-in');

    // 다시 초기화
    setTimeout(() => {
      demoVideo.classList.remove('fade-in');
      backgroundVideo.classList.remove('fade-in');
    }, 600);
  }, 300);
}

// 버튼 이벤트
leftBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + videoSources.length) % videoSources.length;
  switchVideo(currentIndex);
});

rightBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % videoSources.length;
  switchVideo(currentIndex);
});
