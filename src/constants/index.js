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
      url: "https://www.linkedin.com/in/cris-deine-pomperada-37496727a",
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

import cppLogo from "../assets/utilities/c++.png";
import rubyLogo from "../assets/utilities/ruby.png";
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
import vuejsLogo from "../assets/utilities/vuejs.png";
import railsLogo from "../assets/utilities/rails.png";
import graphqlLogo from "../assets/utilities/graphql.png"
import cloudLogo from "../assets/utilities/cloudinary.png"
import laravelLogo from "../assets/utilities/Laravel.png";
import reactLogo from "../assets/utilities/react.png";
import bootstrapLogo from "../assets/utilities/bootstrap.png";
import postgresqlLogo from "../assets/utilities/postgresql.png";
import ndmuLogo from "../assets/utilities/NDMU.avif";
import diabetesImg from "../assets/projects/diabetes_pred.png";
import strayImg from "../assets/projects/stray.png";
import mbcImg from "../assets/projects/mbc.png";
import no404 from "../assets/projects/404.png";

// Programming Languages
const programmingLogos = [
  cppLogo,
  dartLogo,
  javaLogo,
  jsLogo,
  pythonLogo,
  phpLogo,
  rubyLogo,
  htmlLogo,
  css3Logo,
];

// Technologies / Frameworks
const utilityLogos = [
  flutterLogo,
  laravelLogo,
  reactLogo,
  nodejsLogo,
  bootstrapLogo,
  railsLogo,
  vuejsLogo,
  graphqlLogo,
];

// Databases
const databaseLogos = [
  mongodbLogo,
  mysqlLogo,
  firebaseLogo,
  postgresqlLogo,
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
    /* {
      title: "Full-Stack Internship at ChatGenie",
      start: "July 2025",
      end: "August 2025",
      description:
        "Built a full-stack dating application with Vue.js and Ruby on Rails (GraphQL), featuring real-time chat, user profiles, and Cloudinary-powered photo management.",
      logo: [vuejsLogo, railsLogo, graphqlLogo, cloudLogo],
      certificate: "",
      modal: "",
    }, */
  ],
};

// projects
const projects = [
  {
    title: "AI Model for Diabetes Prediction",
    description:
      "Developed and optimized a diabetes prediction AI model using Logistic Regression with Elastic Net, benchmarking performance with key metrics and visualizing results in Python (Jupyter, Matplotlib, Seaborn).",
    url: {
      github: "",
      live: "",
    },
    image: diabetesImg,
    languages: ["Python", "Jupyter Notebook", "HTML", "CSS"],
    live: false,
  },
  {
    title: "Grading System",
    description:
      "Built a college grading system using Laravel (backend), Filament (admin panel), and Bootstrap (frontend) to manage student scores and automate grade computation per semester based on configurable criteria.",
    url: {
      github:
        "https://github.com/Deineee/grading",
      live: "lakbaymarista.online",
    },
    image: no404,
    languages: ["PHP", "Laravel", "Filament", "MySQL", "Bootstrap"],

    live: false,
  },
  {
    title: "Pet Adoption App",
    description:
      "Developed a mobile pet adoption app with Flutter and Firebase, allowing users to easily browse, search, and apply to adopt pets.",
    url: {
      github: "",
      live: "",
    },
    image: strayImg,
    languages: ["Flutter", "Dart", "Firebase"],

    live: false,
  },
  {
    title: "MBC's ERP System",
    description:
      "Designing and building the backend of a scalable and modular ERP system using Node.js, Express.js, and MongoDB, all within an Agile development workflow.",
    url: {
      github: "",
      live: "",
    },
    image: mbcImg,
    languages: ["Node.js", "Express.js", "MongoDB"],

    live: false,
  },
  {
    title: "Club Payment System",
    description:
      "Contributed as a backend developer to a school digital payment system using Laravel, implementing authentication, payments, and financial reporting for improved transparency.",
    url: {
      github: "https://github.com/DizzyCheems/Club-Payment-System",
      live: "",
    },
    image: no404,
    languages: ["Laravel", "PHP", "MySQL"],

    live: false,
  },
  {
    title: "LLM Prompt Optimization Toolkit",
    description:
      "Developed a Python-based prompt optimization toolkit with Pandas and Ollama’s LLaMA 3 API to test, compare, and log prompts for improved summarization performance.",
    url: {
      github: "https://github.com/Deineee/prompt-optimization-toolkit",
      live: "",
    },
    image: no404,
    languages: ["Python", "Llama 3 API", "HTML", "JavaScript", "CSS"],

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
  databaseLogos,
};
