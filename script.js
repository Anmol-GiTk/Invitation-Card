/* =========================================================
   ROYAL DIGITAL INVITATION — INTERACTIVE & HOST-LOCKED LOGIC
   ========================================================= */

const STORAGE_KEY = "royal_invite_custom_data_v2";
const HOST_SESSION_KEY = "royal_invite_host_unlocked";

const PRESETS = {
  marriage: {
    theme: "theme-maroon",
    mantra: "|| Shri Ganeshaya Namah ||",
    tagline:
      "With the blessings of the Almighty & our Elders, we cordially invite you to the",
    eventTitle: "Shubh Vivah",
    mainNames: "Anmol& Ananya",
    subNames:
      "Son of Smt. Shanti & Shri Santosh Singh • Daughter of Smt. Kavita & Shri Suresh Verma",
    heroDate: "Sunday, 14 February 2027",
    countdownTarget: "2027-02-14T19:30",
    heroCity: "Garhirampur,Munger",
    welcomeMsg:
      "“Apno ke pyaar aur buzurgon ke aashirwad ke saath, hum aapko is pavitra avsar par dil se aamantrit karte hain. Aapki garimamayi upasthiti hamare parivar ke liye garv aur khushi ka vishay hogi.”",
    events: [
      {
        title: "Haldi & Matkor",
        dateTime: "13 Feb 2027 • 10:30 AM",
        venue: "Garhirampur",
        dressCode: "Yellow Traditional",
      },
      {
        title: "Sangeet & Mehndi",
        dateTime: "13 Feb 2027 • 07:00 PM",
        venue: "Garhirampur",
        dressCode: "Festive Ethnic",
      },
      {
        title: "Baraat & Shubh Vivah",
        dateTime: "14 Feb 2027 • 07:30 PM",
        venue: "Garhirampur",
        dressCode: "Royal Indian Attire",
      },
    ],
    kids: "“Hamare Chachu ki shaadi mein jalool-jalool aana!” — Aarohi, Vihaan & Kavya",
  },
  janeu: {
    theme: "theme-sindoor",
    mantra: "|| Om Bhur Bhuva Swaha • Gayatri Namah ||",
    tagline:
      "With immense pride & blessings of our ancestors, we invite you to the sacred",
    eventTitle: "Yagyopaveet Sanskar",
    mainNames: "Chiranjeevi Anmol Kumar",
    subNames: "Beloved Son of Smt. Shanti & Shri Santosh Singh",
    heroDate: "Friday, 19 March 2027",
    countdownTarget: "2027-03-19T09:15",
    heroCity: "Garhirampur,Munger",
    welcomeMsg:
      "“Sanskar aur parampara ke is pavitra padav par, hum aapko apne putra ke Yagyopaveet (Janeu) Sanskar mein aashirwad dene ke liye sadar aamantrit karte hain.”",
    events: [
      {
        title: "Matrika Poojan & Haldi",
        dateTime: "18 Mar 2027 • 11:00 AM",
        venue: "Nivas Sthan",
        dressCode: "Traditional Kurta / Saree",
      },
      {
        title: "Yagyopaveet Sanskar Muhurat",
        dateTime: "19 Mar 2027 • 09:15 AM",
        venue: "Garhirampur",
        dressCode: "Saffron / Yellow Ethnic",
      },
      {
        title: "Priti Bhoj (Aashirwad Feast)",
        dateTime: "19 Mar 2027 • 01:00 PM",
        venue: "Garhirampur",
        dressCode: "Traditional Festive",
      },
    ],
    kids: "“Mere Bhaiya ke Janeu Sanskar mein zaroor padharein!” — Little Anmol",
  },
  mundan: {
    theme: "theme-emerald",
    mantra: "|| Shubham Bhavatu • Shri Ganeshaya Namah ||",
    tagline:
      "With hearts full of love & gratitude, we invite you to celebrate the",
    eventTitle: "Mundan Sanskar",
    mainNames: "Anmol Kumar",
    subNames: "Little Prince of Smt. Shanti & Santosh Singh",
    heroDate: "Sunday, 11 April 2027",
    countdownTarget: "2027-04-11T10:30",
    heroCity: "Garhirampur,Munger",
    welcomeMsg:
      "“Nanhe kadmon ki khushiyon aur Kuldevi ke aashirwad ke saath, hum aapko Master Reyansh ke Mundan Sanskar evam Priti Bhoj mein snehpurvak aamantrit karte hain.”",
    events: [
      {
        title: "Kuldevi Pooja & Mundan",
        dateTime: "11 Apr 2027 • 10:30 AM",
        venue: "Temple Deoghar",
        dressCode: "Pastel Traditional",
      },
      {
        title: "Aashirwad & Lunch Feast",
        dateTime: "11 Apr 2027 • 01:30 PM",
        venue: "Temple Deoghar",
        dressCode: "Smart Ethnic",
      },
    ],
    kids: "“Mere chhote bhai Reyansh ko aashirwad dene zaroor aana!” — khushi",
  },
};

