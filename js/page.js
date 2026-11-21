/* page.js: fills every page section from your data (data/ folder) */


/* ==================================================================
   Helpers shared by every script
   ================================================================== */

// Short form of document.querySelector
const $ = selector => document.querySelector(selector);

// All your content (loaded from the files in data/)
const D = DATA;

// Small message that appears at the bottom of the screen
let toastTimer;

function toast(message) {
    const box = $("#toast");

    box.textContent = message;
    box.classList.add("show");

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => box.classList.remove("show"), 2200);
}


/* ==================================================================
   Hero: name, headline, status and quick facts
   ================================================================== */

document.title = `${D.name} – ${D.title}`;

$("#logo").textContent = D.name;
$("#status").textContent = `${D.status} · ${D.location}`;
$("#lede").textContent = D.tagline;

// The last two words of the headline get the gradient colour
$("#h1").innerHTML = D.headline.replace(/(\S+\s*\S*)$/, "<em>$1</em>");

// Quick facts: a number counts up, text is shown as it is
$("#stats").innerHTML = D.stats.map(stat => {
    if (typeof stat.value === "number") {
        return `
            <div>
                <b data-n="${stat.value}" data-s="${stat.suffix || ""}">0</b>
                <span>${stat.label}</span>
            </div>`;
    }

    return `
        <div>
            <b>${stat.value}</b>
            <span>${stat.label}</span>
        </div>`;
}).join("");


/* ==================================================================
   About: bio paragraphs and spoken languages
   ================================================================== */

$("#bio").innerHTML = D.bio
    .map(paragraph => `<p>${paragraph}</p>`)
    .join("");

$("#langs").innerHTML = D.languages
    .map(lang => `
        <div class="lang">
            <b>${lang.name}</b>
            <span>${lang.level}</span>
        </div>`)
    .join("");


/* ==================================================================
   Skills: hard skills with level bars, soft skills as tags
   ================================================================== */

function skillMeter(skill) {
    return `
        <div class="meter">
            <div>
                <b>${skill.name}</b>
                <span>${skill.level}%</span>
            </div>
            <div class="track">
                <div class="fill" style="--w:${skill.level}%"></div>
            </div>
        </div>`;
}

$("#hard").innerHTML = D.hardSkills
    .map(group => `
        <h3>${group.group}</h3>
        ${group.items.map(skillMeter).join("")}`)
    .join("");

$("#soft").innerHTML = `
    <h3>Soft skills</h3>
    <div class="tags" style="margin-top:0">
        ${D.softSkills
            .map(skill => `<span class="tag" style="font-size:.9rem;padding:8px 14px">${skill}</span>`)
            .join("")}
    </div>`;


/* ==================================================================
   Education
   ================================================================== */

const educationItems = (D.education || []).map(item => ({
    role: item.degree,
    company: item.school,
    period: item.period,
    points: item.points || []
}));

/* ==================================================================
   Work Experience
   ================================================================== */

const experienceItems = D.experience || [];

/* ==================================================================
   Timeline Item Renderer
   ================================================================== */

function timelineItem(item) {
    const points = (item.points || [])
        .map(point => `<li>${point}</li>`)
        .join("");

    return `
        <li>
            <time>${item.period}</time>
            <h3>${item.role}</h3>
            <div class="co">${item.company}</div>
            ${points ? `<ul>${points}</ul>` : ""}
        </li>`;
}

/* ==================================================================
   Render Separate Timelines
   ================================================================== */

$("#education-list").innerHTML =
    educationItems.map(timelineItem).join("");

$("#jobs").innerHTML =
    experienceItems.map(timelineItem).join("");


/* ==================================================================
   Certifications, awards and badges
   ================================================================== */
$("#awards").innerHTML = D.achievements
    .map((award, index) => `
        <div class="card badge">
            <div class="ico">${award.icon}</div>
            <div>
                <h3>${award.title}</h3>
                <p>${award.issuer}</p>
                <small>${award.year}</small>
                ${award.image ? `<button class="chip cert-btn" data-i="${index}">View certificate</button>` : ""}
            </div>
        </div>`)
    .join("");

// Click "View certificate" to see the whole picture in the popup
$("#awards").onclick = event => {
    const button = event.target.closest(".cert-btn");
    if (!button) return;

    const award = D.achievements[button.dataset.i];

    $("#dbody").innerHTML = `
        <h3>${award.title}</h3>
        <p>
            ${award.issuer} · ${award.year} ·
            <a href="${award.image}" target="_blank" rel="noopener">Open full size</a>
        </p>
        <img class="cert-img" src="${award.image}" alt="${award.title} certificate" title="Click to zoom">`;

    // Click the picture to switch between "fit in window" and "zoomed"
    $(".cert-img").onclick = event => event.target.classList.toggle("zoom");

    dlg.onkeydown = null;   // remove the project gallery's arrow-key handler
    dlg.showModal();
};

/* ==================================================================
   Contact section, social links and footer
   ================================================================== */

$("#links").innerHTML = D.links
    .map(link => `<a href="${link.url}">${link.label}</a>`)
    .join("");

$("#ctaText").textContent = D.contactText;
$("#mail").href = `mailto:${D.email}`;
$("#foot").textContent = `© ${new Date().getFullYear()} ${D.name}`;


/* ==================================================================
   Top menu. Each item is [section id, label]. Rename or reorder them here
   ================================================================== */

const sections = [
    ["about", "About"],
    ["skills", "Skills"],
    ["projects", "Projects"],
    ["background", "Background"],
    ["achievements", "Awards"],
    ["contact", "Contact"]
];

$("#menu").innerHTML = sections
    .map(([id, label]) => `<li><a href="#${id}">${label}</a></li>`)
    .join("");
