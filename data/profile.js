/* profile.js: personal info, quick facts, bio, skills and languages */


/* ==================================================================
  Personal info: name, headline, contact, links, quick facts and bio
   ================================================================== */

const DATA = {
  name: "Chan Kah Wun",
  title: "Software Engineering Student",
  headline: "I’m a Software Engineering Student Passionate About Building Practical Solutions.",
  tagline: "I enjoy developing applications that solve real-world problems and continuously improving my technical skills. I’m seeking an internship opportunity to apply my knowledge, gain industry experience, and contribute to a development team.",
  location: "Kuala Lumpur, Malaysia",
  status: "Open to internships",
  email: "kahwun.chan@gmail.com",
  contactText: "I’m currently open to internship opportunities and would be happy to connect. Feel free to reach out!",
  links: [
    { label: "GitHub", url: "https://github.com/Kwun001" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/chankahwun"},
    { label: "Resume", url: "assets/Chan_Kah_Wun_Resume.pdf" },
    { label: "Whatsapp", url: "https://wa.me/601137329033" }

  ],

  /* Quick facts under the hero. Text works here; a number (no quotes) counts up. */
  stats: [
    { value: "Bachelor of Science (Hons) in Software Engineering", label: "Asia Pacific University of Technology and Innovation (APU)" },
    { value: "2028", label: "Expected graduation" },
    { value: "Software Development Internship", label: "Currently looking for" }
  ],

  bio: [
    "I’m a second-year Software Engineering student at Asia Pacific University (APU), interested in full-stack web development and building practical applications. I enjoy working through the development process, from turning ideas into functional features to understanding how different parts of a system work together.",
    "Beyond academic projects, I participated in the Malaysia Software Testing Cup 2026 and attended an AWS workshop to explore cloud engineering. I also enjoy learning through online courses, technology talks and industry events. I’m always open to exploring new technologies, gaining different experiences and growing as a software engineer."
  ],
};


/* ==================================================================
   Hard skills, soft skills and languages
   ================================================================== */

Object.assign(DATA, {
  hardSkills: [
    {
      group: "Frontend Development",
      items: [
        { name: "HTML", level: 80 },
        { name: "CSS", level: 80 },
        { name: "JavaScript", level: 75 }
      ]
    },
    {
      group: "Backend Development",
      items: [
        { name: "PHP", level: 75 },
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 75 }
      ]
    },
    {
      group: "Programming Languages",
      items: [
        { name: "Python", level: 75 },
        { name: "Java", level: 70 },
        { name: "C++", level: 60 }
      ]
    },
    {
      group: "Database Management",
      items: [
        { name: "MySQL", level: 80 }
      ]
    }
  ],



  softSkills: ["Teamwork", "Communication", "Problem solving", "Leadership", "Continuous Learning"],

  languages: [
    { name: "English", level: "Conversational" },
    { name: "Malay", level: "Conversational" },
    { name: "Mandarin", level: "Native" },
    { name: "Cantonese", level: "Conversational" }
  ],
});
