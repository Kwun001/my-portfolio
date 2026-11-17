/* effects.js: interactions (copy email, button ripple, scroll effects, fade-in, glow) */


/* ==================================================================
   "Copy email" button
   ================================================================== */

$("#copy").onclick = async () => {
    try {
        await navigator.clipboard.writeText(D.email);
        toast("Email copied");
    } catch (error) {
        // Clipboard can be blocked, so show the address instead
        toast(D.email);
    }
};


/* ==================================================================
   Ripple effect when a button is clicked
   ================================================================== */

document.addEventListener("click", event => {
    const button = event.target.closest(".btn");
    if (!button) return;

    const box = button.getBoundingClientRect();
    const radius = Math.max(box.width, box.height) / 4;

    const ripple = document.createElement("span");
    ripple.className = "rip";
    ripple.style.cssText = `
        width: ${radius * 2}px;
        height: ${radius * 2}px;
        left: ${event.clientX - box.left - radius}px;
        top: ${event.clientY - box.top - radius}px;`;

    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
});


/* ==================================================================
   Scroll features: progress bar, back-to-top button, active menu link
   ================================================================== */

const progressBar = $("#bar");
const topButton = $("#top");

addEventListener("scroll", () => {
    const page = document.documentElement;
    const scrollable = page.scrollHeight - page.clientHeight || 1;

    progressBar.style.transform = `scaleX(${page.scrollTop / scrollable})`;
    topButton.classList.toggle("show", page.scrollTop > 600);
}, { passive: true });

topButton.onclick = () => scrollTo({ top: 0 });

// Highlight the menu link of the section currently in view
const menuLinks = [...document.querySelectorAll("#menu a")];

const sectionWatcher = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        menuLinks.forEach(link => {
            link.classList.toggle("on", link.hash === `#${entry.target.id}`);
        });
    });
}, { rootMargin: "-45% 0px -50% 0px" });

sections.forEach(([id]) => sectionWatcher.observe($(`#${id}`)));


/* ==================================================================
   Fade-in when a section scrolls into view, and animated counters
   ================================================================== */

// Count from 0 up to the number over 1.2 seconds
function countUp(element) {
    const target = +element.dataset.n;
    const suffix = element.dataset.s;
    const start = performance.now();

    function step(now) {
        const progress = Math.min((now - start) / 1200, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        element.textContent = Math.round(target * eased) + suffix;
        if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
}

// Run a function once, the first time each element becomes visible
function onFirstVisible(elements, action, threshold) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            action(entry.target);
            observer.unobserve(entry.target);
        });
    }, { threshold });

    elements.forEach(element => observer.observe(element));
}

onFirstVisible(
    document.querySelectorAll(".rv"),
    element => element.classList.add("in"),
    0.15
);

onFirstVisible(document.querySelectorAll("[data-n]"), countUp, 0);


/* ==================================================================
   Soft light that follows the pointer
   ================================================================== */

addEventListener("pointermove", event => {
    document.body.style.setProperty("--mx", `${event.clientX}px`);
    document.body.style.setProperty("--my", `${event.clientY}px`);
}, { passive: true });
