/* =========================================================
   ROYAL DIGITAL INVITATION — INTERACTIVE & HOST-LOCKED LOGIC
   ========================================================= */

const STORAGE_KEY = "royal_invite_custom_data_v2";
const HOST_SESSION_KEY = "royal_invite_host_unlocked";
const INVITE_BASE_URL = "https://anmol-gitk.github.io/Invitation-Card/";

const FALLBACK_DEFAULT_CONFIG = {
  theme: "theme-maroon",
  mantra: "|| Shri Ganeshaya Namah ||",
  tagline:
    "With the blessings of the Almighty & our Elders, we cordially invite you to the",
  eventTitle: "Shubh Vivah",
  mainNames: "Anmol & Ananya",
  subNames:
    "Son of Smt. Shanti & Shri Santosh Singh • Daughter of Smt. Kavita & Shri Suresh Verma",
  heroDate: "Sunday, 14 February 2027",
  countdownTarget: "2027-02-14T19:30",
  heroCity: "Garhirampur, Munger",
  welcomeMsg:
    "“Apno ke pyaar aur buzurgon ke aashirwad ke saath, hum aapko is pavitra avsar par dil se aamantrit karte hain. Aapki garimamayi upasthiti hamare parivar ke liye garv aur khushi ka vishay hogi.”",
  eldersBlessing:
    "“Buzurgon ke aashirwad aur sneh se hi har shubh karyakram sampann hota hai.”",
  venueName: "Shree Shyam Vatika",
  venueAddress: "Garhirampur, Munger, Bihar",
  mapLink: "https://maps.google.com/?q=Garhirampur,Munger",
  hosts: "Singh & Verma Family",
  darshan: "Subah 07:00 baje se Sandhya 08:00 baje tak",
  kids: "“Hamare Chachu ki shaadi mein jalool-jalool aana!” — Aarohi, Vihaan & Kavya",
  footerNote: "Aapke aagaman ki pratiksha mein — Saparivar",
  hostPin: "1008",
  hiddenSections: {},
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
};

const SECTION_META = [
  {
    key: "mantraTagline",
    label: "Mantra & Tagline",
    defaultText: "|| Shri Ganeshaya Namah ||",
  },
  {
    key: "welcome",
    label: "Welcome Message",
    defaultText: FALLBACK_DEFAULT_CONFIG.welcomeMsg,
  },
  {
    key: "elders",
    label: "Elders Blessing",
    defaultText: FALLBACK_DEFAULT_CONFIG.eldersBlessing,
  },
  { key: "events", label: "Functions / Sub-Events", defaultText: "" },
  {
    key: "venue",
    label: "Venue & Map",
    defaultText: FALLBACK_DEFAULT_CONFIG.venueName,
  },
  {
    key: "hosts",
    label: "Hosts / Family",
    defaultText: FALLBACK_DEFAULT_CONFIG.hosts,
  },
  {
    key: "darshan",
    label: "Darshan / Timings",
    defaultText: FALLBACK_DEFAULT_CONFIG.darshan,
  },
  {
    key: "kids",
    label: "Kids Corner",
    defaultText: FALLBACK_DEFAULT_CONFIG.kids,
  },
  {
    key: "footer",
    label: "Footer Note",
    defaultText: FALLBACK_DEFAULT_CONFIG.footerNote,
  },
];

