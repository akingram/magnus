// iPhone Emulator Core Logic
let unlocked = false;
let currentApp = null;
const DISPLAY_NAME = 'H. E SELORM MAGNUS AVAKAME';
const PRIMARY_EMAIL = 'smagnusa@stanford.edu';

function updateClock() {
  const now = new Date();
  const time = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
  const statusTime = document.getElementById('statusTime');
  const lockTime = document.getElementById('lockTime');
  if (statusTime) statusTime.textContent = time;
  if (lockTime) lockTime.textContent = time;
}

function showToast(icon, title, text) {
  const toast = document.getElementById('phoneToast');
  if (!toast) return;
  const iconEl = document.getElementById('toastIconEl');
  const titleEl = document.getElementById('toastTitle');
  const textEl = document.getElementById('toastText');
  if (iconEl) iconEl.innerHTML = icon;
  if (titleEl) titleEl.textContent = title;
  if (textEl) textEl.textContent = text;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

function goHome() {
  const appScreen = document.getElementById('app-screen');
  if (appScreen && appScreen.classList.contains('visible')) {
    closeApp();
    return;
  }
}

function closeApp() {
  const appScreen = document.getElementById('app-screen');
  if (appScreen) {
    appScreen.classList.remove('visible');
    currentApp = null;
  }
}

function openApp(appName) {
  if (!unlocked) unlock();
  const appScreen = document.getElementById('app-screen');
  const appTitle = document.getElementById('appTitle');
  const appHeader = document.getElementById('appHeader');
  const appBody = document.getElementById('appBody');
  
  const titles = {
    portfolio: 'About Me',
    projects: 'Projects',
    skills: 'Skills',
    resume: 'Resume',
    contact: 'Contact'
  };
  
  if (appTitle) appTitle.textContent = titles[appName] || appName;
  if (appHeader) appHeader.style.background = 'linear-gradient(135deg,#8C1515,#b83a3a)';
  
  let content = '<div style="padding:1rem;color:#3c3c43;">Content preview for ' + (titles[appName] || appName) + '</div>';
  
  if (appName === 'portfolio') {
    content = `<div style="background:#8C1515;padding:1rem;border-radius:12px;color:#fff;margin-bottom:0.7rem"><div style="font-size:1rem;font-weight:700">${DISPLAY_NAME}</div><div>Stanford CS · AI Track</div></div>
    <div class="app-section"><div class="app-section-title">Bio</div><div class="app-row"><div class="app-row-text"><div class="app-row-sub">Computer Science student at Stanford. Leland Scholar. Building at the intersection of AI, climate, and African innovation.</div></div></div></div>
    <div class="app-section"><div class="app-section-title">Links</div><div class="app-row"><div class="app-row-text"><div class="app-row-title">GitHub</div><div class="app-row-sub">github.com/smagnusavakame</div></div></div></div>`;
  } else if (appName === 'projects') {
    content = `<div class="proj-card" style="background:#fff;border-radius:12px;margin-bottom:0.7rem;padding:0.8rem"><div class="proj-name" style="font-weight:600">Drop It Off — iOS App</div><div class="proj-desc" style="font-size:0.7rem;color:#8e8e93">4.8★ · 1K+ downloads · Swift + Firebase</div></div>
    <div class="proj-card" style="background:#fff;border-radius:12px;padding:0.8rem"><div class="proj-name" style="font-weight:600">CS124 AI Booking Agent</div><div class="proj-desc" style="font-size:0.7rem;color:#8e8e93">Python · DSPy · ReAct pattern</div></div>`;
  } else if (appName === 'resume') {
    content = `<div style="background:#fff;border-radius:12px;padding:1rem"><div style="font-weight:700;margin-bottom:0.3rem">${DISPLAY_NAME}</div><div>Stanford CS · Class of 2028</div><div style="font-size:0.7rem;color:#8e8e93;margin-top:0.5rem">Leland Scholar · 2x African Service Fellow</div><button class="btn-primary" style="margin-top:1rem;width:100%;background:#8C1515;padding:0.6rem;border-radius:8px;border:none;color:#fff" onclick="window.downloadResume ? downloadResume() : window.location.href='mailto:${PRIMARY_EMAIL}?subject=Resume%20request'">Download Resume PDF</button></div>`;
  } else if (appName === 'contact') {
    content = `<div class="contact-btn" style="background:#fff;border-radius:12px;padding:0.7rem;margin-bottom:0.5rem;display:flex;align-items:center;gap:0.7rem"><div>✉️</div><div>smagnusavakame1@gmail.com</div></div>
    <div class="contact-btn" style="background:#fff;border-radius:12px;padding:0.7rem;margin-bottom:0.5rem;display:flex;align-items:center;gap:0.7rem"><div>📱</div><div>+1 (650) 665 4959</div></div>
    <div class="contact-btn" style="background:#fff;border-radius:12px;padding:0.7rem;display:flex;align-items:center;gap:0.7rem"><div>🐙</div><div>github.com/smagnusavakame</div></div>`;
  } else if (appName === 'skills') {
    content = `<div class="skill-group" style="background:#fff;border-radius:12px;padding:0.8rem;margin-bottom:0.7rem"><div class="skill-group-name" style="font-weight:600;font-size:0.7rem">Languages</div><div class="skill-pills"><span class="pill" style="background:#f2f2f7;padding:0.2rem 0.5rem;border-radius:20px;font-size:0.65rem">Python</span><span class="pill">Swift</span><span class="pill">C</span><span class="pill">JavaScript</span><span class="pill">Dart</span></div></div>
    <div class="skill-group" style="background:#fff;border-radius:12px;padding:0.8rem"><div class="skill-group-name" style="font-weight:600;font-size:0.7rem">Frameworks</div><div class="skill-pills"><span class="pill">React</span><span class="pill">Flutter</span><span class="pill">PyTorch</span><span class="pill">Node.js</span></div></div>`;
  }
  
  if (appBody) appBody.innerHTML = content;
  if (appScreen) {
    appScreen.classList.add('visible');
    appScreen.style.transform = 'scale(1)';
    appScreen.style.opacity = '1';
  }
  showToast('🚀', 'Opening ' + (titles[appName] || appName), '');
}

function renderHomeScreen() {
  const homeGrid = document.getElementById('homeGrid');
  const dock = document.getElementById('dock');
  if (!homeGrid) return;
  
  const apps = [
    { name: 'portfolio', label: 'About', icon: '<svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>' },
    { name: 'projects', label: 'Projects', icon: '<svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>' },
    { name: 'skills', label: 'Skills', icon: '<svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>' },
    { name: 'resume', label: 'Resume', icon: '<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>' },
    { name: 'contact', label: 'Contact', icon: '<svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>' }
  ];
  
  homeGrid.innerHTML = apps.map(app => `
    <div class="app-icon" onclick="openApp('${app.name}')">
      <div class="app-icon-img" style="background:linear-gradient(135deg,#8C1515,#b83a3a)">${app.icon}</div>
      <div class="app-label">${app.label}</div>
    </div>
  `).join('');
  
  if (dock) {
    dock.innerHTML = apps.slice(0, 4).map(app => `
      <div class="app-icon" onclick="openApp('${app.name}')">
        <div class="app-icon-img" style="background:linear-gradient(135deg,#8C1515,#b83a3a)">${app.icon}</div>
      </div>
    `).join('');
  }
}

function unlock() {
  if (unlocked) return;
  unlocked = true;
  const lockScreen = document.getElementById('lock-screen');
  const homeScreen = document.getElementById('home-screen');
  if (lockScreen && homeScreen) {
    lockScreen.style.transition = 'transform 0.4s ease, opacity 0.4s';
    lockScreen.style.transform = 'translateY(-100%)';
    lockScreen.style.opacity = '0';
    setTimeout(() => {
      lockScreen.style.display = 'none';
      homeScreen.style.display = 'flex';
      homeScreen.style.opacity = '1';
      renderHomeScreen();
      showToast('🔓', 'Welcome Selorm', 'Stanford CS · AI & Climate');
    }, 380);
  }
}

// Lock screen unlock handlers
document.addEventListener('DOMContentLoaded', function() {
  updateClock();
  setInterval(updateClock, 30000);
  
  const lockScreen = document.getElementById('lock-screen');
  if (lockScreen) {
    lockScreen.addEventListener('click', unlock);
    let startY = 0;
    lockScreen.addEventListener('touchstart', (e) => { startY = e.touches[0].clientY; });
    lockScreen.addEventListener('touchend', (e) => { if (e.changedTouches[0].clientY - startY < -30) unlock(); });
  }
  
  const dynamicIsland = document.getElementById('dynamicIsland');
  if (dynamicIsland) {
    dynamicIsland.addEventListener('click', () => {
      dynamicIsland.classList.toggle('expanded');
      setTimeout(() => dynamicIsland.classList.remove('expanded'), 3000);
    });
  }
  
  // Isolate iPhone scrolling
  const iphoneSide = document.querySelector('.iphone-side');
  if (iphoneSide && window.innerWidth > 960) {
    iphoneSide.addEventListener('wheel', (e) => { e.stopPropagation(); }, { passive: false });
  }
});

window.openApp = openApp;
window.closeApp = closeApp;
window.goHome = goHome;
window.showToast = showToast;
window.renderHomeScreen = renderHomeScreen;
window.updateClock = updateClock;
window.unlock = unlock;
