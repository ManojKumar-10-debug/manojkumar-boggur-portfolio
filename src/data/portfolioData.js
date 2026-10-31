// ============================================================
// portfolioData.js — Single source of truth for ALL content.
// Components import from here; never hard-code text in JSX.
// ============================================================

// ------------------------------------------------------------
// 1. PERSONAL INFO
// ------------------------------------------------------------
export const personalInfo = {
  name: "Manojkumar Boggur",
  firstName: "Manojkumar Boggur",
  brandName: "Manojkumar Boggur",       // shown in preloader, navbar, footer
  title: "Java Full Stack Developer",
  location: "Bengaluru, India",
  phone: "+91 7799002046",
  emails: {
    primary: "boggurmanojkumar1@gmail.com",
    secondary: "",
  },
  summary:
    "Motivated BCA graduate and Java Full Stack Developer with hands-on experience building scalable web applications, RESTful microservices, and relational database solutions using Core Java, Spring Boot, Hibernate, and MySQL. Proven track record in full-stack project development and front-end optimization. Seeking an entry-level Software Developer position to engineer efficient backend architectures and dynamic user experiences.",
  resumeUrl: "/Boggur_Manojkumar_Resume.pdf",  // PDF lives in /public
};

// ------------------------------------------------------------
// 2. TAP ACADEMY — training credit (used in footer)
// ------------------------------------------------------------
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

// ------------------------------------------------------------
// 3. SOCIAL LINKS
// ------------------------------------------------------------
export const socialLinks = {
  github: "https://github.com/ManojKumar-10-debug",
  linkedin: "https://www.linkedin.com/in/manojkumar-boggur-mkb",
  instagram: "https://www.instagram.com/manojkumar_boggur/",
};

// ------------------------------------------------------------
// 4. HERO SECTION
// ------------------------------------------------------------
export const heroContent = {
  greeting: "Hi, I'm Manojkumar Boggur",
  titleHighlight: "Java Full Stack Developer",
  subtitle:
    "Crafting full-stack web solutions with Java, Spring Boot, and clean front-end code — seeking my first dev role.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:boggurmanojkumar1@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Boggur_Manojkumar_Resume.pdf" },
};

