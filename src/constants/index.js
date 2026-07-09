export const PERSONAL_INFO = {
  name: "Jesulona Joshua",
  fullName: "Odelade Jesulona Joshua",
  title: "Frontend Engineer",
  location: "Lagos, Nigeria",
  email: "odeladejesulona@gmail.com",
  phone: "+234 816 014 7822",
  bio: "Frontend Engineer with 4+ years of experience building user-centric web applications.",
  tagline: "Transforming Concept into Seamless User Experiences",
  yearsOfExperience: "4+",
  github: "https://github.com/Joshjay05",
  linkedin: "https://linkedin.com/in/jesulona-joshua",
  portfolio: "https://j-portfolio-lyart.vercel.app/",
};

export const NAVIGATION_LINKS = [
  { name: "About", href: "#about", number: "01" },
  { name: "Skills", href: "#skills", number: "02" },
  { name: "Experience", href: "#experience", number: "03" },
  { name: "Projects", href: "#projects", number: "04" },
  { name: "Contact", href: "#contact", number: "05" },
];

export const SKILLS = {
  frontend: [
    {
      name: "React.js",
      icon: "React",
      level: 95,
      experience: "4+ years",
      proficiency: "Expert",
    },
    {
      name: "JavaScript",
      icon: "FileCode",
      level: 95,
      experience: "4+ years",
      proficiency: "Expert",
    },
    {
      name: "TypeScript",
      icon: "Typescript",
      level: 90,
      experience: "2+ years",
      proficiency: "Advanced",
    },
    {
      name: "Next.js",
      icon: "Next",
      level: 90,
      experience: "3+ years",
      proficiency: "Advanced",
    },
    {
      name: "Tailwind CSS",
      icon: "Tailwind",
      level: 95,
      experience: "3+ years",
      proficiency: "Expert",
    },
    {
      name: "Zustand",
      icon: "Zustand",
      level: 85,
      experience: "2+ years",
      proficiency: "Advanced",
    },
  ],
  backend: [
    {
      name: "REST APIs",
      icon: "Database",
      level: 90,
      experience: "3+ years",
      proficiency: "Advanced",
    },
  ],
  tools: [
    {
      name: "Git & GitHub",
      icon: "GitBranch",
      level: 90,
      experience: "4+ years",
      proficiency: "Advanced",
    },
    {
      name: "Responsive Design",
      icon: "Responsive",
      level: 95,
      experience: "4+ years",
      proficiency: "Expert",
    },
    {
      name: "Figma",
      icon: "Figma",
      level: 95,
      experience: "4+ years",
      proficiency: "Expert",
    },
    {
      name: "Vite",
      icon: "Vite",
      level: 85,
      experience: "3+ years",
      proficiency: "Advanced",
    },
  ],
};

export const EXPERIENCES = [
  {
    id: 1,
    company: "Hoperays",
    role: "Frontend Engineer",
    location: "Lagos, Nigeria",
    period: "March 2025 - Present",
    current: true,
    description: [
      "Lead Frontend Engineer at Hoperays driving end-to-end development of multiple complex web applications. Specializing in architecting scalable front-end solutions and optimizing internal business workflows through strategic UI/UX enhancements and process streamlining.",
    ],
    technologies: ["React", "TypeScript", "TanStack Query", "Tailwind CSS"],
  },
  {
    id: 2,
    company: "Switchive",
    role: "Frontend Engineer",
    location: "Lagos, Nigeria",
    period: "May 2024 - Feb 2025",
    current: false,
    description: [
      "Co-developed the administrative dashboard for a crypto-payment e-commerce platform, specifically engineering the end-to-end product management module.",
    ],
    technologies: ["React", "JavaScript", "TanStack Query", "Tailwind CSS"],
  },
  {
    id: 3,
    company: "GWCTechSchoolAfrica",
    role: "Frontend Engineer",
    location: "Lagos, Nigeria",
    period: "Oct 2023 - May 2024",
    current: false,
    description: [
      "Engineered responsive company website using React.js, significantly boosting performance and user engagement.",
    ],
    technologies: ["React", "Next.js", "Redux", "Material-UI"],
  },
  {
    id: 4,
    company: "Echete Academy",
    role: "React.js Instructor",
    location: "Lagos, Nigeria",
    period: "Nov 2023 - Jan 2024",
    current: false,
    description: [
      "Delivered comprehensive training on core frontend technologies, equipping students with practical skills to excel in web development.",
    ],
    technologies: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    id: 5,
    company: "Tm30Global Limited",
    role: "Frontend Engineer (Intern)",
    location: "Lagos, Nigeria",
    period: "Aug 2022 - Jun 2023",
    current: false,
    description: [
      "Assisted in the development of a web-based platform using React.js, enhancing interactivity and user experience.",
    ],
    technologies: ["React", "JavaScript", "Redux", "CSS"],
  },
];

