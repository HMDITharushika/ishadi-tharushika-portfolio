import portfolio from "../assets/projects/portfolio.png";
import aerotech from "../assets/projects/aero-tech.png";
import medica from "../assets/projects/medica.png";
import fanatismo from "../assets/projects/fanatismo.png";

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
    technologies: [
      "HTML",
      "CSS",
      "React.js",
      "API Integration",
      "Flask",
      "MUI",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "Created a personal portfolio website using React, Vite, and Tailwind CSS, featuring smooth Framer Motion animations to enhance user experience. The site showcases my projects with an engaging, responsive design, ensuring optimal performance across all devices. This portfolio reflects my skills and creativity as a developer, providing visitors with a visually appealing and interactive browsing experience.",
    technologies: [
      "Vite",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
    ],
    weburl: "#",
  },
  {
    title: "Aero Tech",
    image: aerotech,
    description:
      "Developed a fully responsive web application using React and Tailwind CSS, with Figma for interface design. This app fetches and displays test data from a third-party API, utilizing React Hooks for streamlined state management and data handling. The design, crafted in Figma, ensures a seamless and visually appealing user experience across all devices.",
    technologies: [
      "Vite",
      "React",
      "Tailwind CSS",
      "API Integration",
      "Responsive Design",
    ],
    weburl: "#",
  },
  {
    title: "Medica - Mental Health Status Tracking App for Cardiac Patients",
    image: medica,
    description:
      "Medica is a mental health status tracking application designed for cardiac patients who have been in hospitals for extended periods. It allows relevant doctors to monitor and manage the mental health of these patients while they receive care for their physical health.",
    technologies: ["HTML", "MUI", "React", "Flask", "MongoDB"],
    weburl: "#",
  },
  {
    title: "Fanatismo - To read, post and know about your favourite artists",
    image: fanatismo,
    description:
      "An application for uploading and reading posts and articles, featuring tools for creating and managing content.",
    technologies: ["HTML", "Bootstrap", "React"],
    weburl: "#",
  },
];

export const CONTACT = {
  address: "NSBM Green University, Pitipana - Thalagala Rd, Homagama",
  phoneNo: "+94 76 611 7497",
  email: "ishadihandapangoda@gmail.com",
};
