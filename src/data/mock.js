// Mock data for Shrevan Shetty's Portfolio

export const personalInfo = {
  name: "Shrevan Shetty",
  role: "MERN Stack Developer",
  tagline: "Building scalable web applications with modern technologies",
  email: "shrevan506@gmail.com",
  phone: "+91 8356076185",
  location: "Mumbai, India",
  linkedin: "https://www.linkedin.com/in/shrevan-shetty",
  github: "https://github.com/shre1shetty",
  about: `MERN Stack Developer with 2+ years of experience building scalable web applications and production-grade UIs. I've worked on SAML-based authentication for enterprise clients and developed multi-tenant SaaS platforms with complex features like CMS, theming, and payment integration. Strong expertise in React, Node.js, and MongoDB with hands-on experience in secure, high-performance application architecture.`
};

export const skills = {
  frontend: [
    { name: "React.js", level: 95 },
    { name: "Next.js", level: 85 },
    { name: "Redux/Zustand", level: 90 },
    { name: "Tailwind CSS", level: 92 },
    { name: "ShadCN UI", level: 88 }
  ],
  backend: [
    { name: "Node.js", level: 90 },
    { name: "Express.js", level: 88 },
    { name: "MongoDB", level: 85 },
    { name: "REST APIs", level: 92 },
    { name: "JWT Auth", level: 90 }
  ],
  tools: [
    { name: "Git/GitHub", level: 90 },
    { name: "Azure", level: 75 },
    { name: "Postman", level: 88 },
    { name: "SAML SSO", level: 82 },
    { name: "Razorpay", level: 80 }
  ]
};

export const projects = [
  {
    id: 1,
    title: "SaaS Multi-Store E-Commerce",
    subtitle: "Shopify-like Platform",
    description: "A multi-tenant e-commerce platform enabling businesses to create and manage their own branded online stores with independent admin dashboards.",
    longDescription: "Built a comprehensive Shopify-like multi-tenant e-commerce platform with JWT authentication, role-based access control, modular CMS, dynamic theming, MongoDB GridFS for media, fuzzy search, Razorpay payment integration, and Google Analytics.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind", "Razorpay", "JWT"],
    liveUrl: "https://e-commerce-git-main-shrevan-shettys-projects.vercel.app/",
    githubUrl: "https://github.com/shre1shetty/E-Commerce",
    featured: true,
    image: "ecommerce"
  },
  {
    id: 2,
    title: "Enterprise SSO Portal",
    subtitle: "SAML Authentication System",
    description: "Enterprise-grade Single Sign-On solution with SAML-based authentication serving 10K+ corporate users with secure data handling.",
    longDescription: "Developed a complete React-based UI from scratch with dynamic routing, reusable components, and SAML integration. Implemented industry-standard security protocols including token-based authentication and RSA encryption.",
    technologies: ["React", "SAML", "Node.js", "RSA", "Azure", "Redux"],
    liveUrl: null,
    githubUrl: null,
    featured: true,
    image: "sso"
  },
  {
    id: 3,
    title: "Real-time Dashboard",
    subtitle: "Analytics Platform",
    description: "Interactive analytics dashboard with real-time data visualization, custom charts, and comprehensive reporting features.",
    longDescription: "A modern analytics platform built with React and Node.js featuring real-time updates, interactive charts, data export capabilities, and role-based access control.",
    technologies: ["React", "Node.js", "MongoDB", "Chart.js", "WebSocket"],
    liveUrl: null,
    githubUrl: null,
    featured: false,
    image: "dashboard"
  }
];

export const experience = [
  {
    company: "Osource Global Pvt Ltd",
    role: "Software Developer",
    period: "October 2023 - Present",
    description: "Building enterprise-grade applications with React and implementing secure authentication solutions."
  }
];

export const education = [
  {
    degree: "BSc-IT",
    institution: "M.L. Dahanukar College",
    year: "2020-2023",
    score: "SGPI: 9.18"
  }
];