// Load Active Config
function loadConfig() {
  const base = JSON.parse(JSON.stringify(window.INVITATION_DEFAULT_CONFIG));
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return { ...base, ...JSON.parse(saved) };
    }
  } catch (e) {
    console.warn("Storage unavailable", e);
  }
  return base;
}

let currentConfig = loadConfig();

// Render All Sections
function renderInvitation() {
  document.body.className = currentConfig.theme || "theme-maroon";
  document.getElementById("disp-mantra").textContent = currentConfig.mantra;
  document.getElementById("disp-tagline").textContent = currentConfig.tagline;
  document.getElementById("disp-event-title").textContent =
    currentConfig.eventTitle;
  document.getElementById("disp-main-names").textContent =
    currentConfig.mainNames;
  document.getElementById("disp-sub-names").textContent =
    currentConfig.subNames;
  document.getElementById("disp-hero-date").textContent =
    currentConfig.heroDate;
  document.getElementById("disp-hero-city").textContent =
    currentConfig.heroCity;
  document.getElementById("disp-welcome-msg").textContent =
    currentConfig.welcomeMsg;
  document.getElementById("disp-elders-blessing").textContent =
    currentConfig.eldersBlessing;
  document.getElementById("disp-venue-name").textContent =
    currentConfig.venueName;
  document.getElementById("disp-venue-address").textContent =
    currentConfig.venueAddress;
  document.getElementById("disp-map-link").href = currentConfig.mapLink || "#";
  document.getElementById("disp-hosts").textContent = currentConfig.hosts;
  document.getElementById("disp-darshan").textContent = currentConfig.darshan;
  document.getElementById("disp-kids").textContent = currentConfig.kids;
  document.getElementById("disp-footer-note").textContent =
    currentConfig.footerNote;

  // Render Sub-Events
  const eventsContainer = document.getElementById("events-list");
  eventsContainer.innerHTML = "";
  (currentConfig.events || []).forEach((ev) => {
    const card = document.createElement("div");
    card.className = "event-item-card";
    card.innerHTML = `
      <h4>${escapeHtml(ev.title)}</h4>
      <p class="event-meta">📅 ${escapeHtml(ev.dateTime)}</p>
      <p class="event-meta">📍 ${escapeHtml(ev.venue)}</p>
      ${ev.dressCode ? `<span class="event-dress">✨ ${escapeHtml(ev.dressCode)}</span>` : ""}
    `;
    eventsContainer.appendChild(card);
  });
}

function escapeHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Live Countdown Timer
function updateCountdown() {
  const target = new Date(currentConfig.countdownTarget).getTime();
  const now = Date.now();
  const diff = target - now;

  const statusEl = document.getElementById("countdown-status");
  if (isNaN(target) || diff <= 0) {
    document.getElementById("cd-days").textContent = "00";
    document.getElementById("cd-hours").textContent = "00";
    document.getElementById("cd-mins").textContent = "00";
    document.getElementById("cd-secs").textContent = "00";
    statusEl.textContent = "Shubh Utsav Aarambh Ho Chuka Hai!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  document.getElementById("cd-days").textContent = String(days).padStart(
    2,
    "0",
  );
  document.getElementById("cd-hours").textContent = String(hours).padStart(
    2,
    "0",
  );
  document.getElementById("cd-mins").textContent = String(mins).padStart(
    2,
    "0",
  );
  document.getElementById("cd-secs").textContent = String(secs).padStart(
    2,
    "0",
  );
  statusEl.textContent = "Aapke swagat ke liye parivar utsuk hai";
}

