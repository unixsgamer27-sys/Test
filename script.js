// Team 5 interactive portfolio. Edit the data below to update each profile.
// Content comes from each member's own submitted profile.
const members = [
  {
    id: "fritz", name: "Fritz Gerard L. Fama", photo: "assets/fama.jpg",
    role: "Computer Engineering Student",
    intro: "Art, anime, mathematics, and a goal of becoming a computer engineer.",
    course: "BSCpE", year: "1st Year", age: "19",
    about: [
      "My name is Fritz Gerard L. Fama, and I am 19 years old. I am a college student who enjoys expressing myself through art and creativity. Drawing is something I want to improve because I like turning ideas and imagination into pictures. I also enjoy watching anime and reading manga because they offer interesting stories, memorable characters, and different kinds of inspiration.",
      "When it comes to food, some of my favorites are kare-kare, sinigang, and chopsuey. Aside from my hobbies, I also like mathematics. Even though I sometimes find it challenging and do not always get the answers right, I still appreciate the subject because it encourages me to think carefully, solve problems, and keep practicing.",
      "In the future, I hope to become a computer engineer. I want to continue learning about technology, improve my problem-solving abilities, and develop skills that will help me achieve my goals. I believe that patience, creativity, and a willingness to learn can help me grow both as a student and as a future professional."
    ],
    interests: ["Programming", "Learning software and hardware", "Web development", "Game development", "Technology"],
    goals: "My goal is to become a computer engineer because I want to learn more about technology, understand how computers work, and develop solutions that can help people in their daily lives. I want to improve my knowledge of mathematics, programming, and problem-solving because I believe these skills are important in achieving my dream. I also want to use my creativity and artistic abilities to explore new ideas, create innovative designs, and find different ways to approach challenges. Even though I know that learning computer engineering can be difficult, I am willing to face challenges, learn from my mistakes, and continue improving myself. I believe that with patience, hard work, creativity, and determination, I can achieve my goal and make something meaningful through technology.",
    contact: { email: "unixsgamer27@gmail.com", facebook: "https://www.facebook.com/share/16WMtqLSCsg/" },
    skills: [
      skill("Creativity", "✧", "I enjoy exploring new ideas, expressing myself through art, and finding creative ways to approach tasks, solve problems, and develop innovative solutions in computer engineering."),
      skill("Adaptability", "↗", "I am willing to learn new technologies, adjust to different situations, and improve my skills when I face challenges in computer engineering."),
      skill("Artistic Ability", "✎", "I have an interest in art and drawing, and I want to develop my artistic skills by practicing and exploring different styles that can help me create creative designs and user-friendly computer interfaces.")
    ],
    projects: []
  },
  {
    id: "carl", name: "Carl Justine S. Alcantara", photo: "assets/alcantara.jpg",
    role: "Computer Engineering Student",
    intro: "Drawing, computer games, and learning how computers and devices work.",
    course: "BSCpE", year: "1st Year", age: "21",
    about: [
      "I am a Computer Engineering student who is interested in technology and learning new things. I enjoy exploring how computers and other devices work, and I want to continue improving my knowledge and skills as I work toward becoming a successful engineer.",
      "In my free time, I enjoy drawing and playing computer games. Drawing allows me to express my creativity, while computer games help me relax and have fun. My favorite food is adobo because I enjoy its delicious and savory taste.",
      "I consider myself a student who is still learning, growing, and discovering new interests. I believe that every experience is an opportunity to improve myself, gain knowledge, and prepare for my future career in engineering."
    ],
    interests: ["Computers and technology", "Programming and coding", "Electronics and computer hardware", "Learning new technical skills", "Exploring new technologies"],
    goals: "My goal is to graduate with a degree in Computer Engineering and develop the skills needed to become a professional engineer. I want to gain more knowledge and experience in technology, improve my abilities, and use what I learn to solve real-world problems.",
    contact: { email: "carljustinealcantara@gmail.com", facebook: "https://www.facebook.com/nklv74" },
    skills: [
      skill("Basic Computer Skills", "⌘"),
      skill("Basic HTML and CSS", "◇"),
      skill("Problem-Solving", "◎"),
      skill("Critical Thinking", "◉"),
      skill("Teamwork", "↗"),
      skill("Willingness to Learn", "✦")
    ],
    projects: []
  },
  {
    id: "andre", name: "Andre Allan N. Gonzalo", photo: "assets/gonzalo.jpg",
    role: "Computer Engineering Student",
    intro: "Full-time Computer Engineering student based in Rizal, Philippines.",
    course: "BSCpE", year: "1st Year", age: "18", location: "Rizal, Philippines",
    about: [
      "Hello! I am a full-time Computer Engineering student based in Rizal, Philippines. As an aspiring engineer, my curiosity lies in breaking down, exploring, and understanding how modern hardware, software, and physical tech systems function from the ground up. I am constantly expanding my skill set, eager to tackle complex challenges, and driven to build a successful career in the tech industry."
    ],
    interests: ["Programming", "Learning software and hardware", "Web development", "Technology"],
    goals: "My goal is to first build a solid foundation by gaining hands-on experience in hardware-software integration, mastering engineering principles, and turning everyday challenges into opportunities for growth. Moving forward, I aim to evolve into a skilled and innovative computer engineer who designs and builds meaningful, technology-driven solutions that positively impact communities and improve people's daily lives.",
    contact: { email: "andregonzalo012707@gmail.com", facebook: "https://www.facebook.com/andreallan.gonzalo" },
    skills: [
      skill("Basic Computer Skills", "⌘"),
      skill("Basic Electrical Wiring", "⌁"),
      skill("Continuous Learning", "✦"),
      skill("Team Collaboration", "↗")
    ],
    projects: []
  },
  {
    id: "kurt", name: "Kurt Edrian M. Unay", photo: "assets/unay.jpg",
    role: "Computer Engineering Student",
    intro: "Interested in networking, cybersecurity, and Linux.",
    course: "BSCpE", year: "1st Year", age: "19",
    about: [
      "I am a 1st-year Computer Engineering student who is interested in Networking and Cybersecurity. I want to learn how computer networks work, how devices communicate with each other, and how to protect systems from cyber threats. I am eager to develop my technical skills, explore new technologies, and gain more knowledge in these fields. My goal is to become a skilled professional who can help build secure and reliable computer networks in the future."
    ],
    interests: ["Computer Networking", "Cybersecurity", "Linux Operating System", "Computer Hardware", "Exploring new technologies"],
    goals: "My goal is to become a skilled Computer Engineer specializing in Networking and Cybersecurity. I aim to continuously improve my knowledge and skills, learn new technologies, and help protect computer systems and networks from cyber threats.",
    contact: { email: "kurtunay20@gmail.com", facebook: "https://www.facebook.com/share/19gGyhrgEc/" },
    skills: [
      skill("Basic Computer Skills", "⌘"),
      skill("Adaptability", "↗"),
      skill("Problem-Solving", "◎"),
      skill("Critical Thinking", "◉"),
      skill("Teamwork", "✦"),
      skill("Willingness to Learn", "◇")
    ],
    projects: [
      {
        id: "cane-sensor", title: "Bluetooth-Based Cane Sensor System", icon: "ϟ",
        period: "SHS Thesis | 2024–2025",
        summary: "A senior high school thesis exploring sensors and embedded technology in a cane system.",
        description: "The Bluetooth-Based Cane Sensor System is a senior high school thesis project developed to explore the use of sensors and embedded technology in a cane system. It uses an ultrasonic sensor and an ESP32 microcontroller to support its sensing functions. The prototype was tested, and its main functions worked during the project.",
        roles: ["Research and Documentation", "System Testing"],
        technologies: ["Ultrasonic Sensor", "ESP32", "Bluetooth"]
      }
    ]
  },
  {
    id: "cristian", name: "Cristian Cabatingan", photo: "",
    role: "Computer Engineering Student",
    intro: "Profile coming soon.",
    course: "BSCpE",
    about: ["This profile has not been filled in yet."],
    interests: [], goals: "", contact: {}, skills: [], projects: []
  }
];

