# 🌌 Minh Nguyen — 3D Developer Portfolio

A modern, animated portfolio showcasing my **coding projects**, **physics demos**, and **research**. Built with React, React Three Fiber, TailwindCSS, and Motion—fast, responsive, and easy to extend.

> CS & Physics @ **UW Seattle** (Paul G. Allen School, Direct Admit)

![Portfolio Screenshot](./public/assets/og-screenshot.jpg)

---

## 📚 Table of Contents
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Configuration (EmailJS)](#-configuration-emailjs)
- [Data-Driven Sections](#-data-driven-sections)
- [Assets & 3D Model Credits](#-assets--3d-model-credits)
- [Contributing / Feedback](#-contributing--feedback)
- [Contact](#-contact)

---

## ✨ Features
- 🧭 **Clean section layout** with anchor navigation: Projects, Physics, Education, Research, Work, Contact
- 🌀 **3D hero** using React Three Fiber + Drei (Buddha model with float & gentle spin)
- 🎞️ **Motion** throughout: hover previews, project modals, marquee testimonials
- 🎨 **TailwindCSS** design system; responsive grid with accessible tap targets
- 📩 **EmailJS** contact form + “Copy Email” quick action
- 🔗 **Constants-driven data** (`src/constants/index.js`) for easy content updates
- ⚡ **Vite** dev server & build

---

## 🛠 Tech Stack
| Tech               | Purpose                                    |
|--------------------|---------------------------------------------|
| React + Vite       | UI + fast dev/build                        |
| TailwindCSS        | Styling, responsive utilities              |
| React Three Fiber  | Three.js in React (3D scene)               |
| Drei               | R3F helpers (Float, loaders, etc.)         |
| Framer/Motion      | Animations & transitions                   |
| EmailJS            | Serverless email for contact form          |

---

## 📁 Project Structure
```bash
├── public/
│   ├── assets/                 # Images / icons / screenshots
│   └── models/
│       └── 3D_Buddha.glb       # 3D model loaded in Hero
├── src/
│   ├── components/             # Reusable components (Buddha, Timeline, etc.)
│   ├── constants/              # Data for Projects / Physics / Education / Research / Work / Socials
│   ├── sections/               # Page sections (Hero, About, Projects, Physics, Education, Research, Work, Contact)
│   ├── App.jsx                 # Page composition
│   ├── index.css               # Tailwind + custom CSS
│   └── main.jsx                # Entry point
├── .gitignore
├── package.json
├── tailwind.config.js
└── vite.config.js



### 🚀 Getting Started

Clone & install

git clone https://github.com/<your-username>/<your-repo>.git
git clone https://github.com/noletuban1/minh_portfolio_website.git
cd minh_portfolio_website
npm install


Run dev server

npm run dev


App runs at http://localhost:5173
.

Build & preview

npm run build
npm run preview