// =========================================================
// HOST-ONLY SECURITY & HIDDEN ACCESS SYSTEM
// =========================================================
const hostCustomizeBtn = document.getElementById("host-customize-btn");
const pinModal = document.getElementById("pin-modal");
const customizeDrawer = document.getElementById("customize-drawer");

function isHostUnlocked() {
  return sessionStorage.getItem(HOST_SESSION_KEY) === "true";
}

function syncHostUI() {
  if (isHostUnlocked()) {
    hostCustomizeBtn.classList.remove("hidden");
  } else {
    hostCustomizeBtn.classList.add("hidden");
    customizeDrawer.classList.add("hidden");
  }
}

function promptHostLogin() {
  if (isHostUnlocked()) {
    openCustomizeDrawer();
    return;
  }
  document.getElementById("pin-error").classList.add("hidden");
  document.getElementById("host-pin-input").value = "";
  pinModal.classList.remove("hidden");
  setTimeout(() => document.getElementById("host-pin-input").focus(), 100);
}

// Trigger 1: Triple-tap / Triple-click on Kalash Emblem
let tapCount = 0;
let tapTimer = null;
document
  .getElementById("secret-kalash-trigger")
  .addEventListener("click", () => {
    tapCount++;
    clearTimeout(tapTimer);
    tapTimer = setTimeout(() => {
      tapCount = 0;
    }, 700);
    if (tapCount >= 3) {
      tapCount = 0;
      promptHostLogin();
    }
  });

// Trigger 2: Keyboard Shortcut Ctrl+Shift+E or Alt+E
document.addEventListener("keydown", (e) => {
  if (
    (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "e") ||
    (e.altKey && e.key.toLowerCase() === "e")
  ) {
    e.preventDefault();
    promptHostLogin();
  }
});

// Trigger 3: Secret URL parameter ?host=1
if (new URLSearchParams(window.location.search).get("host") === "1") {
  promptHostLogin();
}

// Verify PIN
document
  .getElementById("verify-pin-btn")
  .addEventListener("click", verifyHostPin);
document.getElementById("host-pin-input").addEventListener("keydown", (e) => {
  if (e.key === "Enter") verifyHostPin();
});

function verifyHostPin() {
  const entered = document.getElementById("host-pin-input").value.trim();
  const actualPin = String(currentConfig.hostPin || "1008");
  if (entered === actualPin) {
    sessionStorage.setItem(HOST_SESSION_KEY, "true");
    pinModal.classList.add("hidden");
    syncHostUI();
    openCustomizeDrawer();
    showToast("Host Studio Unlocked! Sirf aap hi edit kar sakte hain.");
  } else {
    document.getElementById("pin-error").classList.remove("hidden");
  }
}

document.getElementById("close-pin-modal").addEventListener("click", () => {
  pinModal.classList.add("hidden");
});

