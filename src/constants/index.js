import project1 from "../assets/projects/project-1.jpeg";
import project2 from "../assets/projects/project-2.jpeg";
import project3 from "../assets/projects/project-3.jpeg";

export const HERO_CONTENT = `I'm a dedicated software developer with a strong foundation in frontend development and a passion for crafting seamless user experiences. Proficient in React, JavaScript, and modern CSS frameworks like MUI and Tailwind CSS, I bring designs to life with clean, efficient code. My experience includes working on dynamic projects, from developing mental health tracking apps to creating artist-focused platforms. With a solid grasp of Agile methodologies and a commitment to continuous learning, I thrive in collaborative environments, always eager to tackle new challenges. `;

export const EXPERIENCES = [
  {
    year: "Oct 2023 - Apr 2024",
    role: "Sofware Engineer [ Internship ]",
    company: "IF Solutions",
    description: [
      "Developed and maintained web applications using React.js.",
      "Worked on backend development with Flask to build RESTful APIs.",
      "Collaborated with the design team to implement responsive UI components using MUI.",
      "Participated in Agile development processes and sprint planning.",
      "Enhanced application performance and resolved bugs.",
    ],
    technologies: ["HTML", "React.js", "Flask", "MUI"],
  },
];

export const PROJECTS = [
  {
    title: "Medica - Mental Health Status Tracking App for Cardiac Patients",
    image: project1,
    description:
      "Medica is a mental health status tracking application designed for cardiac patients who have been in hospitals for extended periods. It allows relevant doctors to monitor and manage the mental health of these patients while they receive care for their physical health.",
    technologies: ["HTML", "MUI", "React", "Flask", "MongoDB"],
  },
  {
    title: "Fanatismo - To read, post and know about your favourite artists",
    image: project2,
    description:
      "An application for uploading and reading posts and articles, featuring tools for creating and managing content.",
    technologies: ["HTML", "Bootstrap", "React"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Vite", "React", "Tailwind CSS"],
  },
];

export const CONTACT = {
  address: "NSBM Green University, Pitipana - Thalagala Rd, Homagama",
  phoneNo: "+94 76 611 7497",
  email: "ishadihandapangoda@gmail.com",
};