// A skill card shows its name; clicking it opens the description.
function skill(name, icon, description = "") {
  return { id: slug(name), name, icon, description };
}
function slug(text) { return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }

const teamGrid = document.getElementById("teamGrid");
const homeView = document.querySelector(".home-view");
const profileView = document.getElementById("profileView");
const profileHeader = document.getElementById("profileHeader");
const profilePanel = document.getElementById("profilePanel");
const detailModal = document.getElementById("detailModal");
const modalContent = document.getElementById("modalContent");
const navLinks = document.getElementById("navLinks");
const menuToggle = document.getElementById("menuToggle");
let currentMember = null;
let currentTab = "about";
let lastModalTrigger = null;
let toastTimer = null;

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[char]));
}
function initials(name) { return name.split(/\s+/).filter(Boolean).slice(0, 2).map(part => part[0]).join(""); }

function renderTeamCards() {
  teamGrid.innerHTML = members.map((member, index) => `
    <div class="team-slot" style="animation-delay:${index * 70}ms">
      <button class="team-card" type="button" data-member="${member.id}" aria-label="Open portfolio for ${escapeHTML(member.name)}">
        <span class="team-photo${member.photo ? "" : " no-photo"}">
          ${member.photo
            ? `<img src="${escapeHTML(member.photo)}" alt="Portrait of ${escapeHTML(member.name)}" loading="lazy">`
            : `<span class="team-initials" aria-hidden="true">${escapeHTML(initials(member.name))}</span>`}
        </span>
        <span class="team-name">${escapeHTML(member.name)}</span>
        <span class="team-role">${escapeHTML(member.role)}</span>
        <span class="team-more"><span class="team-intro">${escapeHTML(member.intro)}</span></span>
        <span class="team-arrow" aria-hidden="true"><span>→</span></span>
      </button>
    </div>`).join("");
  lockTeamSlots();
}

