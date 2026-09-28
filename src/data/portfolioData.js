
export const personalInfo = {
  name: "Sanjay S",
  initials: "SD",
  tagline: "Full Stack Developer | UI/UX Enthusiast",
  headline: "Building Digital Experiences That Make a Difference.",
  introduction:
    "I craft modern web applications with clean code and intuitive interfaces. Passionate about turning complex problems into elegant, user-friendly solutions.",
  email: "sanjayselva285@gmail.com", // TODO: Replace with actual email
  phone: "+91 8925042631", // TODO: Replace with actual phone
  location: "Perundurai, Erode, Tamil Nadu",
  resumeUrl: "#", // TODO: Replace with actual resume URL
  socialLinks: {
    github: "https://github.com/Sanjay123-web", // TODO: Replace
    linkedin: "https://www.linkedin.com/in/sanjay-s-3638b6326"
  },
};

// ─── Animated Roles (Typing Effect) ─────────────────────────
export const animatedRoles = [
  "Full Stack Developer",
  "Software Developer",
  "UI/UX Designer",
  "Problem Solver",
];

// ─── About Section ──────────────────────────────────────────
export const aboutData = {
  description:
    "I'm a Computer Science Engineering student passionate about full-stack development, UI/UX design, and building practical solutions through technology. I enjoy transforming ideas into user-friendly digital experiences and continuously learning new technologies.",
  education: {
    degree: "B.E. Computer Science and Engineering",
    college: "Kongu Engineering College",
    location: "Perundurai, Erode, Tamil Nadu",
    duration: "2024 – 2028", // TODO: Replace with actual dates
  },
  // TODO: Replace placeholder numbers with actual values
  stats: [
    { label: "Projects Built", value: "3+", icon: "FolderGit2" },
    { label: "Technologies Explored", value: "5+", icon: "Layers" },
    { label: "Certifications", value: "10+", icon: "Award" },
    { label: "Learning Journey", value: "4+ Years", icon: "TrendingUp" },
  ],
};

// ─── Technical Skills ───────────────────────────────────────
export const skillsData = [
  {
    category: "Frontend",
    icon: "Monitor",
    color: "from-blue-500 to-cyan-400",
    skills: [
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "JavaScript", icon: "javascript" },
      { name: "React.js", icon: "react" },

    ],
  },
  {
    category: "Backend",
    icon: "Server",
    color: "from-violet-500 to-purple-400",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "REST APIs", icon: "api" },
    ],
  },
  {
    category: "Programming",
    icon: "Code2",
    color: "from-emerald-500 to-teal-400",
    skills: [
      { name: "Java", icon: "java" },
      { name: "Python", icon: "python" },
      { name: "C", icon: "c" },
      { name: "C++", icon: "cpp" },
    ],
  },
  {
    category: "Database",
    icon: "Database",
    color: "from-amber-500 to-orange-400",
    skills: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "MySQL", icon: "mysql" },
    ],
  },
  {
    category: "Tools",
    icon: "Wrench",
    color: "from-rose-500 to-pink-400",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "VS Code", icon: "vscode" },
      { name: "Figma", icon: "figma" },
    ],
  },
];

// ─── Projects ───────────────────────────────────────────────
export const projectsData = [
  {
    id: 1,
    title: "Air Quality Index Prediction",
    description:
      "Developed a machine learning model to predict Air Quality Index using environmental parameters and data preprocessing techniques.",
    longDescription:
      "A comprehensive ML project that leverages environmental sensor data to predict AQI values. Implements advanced data preprocessing, feature engineering, and model evaluation to deliver accurate predictions.",
    technologies: ["Python", "Scikit-learn", "Random Forest", "Pandas", "NumPy"],
    features: [
      "Data preprocessing & cleaning",
      "Feature engineering",
      "Model training & optimization",
      "AQI prediction",
      "Performance evaluation (RMSE, MAE, R²)",
    ],
    category: "Machine Learning",
    image: null, // TODO: Add project screenshot path
    githubUrl: "#", // TODO: Replace with actual GitHub URL

    featured: true,
  },
  {
    id: 2,
    title: "Smart Internship Portal",
    description:
      "A platform designed to connect students with internship opportunities and simplify internship management.",
    longDescription:
      "Full-stack web application that streamlines the internship discovery and application process. Features role-based access for students and administrators with comprehensive tracking capabilities.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Student registration & login",
      "Internship listings",
      "Application tracking",
      "Admin management dashboard",
    ],
    category: "Full Stack",
    image: null,
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Hospital Management System",
    description:
      "A digital platform for managing hospital operations, patient information, appointments, and administrative activities.",
    longDescription:
      "Comprehensive healthcare management solution built with the MERN stack. Digitizes hospital workflows including patient records, doctor schedules, billing, and appointment management.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Patient management",
      "Doctor management",
      "Appointment scheduling",
      "Medical records",
      "Billing management",
    ],
    category: "Full Stack",
    image: null,
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    id: 4,
    title: "Event Management System",
    description:
      "A web-based application designed to organize and manage events efficiently with an intuitive user interface.",
    longDescription:
      "A clean, responsive event management application built with vanilla web technologies. Allows users to create, organize, and track events with a modern interface.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Event creation & management",
      "Responsive design",
      "Interactive UI",
      "Event tracking",
    ],
    category: "Frontend",
    image: null,
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
];

