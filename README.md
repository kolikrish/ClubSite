# Abhyudaya Coding Club - Official Website

Welcome to the official web platform for **Abhyudaya Coding Club** — an active student community dedicated to fostering innovation, technical excellence, and collaboration.

![Abhyudaya Coding Club](https://res.cloudinary.com/djtagt9xw/image/upload/v1758685560/20250822_153145_luobfm.jpg)

---

## 🚀 Features

- 🎨 **Brand Design System**: Tailored light theme featuring Navy (`#0A1D3D`), Vibrant Coral Red (`#fa4c43`), Warm Orange (`#FF6A00`), and custom `phantom` (`fbold`) typography.
- 💻 **Interactive Projects Showcase**: Filterable portfolio of club projects categorized by Web Apps, Mobile, and Data Science, with real-time status badges and links.
- 📅 **Events & Workshops Hub**: Comprehensive schedule and registration portal for technical workshops and coding bootcamps.
- 🏆 **Hackathons & Competitions**: Highlight reel and resources for hackathons and competitive programming challenges.
- 🖼️ **Masonry Gallery**: Interactive photo gallery featuring memorable moments, events, and student achievements.
- 🛠️ **Common Utility Suite**: Includes custom `ErrorBoundary` fallbacks, styled `NotFound` (404) page, and reusable `SEO` meta helpers.
- 🔐 **Admin Panel**: Dedicated dashboard layout for managing club events, gallery content, and hackathon announcements.

---

## 🛠️ Tech Stack

### Frontend (`/client`)
- **Framework**: [React 19](https://react.dev/) with [React Router v7](https://reactrouter.com/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Analytics**: [@vercel/analytics](https://vercel.com/analytics)

### Backend (`/server`)
- **Runtime**: Node.js & Express

---

## 📁 Project Structure

```
ClubSite/
├── client/                     # Frontend Application (React Router v7)
│   ├── app/
│   │   ├── components/         # Modular Components
│   │   │   ├── common/         # ErrorBoundary, NotFound, SEO, Contact
│   │   │   ├── layout/         # Navigation, MobileNav, Footer, Layout
│   │   │   ├── sections/       # Landing Pages (Page1 - Page11)
│   │   │   └── ui/             # Reusable UI primitives (Button, Loading)
│   │   ├── hooks/              # Custom React Hooks
│   │   ├── lib/                # Data files (member, leader, domains, gallery)
│   │   ├── routes/             # App Pages (home, projects, events, gallery, hackathons, admin)
│   │   ├── app.css             # Global CSS & Tailwind Theme configuration
│   │   ├── root.tsx            # HTML Root Layout
│   │   └── routes.ts           # Route Definitions
│   ├── public/                 # Static Assets & Images
│   ├── package.json            # Client dependencies & scripts
│   └── vite.config.ts          # Vite Configuration
├── server/                     # Backend API Service
└── README.md                   # Project Documentation
```

---

## ⚡ Getting Started

### Prerequisites
- **Node.js**: v18.x or higher
- **npm**: v9.x or higher

### Local Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Abhyudaya-SVVV/ClubSite.git
   cd ClubSite
   ```

2. **Install Client Dependencies**:
   ```bash
   cd client
   npm install
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Run Typecheck**:
   ```bash
   npm run typecheck
   ```

5. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 🤝 Contributing

Contributions are welcome! If you'd like to report a bug or request a feature:
1. Open an Issue outlining the problem or proposal.
2. Create a Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

Made with ❤️ by **Abhyudaya Coding Club**.