// Each card sits in a fixed-height slot, so a hovered card can grow taller
// (to reveal its introduction) without pushing the rest of the page around.
function lockTeamSlots() {
  teamGrid.classList.remove("locked");
  teamGrid.querySelectorAll(".team-slot").forEach(slot => { slot.style.height = ""; });
  if (!window.matchMedia("(hover: hover)").matches) return;
  teamGrid.querySelectorAll(".team-slot").forEach(slot => {
    slot.style.height = slot.firstElementChild.offsetHeight + "px";
  });
  teamGrid.classList.add("locked");
}
window.addEventListener("resize", () => { if (!homeView.classList.contains("hidden")) lockTeamSlots(); });
window.addEventListener("load", lockTeamSlots);
if (document.fonts?.ready) document.fonts.ready.then(lockTeamSlots);

// Highlight one card and dim the rest while a card is hovered or focused.
function setActiveCard(card) {
  teamGrid.classList.toggle("has-active", Boolean(card));
  teamGrid.querySelectorAll(".team-card").forEach(c => c.classList.toggle("is-active", c === card));
}
teamGrid.addEventListener("mouseover", e => { const c = e.target.closest(".team-card"); if (c) setActiveCard(c); });
teamGrid.addEventListener("mouseleave", () => setActiveCard(null));
teamGrid.addEventListener("focusin", e => { const c = e.target.closest(".team-card"); if (c && e.target.matches(":focus-visible")) setActiveCard(c); });
teamGrid.addEventListener("focusout", () => setActiveCard(null));

