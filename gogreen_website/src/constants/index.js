// src/constants/index.js

// =======================
// Projects (you can expand these later)
// =======================
export const myProjects = [
  {
    id: 1,
    title: "3D Portfolio Website",
    description:
      "My personal portfolio focused on coding work, built with React and modern UI motion.",
    subDescription: [
      "Responsive layout with smooth section navigation (Projects, Physics, Education, Research, Work, Contact).",
      "Interactive motion effects and hover previews for project cards.",
      "Clean constants-driven data so sections map automatically.",
      "Deployed as a fast, static site.",
    ],
    href: "", // add your live URL
    logo: "",
    image: "/assets/projects/portfolio.jpg", // optional: replace with an existing image in your repo
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 3, name: "Vite.js", path: "/assets/logos/vitejs.svg" },
      { id: 4, name: "JavaScript", path: "/assets/logos/javascript.svg" },
    ],
  },
  {
    id: 2,
    title: "Auth & RBAC System",
    description:
      "Authentication + role-based authorization for web apps, using a clean React front end.",
    subDescription: [
      "OAuth/JWT with a hosted provider and client libraries.",
      "Role-based access control with protected routes.",
      "Accessible UI components and form validation.",
      "Configurable provider keys and env setup.",
    ],
    href: "", // repo or demo
    logo: "",
    image: "/assets/projects/auth-system.jpg",
    tags: [
      { id: 1, name: "Auth0", path: "/assets/logos/auth0.svg" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "SQLite", path: "/assets/logos/sqlite.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 3,
    title: "N-Body Orbital Simulator",
    description:
      "Interactive two-/multi-body gravity playground: set masses, positions, and watch orbits evolve.",
    subDescription: [
      "Stable numerical integrator; energy trend indicator.",
      "Canvas rendering with simple performance optimizations.",
      "Prebuilt presets and reset controls.",
    ],
    href: "", // demo or repo
    logo: "",
    image: "/assets/projects/nbody.jpg",
    tags: [
      { id: 1, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 2, name: "HTML5", path: "/assets/logos/html5.svg" },
      { id: 3, name: "CSS3", path: "/assets/logos/css3.svg" },
      { id: 4, name: "Vite.js", path: "/assets/logos/vitejs.svg" },
    ],
  },
  {
    id: 4,
    title: "Electric Field Line Visualizer",
    description:
      "Field lines and equipotential contours for point charges; draggable sources and live vectors.",
    subDescription: [
      "Intuitive UI to add/remove charges and visualize fields.",
      "Fast rendering loop and simple sampling strategies.",
      "Clear separation of math core vs. rendering layer.",
    ],
    href: "", // demo or repo
    logo: "",
    image: "/assets/projects/efield.jpg",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
];

// =======================
// Socials (used in Footer, About, etc.)
// =======================
export const mySocials = [
  { name: "Email", href: "mailto:minhtri@uw.edu", icon: "/assets/socials/email.svg" },
  { name: "LinkedIn", href: "www.linkedin.com/in/minh-i-nguyen", icon: "/assets/socials/linkedIn.svg" },
  { name: "GitHub", href: "https://github.com/noletuban1", icon: "/assets/socials/github.svg" },
];

// =======================
// Work / Experiences (drives the Timeline)
// =======================
export const experiences = [
  {
    title: "Washington State Opportunity Scholarship",
    job: "Scholar Lead",
    date: "Sep 2025 – Jun 2026",
    contents: [
      "Mentor WSOS scholars; run small-group sessions; support first-gen peers across Washington.",
      "Lead onboarding and monthly check-ins; share internship, study, and time-management resources.",
      "Coordinate programming for 10–15 scholars and escalate issues when needed.",
    ],
  },
  {
    title: "Instructional Center, University of Washington",
    job: "CSE Tutor — Systems & Data Structures",
    date: "Jan 2024 – Present",
    contents: [
      "Tutor C/C++/Python: memory management, data structures, algorithm design, and debugging.",
      "Coach students on pointer arithmetic, dynamic allocation, complexity, and testing discipline.",
      "Host review sessions; create guided practice to raise performance and confidence.",
    ],
  },
  {
    title: "Math Resource Center, Highline College",
    job: "Math Tutor",
    date: "Jan 2023 – Jun 2023",
    contents: [
      "Tutored Algebra → Multivariable Calculus and Linear Algebra in 1:1 and small groups.",
      "Led midterm/final reviews and built problem sets that target common pain points.",
      "Helped train new tutors and streamlined the tutoring intake process.",
    ],
  },
  {
    title: "Foster Senior High / FRC Rapid React",
    job: "President & Programmer, Robotics Club",
    date: "Nov 2021 – Apr 2022",
    contents: [
      "Programmed Arduino (C/C++) for autonomous and driver-operated modes; refined motor control.",
      "Collaborated on drivetrain and sensor integration; debugged wiring and controls.",
      "Coordinated team efforts; earned regional medals through consistent iteration.",
    ],
  },
];

// =======================
// Education (maps cleanly in #education)
// =======================
export const education = [
  {
    school: "University of Washington — Seattle",
    program: "B.S. Computer Science (Paul G. Allen School, Direct Admit)",
    date: "Expected Jun 2027",
    details: [
      "Focus: systems, data structures, networks, full-stack development",
      "Clubs & service: VISA, Asian in Computing (founder), WSOS Scholar Lead",
    ],
  },
  {
    school: "University of Washington — Seattle",
    program: "B.S. Physics",
    date: "Expected Jun 2027",
    details: [
      "Interests: computational physics, numerical methods, visualization",
      "Coursework: classical mechanics, E&M, quantum, computational tools",
    ],
  },
  {
    school: "Highline College",
    program: "A.S. — Computer Science Pathway",
    date: "2021 – 2023",
    details: [
      "Math & CS foundation; tutoring in Calculus and Linear Algebra",
      "Leadership: Robotics Club (President & Programmer)",
    ],
  },
];

// =======================
// Physics (demos & tools for #physics)
// =======================
export const physics = [
  {
    title: "N-Body Orbital Simulator",
    kind: "simulation",
    summary:
      "Interactive gravity simulator with adjustable masses and initial conditions; stable integrator and energy plot.",
    tech: ["JavaScript", "Canvas/WebGL", "Numerical integration"],
    links: { demo: "#", repo: "#" }, // add real links when ready
  },
  {
    title: "Electric Field Line Visualizer",
    kind: "visualization",
    summary:
      "Field lines and equipotential contours for point charges; draggable sources and live field vectors.",
    tech: ["React", "WebGL", "GPU shaders"],
    links: { demo: "#", repo: "#" },
  },
  {
    title: "Monte Carlo Methods in Physics",
    kind: "notebook",
    summary:
      "π estimation, random walks, and basic scattering toys; small toolkit for quick experiments.",
    tech: ["Python", "NumPy", "Matplotlib"],
    links: { demo: "#", repo: "#" },
  },
];

// =======================
// Research (Math + Physics + SEAL) for #research
// =======================
export const research = [
  {
    org: "UW SEAL — Sensors, Energy, and Automation Laboratory",
    role: "Applicant Challenge / Prospective Researcher",
    date: "2025 – Present",
    focus: ["energy efficiency", "IoT sensing", "dashboards", "data pipelines"],
    outcomes: [
      "Setting up project dashboard and workflow; selecting group/quest pages for assignment.",
      "Exploring data collection + visualization for building energy instrumentation.",
    ],
    links: [
      { label: "Dashboard / Notes", href: "#" }, // add public link when available
    ],
  },
  {
    org: "Sixteenth Western Washington Community College Student Mathematics Conference",
    role: "Presenter — Kepler’s 2nd & 3rd Laws",
    date: "Feb 25, 2023",
    focus: ["Kepler’s laws", "orbital mechanics", "calculus & geometry"],
    outcomes: [
      "Presented intuitive and formal arguments for the area law and the period–semi-major axis relation.",
      "Built slides and diagrams to communicate the geometry behind the laws.",
    ],
    links: [
      {
        label: "Slides",
        href:
          "https://docs.google.com/presentation/d/1d5bDLV3MQCk1H_GejnRztn1AwA0Bf1oB/edit?usp=sharing&ouid=114442487161670092204&rtpof=true&sd=true",
      },
    ],
  },
  {
    org: "Highline College — Math 152 (Calculus II)",
    role: "Honors Project — Euclid of Alexandria",
    date: "Dec 13, 2022",
    focus: ["history of mathematics", "axiomatic method", "geometry"],
    outcomes: [
      "Researched Euclid’s life, the Elements, and influence on geometry & number theory.",
      "Wrote a synthesis paper on axioms, golden ratio, and the development of geometry.",
    ],
    links: [
      {
        label: "Paper",
        href:
          "https://docs.google.com/document/d/1AXUxkec3nXpantGEhGWGsvMG3RO5lgXyvVin9GwDgAA/edit?usp=sharing",
      },
    ],
  },
  {
    org: "UW Instructional Center",
    role: "CSE/Physics Teaching Support",
    date: "2024 – Present",
    focus: ["systems programming", "data structures", "math for CS"],
    outcomes: [
      "Designed guided practice sets and review materials.",
      "Documented common misconceptions and fixes.",
    ],
    links: [{ label: "Sample materials", href: "#" }],
  },
];

// =======================
// Reviews (used by Testimonial.jsx)
// =======================
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
];
