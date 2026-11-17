/* background.js: education, experience, certifications and awards */


/* ==================================================================
   Education, plus internships, clubs, volunteering and part-time work
   ================================================================== */

Object.assign(DATA, {
  /* ---------- EDUCATION ---------- */
  education: [
    {
      degree: "Bachelor Science (Hons) in Software Engineering",
      school: "Asia Pacific Univerity of Technology and Innovation (APU)",
      period: "Feb 2026 - May 2028 (expected)",
      points: [
        "CGPA 3.77 / 4.00 (up to Semester 1)", 
        "Relevant courses: Data Structures, Databases, Web Development"
      ]
    },
    {
      degree: "Diploma ",
      school: "Asia Pacific Univerity of Technology and Innovation (APU)",
      period: "Aug 2023 - Sept 2025",
      points: ["CGPA 3.67 / 4.00"]
    },
    {
      degree: "Sijil Pelajaran Malaysia (SPM)",
      school: "SMK Damai Jaya, Johor",
      period: "2018-2023",
      points: [
        "9As", 
      ]
    }
  ],

  /* ---------- EXPERIENCE: internships, clubs, volunteering, part-time work ---------- */
  experience: [
    {
      role: "QA Intern",
      company: "Jom eInvoice Sdn Bhd",
      period: "Sept 2025 - Jan 2026",
      points: [
        "Performed User Acceptance Testing (UAT) and regression testing to verify system functionality and identify defects.",
        "Designed and executed test cases to validate application features and business requirements.",
        "Conducted API testing using Postman to verify API requests, responses and data accuracy.",
        "Tracked and reported defects, assisted with issue verification and supported software release documentation."
      ]
    }
  ],
});


/* ==================================================================
   Certifications, awards and badges
   ================================================================== */

Object.assign(DATA, {
  /* ---------- CERTIFICATIONS, AWARDS AND BADGES ---------- */
  achievements: [
    { icon: "🎓", 
      title: "APU Scholarships & Merit Awards", 
      issuer: "Asia Pacific University of Technology & Innovation (APU)", 
      year: "2023-Present",
      image:""
    },
    { icon: "🏆",
       title: "Malaysia Testing Cup 2026 - Participant", 
       issuer: "Malaysia Software Testing Board (MSTB)", 
       year: 2026,
       image:""
      }
  ]
});