// Drawer Population & Controls
function openCustomizeDrawer() {
  document.getElementById("inp-mantra").value = currentConfig.mantra;
  document.getElementById("inp-event-title").value = currentConfig.eventTitle;
  document.getElementById("inp-main-names").value = currentConfig.mainNames;
  document.getElementById("inp-sub-names").value = currentConfig.subNames;
  document.getElementById("inp-hero-date").value = currentConfig.heroDate;
  document.getElementById("inp-countdown-date").value =
    currentConfig.countdownTarget;
  document.getElementById("inp-hero-city").value = currentConfig.heroCity;
  document.getElementById("inp-welcome-msg").value = currentConfig.welcomeMsg;
  document.getElementById("inp-venue-name").value = currentConfig.venueName;
  document.getElementById("inp-venue-address").value =
    currentConfig.venueAddress;
  document.getElementById("inp-map-link").value = currentConfig.mapLink;
  document.getElementById("inp-hosts").value = currentConfig.hosts;
  document.getElementById("inp-darshan").value = currentConfig.darshan;
  document.getElementById("inp-kids").value = currentConfig.kids;
  document.getElementById("inp-new-pin").value = "";

  renderSubEventsEditor();
  customizeDrawer.classList.remove("hidden");
}
function renderSubEventsEditor() {
  const wrap = document.getElementById("sub-events-editor");
  wrap.innerHTML = "";
  (currentConfig.events || []).forEach((ev, idx) => {
    const box = document.createElement("div");
    box.className = "sub-event-editor-card";
    box.innerHTML = `
      <div class="sub-event-card-top">
        <span>Function ${idx + 1}</span>
        <button type="button" class="btn-remove-event" data-idx="${idx}">Remove</button>
      </div>
      <input type="text" class="ev-title" data-idx="${idx}" value="${escapeHtml(ev.title)}" placeholder="Function Name" />
      <input type="text" class="ev-time" data-idx="${idx}" value="${escapeHtml(ev.dateTime)}" placeholder="Date & Time" />
      <input type="text" class="ev-venue" data-idx="${idx}" value="${escapeHtml(ev.venue)}" placeholder="Venue Hall" />
      <input type="text" class="ev-dress" data-idx="${idx}" value="${escapeHtml(ev.dressCode || "")}" placeholder="Dress Code" />
    `;
    wrap.appendChild(box);
  });

  wrap.querySelectorAll(".btn-remove-event").forEach((btn) => {
    btn.addEventListener("click", () => {
      collectDrawerInputs();
      const removeIndex = Number(btn.getAttribute("data-idx"));
      currentConfig.events.splice(removeIndex, 1);
      renderSubEventsEditor();
      renderInvitation();
    });
  });
}

document.getElementById("add-event-btn").addEventListener("click", () => {
  currentConfig.events.push({
    title: "New Ceremony",
    dateTime: "Date • Time",
    venue: "Venue Name",
    dressCode: "Traditional",
  });
  renderSubEventsEditor();
});

hostCustomizeBtn.addEventListener("click", openCustomizeDrawer);
document.getElementById("close-drawer-btn").addEventListener("click", () => {
  customizeDrawer.classList.add("hidden");
});

// Preset Buttons
document.querySelectorAll(".preset-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const p = PRESETS[btn.dataset.preset];
    if (!p) return;
    currentConfig = { ...currentConfig, ...JSON.parse(JSON.stringify(p)) };
    renderInvitation();
    openCustomizeDrawer();
    showToast("Template switched!");
  });
});

// Theme Swatches
document.querySelectorAll(".swatch-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    currentConfig.theme = btn.dataset.theme;
    document.body.className = currentConfig.theme;
  });
});

// Collect Form Values into currentConfig
function collectDrawerInputs() {
  currentConfig.mantra = document.getElementById("inp-mantra").value;
  currentConfig.eventTitle = document.getElementById("inp-event-title").value;
  currentConfig.mainNames = document.getElementById("inp-main-names").value;
  currentConfig.subNames = document.getElementById("inp-sub-names").value;
  currentConfig.heroDate = document.getElementById("inp-hero-date").value;
  currentConfig.countdownTarget =
    document.getElementById("inp-countdown-date").value;
  currentConfig.heroCity = document.getElementById("inp-hero-city").value;
  currentConfig.welcomeMsg = document.getElementById("inp-welcome-msg").value;
  currentConfig.venueName = document.getElementById("inp-venue-name").value;
  currentConfig.venueAddress =
    document.getElementById("inp-venue-address").value;
  currentConfig.mapLink = document.getElementById("inp-map-link").value;
  currentConfig.hosts = document.getElementById("inp-hosts").value;
  currentConfig.darshan = document.getElementById("inp-darshan").value;
  currentConfig.kids = document.getElementById("inp-kids").value;

  const newPin = document.getElementById("inp-new-pin").value.trim();
  if (newPin.length >= 4) {
    currentConfig.hostPin = newPin;
  }

  const titles = document.querySelectorAll(".ev-title");
  const times = document.querySelectorAll(".ev-time");
  const venues = document.querySelectorAll(".ev-venue");
  const dresses = document.querySelectorAll(".ev-dress");

  const updatedEvents = [];
  titles.forEach((t, i) => {
    if (t.value.trim()) {
      updatedEvents.push({
        title: t.value.trim(),
        dateTime: times[i].value.trim(),
        venue: venues[i].value.trim(),
        dressCode: dresses[i].value.trim(),
      });
    }
  });
  currentConfig.events = updatedEvents;
}