const PRESETS = {
  marriage: {
    theme: "theme-maroon",
    mantra: "|| Shri Ganeshaya Namah ||",
    tagline:
      "With the blessings of the Almighty & our Elders, we cordially invite you to the",
    eventTitle: "Shubh Vivah",
    mainNames: "Anmol & Ananya",
    subNames:
      "Son of Smt. Shanti & Shri Santosh Singh • Daughter of Smt. Kavita & Shri Suresh Verma",
    heroDate: "Sunday, 14 February 2027",
    countdownTarget: "2027-02-14T19:30",
    heroCity: "Garhirampur, Munger",
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
    heroCity: "Garhirampur, Munger",
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
    heroCity: "Garhirampur, Munger",
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

// =========================================================
// URL EVENT SLUG & NEW TAB HELPERS
// =========================================================
function toEventSlug(text) {
  return (
    String(text || "event")
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "event"
  );
}

function fromEventSlug(slug) {
  return String(slug || "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (ch) => ch.toUpperCase())
    .trim();
}

function buildEventUrl(cfg) {
  const title = (cfg?.eventTitle || "Shubh Nimantran").trim();
  const slug = toEventSlug(title);
  const baseHref =
    window.location.protocol === "http:" ||
    window.location.protocol === "https:"
      ? window.location.origin + window.location.pathname
      : INVITE_BASE_URL;

  const url = new URL(baseHref);
  url.searchParams.set("event", slug);
  url.searchParams.set("title", title);
  if (cfg?.theme) {
    url.searchParams.set("theme", cfg.theme);
  }
  return url.toString();
}

function openEventInNewTab(cfg) {
  const targetUrl = buildEventUrl(cfg);
  window.open(targetUrl, "_blank", "noopener,noreferrer");
}

// Load Active Config + Apply URL Event If Present
function loadConfig() {
  const globalDefault =
    typeof window.INVITATION_DEFAULT_CONFIG === "object" &&
    window.INVITATION_DEFAULT_CONFIG !== null
      ? window.INVITATION_DEFAULT_CONFIG
      : {};

  let merged = {
    ...JSON.parse(JSON.stringify(FALLBACK_DEFAULT_CONFIG)),
    ...JSON.parse(JSON.stringify(globalDefault)),
  };

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      merged = { ...merged, ...JSON.parse(saved) };
    }
  } catch (e) {
    console.warn("Storage unavailable", e);
  }

  merged.hiddenSections = merged.hiddenSections || {};
  merged.events = Array.isArray(merged.events) ? merged.events : [];

  // Apply ?event=...&title=... from URL when opened in a new tab or shared link
  const params = new URLSearchParams(window.location.search);
  const eventParam = (params.get("event") || "").trim();
  const titleParam = (params.get("title") || "").trim();
  const themeParam = (params.get("theme") || "").trim();

  if (eventParam || titleParam) {
    const targetSlug = toEventSlug(eventParam || titleParam);
    const matchedKey = Object.keys(PRESETS).find((key) => {
      const preset = PRESETS[key];
      return (
        toEventSlug(key) === targetSlug ||
        toEventSlug(preset.eventTitle) === targetSlug
      );
    });

    if (matchedKey) {
      merged = {
        ...merged,
        ...JSON.parse(JSON.stringify(PRESETS[matchedKey])),
      };
    }

    if (titleParam) {
      merged.eventTitle = titleParam;
    } else if (eventParam && !matchedKey) {
      merged.eventTitle = fromEventSlug(eventParam);
    }
  }

  if (themeParam) {
    merged.theme = themeParam;
  }

  return merged;
}

let currentConfig = loadConfig();

function setTextIfExists(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value || "";
}

function setSectionVisibility(sectionKey, isHidden) {
  currentConfig.hiddenSections[sectionKey] = Boolean(isHidden);

  const sectionSelectors = {
    mantraTagline: ["#disp-mantra", "#disp-tagline"],
    welcome: ["#disp-welcome-msg"],
    elders: ["#disp-elders-blessing"],
    events: ["#events-list"],
    venue: ["#disp-venue-name", "#disp-venue-address", "#disp-map-link"],
    hosts: ["#disp-hosts"],
    darshan: ["#disp-darshan"],
    kids: ["#disp-kids"],
    footer: ["#disp-footer-note"],
  };

  (sectionSelectors[sectionKey] || []).forEach((sel) => {
    const target = document.querySelector(sel);
    if (!target) return;
    const container =
      target.closest("section, .card, .info-block, .section-block, article") ||
      target;
    container.classList.toggle("hidden", Boolean(isHidden));
  });
}

// Render All Sections
function renderInvitation() {
  document.body.className = currentConfig.theme || "theme-maroon";
  setTextIfExists("disp-mantra", currentConfig.mantra);
  setTextIfExists("disp-tagline", currentConfig.tagline);
  setTextIfExists("disp-event-title", currentConfig.eventTitle);
  setTextIfExists("disp-main-names", currentConfig.mainNames);
  setTextIfExists("disp-sub-names", currentConfig.subNames);
  setTextIfExists("disp-hero-date", currentConfig.heroDate);
  setTextIfExists("disp-hero-city", currentConfig.heroCity);
  setTextIfExists("disp-welcome-msg", currentConfig.welcomeMsg);
  setTextIfExists("disp-elders-blessing", currentConfig.eldersBlessing);
  setTextIfExists("disp-venue-name", currentConfig.venueName);
  setTextIfExists("disp-venue-address", currentConfig.venueAddress);

  const mapEl = document.getElementById("disp-map-link");
  if (mapEl) mapEl.href = currentConfig.mapLink || "#";

  setTextIfExists("disp-hosts", currentConfig.hosts);
  setTextIfExists("disp-darshan", currentConfig.darshan);
  setTextIfExists("disp-kids", currentConfig.kids);
  setTextIfExists("disp-footer-note", currentConfig.footerNote);

  // Render Sub-Events
  const eventsContainer = document.getElementById("events-list");
  if (eventsContainer) {
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

  // Apply Remove/Add Section State
  SECTION_META.forEach((sec) => {
    setSectionVisibility(
      sec.key,
      Boolean(currentConfig.hiddenSections?.[sec.key]),
    );
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
    setTextIfExists("cd-days", "00");
    setTextIfExists("cd-hours", "00");
    setTextIfExists("cd-mins", "00");
    setTextIfExists("cd-secs", "00");
    if (statusEl) statusEl.textContent = "Shubh Utsav Aarambh Ho Chuka Hai!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  setTextIfExists("cd-days", String(days).padStart(2, "0"));
  setTextIfExists("cd-hours", String(hours).padStart(2, "0"));
  setTextIfExists("cd-mins", String(mins).padStart(2, "0"));
  setTextIfExists("cd-secs", String(secs).padStart(2, "0"));
  if (statusEl) statusEl.textContent = "Aapke swagat ke liye parivar utsuk hai";
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
  if (hostCustomizeBtn) {
    hostCustomizeBtn.classList.toggle("hidden", !isHostUnlocked());
  }
  if (!isHostUnlocked() && customizeDrawer) {
    customizeDrawer.classList.add("hidden");
  }
}

function promptHostLogin() {
  if (isHostUnlocked()) {
    openCustomizeDrawer();
    return;
  }
  document.getElementById("pin-error")?.classList.add("hidden");
  const pinInput = document.getElementById("host-pin-input");
  if (pinInput) pinInput.value = "";
  pinModal?.classList.remove("hidden");
  setTimeout(() => pinInput?.focus(), 100);
}

// Trigger 1: Triple-tap / Triple-click on Kalash Emblem
let tapCount = 0;
let tapTimer = null;
document
  .getElementById("secret-kalash-trigger")
  ?.addEventListener("click", () => {
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
  ?.addEventListener("click", verifyHostPin);
document.getElementById("host-pin-input")?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") verifyHostPin();
});

function verifyHostPin() {
  const entered = document.getElementById("host-pin-input")?.value.trim() || "";
  const actualPin = String(currentConfig.hostPin || "1008");
  if (entered === actualPin) {
    sessionStorage.setItem(HOST_SESSION_KEY, "true");
    pinModal?.classList.add("hidden");
    syncHostUI();
    openCustomizeDrawer();
    showToast("Host Studio Unlocked! Sirf aap hi edit kar sakte hain.");
  } else {
    document.getElementById("pin-error")?.classList.remove("hidden");
  }
}

document.getElementById("close-pin-modal")?.addEventListener("click", () => {
  pinModal?.classList.add("hidden");
});

function setInputIfExists(id, value) {
  const el = document.getElementById(id);
  if (el) el.value = value || "";
}

// Render Remove / Add Section Controls Inside Customize Drawer
function renderSectionManager() {
  let manager = document.getElementById("section-visibility-manager");
  if (!manager && customizeDrawer) {
    manager = document.createElement("div");
    manager.id = "section-visibility-manager";
    manager.className = "section-visibility-manager";
    const anchor =
      document.getElementById("sub-events-editor")?.parentElement ||
      customizeDrawer;
    anchor.parentNode.insertBefore(manager, anchor.nextSibling);
  }
  if (!manager) return;

  manager.innerHTML = `<h4>Sections Remove / Add</h4>`;
  const listEl = document.createElement("div");
  listEl.className = "section-toggle-list";

  SECTION_META.forEach((sec) => {
    const isHidden = Boolean(currentConfig.hiddenSections?.[sec.key]);
    const row = document.createElement("div");
    row.className = "section-toggle-row";
    row.innerHTML = `
      <span>${escapeHtml(sec.label)}</span>
      <div class="section-toggle-actions">
        <button type="button" class="btn-remove-section btn-remove-event ${isHidden ? "hidden" : ""}" data-sec="${sec.key}">Remove</button>
        <button type="button" class="btn-add-section btn-add-event ${!isHidden ? "hidden" : ""}" data-sec="${sec.key}">Add</button>
      </div>
    `;
    listEl.appendChild(row);
  });

  manager.appendChild(listEl);

  manager.querySelectorAll(".btn-remove-section").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-sec");
      setSectionVisibility(key, true);
      renderSectionManager();
      showToast("Section removed!");
    });
  });

  manager.querySelectorAll(".btn-add-section").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-sec");
      if (key === "mantraTagline" && !currentConfig.mantra) {
        currentConfig.mantra = FALLBACK_DEFAULT_CONFIG.mantra;
      } else if (key === "welcome" && !currentConfig.welcomeMsg) {
        currentConfig.welcomeMsg = FALLBACK_DEFAULT_CONFIG.welcomeMsg;
      } else if (key === "elders" && !currentConfig.eldersBlessing) {
        currentConfig.eldersBlessing = FALLBACK_DEFAULT_CONFIG.eldersBlessing;
      } else if (key === "venue" && !currentConfig.venueName) {
        currentConfig.venueName = FALLBACK_DEFAULT_CONFIG.venueName;
      } else if (key === "hosts" && !currentConfig.hosts) {
        currentConfig.hosts = FALLBACK_DEFAULT_CONFIG.hosts;
      } else if (key === "darshan" && !currentConfig.darshan) {
        currentConfig.darshan = FALLBACK_DEFAULT_CONFIG.darshan;
      } else if (key === "kids" && !currentConfig.kids) {
        currentConfig.kids = FALLBACK_DEFAULT_CONFIG.kids;
      } else if (key === "footer" && !currentConfig.footerNote) {
        currentConfig.footerNote = FALLBACK_DEFAULT_CONFIG.footerNote;
      }
      setSectionVisibility(key, false);
      renderInvitation();
      renderSectionManager();
      showToast("Section added!");
    });
  });
}

