export const PERSONAL_INFO = {
  name: "Jesulona Joshua",
  fullName: "Odelade Jesulona Joshua",
  title: "Frontend Engineer",
  location: "Lagos, Nigeria",
  email: "odeladejesulona@gmail.com",
  phone: "+234 816 014 7822",
  bio: "Frontend Engineer with 4+ years of experience building user-centric web applications. Proficient in React, Next.js, TypeScript, Zustand, and Redux, excelling at translating business requirements into intuitive, high-performance interfaces.",
  tagline:
    "I craft exceptional digital experiences that merge beautiful design with powerful functionality.",
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
    { name: "React", icon: "⚛️", level: 95 },
    { name: "Next.js", icon: "▲", level: 90 },
    { name: "React Native", icon: "📱", level: 85 },
    { name: "TypeScript", icon: "💠", level: 90 },
    { name: "JavaScript", icon: "🟨", level: 95 },
  ],
  stateManagement: [
    { name: "Redux", icon: "🔮", level: 90 },
    { name: "Zustand", icon: "🐻", level: 85 },
    { name: "TanStack Query", icon: "🔄", level: 88 },
    { name: "Context API", icon: "🎯", level: 92 },
  ],
  styling: [
    { name: "Tailwind CSS", icon: "💨", level: 95 },
    { name: "Material-UI", icon: "🎨", level: 85 },
    { name: "SCSS/SASS", icon: "🎀", level: 90 },
    { name: "Styled Components", icon: "💅", level: 82 },
  ],
  tools: [
    { name: "Git & GitHub", icon: "📊", level: 90 },
    { name: "Jest", icon: "🃏", level: 80 },
    { name: "Webpack/Vite", icon: "📦", level: 85 },
    { name: "Figma", icon: "🎯", level: 75 },
  ],
};

export const EXPERIENCES = [
  {
    id: 1,
    company: "Switchive",
    role: "Frontend Engineer",
    location: "Lagos, Nigeria",
    period: "May 2024 - Present",
    current: true,
    description: [
      "Streamlined internal processes and enhanced UI/UX to improve efficiency of business management workflows",
      "Developed feature-rich e-commerce admin panel with comprehensive product management, user administration, and order fulfillment",
      "Integrated data-driven insights through analytics dashboards, improving decision-making capabilities",
      "Collaborated with product and backend teams in Agile/Scrum environment",
      "Implemented RESTful APIs using TanStack Query for efficient server state management",
      "Delivered new features on schedule while maintaining high code quality standards",
    ],
    technologies: [
      "React",
      "TypeScript",
      "TanStack Query",
      "Tailwind CSS",
      "REST APIs",
      "Chart.js",
    ],
    highlights: [
      "Built admin panel serving 500+ daily users",
      "Reduced page load time by 40%",
      "Implemented real-time analytics dashboard",
    ],
  },
  {
    id: 2,
    company: "GWCTechSchoolAfrica",
    role: "Frontend Engineer",
    location: "Lagos, Nigeria",
    period: "Oct 2023 - May 2024",
    current: false,
    description: [
      "Engineered responsive company website using React.js, significantly boosting performance and user engagement",
      "Developed and maintained comprehensive dashboard system for students and teachers",
      "Automated academic operations improving engagement metrics by 35%",
      "Collaborated with design team to implement pixel-perfect UI components",
      "Optimized application performance reducing load times by 45%",
      "Participated in code reviews maintaining high coding standards",
    ],
    technologies: [
      "React",
      "Next.js",
      "Redux",
      "SCSS",
      "Material-UI",
      "REST APIs",
    ],
    highlights: [
      "45% improvement in load times",
      "35% increase in user engagement",
      "Zero critical bugs in production",
    ],
  },
  {
    id: 3,
    company: "Echete Academy",
    role: "React.js Instructor",
    location: "Lagos, Nigeria",
    period: "Nov 2023 - Jan 2024",
    current: false,
    description: [
      "Mentored 30+ aspiring developers in frontend concepts and React.js fundamentals",
      "Delivered comprehensive lessons covering latest React features and industry best practices",
      "Created hands-on projects and coding challenges to reinforce learning",
      "Conducted interactive coding sessions and live debugging workshops",
      "Provided personalized code reviews and career guidance",
      "Developed curriculum focusing on practical, real-world applications",
    ],
    technologies: ["React", "JavaScript", "HTML", "CSS", "Git", "VSCode"],
    highlights: [
      "Trained 30+ developers",
      "95% student satisfaction rate",
      "Published 20+ tutorial resources",
    ],
  },
  {
    id: 4,
    company: "Tm30Global Limited",
    role: "Frontend Engineer (Intern)",
    location: "Lagos, Nigeria",
    period: "Aug 2022 - Jun 2023",
    current: false,
    description: [
      "Developed scalable academic website using React.js improving student engagement through interactive features",
      "Collaborated closely with backend engineers to integrate APIs ensuring seamless data flow",
      "Learned and applied industry best practices in frontend development",
      "Contributed to team projects and feature development",
      "Gained hands-on experience with version control and Agile workflows",
      "Built strong foundation in React ecosystem and modern web development",
    ],
    technologies: ["React", "JavaScript", "Redux", "CSS", "Git", "REST APIs"],
    highlights: [
      "Completed 10+ features",
      "First production deployment",
      "Learned professional workflows",
    ],
  },
];

