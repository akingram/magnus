(function () {
  "use strict";

  const LOGO_HTML =
    '<img class="ios-logo-img" data-asset="logo" src="images/logo.jpeg" alt="" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><span class="ios-sm-mark" hidden>SM</span>';
  const PORTRAIT_HTML =
    '<img class="ios-portrait-img" data-asset="portrait" src="images/selorm.jpeg" alt="H. E SELORM MAGNUS AVAKAME" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><span class="ios-sm-mark" hidden>SM</span>';
  const DISPLAY_NAME = "H. E SELORM MAGNUS AVAKAME";
  const PROFILE_HEADLINE = "Raising $10 Million to Catalyze Africa | CS @ Stanford • 2x Stanford Haas African Service Fellow | Founder @ Katalyze Africa Group, Gatherhub LLC | Building at the intersection of AI, Climate & Africa";
  const PRIMARY_EMAIL = "smagnus1@standford.edu";
  const LINKEDIN_URL = "https://www.linkedin.com/in/selavamag/?isSelfProfile=false";
  const LINKEDIN_LABEL = "linkedin.com/in/selavamag";

  const icons = {
    magnus: LOGO_HTML,
    work: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 16 12 3l8 13"/><path d="M7.5 13h9L12 21z"/><path d="M12 3v18"/></svg>',
    skills: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 13h4l3-8 4 14 3-6h2"/><path d="M5 20h14"/></svg>',
    resume: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M8 13h8M8 17h6"/></svg>',
    phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.7 19.7 0 0 1-8.6-3.1 19.3 19.3 0 0 1-6-6A19.7 19.7 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2.1z"/></svg>',
    messages: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12c0 4.4-4.3 8-9.5 8-1.1 0-2.2-.2-3.2-.5L3 21l1.6-4.1A7.3 7.3 0 0 1 2 12c0-4.4 4.3-8 9.5-8S21 7.6 21 12z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16v12H4z"/><path d="m4 7 8 6 8-6"/></svg>',
    safari: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m15.8 8.2-2.1 5.5-5.5 2.1 2.1-5.5z"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2"/></svg>',
    photos: '<span class="ios-native-glyph"></span>',
    facetime: '<span class="ios-native-glyph"></span>',
    camera: '<span class="ios-native-glyph"></span>',
    clock: '<span class="ios-native-glyph"></span>',
    maps: '<span class="ios-native-glyph"></span>',
    weather: '<span class="ios-native-glyph"></span>',
    notes: '<span class="notes-icon" aria-hidden="true"><i></i><i></i><i></i></span>',
    calendar: '<span class="calendar-icon"><span>Thursday</span><strong>11</strong></span>',
    reminders: '<span class="ios-native-glyph"></span>',
    stocks: '<span class="ios-native-glyph"></span>',
    videos: '<span class="ios-native-glyph"></span>',
    itunes: '<span class="ios-native-glyph"></span>',
    appstore: '<span class="ios-native-glyph"></span>',
    books: '<span class="ios-native-glyph"></span>',
    health: '<span class="ios-native-glyph"></span>',
    home: '<span class="ios-native-glyph"></span>',
    wallet: '<span class="ios-native-glyph"></span>',
    files: '<span class="ios-native-glyph"></span>',
    music: '<span class="ios-native-glyph"></span>',
    settings: '<span class="ios-native-glyph"></span>',
    wifi: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5a11 11 0 0 1 14 0"/><path d="M1.5 9a16 16 0 0 1 21 0"/><path d="M8.5 16a6 6 0 0 1 7 0"/><circle cx="12" cy="20" r="1"/></svg>',
    bluetooth: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 7l10 10-5 5V2l5 5L7 17"/></svg>',
    focus: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a9 9 0 1 0 9 9 7 7 0 0 1-9-9z"/></svg>',
    brightness: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
    x: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>'
  };

  const apps = [
    { id: "facetime", label: "FaceTime", kind: "facetime", opens: "phone" },
    { id: "calendar", label: "Calendar", kind: "calendar" },
    { id: "photos", label: "Photos", kind: "photos" },
    { id: "camera", label: "Camera", kind: "camera", opens: "photos" },
    { id: "mail", label: "Mail", kind: "mail" },
    { id: "clock", label: "Clock", kind: "clock", opens: "calendar" },
    { id: "maps", label: "Maps", kind: "maps", opens: "work" },
    { id: "weather", label: "Weather", kind: "weather", opens: "magnus" },
    { id: "notes", label: "Notes", kind: "notes" },
    { id: "reminders", label: "Reminders", kind: "reminders", opens: "notes" },
    { id: "stocks", label: "Stocks", kind: "stocks", opens: "work" },
    { id: "videos", label: "Videos", kind: "videos", opens: "photos" },
    { id: "itunes", label: "iTunes Store", kind: "itunes", opens: "music" },
    { id: "appstore", label: "App Store", kind: "appstore", opens: "work" },
    { id: "books", label: "Books", kind: "books", opens: "resume" },
    { id: "health", label: "Health", kind: "health", opens: "magnus" },
    { id: "home", label: "Home", kind: "home", opens: "magnus" },
    { id: "wallet", label: "Wallet", kind: "wallet", opens: "resume" },
    { id: "settings", label: "Settings", kind: "settings" }
  ];

  const dockApps = [
    { id: "phone", label: "Phone", kind: "phone" },
    { id: "safari", label: "Safari", kind: "safari" },
    { id: "messages", label: "Messages", kind: "messages", badge: 2 },
    { id: "music", label: "Music", kind: "music" }
  ];

  const state = {
    unlocked: false,
    currentApp: null,
    musicPlaying: false,
    currentTrack: 0,
    editingNote: null,
    toastTimer: null
  };

  const defaultNotes = [
    {
      id: "seed-1",
      title: "Portfolio OS",
      body: "Keep the phone consistent on every page: same icons, same apps, same resume, same contact links, and the same polished home behavior.",
      date: "Today"
    },
    {
      id: "seed-2",
      title: "Picture room",
      body: "Use Photos for portraits, project screenshots, Stanford moments, Katalyze visuals, and proof of shipped work.",
      date: "Today"
    },
    {
      id: "seed-3",
      title: "Interview story",
      body: "Lead with shipped products, AI/ML at American Tractor, Katalyze Africa, and the Stanford CS path. Keep it specific and credible.",
      date: "Jun 11"
    }
  ];

  const defaultPhotos = [
    { id: "portrait", title: "Portrait", src: "images/selorm.jpeg", kind: "photos" },
    { id: "brand", title: "Magnus mark", src: "images/logo.jpeg", kind: "magnus" },
    { id: "stanford", title: "Stanford", kind: "calendar" },
    { id: "accra", title: "Accra", kind: "work" },
    { id: "dropitoff", title: "Drop It Off", kind: "phone" },
    { id: "aiml", title: "AI/ML", kind: "files" }
  ];

  const projectStories = [
    {
      kind: "phone",
      name: "Drop It Off",
      label: "Shipped iOS",
      desc: "Production logistics app co-built with Digits Agency. Firebase backend, auth, live data sync, 4.8-star rating, and 1K+ downloads.",
      impact: "1K+ downloads",
      role: "iOS co-builder",
      tags: ["Swift", "Firebase", "Launch"]
    },
    {
      kind: "work",
      name: "American Tractor",
      label: "AI/ML",
      desc: "AI/ML internship work around AgFM-1, a multimodal agricultural foundation model trained on farm, climate, equipment, and crop data.",
      impact: "Summer 2026",
      role: "AI/ML intern",
      tags: ["AI/ML", "AgTech", "Edge AI"]
    },
    {
      kind: "magnus",
      name: "Katalyze Africa",
      label: "Founder",
      desc: "Founder platform for student-led African startups, built around mentorship, chapter formation, founder onboarding, and demo-day pathways.",
      impact: "Active",
      role: "Founder",
      tags: ["Africa", "Venture", "Community"]
    },
    {
      kind: "skills",
      name: "CS124 AI Agent",
      label: "Agents",
      desc: "Movie recommendation and ticket-booking agent using Python, DSPy, ReAct-style tool use, and explicit failure-mode reflection.",
      impact: "Course project",
      role: "Agent builder",
      tags: ["Python", "DSPy", "Tools"]
    }
  ];

  let phoneNotes = readPhoneStorage("magnus_phone_notes", defaultNotes);
  let phonePhotos = readPhoneStorage("magnus_phone_photos", []);

  const phoneHtml = `
    <div class="iphone-aura"></div>
    <div class="iphone-wrap" id="iphoneWrap">
      <div class="phone-btn-l mute"></div>
      <div class="phone-btn-l vol-up"></div>
      <div class="phone-btn-l vol-dn"></div>
      <div class="phone-btn-r power"></div>
      <div class="iphone-frame"></div>
      <div class="iphone-screen" id="iphoneScreen">
        <div class="dynamic-island" id="dynamicIsland">
          <div class="di-content">
            <div class="di-cover">${LOGO_HTML}</div>
            <div class="di-music"><strong id="diTitle">Magnus OS</strong><span id="diSub">Portfolio live</span></div>
            <div class="di-bars"><div class="di-bar"></div><div class="di-bar"></div><div class="di-bar"></div></div>
          </div>
        </div>

        <div class="status-bar">
          <div class="status-time" id="statusTime">9:41</div>
          <div class="status-right">
            <div class="signal-bars"><div class="signal-bar"></div><div class="signal-bar"></div><div class="signal-bar"></div><div class="signal-bar"></div></div>
            <div class="status-5g">5G</div>
            <div class="battery-body"><div class="battery-fill"></div></div>
          </div>
        </div>

        <button class="scroll-pill" id="homeIndicator" type="button" onclick="goHome()" aria-label="Home"></button>

        <div class="phone-toast" id="phoneToast">
          <div class="toast-app-icon polished-toast-icon" id="toastIcon">${icons.magnus}</div>
          <span id="toastIconEl" hidden></span>
          <div class="toast-body">
            <div class="toast-app-name" id="toastApp">Portfolio</div>
            <div class="toast-title" id="toastTitle">Welcome</div>
            <div class="toast-text" id="toastText">Swipe up or tap to unlock</div>
          </div>
          <div class="toast-time">now</div>
        </div>

        <div id="control-center">
          <div class="cc-row">
            <div class="cc-tile on" id="ccWifi" onclick="ccToggle('ccWifi')">${icons.wifi}<div class="cc-tile-label">Wi-Fi</div></div>
            <div class="cc-tile on" id="ccBt" onclick="ccToggle('ccBt')">${icons.bluetooth}<div class="cc-tile-label">Bluetooth</div></div>
          </div>
          <div class="cc-row">
            <div class="cc-tile" id="ccFocus" onclick="ccToggle('ccFocus')">${icons.focus}<div class="cc-tile-label">Focus</div></div>
            <div class="cc-tile" id="ccBright" onclick="ccToggle('ccBright')">${icons.brightness}<div class="cc-tile-label">Display</div></div>
          </div>
          <div class="cc-slider-wrap"><div class="cc-slider-label">${icons.brightness} Brightness</div><input class="cc-slider" type="range" value="78"></div>
          <div class="cc-slider-wrap"><div class="cc-slider-label">${icons.music} Volume</div><input class="cc-slider" type="range" value="62"></div>
          <button class="cc-close" onclick="closeCC()" aria-label="Close">${icons.x}</button>
        </div>

        <div class="iphone-screen-inner" id="lock-screen">
          <div class="lock-wallpaper"></div>
          <div class="lock-wallpaper-blur"></div>
          <div class="lock-time" id="lockTime">9:41</div>
          <div class="lock-date" id="lockDate">Thursday, June 11</div>
          <div class="lock-notif">
            <div class="notif-header"><div class="notif-app-icon polished-row-icon">${icons.messages}</div><div class="notif-app">MESSAGES</div><div class="notif-time">now</div></div>
            <div class="notif-text">Raising $10 Million to Catalyze Africa</div>
          </div>
          <div class="lock-notif">
            <div class="notif-header"><div class="notif-app-icon polished-row-icon">${icons.work}</div><div class="notif-app">WORK</div><div class="notif-time">2m</div></div>
            <div class="notif-text">Drop It Off, AgFM-1, and Katalyze Africa are ready to explore</div>
          </div>
          <div class="lock-notif">
            <div class="notif-header"><div class="notif-app-icon polished-row-icon">${icons.calendar}</div><div class="notif-app">CALENDAR</div><div class="notif-time">1h</div></div>
            <div class="notif-text">Stanford CS - AI track - Class of 2028</div>
          </div>
          <div class="faceid-ring">${PORTRAIT_HTML}</div>
          <div class="swipe-hint"><span class="swipe-arrow">^</span> Swipe up to unlock</div>
        </div>

        <div class="iphone-screen-inner" id="home-screen">
          <div class="home-wallpaper"></div>
          <div class="home-wallpaper-overlay"></div>
          <div class="home-grid" id="homeGrid"></div>
          <div class="ios-page-dots" id="pageDots"><span class="active"></span><span></span></div>
          <div class="dock" id="dock"></div>
        </div>

        <div class="iphone-screen-inner" id="app-screen">
          <div class="app-nav-bar" id="appNavBar">
            <button class="app-back-btn" onclick="closeApp()" aria-label="Back">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>
              Home
            </button>
            <div class="app-header-title" id="appTitle">App</div>
            <div class="app-nav-spacer"></div>
          </div>
          <div class="app-body" id="appBody"></div>
        </div>
      </div>
    </div>`;

  const appMeta = Object.fromEntries(apps.concat(dockApps).map((app) => [app.id, app]));

  function readPhoneStorage(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return fallback.slice ? fallback.slice() : fallback;
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : fallback.slice ? fallback.slice() : fallback;
    } catch (error) {
      return fallback.slice ? fallback.slice() : fallback;
    }
  }

  function writePhoneStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      showToast("settings", "Storage full", "Could not save that item", "Settings");
      return false;
    }
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function cleanTitle(value) {
    return String(value || "")
      .replace(/\.[a-z0-9]+$/i, "")
      .replace(/[-_]+/g, " ")
      .trim()
      .slice(0, 32) || "New photo";
  }

  function escapePdfText(value) {
    return String(value || "").replace(/[\\()]/g, "\\$&");
  }

  function buildResumePdfBlob() {
    const lines = [
      DISPLAY_NAME,
      "Stanford University - B.S. Computer Science, AI Track - Class of 2028",
      `Email: ${PRIMARY_EMAIL}`,
      "GitHub: github.com/smagnusavakame",
      `LinkedIn: ${LINKEDIN_LABEL}`,
      PROFILE_HEADLINE,
      "",
      "EDUCATION",
      "Stanford University - B.S. Computer Science - GPA 3.94",
      "Leland Scholar - 2x Stanford Haas African Service Fellow",
      "",
      "EXPERIENCE",
      "AI/ML Intern - American Tractor Company - AgFM-1",
      "Founder - Katalyze Africa Group and Gatherhub LLC",
      "iOS Engineer - Drop It Off logistics app with Firebase backend",
      "",
      "SELECTED WORK",
      "Drop It Off - 4.8-star public iOS app with 1K+ downloads",
      "CS124 AI Booking Agent - Python, DSPy, ReAct-style tool use",
      "Climate and agriculture AI systems for low-resource deployment",
      "",
      "SKILLS",
      "Python, Swift, JavaScript, C, Flutter, Firebase, PyTorch, AI agents"
    ];
    const textOps = [
      "BT",
      "/F1 18 Tf",
      "72 742 Td",
      "18 TL",
      `(${escapePdfText(lines[0])}) Tj`,
      "/F1 10 Tf",
      "0 -26 Td"
    ];
    lines.slice(1).forEach((line) => {
      textOps.push(`(${escapePdfText(line)}) Tj`);
      textOps.push("0 -16 Td");
    });
    textOps.push("ET");
    const stream = textOps.join("\n");
    const objects = [
      "<< /Type /Catalog /Pages 2 0 R >>",
      "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
      "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>",
      "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
      `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`
    ];
    const offsets = [0];
    let pdf = "%PDF-1.4\n";
    objects.forEach((object, index) => {
      offsets[index + 1] = pdf.length;
      pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
    });
    const xrefOffset = pdf.length;
    pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
    offsets.slice(1).forEach((offset) => {
      pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
    });
    pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;
    return new Blob([pdf], { type: "application/pdf" });
  }

  function downloadResume() {
    try {
      const blob = buildResumePdfBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "H-E-Selorm-Magnus-Avakame-Resume.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1200);
      showToast("resume", "Resume", "Download started", "Resume");
    } catch (error) {
      window.location.href = `mailto:${PRIMARY_EMAIL}?subject=Resume%20request`;
    }
  }

  function mountPhone() {
    const side = document.querySelector(".iphone-side");
    if (!side) return false;
    side.classList.add("iphone-canonical");
    side.innerHTML = phoneHtml;
    return true;
  }

  function hydrateImageAssets() {
    const candidates = {
      logo: [
        "images/logo.jpeg",
        "images/logo.jpg",
        "images/logo.png",
        "images/logo.webp",
        "images/logo.svg",
        "assets/logo.png",
        "assets/logo.jpg",
        "assets/logo.jpeg",
        "assets/logo.webp",
        "assets/logo.svg"
      ],
      portrait: [
        "images/selorm.jpeg",
        "images/selorm.jpg",
        "images/selorm.png",
        "images/selorm.webp",
        "assets/selorm-photo.jpg",
        "assets/selorm-photo.png",
        "assets/selorm-photo.jpeg",
        "assets/selorm-photo.webp",
        "assets/portrait.jpg",
        "assets/portrait.png",
        "assets/portrait.webp",
        "assets/selorm.jpg",
        "assets/selorm.png",
        "assets/selorm.webp"
      ]
    };

    document.querySelectorAll("img[data-asset]").forEach((img) => {
      const list = candidates[img.dataset.asset] || [img.getAttribute("src")];
      const fallback = img.nextElementSibling;
      let index = 0;
      const tryNext = () => {
        if (index >= list.length) {
          img.hidden = true;
          if (fallback) fallback.hidden = false;
          return;
        }
        img.hidden = false;
        if (fallback) fallback.hidden = true;
        img.src = list[index++];
      };
      img.onload = () => {
        img.hidden = false;
        if (fallback) fallback.hidden = true;
      };
      img.onerror = tryNext;
      tryNext();
    });
  }

  function iconFor(kind) {
    return icons[kind] || icons.magnus;
  }

  function appIcon(app, dock) {
    const badge = app.badge && !dock ? '<div class="app-badge">' + app.badge + "</div>" : "";
    return `
      <div class="app-icon" role="button" tabindex="0" onclick="openApp('${app.id}')" data-app="${app.id}">
        <div class="app-icon-img ios-polished-icon kind-${app.kind}">${iconFor(app.kind)}${badge}</div>
        ${dock ? "" : '<div class="app-label">' + app.label + "</div>"}
      </div>`;
  }

  function renderHomeScreen() {
    const grid = document.getElementById("homeGrid");
    const dock = document.getElementById("dock");
    if (grid) grid.innerHTML = apps.map((app) => appIcon(app, false)).join("");
    if (dock) dock.innerHTML = dockApps.map((app) => appIcon(app, true)).join("");
    setPhoneMotionOrder();
  }

  function prefersReducedMotion() {
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function setPhoneMotionOrder() {
    if (prefersReducedMotion()) return;
    const items = [
      ...document.querySelectorAll("#homeGrid .app-icon"),
      ...document.querySelectorAll("#pageDots"),
      ...document.querySelectorAll("#dock .app-icon")
    ];
    items.forEach((el, index) => {
      el.style.setProperty("--phone-order", String(index));
    });
  }

  function preparePhonePanelMotion(root) {
    if (prefersReducedMotion() || !root) return;
    const items = root.querySelectorAll(
      ".ios-large-title, .ios-hero-card, .ios-settings-profile, .ios-section, .ios-proj-card, .calendar-card, .resume-card, .music-panel, .photo-tile, .music-track-row, .notes-list .note-card, .note-editor, .note-action-row"
    );
    items.forEach((el, index) => {
      el.classList.add("phone-float-item");
      el.style.setProperty("--phone-order", String(Math.min(index, 12)));
    });
  }

  function setupPageFloatIns() {
    if (prefersReducedMotion()) return;

    const scope = document.querySelector(".portfolio-side") || document.body;
    const selectors = [
      ".nav-logo",
      ".nav-links a",
      ".theme-btn",
      ".hero-kicker",
      ".hero h1",
      ".hero-body",
      ".hero-cta > *",
      ".avail-pill",
      ".hero-image-col",
      ".section-label",
      ".section-title",
      ".section-intro",
      "section > h2",
      "section > p",
      ".aside-fact",
      ".project-card",
      ".service-row",
      ".skill-group",
      ".testi-card",
      ".clink",
      ".contact-form",
      ".fgroup",
      "footer > *",
      ".iphone-side"
    ];
    const seen = new Set();
    const targets = [];

    selectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((el) => {
        if (seen.has(el) || el.closest("#app-screen") || el.closest("#home-screen") || el.closest("#lock-screen")) return;
        if (el.closest(".iphone-side") && !el.classList.contains("iphone-side")) return;
        seen.add(el);
        targets.push(el);
      });
    });

    if (!targets.length) return;

    const groupCounts = new Map();
    targets.forEach((el) => {
      const group = el.closest("nav, .hero, section, footer, .iphone-side") || scope;
      const count = groupCounts.get(group) || 0;
      groupCounts.set(group, count + 1);
      el.classList.add("float-in-item");
      el.style.setProperty("--float-order", String(Math.min(count, 10)));
    });

    document.documentElement.classList.add("studio-motion-enabled");

    const reveal = (el) => {
      el.classList.add("is-visible");
    };
    const revealVisible = () => {
      targets.forEach((el) => {
        if (el.classList.contains("is-visible")) return;
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.96 && rect.bottom > 0) reveal(el);
      });
    };

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && entry.intersectionRatio <= 0) return;
          reveal(entry.target);
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

      targets.forEach((el) => observer.observe(el));
    } else {
      window.addEventListener("scroll", revealVisible, { passive: true });
      window.addEventListener("resize", revealVisible);
    }

    setTimeout(revealVisible, 80);
  }

  function updateClock() {
    const now = new Date();
    const time = now.getHours().toString().padStart(2, "0") + ":" + now.getMinutes().toString().padStart(2, "0");
    const day = now.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
    const statusTime = document.getElementById("statusTime");
    const lockTime = document.getElementById("lockTime");
    const lockDate = document.getElementById("lockDate");
    if (statusTime) statusTime.textContent = time;
    if (lockTime) lockTime.textContent = time;
    if (lockDate) lockDate.textContent = day;
  }

  function unlock() {
    if (state.unlocked) return;
    state.unlocked = true;
    const lock = document.getElementById("lock-screen");
    const home = document.getElementById("home-screen");
    const screen = document.getElementById("iphoneScreen");
    if (!lock || !home) return;
    if (screen) screen.classList.add("unlocked");
    lock.style.transition = "transform .45s cubic-bezier(.22,1,.36,1), opacity .35s ease";
    lock.style.transform = "translateY(-100%)";
    lock.style.opacity = "0";
    setTimeout(() => {
      lock.style.display = "none";
      home.style.display = "flex";
      home.style.opacity = "1";
      renderHomeScreen();
      showToast("magnus", "Magnus OS", "Home screen ready", "Portfolio");
    }, 420);
  }

  function showToast(kind, title, text, appName) {
    const toast = document.getElementById("phoneToast");
    if (!toast) return;
    const iconEl = document.getElementById("toastIcon");
    const hiddenAlias = document.getElementById("toastIconEl");
    if (iconEl) {
      iconEl.className = "toast-app-icon polished-toast-icon ios-polished-icon kind-" + (kind || "magnus");
      iconEl.innerHTML = iconFor(kind);
    }
    if (hiddenAlias) hiddenAlias.innerHTML = iconFor(kind);
    const titleEl = document.getElementById("toastTitle");
    const textEl = document.getElementById("toastText");
    const appEl = document.getElementById("toastApp");
    if (titleEl) titleEl.textContent = title || "Portfolio";
    if (textEl) textEl.textContent = text || "";
    if (appEl) appEl.textContent = appName || title || "Portfolio";
    toast.classList.add("show");
    clearTimeout(state.toastTimer);
    state.toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
  }

  function openApp(id) {
    if (!state.unlocked) {
      unlock();
      setTimeout(() => openApp(id), 520);
      return;
    }
    const app = appMeta[id] || { id: "magnus", label: "Magnus", kind: "magnus", opens: "magnus" };
    const targetId = app.opens || id;
    if (targetId !== "notes") state.editingNote = null;
    state.currentApp = targetId;
    const screen = document.getElementById("app-screen");
    const title = document.getElementById("appTitle");
    const nav = document.getElementById("appNavBar");
    const body = document.getElementById("appBody");
    if (!screen || !body || !nav || !title) return;
    title.textContent = app.label;
    nav.style.background = gradientFor(app.kind);
    screen.classList.remove("ready");
    body.innerHTML = buildApp(targetId);
    preparePhonePanelMotion(body);
    screen.classList.add("visible");
    requestAnimationFrame(() => requestAnimationFrame(() => screen.classList.add("ready")));
    setTimeout(() => screen.classList.add("ready"), 80);
    if (targetId === "skills") setTimeout(animateSkillBars, 80);
    showToast(app.kind, app.label, subtitleFor(targetId), app.label);
  }

  function closeApp() {
    const screen = document.getElementById("app-screen");
    if (!screen) return;
    screen.classList.remove("ready");
    setTimeout(() => {
      screen.classList.remove("visible");
      state.currentApp = null;
      state.editingNote = null;
    }, 180);
  }

  function goHome() {
    const cc = document.getElementById("control-center");
    const app = document.getElementById("app-screen");
    if (cc && cc.classList.contains("visible")) {
      closeCC();
      return;
    }
    if (app && app.classList.contains("visible")) closeApp();
  }

  function openCC() {
    const cc = document.getElementById("control-center");
    if (cc) cc.classList.add("visible");
  }

  function closeCC() {
    const cc = document.getElementById("control-center");
    if (cc) cc.classList.remove("visible");
  }

  function ccToggle(id) {
    const el = typeof id === "string" ? document.getElementById(id) : id;
    if (el) el.classList.toggle("on");
  }

  function gradientFor(kind) {
    const map = {
      magnus: "linear-gradient(135deg,#111318,#ff3030)",
      work: "linear-gradient(135deg,#ffb000,#ff3030)",
      skills: "linear-gradient(135deg,#087b4f,#61ff8a)",
      resume: "linear-gradient(135deg,#155cff,#00d5ff)",
      phone: "linear-gradient(135deg,#0e8f44,#32d74b)",
      messages: "linear-gradient(135deg,#16c75f,#32d74b)",
      mail: "linear-gradient(135deg,#007aff,#63d2ff)",
      safari: "linear-gradient(135deg,#00a6ff,#155cff)",
      photos: "linear-gradient(135deg,#ffffff,#e9eef7)",
      notes: "linear-gradient(135deg,#ffcf33,#ff9f0a)",
      calendar: "linear-gradient(135deg,#ffffff,#f5f5f7)",
      facetime: "linear-gradient(135deg,#65f27b,#12b844)",
      camera: "linear-gradient(135deg,#fbfbfc,#cdd2d8)",
      clock: "linear-gradient(135deg,#ffffff,#f0f1f4)",
      maps: "linear-gradient(135deg,#34c759,#0a84ff)",
      weather: "linear-gradient(135deg,#0a9bff,#007aff)",
      reminders: "linear-gradient(135deg,#ffffff,#f4f5f7)",
      stocks: "linear-gradient(135deg,#050506,#17191d)",
      videos: "linear-gradient(135deg,#71efff,#35d7f4)",
      itunes: "linear-gradient(135deg,#ff3db7,#a93bff)",
      appstore: "linear-gradient(135deg,#2fd6ff,#007aff)",
      books: "linear-gradient(135deg,#ffb42b,#ff7b00)",
      health: "linear-gradient(135deg,#ffffff,#f3f4f7)",
      home: "linear-gradient(135deg,#ffffff,#f2f3f6)",
      wallet: "linear-gradient(135deg,#2b2f34,#0f1114)",
      files: "linear-gradient(135deg,#007aff,#5ac8fa)",
      music: "linear-gradient(135deg,#ff2d55,#ff6a00)",
      settings: "linear-gradient(135deg,#24272c,#7d8590)"
    };
    return map[kind] || map.magnus;
  }

  function subtitleFor(id) {
    const map = {
      magnus: "Identity card loaded",
      work: "Shipping log open",
      skills: "Toolbox ready",
      resume: "Credentials ready",
      phone: "Contact options open",
      messages: "Conversation ready",
      mail: "Inbox ready",
      safari: "Portfolio browser open",
      photos: "Gallery ready",
      notes: "Notes ready",
      calendar: "Schedule ready",
      files: "Archive ready",
      music: "Playlist live",
      settings: "Device tuned"
    };
    return map[id] || "App open";
  }

  function buildApp(id) {
    if (id === "magnus") return buildMagnus();
    if (id === "work" || id === "safari") return buildWork(id);
    if (id === "skills") return buildSkills();
    if (id === "resume" || id === "files") return buildResume(id);
    if (id === "phone" || id === "messages" || id === "mail") return buildContact(id);
    if (id === "photos") return buildPhotos();
    if (id === "notes") return buildNotes();
    if (id === "calendar") return buildCalendar();
    if (id === "music") return buildMusic();
    if (id === "settings") return buildSettings();
    return buildMagnus();
  }

  function row(kind, title, sub, value) {
    return `
      <div class="ios-row">
        <div class="ios-row-icon polished-row-icon kind-${kind}">${iconFor(kind)}</div>
        <div class="ios-row-text"><div class="ios-row-title">${title}</div><div class="ios-row-sub">${sub}</div></div>
        ${value ? '<div class="ios-row-value">' + value + "</div>" : '<div class="ios-row-arrow">></div>'}
      </div>`;
  }

  function buildMagnus() {
    return `
      <div class="ios-large-title">Magnus</div>
      <div class="ios-hero-card app-hero-magnus">
        <div class="ios-hero-profile"><span class="ios-avatar-mark">${PORTRAIT_HTML}</span><div><div class="ios-hero-name">${DISPLAY_NAME}</div><div class="ios-hero-sub">Raising $10 Million to Catalyze Africa</div></div></div>
        <span class="ios-chip">CS @ Stanford</span><span class="ios-chip">2x Haas Fellow</span><span class="ios-chip">Founder</span>
      </div>
      <div class="phone-metric-grid">
        <button onclick="openApp('resume')"><strong>$10M</strong><span>Raising to Catalyze Africa</span></button>
        <button onclick="openApp('work')"><strong>1K+</strong><span>App downloads</span></button>
        <button onclick="openApp('notes')"><strong>2x</strong><span>Stanford Haas African Service Fellow</span></button>
        <button onclick="openApp('phone')"><strong>AI/ML</strong><span>American Tractor</span></button>
      </div>
      <div class="ios-section"><div class="ios-section-header">Snapshot</div>
        ${row("calendar", "Stanford University", "Computer Science, AI track", "2028")}
        ${row("work", "Katalyze Africa + Gatherhub", "Founder - African startup infrastructure", "Active")}
        ${row("skills", "AI and climate tech", "AI/ML, product, and systems", "Focus")}
      </div>
      <div class="ios-section"><div class="ios-section-header">Now</div>
        ${row("work", "American Tractor Company", "AI/ML intern working on AgFM-1", "2026")}
        ${row("resume", "Leland Scholarship", "Full ride covering tuition, room, board", "$400k")}
      </div>`;
  }

  function buildWork(source) {
    const title = source === "safari" ? "Safari" : "Work";
    return `
      <div class="ios-large-title">${title}</div>
      <div class="phone-case-list">
        ${projectStories.map((project) => `
          <button class="phone-case-card" onclick="showToast('${project.kind}','${project.name}','${project.impact}','Work')">
            <div class="ios-proj-thumb kind-${project.kind}">${iconFor(project.kind)}<span>${project.label}</span></div>
            <div class="ios-proj-info">
              <div class="phone-case-top"><div class="ios-proj-name">${project.name}</div><b>${project.impact}</b></div>
              <div class="ios-proj-desc">${project.desc}</div>
              <div class="phone-case-role">${project.role}</div>
              <div class="ios-proj-tags">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
            </div>
          </button>
        `).join("")}
      </div>`;
  }

  function buildSkills() {
    const skills = [["Python", 92], ["Swift", 85], ["JavaScript", 82], ["C", 75], ["Flutter", 72], ["PyTorch", 78]];
    return `
      <div class="ios-large-title">Skills</div>
      <div class="ios-section"><div class="ios-section-header">Languages and Tools</div>
        ${skills.map(([name, pct]) => `
          <div class="ios-skill-bar"><div class="ios-skill-label">${name}<span>${pct}%</span></div><div class="ios-bar"><div class="ios-bar-fill" data-pct="${pct}"></div></div></div>
        `).join("")}
      </div>
      <div class="ios-section"><div class="ios-section-header">Domains</div>
        ${row("skills", "AI agents", "Tool use, recommendation, automation", "")}
        ${row("phone", "Mobile apps", "Native iOS and Flutter products", "")}
        ${row("work", "Climate tech", "Agriculture, edge AI, and startup systems", "")}
      </div>`;
  }

  function animateSkillBars() {
    document.querySelectorAll(".ios-bar-fill").forEach((el) => {
      el.style.width = el.dataset.pct + "%";
    });
  }

  function buildResume(source) {
    const title = source === "files" ? "Files" : "Resume";
    return `
      <div class="ios-large-title">${title}</div>
      <div class="ios-section resume-card">
        <div class="resume-top"><span class="ios-avatar-mark">${PORTRAIT_HTML}</span><div><strong>${DISPLAY_NAME}</strong><span>Stanford CS - AI Track</span></div></div>
        <div class="phone-resume-preview">
          <div><small>Current focus</small><strong>${PROFILE_HEADLINE}</strong></div>
          <div class="phone-resume-stamps"><span>Stanford CS</span><span>2x Haas Fellow</span><span>Founder</span></div>
        </div>
        <div class="resume-block"><strong>Education</strong><span>Stanford University - B.S. Computer Science, AI Track - GPA 3.94</span></div>
        <div class="resume-block"><strong>Experience</strong><span>AI/ML Intern at American Tractor, Founder at Katalyze Africa Group and Gatherhub LLC, Product Match Fellow, Drop It Off iOS Engineer</span></div>
        <button class="ios-action" onclick="downloadResume()">${icons.resume} Download Resume PDF</button>
      </div>
      <div class="ios-section"><div class="ios-section-header">Highlights</div>
        ${row("work", "American Tractor Company", "AI/ML intern - AgFM-1", "2026")}
        ${row("messages", "Stanford Haas African Service Fellow", "Selected twice", "2x")}
        ${row("phone", "Drop It Off", "Published iOS app", "1K+")}
        ${row("magnus", "Katalyze Africa + Gatherhub", "Raising $10 Million to Catalyze Africa", "Founder")}
      </div>`;
  }

  function buildContact(source) {
    const title = source === "phone" ? "Phone" : source === "mail" ? "Mail" : "Messages";
    return `
      <div class="ios-large-title">${title}</div>
      <div class="ios-hero-card app-hero-contact"><div class="ios-hero-name">Open channels</div><div class="ios-hero-sub">${PROFILE_HEADLINE}</div></div>
      <div class="ios-section"><div class="ios-section-header">Contact</div>
        <a class="ios-row ios-link-row" href="mailto:${PRIMARY_EMAIL}" onclick="showToast('mail','Email','Opening email draft','Mail')"><div class="ios-row-icon polished-row-icon kind-mail">${icons.mail}</div><div class="ios-row-text"><div class="ios-row-title">Email</div><div class="ios-row-sub">${PRIMARY_EMAIL}</div></div><div class="ios-row-arrow">></div></a>
        <a class="ios-row ios-link-row" href="https://github.com/smagnusavakame" target="_blank" rel="noreferrer" onclick="showToast('safari','GitHub','Opening profile','Safari')"><div class="ios-row-icon polished-row-icon kind-safari">${icons.safari}</div><div class="ios-row-text"><div class="ios-row-title">GitHub</div><div class="ios-row-sub">github.com/smagnusavakame</div></div><div class="ios-row-arrow">></div></a>
        <a class="ios-row ios-link-row" href="${LINKEDIN_URL}" target="_blank" rel="noreferrer" onclick="showToast('messages','LinkedIn','Opening profile','Messages')"><div class="ios-row-icon polished-row-icon kind-messages">${icons.messages}</div><div class="ios-row-text"><div class="ios-row-title">LinkedIn</div><div class="ios-row-sub">${LINKEDIN_LABEL}</div></div><div class="ios-row-arrow">></div></a>
      </div>
      <div class="ios-section"><div class="ios-section-header">Best for</div>
        ${row("work", "AI/ML and product work", "Applied AI, agents, agtech, climate systems", "High fit")}
        ${row("magnus", "Founder conversations", "Katalyze Africa Group, Gatherhub LLC, student startups", "Open")}
      </div>`;
  }

  function buildPhotos() {
    const photos = defaultPhotos.concat(phonePhotos);
    const emptySlots = Math.max(0, 9 - photos.length);
    const renderPhoto = (photo) => {
      const title = escapeHtml(photo.title || "Photo slot");
      const kind = photo.kind || "photos";
      const image = photo.src
        ? `<img src="${escapeHtml(photo.src)}" alt="${title}" loading="lazy"><span>${title}</span>`
        : `${iconFor(kind)}<span>${title}</span>`;
      return `<button class="photo-tile phone-photo-tile ${photo.src ? "has-image" : ""} kind-${kind}" onclick="showToast('photos','Photos','Photo slot ready','Photos')">${image}</button>`;
    };
    return `
      <div class="ios-large-title">Photos</div>
      <div class="ios-section phone-photo-room">
        <div class="ios-section-header">Picture room</div>
        <p class="phone-room-copy">Portraits, project screenshots, campus moments, and anything you want to preview inside this phone.</p>
        <button class="ios-action phone-photo-add" onclick="document.getElementById('phonePhotoInput')?.click()">${icons.photos} Add Photo Slot</button>
        <input id="phonePhotoInput" type="file" accept="image/*" hidden onchange="savePhonePhoto(this)">
      </div>
      <div class="phone-albums">
        <button onclick="showToast('photos','Portraits','Profile imagery ready','Photos')"><strong>Portraits</strong><span>Profile, logo, and brand shots</span></button>
        <button onclick="showToast('phone','Projects','Drop It Off and AI/ML work','Photos')"><strong>Projects</strong><span>App screens, case-study proof, launch visuals</span></button>
        <button onclick="showToast('calendar','Campus','Stanford and Accra moments','Photos')"><strong>Places</strong><span>Stanford, Accra, field work, community</span></button>
      </div>
      <div class="photo-grid">
        ${photos.map(renderPhoto).join("")}
        ${Array.from({ length: emptySlots }, (_, index) => `<button class="photo-tile phone-photo-tile empty-slot kind-photos" onclick="document.getElementById('phonePhotoInput')?.click()">${icons.photos}<span>Open slot ${index + 1}</span></button>`).join("")}
      </div>`;
  }

  function savePhonePhoto(input) {
    const file = input && input.files && input.files[0];
    if (!file) return;
    if (!file.type || !file.type.startsWith("image/")) {
      showToast("photos", "Photos", "Choose an image file", "Photos");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      phonePhotos.unshift({
        id: String(Date.now()),
        title: cleanTitle(file.name),
        src: String(reader.result || ""),
        kind: "photos"
      });
      phonePhotos = phonePhotos.slice(0, 8);
      if (writePhoneStorage("magnus_phone_photos", phonePhotos)) {
        state.editingNote = null;
        openApp("photos");
        showToast("photos", "Photo added", "Saved inside this phone", "Photos");
      }
      input.value = "";
    };
    reader.readAsDataURL(file);
  }

  function buildNotes() {
    if (state.editingNote) {
      const isNew = state.editingNote === "new";
      const note = isNew
        ? { id: "new", title: "", body: "", date: "Today" }
        : phoneNotes.find((item) => String(item.id) === state.editingNote) || phoneNotes[0] || defaultNotes[0];
      const noteId = escapeHtml(note.id);
      return `
        <div class="ios-large-title">Notes</div>
        <div class="note-editor">
          <input id="phoneNoteTitle" class="note-title-input" value="${escapeHtml(note.title)}" placeholder="Note title">
          <textarea id="phoneNoteBody" class="note-body-input" placeholder="Start writing...">${escapeHtml(note.body)}</textarea>
        </div>
        <div class="note-action-row">
          <button class="note-save-btn" onclick="savePhoneNote('${noteId}')">Done</button>
          <button class="note-delete-btn" onclick="deletePhoneNote('${noteId}')">${isNew ? "Cancel" : "Delete"}</button>
        </div>`;
    }

    return `
      <div class="ios-large-title">Notes</div>
      <div class="ios-section phone-notes-room">
        <div class="ios-section-header">Notes room</div>
        <p class="phone-room-copy">A place for launch notes, image ideas, project captions, and copy you want to keep inside the phone.</p>
        <button class="ios-action phone-note-add" onclick="newPhoneNote()">${icons.notes} New Note</button>
      </div>
      <div class="notes-list">
        ${phoneNotes.map((note) => `
          <button class="note-card" onclick="openPhoneNote('${escapeHtml(note.id)}')">
            <span class="note-date">${escapeHtml(note.date || "Today")}</span>
            <strong>${escapeHtml(note.title || "Untitled")}</strong>
            <span>${escapeHtml(note.body || "Empty note").replace(/\n/g, " ")}</span>
          </button>
        `).join("")}
      </div>`;
  }

  function newPhoneNote() {
    state.editingNote = "new";
    openApp("notes");
  }

  function openPhoneNote(id) {
    state.editingNote = String(id || "");
    openApp("notes");
  }

  function savePhoneNote(id) {
    const titleEl = document.getElementById("phoneNoteTitle");
    const bodyEl = document.getElementById("phoneNoteBody");
    const title = (titleEl && titleEl.value.trim()) || "Untitled";
    const body = (bodyEl && bodyEl.value.trim()) || "";
    const noteId = String(id || "new");

    if (noteId === "new") {
      phoneNotes.unshift({ id: String(Date.now()), title, body, date: "Today" });
    } else {
      const note = phoneNotes.find((item) => String(item.id) === noteId);
      if (note) {
        note.title = title;
        note.body = body;
        note.date = "Updated";
      }
    }

    phoneNotes = phoneNotes.slice(0, 12);
    if (writePhoneStorage("magnus_phone_notes", phoneNotes)) {
      state.editingNote = null;
      openApp("notes");
      showToast("notes", "Note saved", title, "Notes");
    }
  }

  function deletePhoneNote(id) {
    const noteId = String(id || "");
    if (noteId !== "new") phoneNotes = phoneNotes.filter((item) => String(item.id) !== noteId);
    writePhoneStorage("magnus_phone_notes", phoneNotes);
    state.editingNote = null;
    openApp("notes");
    showToast("notes", noteId === "new" ? "Note cancelled" : "Note deleted", "Notes updated", "Notes");
  }

  function buildCalendar() {
    return `
      <div class="ios-large-title">Calendar</div>
      <div class="calendar-card"><div class="calendar-date"><span>JUN</span><strong>11</strong></div><div><strong>Portfolio Review</strong><span>Design system and iPhone emulator polish</span></div></div>
      <div class="ios-section"><div class="ios-section-header">Upcoming</div>
        ${row("work", "AgFM-1 sprint", "American Tractor Company", "Today")}
        ${row("messages", "Katalyze Africa", "Founder outreach and chapter reviews", "Fri")}
        ${row("skills", "AI/ML build block", "Agents, HCI, climate tech", "Sat")}
      </div>`;
  }

  const tracks = [
    ["Essence", "Wizkid ft. Tems", "4:14", "music"],
    ["Risky", "Davido ft. Popcaan", "3:22", "work"],
    ["Electric Feel", "MGMT", "3:49", "skills"]
  ];

  function buildMusic() {
    const track = tracks[state.currentTrack];
    return `
      <div class="music-panel kind-${track[3]}">
        <div class="music-art">${icons.music}</div>
        <div class="music-info-row"><div><div class="music-track-name">${track[0]}</div><div class="music-artist-name">${track[1]}</div></div><button class="music-love" onclick="showToast('music','Loved','${track[0]} added','Music')">+</button></div>
        <div class="music-progress-wrap"><input class="music-progress" type="range" value="38"><div class="music-times"><span>1:32</span><span>${track[2]}</span></div></div>
        <div class="music-controls-row"><button class="mc-btn" onclick="prevTrack()">&lt;</button><button class="mc-play" onclick="togglePlay()">${state.musicPlaying ? "II" : ">"}</button><button class="mc-btn" onclick="nextTrack()">&gt;</button></div>
      </div>
      <div class="ios-section"><div class="ios-section-header">Up Next</div>
        ${tracks.map((item, index) => `<div class="music-track-row ${index === state.currentTrack ? "active" : ""}" onclick="switchTrack(${index})"><div class="ios-row-icon polished-row-icon kind-${item[3]}">${icons.music}</div><div class="ios-row-text"><div class="ios-row-title">${item[0]}</div><div class="ios-row-sub">${item[1]}</div></div><div class="ios-row-value">${item[2]}</div></div>`).join("")}
      </div>`;
  }

  function buildSettings() {
    return `
      <div class="ios-large-title">Settings</div>
      <div class="ios-settings-profile"><span class="ios-avatar-mark">${PORTRAIT_HTML}</span><div><div class="ios-settings-name">${DISPLAY_NAME}</div><div class="ios-settings-sub">CS @ Stanford - AI, Climate & Africa</div></div></div>
      <div class="ios-section">
        ${row("wifi", "Wi-Fi", "Stanford Secure", "On")}
        ${row("phone", "Cellular", "5G", "Active")}
        ${row("settings", "Appearance", "Explosive mode", "On")}
      </div>
      <div class="ios-section"><div class="ios-section-header">Portfolio</div>
        ${row("messages", "Notifications", "AI/ML and collaboration alerts", "On")}
        ${row("calendar", "Version", "Polished shared emulator", "2.1")}
      </div>`;
  }

  function togglePlay() {
    state.musicPlaying = !state.musicPlaying;
    openApp("music");
    showToast("music", state.musicPlaying ? "Now Playing" : "Paused", tracks[state.currentTrack][0], "Music");
  }

  function nextTrack() {
    state.currentTrack = (state.currentTrack + 1) % tracks.length;
    openApp("music");
  }

  function prevTrack() {
    state.currentTrack = (state.currentTrack - 1 + tracks.length) % tracks.length;
    openApp("music");
  }

  function switchTrack(index) {
    state.currentTrack = index;
    state.musicPlaying = true;
    openApp("music");
  }

  function bindPhone() {
    const lock = document.getElementById("lock-screen");
    const homeIndicator = document.getElementById("homeIndicator");
    const backButton = document.querySelector(".iphone-canonical .app-back-btn");
    const island = document.getElementById("dynamicIsland");
    const screen = document.getElementById("iphoneScreen");
    let startY = 0;
    let ccStart = null;

    if (lock) {
      lock.addEventListener("click", unlock);
      lock.addEventListener("touchstart", (event) => {
        startY = event.touches[0].clientY;
      }, { passive: true });
      lock.addEventListener("touchend", (event) => {
        if (startY - event.changedTouches[0].clientY > 35) unlock();
      }, { passive: true });
    }

    if (homeIndicator) {
      homeIndicator.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        goHome();
      });
    }

    if (backButton) {
      backButton.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        closeApp();
      });
    }

    if (island) {
      island.addEventListener("click", () => {
        island.classList.toggle("expanded");
        if (island.classList.contains("expanded")) setTimeout(() => island.classList.remove("expanded"), 3600);
      });
    }

    if (screen) {
      screen.addEventListener("pointerdown", (event) => {
        const rect = screen.getBoundingClientRect();
        ccStart = { x: event.clientX - rect.left, y: event.clientY - rect.top, rect };
      });
      screen.addEventListener("pointerup", (event) => {
        if (!ccStart || !state.unlocked) return;
        const dy = event.clientY - ccStart.rect.top - ccStart.y;
        if (ccStart.y < 48 && ccStart.x > ccStart.rect.width * 0.5 && dy > 36) openCC();
        ccStart = null;
      });
    }
  }

  function exposeGlobals() {
    window.renderHomeScreen = renderHomeScreen;
    window.updateClock = updateClock;
    window.unlock = unlock;
    window.openApp = openApp;
    window.closeApp = closeApp;
    window.goHome = goHome;
    window.openCC = openCC;
    window.closeCC = closeCC;
    window.ccToggle = ccToggle;
    window.showToast = showToast;
    window.togglePlay = togglePlay;
    window.nextTrack = nextTrack;
    window.prevTrack = prevTrack;
    window.switchTrack = switchTrack;
    window.savePhonePhoto = savePhonePhoto;
    window.newPhoneNote = newPhoneNote;
    window.openPhoneNote = openPhoneNote;
    window.savePhoneNote = savePhoneNote;
    window.deletePhoneNote = deletePhoneNote;
    window.downloadResume = downloadResume;
  }

  function init() {
    if (!mountPhone()) return;
    exposeGlobals();
    renderHomeScreen();
    updateClock();
    bindPhone();
    hydrateImageAssets();
    setupPageFloatIns();
    setInterval(updateClock, 30000);
    setTimeout(() => {
      if (!state.unlocked) showToast("magnus", "Magnus OS", "Swipe up or tap to unlock", "Portfolio");
    }, 1800);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