// Drawer Population & Controls
function openCustomizeDrawer() {
  setInputIfExists("inp-mantra", currentConfig.mantra);
  setInputIfExists("inp-event-title", currentConfig.eventTitle);
  setInputIfExists("inp-main-names", currentConfig.mainNames);
  setInputIfExists("inp-sub-names", currentConfig.subNames);
  setInputIfExists("inp-hero-date", currentConfig.heroDate);
  setInputIfExists("inp-countdown-date", currentConfig.countdownTarget);
  setInputIfExists("inp-hero-city", currentConfig.heroCity);
  setInputIfExists("inp-welcome-msg", currentConfig.welcomeMsg);
  setInputIfExists("inp-venue-name", currentConfig.venueName);
  setInputIfExists("inp-venue-address", currentConfig.venueAddress);
  setInputIfExists("inp-map-link", currentConfig.mapLink);
  setInputIfExists("inp-hosts", currentConfig.hosts);
  setInputIfExists("inp-darshan", currentConfig.darshan);
  setInputIfExists("inp-kids", currentConfig.kids);
  setInputIfExists("inp-new-pin", "");

  renderSubEventsEditor();
  renderSectionManager();
  customizeDrawer?.classList.remove("hidden");
}

function renderSubEventsEditor() {
  const wrap = document.getElementById("sub-events-editor");
  if (!wrap) return;
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

document.getElementById("add-event-btn")?.addEventListener("click", () => {
  currentConfig.events = currentConfig.events || [];
  currentConfig.events.push({
    title: "New Ceremony",
    dateTime: "Date • Time",
    venue: "Venue Name",
    dressCode: "Traditional",
  });
  renderSubEventsEditor();
});

hostCustomizeBtn?.addEventListener("click", openCustomizeDrawer);
document.getElementById("close-drawer-btn")?.addEventListener("click", () => {
  customizeDrawer?.classList.add("hidden");
});

// Preset Buttons -> Switch Event & Open New Tab With Event URL
document.querySelectorAll(".preset-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const p = PRESETS[btn.dataset.preset];
    if (!p) return;
    currentConfig = { ...currentConfig, ...JSON.parse(JSON.stringify(p)) };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(currentConfig));
    } catch (e) {}
    renderInvitation();
    openCustomizeDrawer();
    openEventInNewTab(currentConfig);
    showToast("Template switched & new event tab opened!");
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
  currentConfig.mantra =
    document.getElementById("inp-mantra")?.value ?? currentConfig.mantra;
  currentConfig.eventTitle =
    document.getElementById("inp-event-title")?.value ??
    currentConfig.eventTitle;
  currentConfig.mainNames =
    document.getElementById("inp-main-names")?.value ?? currentConfig.mainNames;
  currentConfig.subNames =
    document.getElementById("inp-sub-names")?.value ?? currentConfig.subNames;
  currentConfig.heroDate =
    document.getElementById("inp-hero-date")?.value ?? currentConfig.heroDate;
  currentConfig.countdownTarget =
    document.getElementById("inp-countdown-date")?.value ??
    currentConfig.countdownTarget;
  currentConfig.heroCity =
    document.getElementById("inp-hero-city")?.value ?? currentConfig.heroCity;
  currentConfig.welcomeMsg =
    document.getElementById("inp-welcome-msg")?.value ??
    currentConfig.welcomeMsg;
  currentConfig.venueName =
    document.getElementById("inp-venue-name")?.value ?? currentConfig.venueName;
  currentConfig.venueAddress =
    document.getElementById("inp-venue-address")?.value ??
    currentConfig.venueAddress;
  currentConfig.mapLink =
    document.getElementById("inp-map-link")?.value ?? currentConfig.mapLink;
  currentConfig.hosts =
    document.getElementById("inp-hosts")?.value ?? currentConfig.hosts;
  currentConfig.darshan =
    document.getElementById("inp-darshan")?.value ?? currentConfig.darshan;
  currentConfig.kids =
    document.getElementById("inp-kids")?.value ?? currentConfig.kids;

  const newPin = document.getElementById("inp-new-pin")?.value.trim() || "";
  if (newPin.length >= 4) {
    currentConfig.hostPin = newPin;
  }

  const titles = document.querySelectorAll(".ev-title");
  if (titles.length > 0) {
    const times = document.querySelectorAll(".ev-time");
    const venues = document.querySelectorAll(".ev-venue");
    const dresses = document.querySelectorAll(".ev-dress");

    const updatedEvents = [];
    titles.forEach((t, i) => {
      if (t.value.trim()) {
        updatedEvents.push({
          title: t.value.trim(),
          dateTime: times[i]?.value.trim() || "",
          venue: venues[i]?.value.trim() || "",
          dressCode: dresses[i]?.value.trim() || "",
        });
      }
    });
    currentConfig.events = updatedEvents;
  }
}

