import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  sih,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  swatchta,
  amp,
  whiteboard,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Node.js",
    color: "text-[#659A58]",
  },
  {
    title: "React.js",
    color: "text-[#000000]",
  },
  {
    title: "Php",
    color: "text-[#000000]",
  },

];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Smart India Hackathon-2022",
    company_name: "Starbucks",
    icon: sih,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "SIH2022, the world's largest hackathon organized by Government of india, brought together some of the brightest minds from across the globe to tackle real-world challenges. The competition was intense, with thousands of teams vying for a spot in the finals. After weeks of hard work and dedication, my team and I were thrilled to learn that we had qualified for the final round, securing a place among the top 5 teams.",
      "In the final round, our team focused on addressing the challenge of household garbage collection. We developed an AI-based solution that could detect garbage and track real-time garbage truck movement. The solution also included a credit-based system that incentivized people to properly dispose of their waste and earned them credits that could be used to avail other services.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Swatchta",
    description:
      "Work on AI-based platform for garbage collection. Citizens can request pickup and receive credits, ensuring active participation in cleanliness. The system uses AI to detect genuine garbage images and includes features such as real-time garbage truck tracking and a waste identifier. The platform is a comprehensive solution to address garbage collection and minimize environmental impact. Our innovative approach has the potential to make a positive impact on communities worldwide.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "Mysql",
        color: "orange-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "text-[#f72a13]",
      },
    ],
    image: swatchta,
    source_code_link: "https://github.com/itssagar11/swatchta",
  },
  {
    name: "AMP News CMS",
    description:
      "Developed an AMP-based News Management System for mobile users with quick news-reading experience. The system has user-friendly features like easy news article creation, OTP-based login, SMTP email integration, and user access control. AdSense ads management and SEO optimization, including sitemap generator, enhance user engagement and revenue generation. Integrate analytics to track user engagement, device, and operating system data merged by city. We added set corn jobs for SMTP mail system.",
    tags: [
      {
        name: "Php",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "text-[#faff00]",
      },
      {
        name: "AMP",
        color: "pink-text-gradient",
      },
    ],
    image: amp,
    source_code_link: "https://github.com/",
  },
  {
    name: "Collaborative Whiteboard",
    description:
      "Developed a Whiteboard Web Application for real-time collaboration and drawing. It supports multiple users to work on a shared whiteboard, allowing for seamless collaboration and brainstorming.it utilizes web sockets (socket.io) for real-time communication between users, ensuring that changes are visible instantly. This Whiteboard Web Application is a versatile tool for remote collaboration and teamwork, making it a valuable addition to any organization.",
    tags: [
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Canvas",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "black-text-gradient",
      },
    ],
    image: whiteboard,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