function openMember(id, updateHistory = true) {
  const member = members.find(item => item.id === id);
  if (!member) return;
  currentMember = member;
  currentTab = "about";
  homeView.classList.add("hidden");
  profileView.classList.remove("hidden");
  profileHeader.innerHTML = `
    <div class="profile-heading">
      <div class="profile-avatar">${member.photo
          ? `<img src="${escapeHTML(member.photo)}" alt="Portrait of ${escapeHTML(member.name)}">`
          : escapeHTML(initials(member.name))}</div>
      <div>
        <div class="profile-kicker">${escapeHTML(member.role)}</div>
        <h1>${escapeHTML(member.name)}</h1>
        <p>${escapeHTML(member.intro)}</p>
        <div class="hero-meta" style="justify-content:flex-start;margin-top:14px">
          <span>${escapeHTML(member.course || "BSCpE")}</span>${member.year ? `<span class="meta-divider">/</span><span>${escapeHTML(member.year)}</span>` : ""}
        </div>
      </div>
    </div>`;
  document.querySelectorAll(".profile-tab").forEach(tab => {
    const active = tab.dataset.tab === currentTab;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
  });
  renderProfileTab();
  if (updateHistory) history.pushState({ member: member.id, tab: currentTab }, "", `#member/${member.id}/${currentTab}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
  closeMobileMenu();
}
function backToTeam(updateHistory = true) {
  closeModal(false);
  currentMember = null;
  homeView.classList.remove("hidden");
  profileView.classList.add("hidden");
  lockTeamSlots();
  if (updateHistory) history.pushState({ home: true }, "", "#home");
  window.scrollTo({ top: 0, behavior: "smooth" });
  closeMobileMenu();
}
function selectTab(tabName, updateHistory = true) {
  if (!currentMember) return;
  currentTab = tabName;
  document.querySelectorAll(".profile-tab").forEach(tab => {
    const active = tab.dataset.tab === tabName;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
  });
  renderProfileTab();
  if (updateHistory) history.pushState({ member: currentMember.id, tab: tabName }, "", `#member/${currentMember.id}/${tabName}`);
}

function sectionHeading(label, title, description = "") {
  return `<div class="section-heading"><span class="mini-label">${escapeHTML(label)}</span><h2>${escapeHTML(title)}</h2>${description ? `<p>${escapeHTML(description)}</p>` : ""}</div>`;
}
function renderProfileTab() {
  if (!currentMember) return;
  const m = currentMember;
  let html = "";
  if (currentTab === "about") {
    html = sectionHeading("A LITTLE INTRODUCTION", "About Me") + `
      <div class="about-grid">
        <article class="content-card"><h3>My story</h3>${(m.about || []).map(par => `<p>${escapeHTML(par)}</p>`).join("")}</article>
        <aside class="content-card"><h3>Profile snapshot</h3><ul class="fact-list">
          <li><span>Course</span><strong>${escapeHTML(m.course || "BSCpE")}</strong></li>
          ${m.year ? `<li><span>Year level</span><strong>${escapeHTML(m.year)}</strong></li>` : ""}
          ${m.age ? `<li><span>Age</span><strong>${escapeHTML(m.age)}</strong></li>` : ""}
          ${m.location ? `<li><span>Based in</span><strong>${escapeHTML(m.location)}</strong></li>` : ""}
        </ul></aside>
      </div>`;
  } else if (currentTab === "skills") {
    html = sectionHeading("WHAT I CAN DO", "Skills", "Select a skill card to open it.") +
      (m.skills?.length ? `<div class="skill-grid">${m.skills.map((s, i) => `
        <button class="skill-card" type="button" data-skill="${escapeHTML(s.id)}" style="animation-delay:${i * 45}ms" aria-haspopup="dialog">
          <span class="skill-icon" aria-hidden="true">${escapeHTML(s.icon)}</span><h3>${escapeHTML(s.name)}</h3>
          <span class="card-detail-link">View Details <span class="link-arrow" aria-hidden="true">↗</span></span>
        </button>`).join("")}</div>` : `<article class="content-card">No skills have been added yet.</article>`);
  } else if (currentTab === "projects") {
    html = sectionHeading("SELECTED WORK", "Projects", "Select a project card to open its full details.") +
      (m.projects?.length ? `<div class="project-grid">${m.projects.map((p, i) => `
        <button class="project-card" type="button" data-project="${escapeHTML(p.id)}" style="animation-delay:${i * 55}ms" aria-haspopup="dialog">
          ${projectCover(p)}
          <h3>${escapeHTML(p.title)}</h3>
          ${p.period ? `<p class="project-period">${escapeHTML(p.period)}</p>` : ""}
          <p>${escapeHTML(p.summary || p.description || "")}</p>
          <div>${(p.technologies || []).map(t => `<span class="tech-tag">${escapeHTML(t)}</span>`).join("")}</div>
          <span class="card-detail-link">View Project <span class="link-arrow" aria-hidden="true">↗</span></span>
        </button>`).join("")}</div>` : `<article class="content-card">No projects have been added yet.</article>`);
  } else if (currentTab === "interests") {
    html = sectionHeading("OUTSIDE THE CLASSROOM", "Interests") +
      (m.interests?.length ? `<div class="interest-grid">${m.interests.map((interest, i) => `<button type="button" class="interest-card" data-interest aria-pressed="false" style="animation:rise .4s ${i*35}ms backwards"><div class="interest-symbol" aria-hidden="true">${["✦","⌘","◇","◎","↗"][i%5]}</div><h3>${escapeHTML(interest)}</h3><span class="interest-check" aria-hidden="true">✓</span></button>`).join("")}</div>` : `<article class="content-card">No interests have been added yet.</article>`);
  } else if (currentTab === "goals") {
    html = sectionHeading("LOOKING AHEAD", "Career Goals") +
      (m.goals ? `<article class="goal-card"><span class="mini-label">MY NEXT CHAPTER</span><p>${escapeHTML(m.goals)}</p></article>` : `<article class="content-card">Career goals have not been added yet.</article>`);
  } else if (currentTab === "contact") {
    const contact = m.contact || {};
    const hasContact = contact.email || contact.facebook;
    html = sectionHeading("LET'S CONNECT", "Contact") + `
      <div class="contact-grid">
        <article class="contact-card"><h3>Contact details</h3>
          ${contact.email ? `<div class="contact-item"><small>Email</small><a href="mailto:${escapeHTML(contact.email)}">${escapeHTML(contact.email)}</a></div>` : ""}
          ${contact.facebook ? `<div class="contact-item"><small>Facebook</small><a href="${escapeHTML(contact.facebook)}" target="_blank" rel="noopener noreferrer">Open Facebook profile ↗</a></div>` : ""}
          ${hasContact ? "" : `<div class="contact-item"><span>Contact information not provided.</span></div>`}
        </article>
        ${contact.email ? `<article class="contact-card"><h3>Send a message</h3>
          <form class="contact-form" id="contactForm">
            <div class="form-row"><label>Your name<input name="name" required autocomplete="name" placeholder="Name"></label><label>Your email<input name="email" type="email" required autocomplete="email" placeholder="you@example.com"></label></div>
            <label>Message<textarea name="message" required placeholder="Write your message…"></textarea></label>
            <button class="primary-button" type="submit">Prepare email ↗</button>
            <p class="form-note">This website does not send messages itself. It opens your email app with a draft.</p>
          </form>
        </article>` : ""}
      </div>`;
  }
  profilePanel.innerHTML = html;
}

function projectCover(p, large = false) {
  return p.cover
    ? `<div class="project-art${large ? " large" : ""}"><img src="${escapeHTML(p.cover)}" alt="${escapeHTML(p.title)} cover image"></div>`
    : `<div class="project-art${large ? " large" : ""}" aria-hidden="true">${escapeHTML(p.icon || "▧")}</div>`;
}
const NOT_ADDED = `<p class="muted-note">Not added yet.</p>`;
function textBlock(title, text) {
  return `<h3>${title}</h3>${text ? `<p>${escapeHTML(text)}</p>` : NOT_ADDED}`;
}
function listBlock(title, items) {
  return `<h3>${title}</h3>${items?.length ? `<ul>${items.map(i => `<li>${escapeHTML(i)}</li>`).join("")}</ul>` : NOT_ADDED}`;
}
function tagBlock(title, items) {
  return `<h3>${title}</h3>${items?.length ? `<div>${items.map(t => `<span class="tech-tag">${escapeHTML(t)}</span>`).join("")}</div>` : NOT_ADDED}`;
}

function openSkill(skillId, trigger) {
  const sk = currentMember?.skills?.find(item => item.id === skillId);
  if (!sk) return;
  lastModalTrigger = trigger;
  modalContent.innerHTML = `
    <span class="modal-kicker">Skill</span>
    <h2 id="modalTitle"><span class="modal-icon" aria-hidden="true">${escapeHTML(sk.icon)}</span>${escapeHTML(sk.name)}</h2>
    ${sk.description ? `<p>${escapeHTML(sk.description)}</p>` : ""}
    <div class="modal-actions"><button type="button" class="primary-button" data-close-modal>Back to skills</button></div>`;
  showModal();
}

function openProject(projectId, trigger) {
  const p = currentMember?.projects?.find(item => item.id === projectId);
  if (!p) return;
  if (trigger) lastModalTrigger = trigger;
  const link = (url, label, missing) => url
    ? `<a class="primary-button" href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`
    : `<span class="stage-tag placeholder-tag">${missing}</span>`;
  modalContent.innerHTML = `
    <span class="modal-kicker">${escapeHTML(p.period || "Project details")}</span>
    <h2 id="modalTitle">${escapeHTML(p.title)}</h2>
    ${projectCover(p, true)}
    ${textBlock("Full description", p.description)}
    ${textBlock("Problem it solves", p.problem)}
    ${listBlock("Main features and functionality", p.features)}
    ${tagBlock("Technologies and tools", p.technologies)}
    ${listBlock("My role and contributions", p.roles)}
    <div class="modal-actions">
      ${link(p.demoUrl, "Live Demo", "Live demo not available yet")}
      ${link(p.sourceUrl, "Source Code", "Source code link not provided")}
      <button type="button" class="ghost-button" data-close-modal>Back to projects</button>
    </div>`;
  showModal();
}
function showModal() {
  detailModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  document.getElementById("modalClose").focus();
}
function closeModal(returnFocus = true) {
  if (detailModal.classList.contains("hidden")) return;
  detailModal.classList.add("hidden");
  document.body.style.overflow = "";
  if (returnFocus && lastModalTrigger?.isConnected) lastModalTrigger.focus();
  lastModalTrigger = null;
}
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3500);
}
function closeMobileMenu() {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
}