// Save Changes Locally & Open New Event Tab When Title Changes
document.getElementById("save-changes-btn")?.addEventListener("click", () => {
  const prevTitle = currentConfig.eventTitle;
  collectDrawerInputs();
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(currentConfig));
  } catch (e) {}
  renderInvitation();
  updateCountdown();
  if (currentConfig.eventTitle && currentConfig.eventTitle !== prevTitle) {
    openEventInNewTab(currentConfig);
  }
  showToast("Saved! Naya event link ready hai.");
});

// Download Permanent config.js File
document.getElementById("export-config-btn")?.addEventListener("click", () => {
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

// Copy Event Guest URL
document
  .getElementById("copy-guest-link-btn")
  ?.addEventListener("click", () => {
    collectDrawerInputs();
    const guestUrl = buildEventUrl(currentConfig);
    navigator.clipboard?.writeText(guestUrl);
    showToast("Event Guest Link copied!");
  });

// Lock Host Mode
document.getElementById("lock-host-btn")?.addEventListener("click", () => {
  sessionStorage.removeItem(HOST_SESSION_KEY);
  syncHostUI();
  showToast("Host Mode Locked. Ab page Guest view mein hai.");
});
// =========================================================
// RSVP & BLESSINGS WALL (PRIVATE SENDER + HOST-ONLY DELETE)
// =========================================================
const RSVP_STORAGE_KEY = "royal_invite_blessings_v2";
const SENDER_ID_KEY = "royal_invite_sender_id_v1";

function getSenderId() {
  try {
    let sid = localStorage.getItem(SENDER_ID_KEY);
    if (!sid) {
      sid = "snd_" + Math.random().toString(36).slice(2, 10) + "_" + Date.now();
      localStorage.setItem(SENDER_ID_KEY, sid);
    }
    return sid;
  } catch (e) {
    return "guest_default";
  }
}

function getCurrentEventScope() {
  return toEventSlug(currentConfig?.eventTitle || "default-event");
}

function getAllBlessings() {
  try {
    const parsed = JSON.parse(localStorage.getItem(RSVP_STORAGE_KEY) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    return [];
  }
}

function saveAllBlessings(list) {
  try {
    localStorage.setItem(RSVP_STORAGE_KEY, JSON.stringify(list));
  } catch (e) {
    console.warn("Blessings storage unavailable", e);
  }
}

function deleteBlessingById(id) {
  if (!isHostUnlocked()) {
    showToast("Sirf Host hi blessing message delete kar sakte hain.");
    return;
  }
  const updated = getAllBlessings().filter((item) => item.id !== id);
  saveAllBlessings(updated);
  renderBlessings();
  showToast("Blessing message delete ho gaya.");
}

function renderBlessings() {
  const wall = document.getElementById("blessings-wall");
  if (!wall) return;

  const activeScope = getCurrentEventScope();
  const currentSender = getSenderId();
  const hostMode = isHostUnlocked();

  // Sirf usi event ke messages + (Host ko saare, Guest ko sirf apna bheja hua)
  const visibleList = getAllBlessings().filter((item) => {
    const sameEvent = (item.eventScope || "default-event") === activeScope;
    if (!sameEvent) return false;
    if (hostMode) return true;
    return item.senderId === currentSender;
  });

  wall.innerHTML = "";

  if (visibleList.length === 0) {
    wall.innerHTML = `<p class="blessing-empty">────── ⋆⋅𖤓⋅⋆ ──────</p>`;
    return;
  }

  visibleList
    .slice()
    .reverse()
    .forEach((item) => {
      const div = document.createElement("div");
      div.className = "blessing-item";
      div.innerHTML = `
        <div class="blessing-item-header">
          <strong>${escapeHtml(item.name)}</strong> (${escapeHtml(item.count)} • ${escapeHtml(item.status)})
          ${hostMode ? `<button type="button" class="btn-delete-blessing btn-remove-event" data-id="${escapeHtml(item.id)}">Delete</button>` : ""}
        </div>
        <span>${escapeHtml(item.msg || "Heartiest congratulations & blessings!")}</span>
      `;
      wall.appendChild(div);
    });

  if (hostMode) {
    wall.querySelectorAll(".btn-delete-blessing").forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-id");
        deleteBlessingById(targetId);
      });
    });
  }
}

