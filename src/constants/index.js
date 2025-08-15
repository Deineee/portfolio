const tagline = {
  tag: "#full-stack #softwaredev #backend-dev #computer-science-graduate",
};

const scope = {};
const person = {
  name: {
    fname: "CRIS DEINE",
    lname: "POMPERADA",
    get fullname() {
      return `${this.fname} ${this.lname}`;
    },
  },
  photo: {
    img: "../src/assets/bg_deine.jpg",
    border: "../src/assets/border.gif",
  },
  bio: {
    birth: "June 19, 2003",
    citizenship: "Filipino",
    location: {
      country: "Philippines",
      province: "South Cotabato",
      city: "Koronadal",
      get loc() {
        return `${this.city} , ${this.province} , ${this.country}`;
      },
    },
  },

  socials: {
    github: {
      name: "github",
      label: "Github",
      title: "Github Profile",
      icon: "fab fa-github",
      url: "https://github.com/Deineee",
    },
    facebook: {
      name: "facebook",
      label: "Facebook",
      title: "facebook Profile",
      icon: "fab fa-facebook",
      url: "https://www.facebook.com/crisdeine.pomperada/",
    },
    linkedin: {
      name: "linkedin",
      label: "LinkedIn",
      title: "LinkedIn Profile",
      icon: "fab fa-linkedin",
      url: "linkedin.com/in/cris-deine-pomperada-37496727a",
    },
  },
};

const info = {
  titleDesc:
    "I’m Cris Deine Pomperada — a Computer Science graduate on a quest to build impactful digital solutions, from backend systems to AI and mobile apps, one pixel at a time.",
};

const typedTitle = {
  title: [
    { text: "FULL-STACK DEVELOPER", color: "text-amber-400" },
    { text: "SOFTWARE DEVELOPER", color: "text-blue-400" },
    { text: "BACKEND DEVELOPER", color: "text-pink-400" },
    { text: "CS GRADUATE", color: "text-green-400" },
  ],
};

const navLink = [
  {
    id: "about",
    name: "About",
  },
  {
    id: "timeline",
    name: "Timeline",
  },
  {
    id: "skills",
    name: "Skills",
  },
  {
    id: "projects",
    name: "Projects",
  },
  {
    id: "contact",
    name: "Contact",
  },
];
const about = {
  bio: {
    aboutme: `I’m Cris Deine Pomperada, whose path into technology began in an unexpected way back in high school. I wasn’t sure what course to take in college, but my love for gaming and technology sparked a curiosity about how machines worked. That curiosity led me to experiment, explore, and teach myself programming — turning a simple hobby into a passion for creating solutions that make a real impact.

Since then, I’ve worked on backend systems, AI-powered projects, and mobile applications. I’ve built grading and tabulation systems, business management tools, and even developed a full-stack dating app during my internship — taking it from concept to deployment.

I’m driven by continuous learning, problem-solving, and collaboration, always aiming to create functional, efficient, and user-friendly products. My mission is to keep growing as a developer and use technology to make everyday tasks easier, smarter, and more impactful. `
,
    objective:
      "A Computer Science graduate with hands-on experience in backend development, AI projects, and mobile applications. Skilled in building systems ranging from grading and business management tools to full-stack apps and ERP platforms, with a focus on creating efficient, scalable, and user-friendly solutions.",
    scopes: [
      { text: "Backend Developer" },
      { text: "Full Stack Developer" },
      { text: "Mobile App Developer" },
      { text: "AI/ML Developer" },
      { text: "API Developer (REST & GraphQL)" },
      { text: "Database Designer" },
      { text: "Web App Developer" },
    ],
  },
};
import cLogo from "../assets/utilities/c.png";
import cppLogo from "../assets/utilities/c++.png";
import dartLogo from "../assets/utilities/dart.png";
import javaLogo from "../assets/utilities/java.png";
import jsLogo from "../assets/utilities/js.png";
import phpLogo from "../assets/utilities/PHP-logo.svg.png";
import htmlLogo from "../assets/utilities/html5.png";
import css3Logo from "../assets/utilities/css3.jpg";
import mysqlLogo from "../assets/utilities/mysq-logo.png";
import flutterLogo from "../assets/utilities/Flutter_logo.svg.png";
import firebaseLogo from "../assets/utilities/firebase.png";
import nodejsLogo from "../assets/utilities/nodejs.png";
import expressLogo from "../assets/utilities/expressjs.png";
import mongodbLogo from "../assets/utilities/mongodb.svg";
import pythonLogo from "../assets/utilities/python.png";
import ndmuLogo from "../assets/utilities/NDMU.avif";
import lakbayImg from "../assets/projects/lakbaymarista.png";
import customerImg from "../assets/projects/customersegmentation.png";
import no404 from "../assets/projects/404.png";

// Programming Languages
const programmingLogos = [
  cLogo,
  cppLogo,
  dartLogo,
  javaLogo,
  jsLogo,
  pythonLogo,
  phpLogo,
  htmlLogo,
  css3Logo,
  mysqlLogo,
  nodejsLogo,
];

// Utilities
const utilityLogos = [
  flutterLogo,
  firebaseLogo,
  expressLogo,
];

