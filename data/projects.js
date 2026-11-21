/* Projects. Copy one block to add another. Screenshots go in the images/ folder. */
Object.assign(DATA, {
  /* ---------- PROJECTS: copy one block to add another ---------- */
  projects: [
    {
      title: "Travooli",
      year: 2025,
      summary: "A travel and tourism website that allows users to book flights and hotels.",
      details: "Travooli is a team-based web application developed to provide users with a platform for booking flights and hotels. I contributed to database design and the frontend and backend development of several system modules.",
      role: "Full-Stack Developer & Database Designer",
      team: "6 people",
      duration: "4 months",
      problem: "Users need a convenient platform to search for and book travel services, including flights and hotels.",
      solution: "Developed a travel and tourism website that provides flight and hotel booking services, supported by different management modules.",
      features: [
        "Flight and Hotel Booking",
        "Report Management",
        "Payment Overview",
        "Refund Overview",
        "User Management"],
      learned: [
        "Designing database structures and relationships based on system requirements.",
        "Developing frontend and backend functionalities for different system modules.",
        "Understanding how different modules work together within a web application.",
        "Collaborating with team members throughout the development process."
      ],
      tags: ["Web app", "Team project"],
      stack: ["HTML", "CSS", "JavaScript","PHP","MySQL","XAMPP", "phpMyAdmin"],
      link: "#",
      repo: "#",
      video: "",
      /* Add as many screenshots as you like. A caption is optional. */
      images: [
        { src: "images/projects/Travooli/Travooli User Landing Page.png", caption: "User Landing Page" },
        { src: "images/projects/Travooli/Travooli Payment Page.png", caption: "Payment Overview Page" },
        { src: "images/projects/Travooli/Travooli Refund Page.png", caption: "Refund Overview Page" },
        { src: "images/projects/Travooli/Travooli User Management.png", caption: "User Management Page" },
        { src: "images/projects/Travooli/Travooli Delete Popup.png", caption: "Delete User Confirmation Popup" }
      ]
    },
    {
      title: "pyBattler",
      year: 2026,
      summary: "A QR-based educational game designed to help students practise Python programming concepts through interactive gameplay.",
      details: "pyBattler is a team-based educational game that combines physical cards with a web application. Players scan QR codes on physical cards to perform in-game actions and answer Python programming questions. I contributed to the database design and frontend and backend development.",
      role: "Full-Stack Developer & Database Designer",
      team: "6 people",
      duration: "4 months",
      problem: "Beginners may find learning programming concepts challenging through traditional learning methods, which can make practising and applying their knowledge less engaging.",
      solution: "Developed an interactive educational game that combines physical QR cards, programming questions and turn-based gameplay to encourage students to practise Python control flow concepts.",
      features: [
        "QR Code Card Scanning",
        "Python Programming Questions",
        "Turn-Based Gameplay",
        "Player Health and Card Management",
        "Game Room Management",
        "Leaderboard and Game History",
        "User and Admin Management"
      ],
      learned: [
        "Designing database structures and relationships based on system requirements.",
        "Developing frontend and backend functionalities using Node.js and Express.",
        "Integrating QR code scanning with web application functionality.",
        "Implementing game logic and managing player actions.",
        "Collaborating with team members throughout the development process."
      ],
      tags: ["Web app", "Solo Project"],
      stack: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "Pug", "MySQL", "XAMPP", "phpMyAdmin"],
      link: "",
      repo: "https://github.com/Kwun001/pyBattler",
      video: "",
      images: [
        { src: "", caption: "" }
      ]
    }
  ],
});