document.getElementById("rsvp-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("guest-name")?.value.trim() || "";
  const count = document.getElementById("guest-count")?.value || "";
  const status = document.getElementById("guest-attending")?.value || "";
  const msg = document.getElementById("guest-blessing")?.value.trim() || "";
  if (!name) return;

  const list = getAllBlessings();
  list.push({
    id: "bl_" + Date.now() + "_" + Math.random().toString(36).slice(2, 6),
    eventScope: getCurrentEventScope(),
    senderId: getSenderId(),
    name,
    count,
    status,
    msg,
  });
  saveAllBlessings(list);
  e.target.reset();
  renderBlessings();
  showToast("Dhanyavaad! Aapka aashirwad darj ho gaya hai.");
});

// WhatsApp Share
document.getElementById("whatsapp-share-btn")?.addEventListener("click", () => {
  const eventUrl = buildEventUrl(currentConfig);
  const text = `${currentConfig.mantra}%0A*${currentConfig.eventTitle} — ${currentConfig.mainNames}*%0A📅 ${currentConfig.heroDate}%0A📍 ${currentConfig.venueName}, ${currentConfig.heroCity}%0A%0ADil se nimantran dekhne ke liye link kholein:%0A${encodeURIComponent(eventUrl)}`;
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
  if (progressBar) progressBar.style.width = `${pct}%`;
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
    bgAudio = new Audio("music.mp3");
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

document.getElementById("music-toggle")?.addEventListener("click", toggleMusic);

function autoPlayMusic() {
  if (isPlaying) return;

  try {
    toggleMusic();
  } catch (e) {}

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
const ctx = canvas ? canvas.getContext("2d") : null;
let petals = [];

function resizeCanvas() {
  if (!canvas) return;
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
if (canvas && ctx) {
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
}

function animatePetals() {
  if (!canvas || !ctx) return;
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
  if (!t) return;
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