const timeline = {
  education: [
    {
      school: "Notre Dame of Marbel University (NDMU)",
      degree: "Computer Science (Degree Holder)",
      start: "2021",
      graduated: "2025",
      description:
        "Completed a rigorous curriculum in algorithms, data structures, and software engineering.",
      logo: [ndmuLogo],
      certificate: "",
      modal: "",
    },
  ],
  experience: [
    {
      title: "Full-Stack Internship at Eulap",
      start: "June 2024",
      end: "August 2024",
      description:
        "Developed real-time scoring and results platforms for the 2024 SOXITECH Startup Hackathon and the 2024 T’nalak Festival Street Dancing Competition using PHP, HTML, CSS, JavaScript, MySQL, Flutter, and Firebase.",
      logo: [phpLogo, htmlLogo, jsLogo, css3Logo, mysqlLogo, flutterLogo, firebaseLogo],
      certificate: "",
      modal: "",
    },
    {
      title: "Backend Developer (Freelancing)",
      start: "Februay 205",
      end: "July 2025",
      description:
        "Developed the backend architecture of a scalable, modular ERP system at Metrix Bolts Center using Node.js, Express.js, and MongoDB, collaborating with frontend React developers for seamless API integration.",
      logo: [nodejsLogo, expressLogo, mongodbLogo],
      certificate: "",
      modal: "",
    },
    {
      title: "IT Technician",
      start: "2020",
      end: "Present",
      description:
        "Assembled custom PCs, managed networks, troubleshooted hardware/software issues, and provided end-user support.",
      logo: "",
      certificate: "",
      modal: "",
    },
    {
      title: "PC Builder",
      start: "2020",
      end: "Present",
      description:
        "Built performance desktop rigs from the ground up, selecting optimal components and ensuring system stability.",
      logo: "",
      certificate: "",
      modal: "",
    },
    {
      title: "Full-Stack Engineer Internship",
      start: "June 2024",
      end: "August 2024",
      description:
        "Contributed to full-stack features, wrote unit tests, and collaborated with senior engineers on code reviews.",
      logo: [jsLogo, pythonLogo, dartLogo],
      certificate: "",
      modal: "",
    },
  ],
};

const projects = [
  {
    title: "Lakbay Marista",
    description:
      "Lakbay Marista is your one‑stop digital travel guide to the most captivating sights around the Mindanao region. From the serene shores of Lake Holon and the thundering cascades of Seven Falls, to hidden cultural monuments and family‑friendly resorts, Lakbay Marista curates each destination with beautiful photography, authentic local insights, and real traveler ratings. Use our intuitive filters—Popular, Featured, New, or All—to quickly discover the perfect spot for your next adventure, then dive into detailed location info and reviews so you can plan your trip with confidence. Whether you’re a weekend wanderer or an off‑the‑beaten‑path explorer, Lakbay Marista brings the best of South Cotabato province right to your fingertips.",
    url: {
      github: "https://github.com/benajtil/lakbaymarista-tourist",
      live: "lakbaymarista.online",
    },
    image: lakbayImg,
    languages: ["PHP", "HTML", "CSS", "JAVASCRIPT", "MySQL"],

    live: true,
  },
  {
    title: "Customer Segmentation",
    description:
      "Developed as part of our Thesis at Notre Dame of Marbel University, this PHP‑powered web application delivers a comprehensive, responsive admin dashboard that lets you drill into every table and record—customers, orders, products, users—and filter, sort, search, or export on demand; it also displays real‑time site metrics such as total customers, sales, and active sessions, while providing full user administration to create, edit, or revoke access for any number of admin or staff accounts. Beyond the LAMP‑stack front end, the repository includes a Python module built on pandas and scikit‑learn that preprocesses raw transaction data and applies the DBSCAN algorithm—using both RFM and LRFMP feature sets—to uncover natural customer clusters, which can then be visualized or fed back into the PHP dashboard for targeted marketing campaigns. Although the system has been discontinued following our successful thesis defense, it remains a complete full‑stack illustration of how to integrate a classic PHP/MySQL dashboard with a modern data‑science backend for real‑world customer‑segmentation workflows.",
    url: {
      github:
        "https://github.com/benajtil/Customer-Segmentation-in-Online-Retail-using-DBSCANS.git",
      live: "lakbaymarista.online",
    },
    image: customerImg,
    languages: ["PHP", "HTML", "CSS", "JAVASCRIPT", "PYTHON", "MySQL"],

    live: false,
  },
  {
    title: "Tabulation System",
    description:
      "The Tnalak Festival Tabulation System is a PHP‑based web application designed to manage and score entries in both the Float Competition and Civic Competition. It supports local data storage via SQLite for offline use and central synchronization with MySQL for permanent record‑keeping. Administrators can log in to manage contestants, judges, and scoring criteria, then generate printed score sheets and final ranking reports.",
    url: {
      github: "https://github.com/benajtil/tnalak-admin.git",
      live: "lakbaymarista.online",
    },
    image: no404,
    languages: ["PHP", "HTML", "CSS", "JAVASCRIPT", "SQLite", "MySQL"],

    live: false,
  },
];
export {
  person,
  scope,
  tagline,
  typedTitle,
  info,
  navLink,
  about,
  programmingLogos,
  utilityLogos,
  timeline,
  projects,
};
