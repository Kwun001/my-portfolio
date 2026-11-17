/* projects.js: project cards, filters, project popup and screenshot gallery */


/* ==================================================================
   Project cards and the filter buttons above them
   ================================================================== */

// Filter buttons are built from the tags used in your projects
const projectTags = [
    "All",
    ...new Set(D.projects.flatMap(project => project.tags || []))
];

$("#filters").innerHTML = projectTags
    .map((tag, index) => `
        <button class="chip${index === 0 ? " on" : ""}" data-t="${tag}">${tag}</button>`)
    .join("");

$("#projGrid").innerHTML = D.projects
    .map((project, index) => `
        <button class="card proj" data-i="${index}" data-tags="${(project.tags || []).join("|")}">
            <span class="yr">${project.year}</span>
            <h3>${project.title}</h3>
            <p>${project.summary}</p>
            <div class="tags">
                ${project.stack.map(tech => `<span class="tag">${tech}</span>`).join("")}
            </div>
            <span class="more">View details</span>
        </button>`)
    .join("");

// Clicking a filter button shows only the projects with that tag
$("#filters").onclick = event => {
    const chip = event.target.closest(".chip");
    if (!chip) return;

    document.querySelectorAll(".chip").forEach(other => {
        other.classList.toggle("on", other === chip);
    });

    document.querySelectorAll(".proj").forEach(card => {
        const tags = card.dataset.tags.split("|");
        const hidden = chip.dataset.t !== "All" && !tags.includes(chip.dataset.t);

        card.classList.toggle("hide", hidden);
    });
};


/* ==================================================================
   Builds the HTML shown inside the project popup
   ================================================================== */

// A screenshot can be a plain path or { src, caption }
const projectImages = project => (project.images || []).map(image =>
    typeof image === "string" ? { src: image, caption: "" } : image
);

// Screenshot gallery: slides, arrows, thumbnails and caption
function galleryHTML(project) {
    const images = projectImages(project);
    const hasMany = images.length > 1;
    const hasCaptions = images.some(image => image.caption);

    const slides = images.length
        ? images.map((image, i) => `
            <img src="${image.src}"
                 alt="${image.caption || `${project.title} screenshot ${i + 1}`}"
                 ${i === 0 ? "" : "hidden"}>`).join("")
        : `<div class="ph">Add screenshots in data/projects.js</div>`;

    const arrows = hasMany ? `
        <button class="gb p" aria-label="Previous screenshot">‹</button>
        <button class="gb n" aria-label="Next screenshot">›</button>` : "";

    const thumbs = hasMany ? `
        <div class="thumbs">
            ${images.map((image, i) => `
                <button ${i === 0 ? 'class="on"' : ""} aria-label="Show screenshot ${i + 1}">
                    <img src="${image.src}" alt="">
                </button>`).join("")}
        </div>` : "";

    const caption = hasCaptions
        ? `<p class="cap" id="cap">${images[0].caption || ""}</p>`
        : "";

    return `
        <div class="gal" id="gal">${slides}${arrows}</div>
        ${thumbs}
        ${caption}`;
}

// Small facts row: type, duration, team, year
function metaHTML(project) {
    const facts = [
        ["Type", project.role],
        ["Duration", project.duration],
        ["Team", project.team],
        ["Year", project.year]
    ].filter(([, value]) => value);

    if (!facts.length) return "";

    return `
        <div class="meta">
            ${facts.map(([label, value]) => `
                <div>
                    <small>${label}</small>
                    <b>${value}</b>
                </div>`).join("")}
        </div>`;
}

// Helpers: a block is only shown when it has content
const block = (title, content) => content
    ? `<div class="blk"><h4>${title}</h4>${content}</div>`
    : "";

const paragraph = text => text ? `<p>${text}</p>` : "";

const bulletList = items => items && items.length
    ? `<ul>${items.map(item => `<li>${item}</li>`).join("")}</ul>`
    : "";

// Buttons are hidden when the link is empty or "#"
const linkButton = (url, label, isMain) => url && url !== "#"
    ? `<a class="btn${isMain ? " main" : ""}" href="${url}" target="_blank" rel="noopener">${label}</a>`
    : "";

function projectHTML(project) {
    const techTags = project.stack
        .map(tech => `<span class="tag">${tech}</span>`)
        .join("");

    return `
        ${galleryHTML(project)}
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
        ${metaHTML(project)}
        ${block("Overview", paragraph(project.details))}
        ${block("The problem", paragraph(project.problem))}
        ${block("My approach", paragraph(project.solution))}
        ${block("Key features", bulletList(project.features))}
        ${block("What I learned", bulletList(project.learned))}
        ${block("Built with", `<div class="tags" style="margin-top:0">${techTags}</div>`)}
        <div class="btns" style="margin-top:28px">
            ${linkButton(project.link, "Live demo", true)}
            ${linkButton(project.video, "Watch video")}
            ${linkButton(project.repo, "Source code")}
        </div>`;
}


/* ==================================================================
   Screenshot gallery behaviour: arrows, thumbnails, captions, keyboard
   ================================================================== */

function initGallery(project) {
    const images = projectImages(project);
    if (images.length < 2) return;

    const gallery = $("#gal");
    const slides = [...gallery.querySelectorAll("img")];
    const thumbs = [...document.querySelectorAll(".thumbs button")];
    const caption = $("#cap");
    let current = 0;

    function show(index) {
        // Wrap around at both ends
        current = (index + slides.length) % slides.length;

        slides.forEach((slide, i) => slide.hidden = i !== current);
        thumbs.forEach((thumb, i) => thumb.classList.toggle("on", i === current));

        if (caption) caption.textContent = images[current].caption || "";
        thumbs[current].scrollIntoView({ block: "nearest", inline: "nearest" });
    }

    gallery.querySelector(".p").onclick = () => show(current - 1);
    gallery.querySelector(".n").onclick = () => show(current + 1);
    thumbs.forEach((thumb, i) => thumb.onclick = () => show(i));

    dlg.onkeydown = event => {
        if (event.key === "ArrowRight") show(current + 1);
        if (event.key === "ArrowLeft") show(current - 1);
    };
}


/* ==================================================================
   Opens and closes the project popup
   ================================================================== */

const dlg = $("#dlg");

// Click a project card to open its popup
$("#projGrid").onclick = event => {
    const card = event.target.closest(".proj");
    if (!card) return;

    const project = D.projects[card.dataset.i];

    $("#dbody").innerHTML = projectHTML(project);
    initGallery(project);
    dlg.showModal();
};

// Close with the X button or by clicking outside the popup
$("#dx").onclick = () => dlg.close();

dlg.onclick = event => {
    if (event.target === dlg) dlg.close();
};