export const PROJECTS = {
  featured: [
    {
      id: 1,
      title: "E-Commerce Admin Panel",
      description:
        "Comprehensive admin dashboard for e-commerce management featuring real-time analytics, inventory tracking, order management, and user administration. Built with enterprise-grade patterns and optimized for performance.",
      longDescription:
        "A full-featured e-commerce administration platform that handles complex workflows including product management, multi-variant inventory, order fulfillment, customer analytics, and payment processing. Implements advanced state management patterns and real-time data synchronization.",
      technologies: [
        "React",
        "TypeScript",
        "TanStack Query",
        "Tailwind CSS",
        "Chart.js",
        "Recharts",
      ],
      features: [
        "Real-time inventory management",
        "Advanced analytics dashboard",
        "Order tracking and fulfillment",
        "User role management",
        "Payment integration",
      ],
      github: "https://github.com/Joshjay05",
      live: "#",
      // 🎥 ADD YOUR VIDEO LINK HERE FOR ADMIN DASHBOARD!
      videoUrl: "", // Example: 'https://youtube.com/watch?v=YOUR_VIDEO_ID'
      image: "/projects/ecommerce.jpg",
      category: "Web Application",
    },
    {
      id: 2,
      title: "Student & Teacher Dashboard",
      description:
        "Integrated educational platform with separate portals for students and teachers featuring course management, progress tracking, assignment submissions, and real-time communication tools.",
      longDescription:
        "A comprehensive Learning Management System (LMS) that bridges the gap between educators and students. Features include course creation, content delivery, assessment tools, progress analytics, and interactive communication channels.",
      technologies: [
        "Next.js",
        "Redux",
        "Material-UI",
        "Node.js",
        "REST API",
        "SCSS",
      ],
      features: [
        "Course management system",
        "Assignment submission & grading",
        "Real-time notifications",
        "Progress analytics",
        "Interactive messaging",
      ],
      github: "https://github.com/Joshjay05",
      live: "#",
      // 🎥 ADD YOUR VIDEO LINK HERE!
      videoUrl: "", // Example: 'https://drive.google.com/file/d/YOUR_FILE_ID/view'
      image: "/projects/lms.jpg",
      category: "Education Platform",
    },
    {
      id: 3,
      title: "Tech School Website",
      description:
        "Modern, responsive website for GWCTechSchoolAfrica showcasing programs, achievements, and team. Optimized for SEO, accessibility, and mobile performance with smooth animations.",
      longDescription:
        "A professionally designed company website featuring program showcases, enrollment systems, blog integration, and dynamic content management. Built with modern web standards focusing on performance and user experience.",
      technologies: [
        "React",
        "Next.js",
        "Framer Motion",
        "Tailwind CSS",
        "Contentful CMS",
      ],
      features: [
        "Dynamic content management",
        "SEO optimization",
        "Mobile-first design",
        "Smooth page transitions",
        "Blog integration",
      ],
      github: "https://github.com/Joshjay05",
      live: "#",
      videoUrl: "", // You can add video here too!
      image: "/projects/website.jpg",
      category: "Corporate Website",
    },
  ],
  other: [
    {
      id: 4,
      title: "Task Management App",
      description:
        "Productivity application with drag-and-drop functionality, task prioritization, and team collaboration features.",
      technologies: ["React", "Redux", "DnD Kit", "Tailwind CSS"],
      github: "https://github.com/Joshjay05",
      category: "Productivity",
    },
    {
      id: 5,
      title: "Weather Dashboard",
      description:
        "Real-time weather application with location-based forecasts, interactive maps, and historical data visualization.",
      technologies: ["React", "OpenWeather API", "Chart.js", "Leaflet"],
      github: "https://github.com/Joshjay05",
      category: "Utility",
    },
    {
      id: 6,
      title: "Portfolio Template",
      description:
        "Customizable portfolio template for developers with dark/light mode, smooth animations, and responsive design.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/Joshjay05",
      category: "Template",
    },
    {
      id: 7,
      title: "Expense Tracker",
      description:
        "Personal finance management app with budget tracking, expense categorization, and financial insights.",
      technologies: ["React", "Redux", "Chart.js", "LocalStorage"],
      github: "https://github.com/Joshjay05",
      category: "Finance",
    },
    {
      id: 8,
      title: "Recipe Finder",
      description:
        "Culinary exploration app with recipe search, meal planning, and ingredient substitution suggestions.",
      technologies: ["React", "Spoonacular API", "Styled Components"],
      github: "https://github.com/Joshjay05",
      category: "Lifestyle",
    },
    {
      id: 9,
      title: "Code Snippet Manager",
      description:
        "Developer tool for organizing and sharing code snippets with syntax highlighting and search functionality.",
      technologies: ["React", "Prism.js", "Firebase", "Tailwind CSS"],
      github: "https://github.com/Joshjay05",
      category: "Developer Tool",
    },
  ],
};

export const EDUCATION = {
  degree: "Bachelor of Science",
  field: "Geology",
  institution: "Obafemi Awolowo University",
  year: "2020",
  location: "Ile-Ife, Nigeria",
};

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/Joshjay05",
    icon: "Github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/jesulona-joshua",
    icon: "Linkedin",
  },
  {
    name: "Email",
    url: "mailto:odeladejesulona@gmail.com",
    icon: "Mail",
  },
  {
    name: "Portfolio",
    url: "https://j-portfolio-lyart.vercel.app/",
    icon: "ExternalLink",
  },
];