// ─── Project Filter Categories ──────────────────────────────
export const projectCategories = [
  "All",
  "Full Stack",
  "Frontend",
  "Machine Learning",
];

// ─── Experience & Achievements Timeline ─────────────────────
// TODO: Replace all placeholder entries with actual achievements
export const timelineData = [
  {
    id: 1,
    year: "2024",
    title: "Started B.E. in Computer Science",
    description:
      "Began academic journey at Kongu Engineering College, Perundurai.",
    type: "education",
    icon: "GraduationCap",
  },
  {
    id: 2,
    year: "2024",
    title: "First Technical Project",
    description:
      "Built initial projects and explored web development fundamentals.",
    type: "project",
    icon: "Code2",
  },
  {
    id: 3,
    year: "20XX",
    title: "Certification Achievement",
    description:
      "Completed certification in [Your Certification]. Add details here.",
    type: "certification",
    icon: "Award",
  },
  {
    id: 4,
    year: "20XX",
    title: "Workshop / Technical Event",
    description:
      "Participated in [Workshop/Event Name]. Add details here.",
    type: "workshop",
    icon: "Users",
  },
  {
    id: 5,
    year: "20XX",
    title: "Full Stack Development",
    description:
      "Developed multiple full-stack applications including Smart Internship Portal and Hospital Management System.",
    type: "project",
    icon: "Layers",
  },
];

// ─── Certifications ─────────────────────────────────────────
// TODO: Replace with actual certifications
export const certificationsData = [
  {
    id: 1,
    title: "Your Certification Title",
    organization: "Issuing Organization",
    date: "Month 20XX",
    image: null, // TODO: Add certificate image path
    verifyUrl: "#", // TODO: Add verification URL
  },
  {
    id: 2,
    title: "Your Certification Title",
    organization: "Issuing Organization",
    date: "Month 20XX",
    image: null,
    verifyUrl: "#",
  },
  {
    id: 3,
    title: "Your Certification Title",
    organization: "Issuing Organization",
    date: "Month 20XX",
    image: null,
    verifyUrl: "#",
  },
];

// ─── GitHub Section ─────────────────────────────────────────
export const githubData = {
  username: "YOUR_USERNAME", // TODO: Replace with actual GitHub username
  profileUrl: "https://github.com/YOUR_USERNAME",
  // TODO: Replace with actual stats
  stats: {
    repositories: "XX+",
    contributions: "XXX+",
    stars: "XX",
  },
  featuredRepos: [
    {
      name: "Repository Name",
      description: "Brief description of the repository.",
      language: "JavaScript",
      stars: 0,
      forks: 0,
      url: "#",
    },
    {
      name: "Repository Name",
      description: "Brief description of the repository.",
      language: "Python",
      stars: 0,
      forks: 0,
      url: "#",
    },
  ],
};

// ─── LinkedIn Section ───────────────────────────────────────
export const linkedinData = {
  profileUrl: "https://www.linkedin.com/in/YOUR_USERNAME/",
  statement:
    "Aspiring Full Stack Developer passionate about building impactful digital solutions. Open to collaborations and exciting opportunities.",
};

// ─── Navigation Links ───────────────────────────────────────
export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];