// Event delegation means newly rendered cards work without adding individual listeners.
teamGrid.addEventListener("click", event => {
  const card = event.target.closest("[data-member]");
  if (card) openMember(card.dataset.member);
});
document.querySelector(".profile-tabs").addEventListener("click", event => {
  const tab = event.target.closest("[data-tab]");
  if (tab) selectTab(tab.dataset.tab);
});
profilePanel.addEventListener("click", event => {
  const interestCard = event.target.closest("[data-interest]");
  if (interestCard) {
    const on = interestCard.classList.toggle("selected");
    interestCard.setAttribute("aria-pressed", String(on));
    return;
  }
  const skillCard = event.target.closest("[data-skill]");
  const projectCard = event.target.closest("[data-project]");
  if (skillCard) openSkill(skillCard.dataset.skill, skillCard);
  if (projectCard) openProject(projectCard.dataset.project, projectCard);
});
document.getElementById("backToTeam").addEventListener("click", () => backToTeam());
document.getElementById("brandLink").addEventListener("click", event => {
  event.preventDefault();
  backToTeam();
});
document.querySelector(".footer-brand").addEventListener("click", event => {
  event.preventDefault();
  backToTeam();
});
document.getElementById("modalClose").addEventListener("click", () => closeModal());
modalContent.addEventListener("click", event => {
  if (event.target.closest("[data-close-modal]")) closeModal();
  const rel = event.target.closest("[data-related]");
  if (rel) openProject(rel.dataset.related);
});
detailModal.addEventListener("click", event => {
  if (event.target === detailModal) closeModal();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    if (!detailModal.classList.contains("hidden")) closeModal();
    else closeMobileMenu();
  }
});

