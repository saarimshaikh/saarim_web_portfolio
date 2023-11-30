import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
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
  carrent,
  jobit,
  tripguide,
  threejs,
  ai,
  expense,
  travel,
  amphisoft,
  pantech,
  
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Machine Learning",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    title: "Machine Learning Intern",
    company_name: "Pantech E-Learning",
    icon: pantech,
    iconBg: "#383E56",
    date: "Feb 2022 - March 2022",
    points: [
      "During the time of internship, I have learned about image processing and computer vision using Machine learning and deep learning with the help of Python language",
      "I have applied the learning from this internship in my final year project, using computer vision, image processing, and other Deep learning algorithms.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Python Intern",
    company_name: "Amphisoft Technologies",
    icon: amphisoft,
    iconBg: "#E6DEDD",
    date: "May 2021 - June 2021",
    points: [
      "Learned and implemented Object-Oriented Programming concepts in Python language.",
      "Applied those concepts while working on a project named Bank Account Management System which helped me in making my concepts clear.",
      "Worked in a team and learned about team ethics.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "Attentive and active student who participated in almost all the activities conducted during lectures while I was his teacher. Also impressed by his performance during End-Term examination by which he secured A+ grade in my respective subject.",
    name: "Neha",
    designation: "Former assistant faculty",
    company: "LPU",
    image: "",
  },
  {
    testimonial:
      "Good creative and critical thinking which helped a lot during final year Capstone project by which he was able to secure O(outstanding) grade.",
    name: "Amarsh Raj",
    designation: "Faculty",
    company: "LPU",
    image: "",
  },
  {
    testimonial:
      "Team player who is always ready to help",
    name: "Ahmed",
    designation: "Faculty",
    company: "LPU",
    image: "",
  },
];

const projects = [
  {
    name: "Ai Text Summerizer",
    description:
      "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ai,
    source_code_link: "https://github.com/saarimshaikh/Ai_summerizer.git",
  },
  {
    name: "Expense Tracker",
    description:
      "Created a web app fully mobile responsive which helps the user to keep track of their expenses with the power of JavaScript and VueJs.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Vue",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: expense,
    source_code_link: "https://github.com/saarimshaikh/Expense_tracker.git",
  },
  {
    name: "Travel Expert",
    description:
      "Created a lading page for travel explorers with most in demand framework ReactJs and React Hooks for state management.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: travel,
    source_code_link: "https://github.com/saarimshaikh/Travel_UI-UX_app.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