// Save Changes Locally
document.getElementById("save-changes-btn").addEventListener("click", () => {
  collectDrawerInputs();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(currentConfig));
  renderInvitation();
  updateCountdown();
  showToast("Saved! Ab Download config.js karke hosting par upload karein.");
});

// Download Permanent config.js File
document.getElementById("export-config-btn").addEventListener("click", () => {
  collectDrawerInputs();
  const fileContent = `/* Permanent Invitation Configuration */
window.INVITATION_DEFAULT_CONFIG = ${JSON.stringify(currentConfig, null, 2)};
`;
  const blob = new Blob([fileContent], { type: "application/javascript" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "config.js";
  a.click();
  URL.revokeObjectURL(url);
  showToast("config.js downloaded! Purani config.js ko isse replace kar dein.");
});

// Copy Clean Guest URL (Strips any ?host=1 parameter)
document.getElementById("copy-guest-link-btn").addEventListener("click", () => {
  const cleanUrl = window.location.origin + window.location.pathname;
  navigator.clipboard?.writeText(cleanUrl);
  showToast("Clean Guest Link copied! Isme Customize button nahi dikhega.");
});

// Lock Host Mode
document.getElementById("lock-host-btn").addEventListener("click", () => {
  sessionStorage.removeItem(HOST_SESSION_KEY);
  syncHostUI();
  showToast("Host Mode Locked. Ab page Guest view mein hai.");
});

// =========================================================
// RSVP & BLESSINGS WALL
// =========================================================
const RSVP_STORAGE_KEY = "royal_invite_blessings_v1";
function renderBlessings() {
  const wall = document.getElementById("blessings-wall");
  const list = JSON.parse(localStorage.getItem(RSVP_STORAGE_KEY) || "[]");
  wall.innerHTML = "";
  list
    .slice()
    .reverse()
    .forEach((item) => {
      const div = document.createElement("div");
      div.className = "blessing-item";
      div.innerHTML = `<strong>${escapeHtml(item.name)}</strong> (${escapeHtml(item.count)} • ${escapeHtml(item.status)})<br/><span>${escapeHtml(item.msg || "Heartiest congratulations & blessings!")}</span>`;
      wall.appendChild(div);
    });
}

document.getElementById("rsvp-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("guest-name").value.trim();
  const count = document.getElementById("guest-count").value;
  const status = document.getElementById("guest-attending").value;
  const msg = document.getElementById("guest-blessing").value.trim();
  if (!name) return;

  const list = JSON.parse(localStorage.getItem(RSVP_STORAGE_KEY) || "[]");
  list.push({ name, count, status, msg });
  localStorage.setItem(RSVP_STORAGE_KEY, JSON.stringify(list));
  e.target.reset();
  renderBlessings();
  showToast("Dhanyavaad! Aapka aashirwad aur RSVP darj ho gaya hai.");
});

// WhatsApp Share
document.getElementById("whatsapp-share-btn").addEventListener("click", () => {
  const cleanUrl = window.location.origin + window.location.pathname;
  const text = `${currentConfig.mantra}%0A*${currentConfig.eventTitle} — ${currentConfig.mainNames}*%0A📅 ${currentConfig.heroDate}%0A📍 ${currentConfig.venueName}, ${currentConfig.heroCity}%0A%0ADil se nimantran dekhne ke liye link kholein:%0A${encodeURIComponent(cleanUrl)}`;
  window.open(`https://wa.me/?text=${text}`, "_blank");
});

// =========================================================
// SCROLL-DRIVEN ANIMATIONS & BACKGROUND TRANSITIONS
// =========================================================
const sections = document.querySelectorAll(".reveal-section");
const mandalaSvg = document.querySelector(".mandala-svg");
const progressBar = document.getElementById("scroll-progress");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        const bgKey = entry.target.getAttribute("data-bg");
        if (bgKey) document.body.setAttribute("data-active-section", bgKey);
      }
    });
  },
  { threshold: 0.25 },
);