// ------------------------------------------------------------
// 5. ABOUT SECTION
// ------------------------------------------------------------
export const aboutContent = {
  heading: "Hello!",
  // HTML is safe here — it is rendered with dangerouslySetInnerHTML using YOUR OWN text.
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Manojkumar Boggur</span>, a BCA graduate and Java Full Stack Developer from Bengaluru passionate about engineering efficient backend systems and dynamic UIs. I've shipped full-stack products — from e-commerce platforms to RESTful APIs — using Java, Spring Boot, and MySQL. I'm currently sharpening my skills through the placement training program at TAP Academy.`,
  techStack: ["Java", "Spring Boot", "Hibernate", "MySQL", "HTML5", "CSS3", "JavaScript"],
};

// ------------------------------------------------------------
// 6. SELF-INTRODUCTION VIDEO
// Local file — served from src/assets/hero/hero.mp4
// ------------------------------------------------------------
export const introVideo = {
  badge: "Meet Me",
  heading: "Watch My Introduction",
  description: "Get a quick feel for who I am, what I build, and the kind of problems I love solving.",
  // Local video asset (imported by the component)
  videoSrc: "/src/assets/hero/hero.mp4",
};

// ------------------------------------------------------------
// 7. SKILLS PROCESS (how I work — 4 steps)
// ------------------------------------------------------------
export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description: "A structured approach — from understanding the problem to shipping a tested, live solution.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I analyse requirements, study user needs, and map out data models and API contracts before writing a single line of code.",
    },
    {
      number: "02",
      title: "Design",
      text: "I sketch the UI layout and plan the backend architecture — database schema, service layers, and REST endpoints — ensuring everything fits together cleanly.",
    },
    {
      number: "03",
      title: "Develop",
      text: "I build features iteratively using Java, Spring Boot, and front-end technologies, writing clean, tested code with proper exception handling and security practices.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "I integrate version control via Git, perform cross-browser and cross-device testing, and ship the production build to a live environment.",
    },
  ],
  endText: "Ready to ship!",
};

// ------------------------------------------------------------
// 8. TECHNICAL SKILLS
// ------------------------------------------------------------
export const technicalSkills = {
  categories: [
    {
      title: "Languages & Frameworks",
      skills: [
        { name: "Java (Core, OOPs)" },
        { name: "Spring Boot" },
        { name: "Spring Data JPA" },
        { name: "Hibernate" },
        { name: "Servlets & JSP" },
        { name: "RESTful APIs" },
        { name: "JDBC" },
      ],
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "JavaScript (ES6+)" },
        { name: "Bootstrap" },
        { name: "JSON" },
      ],
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "MySQL" },
        { name: "SQL" },
        { name: "Git & GitHub" },
        { name: "IntelliJ IDEA" },
        { name: "Eclipse" },
        { name: "VS Code" },
      ],
    },
    {
      title: "CS Fundamentals",
      skills: [
        { name: "Data Structures & Algorithms" },
        { name: "Object-Oriented Programming" },
        { name: "DBMS" },
        { name: "Exception Handling" },
        { name: "Collections Framework" },
      ],
    },
  ],
};

// ------------------------------------------------------------
// 9. LEADERSHIP / ACTIVITIES  (empty — skipped by user)
// ------------------------------------------------------------
export const leadershipList = [];

// ------------------------------------------------------------
// 10. INTERNSHIPS / EXPERIENCE
// ------------------------------------------------------------
export const internshipsList = [
  {
    organization: "Intellirays Technologies Pvt. Ltd.",
    role: "Front-End Web Development Intern",
    duration: "May 2025 – July 2025",
    skills: ["UI Development", "Cross-Browser Testing", "Team Collaboration", "Layout Debugging"],
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
  },
];

// ------------------------------------------------------------
// 11. SOFT SKILLS
// ------------------------------------------------------------
export const softSkillsList = [
  {
    name: "Team Collaboration",
    icon: "🤝",
    desc: "Worked closely with teammates at Intellirays to resolve layout defects and improve overall UI responsiveness.",
  },
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Diagnosed and fixed SQL injection vulnerabilities in ManFitX by switching to PreparedStatement-based queries.",
  },
  {
    name: "Communication",
    icon: "💬",
    desc: "Clearly documented API contracts and component behaviour, making codebases easy for teammates to understand.",
  },
  {
    name: "Adaptability",
    icon: "🌱",
    desc: "Quickly picked up new tools and frameworks — from Servlets to Spring Boot — across different project contexts.",
  },
];

// ------------------------------------------------------------
// 12. PROJECTS
// ------------------------------------------------------------
export const projects = [
  {
    id: "manfitx",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "E-Commerce Web Application (ManFitX)",
    description:
      "A full-stack e-commerce platform for men's apparel featuring secure user authentication, session handling, and real-time shopping cart management. Optimised with PreparedStatement JDBC queries to prevent SQL injection and boost data retrieval efficiency across 10+ dynamic page components.",
    techTags: ["Java", "Servlets", "JSP", "JDBC", "MySQL", "HTML5", "CSS3", "JavaScript"],
    links: {
      github: "https://github.com/ManojKumar-10-debug",
      demo: "",   // "" renders "Demo Coming Soon"
    },
    isFlagship: true,
    // No video link provided — field omitted intentionally
  },
];

// ------------------------------------------------------------
// 13. CERTIFICATES (bonus — used by optional Certificates component)
// ------------------------------------------------------------
export const certificates = {
  featured: [],
  viewAllUrl: "https://www.linkedin.com/in/manojkumar-boggur-mkb",
};

// ------------------------------------------------------------
// 14. EDUCATION
// ------------------------------------------------------------
export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  institution: "The Adoni Arts and Science College, Adoni",
  cgpa: "",
  graduation: "2025",
  twelfth: "",
  tenth: "",
};

// ------------------------------------------------------------
// 15. FOOTER
// ------------------------------------------------------------
export const footerContent = {
  taglines: [
    "Java Full Stack Developer",
    "Spring Boot · React · MySQL",
    "Building reliable backends & clean UIs",
  ],
  credential: "Bachelor of Computer Applications",
  copyright: `© ${new Date().getFullYear()} Manojkumar Boggur | Built with React`,
};

// ------------------------------------------------------------
// 16. EMAILJS — values read from .env.local (never commit secrets)
// ------------------------------------------------------------
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};