// The form prepares a mailto draft; it does not pretend to send through a backend.
profilePanel.addEventListener("submit", event => {
  if (event.target.id !== "contactForm") return;
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const subject = encodeURIComponent(`Portfolio message for ${currentMember.name}`);
  const body = encodeURIComponent(`From: ${data.get("name")} (${data.get("email")})\n\n${data.get("message")}`);
  window.location.href = `mailto:${currentMember.contact.email}?subject=${subject}&body=${body}`;
  showToast("Opening your email app. Your message has not been sent by this website.");
});

// Mobile navigation and section shortcuts work on the currently selected member.
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});
navLinks.addEventListener("click", event => {
  const link = event.target.closest("a");
  if (!link) return;
  event.preventDefault();
  const targetTab = link.dataset.sectionLink;
  if (targetTab && currentMember) selectTab(targetTab);
  else if (targetTab && !currentMember) {
    showToast("Choose a team member first to explore their " + targetTab + " section.");
  } else {
    backToTeam();
  }
  closeMobileMenu();
});
document.getElementById("themeToggle").addEventListener("click", () => {
  const root = document.documentElement;
  const light = root.dataset.theme !== "light";
  root.dataset.theme = light ? "light" : "dark";
  localStorage.setItem("team5-theme", root.dataset.theme);
  document.getElementById("themeIcon").textContent = light ? "☾" : "☼";
  document.getElementById("themeToggle").setAttribute("aria-label", light ? "Switch to dark theme" : "Switch to light theme");
});
function initializeTheme() {
  const saved = localStorage.getItem("team5-theme");
  const theme = saved === "light" ? "light" : "dark";
  document.documentElement.dataset.theme = theme;
  document.getElementById("themeIcon").textContent = theme === "light" ? "☾" : "☼";
  document.getElementById("themeToggle").setAttribute("aria-label", theme === "light" ? "Switch to dark theme" : "Switch to light theme");
}

// Browser back/forward restores the correct member and section.
window.addEventListener("popstate", event => {
  const state = event.state;
  if (state?.member) {
    openMember(state.member, false);
    if (state.tab) selectTab(state.tab, false);
  } else {
    backToTeam(false);
  }
});
function restoreFromHash() {
  const match = location.hash.match(/^#member\/([^/]+)(?:\/([^/]+))?$/);
  if (match) {
    openMember(match[1], false);
    if (match[2]) selectTab(match[2], false);
  }
}
function updateClock() {
  const now = new Date();
  document.getElementById("liveDate").textContent = new Intl.DateTimeFormat(undefined, {
    weekday: "long", year: "numeric", month: "long", day: "numeric"
  }).format(now);
  document.getElementById("liveTime").textContent = new Intl.DateTimeFormat(undefined, {
    hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: "short"
  }).format(now);
}

renderTeamCards();
initializeTheme();
updateClock();
setInterval(updateClock, 1000);
document.getElementById("year").textContent = new Date().getFullYear();
restoreFromHash();