sections.forEach((sec) => sectionObserver.observe(sec));

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = `${pct}%`;
  if (mandalaSvg) {
    mandalaSvg.style.transform = `rotate(${scrollTop * 0.08}deg)`;
  }
});

// =========================================================
// AMBIENT INDIAN TANPURA / FLUTE SYNTHESIZER
// =========================================================
let bgAudio = null;
let isPlaying = false;

function toggleMusic() {
  const btn = document.getElementById("music-toggle");
  const label = document.getElementById("music-label");

  if (!bgAudio) {
    bgAudio = new Audio("music.mp3"); // Apni MP3 file ka exact naam yahan likhein
    bgAudio.loop = true;
    bgAudio.volume = 0.6;
  }

  if (!isPlaying) {
    bgAudio
      .play()
      .then(() => {
        isPlaying = true;
        if (btn) btn.classList.add("playing");
        if (label) label.textContent = "Pause";
      })
      .catch(() => {
        isPlaying = false;
        if (btn) btn.classList.remove("playing");
        if (label) label.textContent = "Shehnai";
      });
  } else {
    bgAudio.pause();
    isPlaying = false;
    if (btn) btn.classList.remove("playing");
    if (label) label.textContent = "Shehnai";
  }
}

document.getElementById("music-toggle").addEventListener("click", toggleMusic);
function autoPlayMusic() {
  if (isPlaying) return;

  try {
    toggleMusic();
  } catch (e) {}

  // Agar browser autoplay block kare to pehle tap / click / touch / scroll par turant chalu ho jayega
  const unlockEvents = [
    "pointerdown",
    "touchstart",
    "click",
    "scroll",
    "keydown",
  ];
  const handleFirstInteraction = () => {
    if (!isPlaying) {
      try {
        toggleMusic();
      } catch (e) {}
    }
    unlockEvents.forEach((ev) => {
      document.removeEventListener(ev, handleFirstInteraction);
    });
  };

  unlockEvents.forEach((ev) => {
    document.addEventListener(ev, handleFirstInteraction, {
      once: true,
      passive: true,
    });
  });
}

window.addEventListener("DOMContentLoaded", autoPlayMusic);
// =========================================================
// GENTLE FALLING MARIGOLD & ROSE PETALS
// =========================================================
const canvas = document.getElementById("petal-canvas");
const ctx = canvas.getContext("2d");
let petals = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

const petalColors = [
  "rgba(197,160,89,0.45)",
  "rgba(217,119,6,0.35)",
  "rgba(155,17,30,0.28)",
];
for (let i = 0; i < 22; i++) {
  petals.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: 4 + Math.random() * 5,
    speedY: 0.4 + Math.random() * 0.8,
    drift: (Math.random() - 0.5) * 0.6,
    angle: Math.random() * Math.PI * 2,
    color: petalColors[i % petalColors.length],
  });
}

function animatePetals() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  petals.forEach((p) => {
    p.y += p.speedY;
    p.x += Math.sin(p.angle) * 0.5 + p.drift;
    p.angle += 0.015;
    if (p.y > canvas.height + 10) {
      p.y = -10;
      p.x = Math.random() * canvas.width;
    }
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.angle);
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.ellipse(0, 0, p.r, p.r * 0.55, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  });
  requestAnimationFrame(animatePetals);
}
animatePetals();

// Toast Helper
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.remove("hidden");
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => t.classList.add("hidden"), 3500);
}

// Initial Boot
renderInvitation();
renderBlessings();
updateCountdown();
setInterval(updateCountdown, 1000);
syncHostUI();