export const PROJECTS = {
  featured: [
    {
      id: 1,
      title: "Mylabscope",
      description:
        "Multi-tenancy platform connecting labs, hospitals, organizations, and patients. Enables test ordering, approval workflows, and result management.",
      technologies: [
        "React",
        "TypeScript",
        "TanStack Query",
        "Tailwind CSS",
        "Redux",
      ],
      live: "https://mylabscope.com",
      media: {
        type: "video",
        src: "/videos/labscope.mp4",
        poster: "/images/labscope.png",
      },
    },
    {
      id: 2,
      title: "VidaBridge",
      description:
        "Health platform designed to bridge healthcare services with modern technology solutions (Ongoing).",
      technologies: ["React", "TypeScript", "TanStack Query", "Tailwind CSS"],
      live: "https://vidabridge.com",
      media: {
        type: "image",
        src: "/images/vida.png",
      },
    },
    {
      id: 3,
      title: "Hoperays Health",
      description: "Hoperays official website.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "HTML"],
      live: "https://www.hoperays.org/",
      media: {
        type: "video",
        src: "/videos/vida.mp4",
      },
    },
    {
      id: 4,
      title: "Candela Photography",
      description:
        "Modern photography website showcasing stunning portfolios with elegant design and smooth user experience.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "HTML"],
      live: "https://www.candelacreative.ca/",
      media: {
        type: "image",
        src: "/images/candela.png",
      },
    },
    {
      id: 5,
      title: "E-Commerce Admin Panel",
      description:
        "Centralized dashboard designed to help administrators manage and monitor various aspects of an online store efficiently.",
      technologies: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Redux",
        "TanStack Query",
      ],
      live: "https://switchive.com/",
      media: {
        type: "video",
        src: "/videos/admin-panel.mp4",
        poster: "/images/admin-panel.png",
      },
    },
    {
      id: 6,
      title: "GWCTechSchoolAfrica",
      description:
        "Tech school website for students who want to start or advance their careers in technology.",
      technologies: [
        "React",
        "JavaScript",
        "styled-components",
        "Material-UI",
        "HTML",
      ],
      live: "https://gwctechschoolafrica.com/",
      media: {
        type: "image",
        src: "/images/gwc.jpg",
      },
    },
    {
      id: 7,
      title: "TM30 Academy",
      description:
        "Academic website for aspiring tech students to launch their careers with project-based learning.",
      technologies: ["React", "JavaScript", "CSS", "HTML"],
      live: "https://tm30-academy.vercel.app/",
      media: {
        type: "image",
        src: "/images/tm30.jpg",
      },
    },
    {
      id: 8,
      title: "Everywherewegoconsulting",
      description:
        "Travel agency platform for all types of travel services and bookings.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "HTML"],
      live: "https://edu-travels.vercel.app/",
      media: {
        type: "image",
        src: "/images/everyconsult.jpg",
      },
    },
    {
      id: 9,
      title: "Itsehekiri Association",
      description:
        "Association website celebrating and promoting Itsehekiri heritage and culture.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "HTML"],
      live: "https://association-omega.vercel.app/",
      media: {
        type: "image",
        src: "/images/association.jpg",
      },
    },
    {
      id: 10,
      title: "Coffee Shop",
      description:
        "Coffee shop website with a unique coffee menu and ordering system.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "HTML"],
      live: "https://coffee-shop-orcin-gamma.vercel.app/",
      media: {
        type: "image",
        src: "/images/coffee.jpg",
      },
    },
  ],
};

export const SOCIAL_LINKS = [
  { name: "GitHub", url: "https://github.com/Joshjay05", icon: "Github" },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/jesulona-joshua",
    icon: "Linkedin",
  },
  { name: "Email", url: "mailto:odeladejesulona@gmail.com", icon: "Mail" },
  {
    name: "Portfolio",
    url: "https://j-portfolio-lyart.vercel.app/",
    icon: "ExternalLink",
  },
];
