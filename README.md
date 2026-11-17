# [Chan Kah Wun] – Portfolio

My personal portfolio website. It shows my projects, skills, education
and certifications. [Live site](https://your-link-here)

## Built with

- **HTML** – page structure
- **CSS** – styling, dark theme, responsive layout
- **JavaScript** (no frameworks) – content rendering, project filters,
  screenshot gallery, scroll animations
- **Google Fonts** – Manrope and JetBrains Mono

## Features

- Dark, responsive design that works on phone and desktop
- Project filters by category, with a detail popup for each project
- Screenshot gallery with arrows, thumbnails and captions
- Certificate viewer
- All content kept in `data/`, so adding a project needs no code changes

## Run it locally

Download or clone the repository and open `index.html` in a browser.
No installation needed.

## Project structure

```
index.html          page structure
data/               all my content
  profile.js        personal info, skills, languages
  projects.js       projects
  background.js     education, experience, awards
css/                styles (base, header, sections, projects, effects)
js/                 behaviour (page, projects, effects)
images/
  projects/         project screenshots, one folder per project
  certs/            certificate images
assets/
  resume.pdf        my résumé
```

## How to update (notes for myself)

| I want to...                    | Edit                              |
|---------------------------------|-----------------------------------|
| Change name, bio, links, skills | `data/profile.js`                 |
| Add a project                   | `data/projects.js`                |
| Add screenshots                 | put files in `images/projects/<project>/`, then list them in `data/projects.js` |
| Add education or an award       | `data/background.js`              |
| Change colors or fonts          | top of `css/base.css`             |
| Update my résumé                | replace `assets/resume.pdf`       |

## Contact

[kahwun.chan@gmail.com] · [www.linkedin.com/in/chankahwun] · [https://github.com/Kwun001]