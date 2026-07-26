import React, { useState } from "react";
import type { Route } from "./+types/projects";
import Layout from "../components/layout/Layout";

// Import icons from lucide-react
import { Code, Globe, Smartphone, Database, ArrowUpRight, Github } from "lucide-react";

export function meta() {
  return [
    { title: "Projects - Abhyudaya" },
    {
      name: "description",
      content: "Discover the innovative projects built by Abhyudaya Coding Club members.",
    },
  ];
}

type Project = {
  id: number;
  title: string;
  status: "completed" | "in progress" | "planned";
  date: string;
  description: string;
  problem: string;
  technologies: string[];
  team: string[];
  impact: string;
  category: "Web Apps" | "Mobile" | "Data Science";
  codeLink?: string;
  demoLink?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "NavGo",
    status: "completed",
    date: "Sep 2024",
    description:
      "A Bus Management System that helps students track their college buses in real time, ensuring timely arrivals and hassle-free commuting.",
    problem:
      "Students face inconvenience due to the lack of real-time bus updates, causing missed buses, long waits, overcrowding, and delays that affect punctuality.",
    technologies: ["NextJs", "SpringBoot", "Tailwind", "PostrgreSQL", "Progressive Web App", "React Native"],
    team: ["Devang Sharma", "Aakash Bais", "Aditya Patel", "Pranjal Birla", "Kushagra Rai"],
    impact:
      "Reduced waiting times by 40% and improved punctuality, ensuring a smoother and stress-free commute for 1000+ students.",
    category: "Web Apps",
    codeLink: "https://github.com/Abhyudaya-SVVV/Bus-Tracking-System",
    demoLink: "https://navgo-svvvbus.vercel.app/",
  },
  {
    id: 2,
    title: "NoteBin",
    status: "completed",
    date: "Aug 2024",
    description:
      "A College Notes Hub where students can upload, share, and access study materials easily, making learning more collaborative and efficient.",
    problem:
      "Students often struggle to access organized and reliable study materials, leading to gaps in preparation and reduced collaboration.",
    technologies: ["NextJs", "Express", "NodeJs", "MongoDB", "Firebase"],
    team: ["Mandeep Yadav", "Devang Sharma"],
    impact:
      "Enabled easy sharing of resources, improved collaboration, and helped 500+ students access quality notes, boosting academic performance and efficiency.",
    category: "Web Apps",
    codeLink: "https://github.com/Abhyudaya-SVVV/notebin-svvv",
    demoLink: "https://notebin-svvv.vercel.app/",
  },
  {
    id: 3,
    title: "Inventory Management System",
    status: "completed",
    date: "Oct 2024",
    description:
      "An Inventory Management System that streamlines stock tracking, reduces shortages, and optimizes inventory control for seamless business operations.",
    problem:
      "Businesses often face stock mismanagement, frequent shortages, and overstocking due to manual or inefficient inventory tracking methods.",
    technologies: ["React Native", "Firebase", "Node.js", "Data Visualization"],
    team: ["Akshat Mishra", "Aditya Patel"],
    impact:
      "Improved stock accuracy by 45%, reduced shortages, and optimized resource utilization, leading to smoother and more efficient business operations.",
    category: "Web Apps",
    codeLink: "#",
  },
  {
    id: 4,
    title: "Club Website",
    status: "completed",
    date: "Oct 2024",
    description:
      "A dynamic club website with an integrated admin panel that enables easy event management, member updates, and content control, while providing students with a seamless platform to explore activities and stay connected.",
    problem:
      "Clubs often struggle with managing events, member information, and updates efficiently due to the lack of a centralized digital platform. This leads to miscommunication, low engagement, and difficulties in keeping students informed.",
    technologies: ["NextJs", "Typescript", "Tailwind", "NodeJs", "MongoDB"],
    team: ["Krish Koli", "Mandeep Yadav"],
    impact:
      "The Club website simplifies event and content management for everyone. It builds a centralized hub that fosters collaboration and growth.",
    category: "Web Apps",
    codeLink: "#",
  },
  {
    id: 5,
    title: "Red Light & Green Light Game",
    status: "completed",
    date: "Oct 2026",
    description:
      "A Squid Game–inspired activity created for freshers at the Induction Program. Move forward on green light and freeze on red — simple, fun, and full of excitement!",
    problem:
      "We created this game to help freshers bond, break the ice, and start their journey with fun and teamwork.",
    technologies: ["NextJs", "Typescript", "Firebase"],
    team: ["Mandeep Yadav", "Tanay Nagde"],
    impact:
      "This game was built for freshers during the club orientation to give them a fun experience while showcasing the coding and programming skills of our club. It attracted over 1000 participants, making it an exciting and memorable introduction.",
    category: "Web Apps",
    codeLink: "#",
  },
  {
    id: 6,
    title: "Event Management",
    status: "in progress",
    date: "Oct 2024",
    description:
      "An event management app that helps clubs organize, promote, and track events efficiently, offering features like registrations, reminders, and real-time updates to enhance student participation.",
    problem:
      "Clubs face challenges in managing events manually, leading to miscommunication, poor attendance tracking, and limited engagement among students.",
    technologies: ["NextJs", "Typescript", "Tailwind", "NodeJs", "MongoDB"],
    team: ["Nawadha Jadiya", "Aayush Madhesiya", "Mandeep Yadav"],
    impact:
      "Streamlined event organization, boosted participation by 60%, and improved communication between clubs and students, creating more engaging campus experiences.",
    category: "Web Apps",
    codeLink: "#",
  },
  {
    id: 7,
    title: "Time Table Generator",
    status: "completed",
    date: "Oct 2024",
    description:
      "A digital tool for creating, managing, and sharing club schedules. It automates activity planning, avoids conflicts, and notifies members about events.",
    problem:
      "Manually scheduling club activities is time-consuming, error-prone, and hard to communicate, leading to overlaps and missed events.",
    technologies: ["ReactJs", "Typescript", "Machine Learning", "NodeJs", "MySQL"],
    team: ["Manish Gawali", "Jiyanshu Jain", "Sambhav Surana", "Vishika Agrawal"],
    impact:
      "Saves time, prevents scheduling conflicts, improves communication, increases member engagement, and optimizes resource use.",
    category: "Web Apps",
    codeLink: "#",
  },

  {
    id: 8,
    title: "API Marketplace",
    status: "in progress",
    date: "Oct 2026",
    description:
      "A centralized platform designed similarly to an app store, enabling developers to publish, discover, document, and test custom APIs with ease.",
    problem:
      "Developers often struggle to find reliable internal and external APIs, test endpoints interactively, and integrate services efficiently.",
    technologies: ["ReactJs", "Typescript", "NodeJs", "Express", "MongoDB", "Postman", "Swagger"],
    team: ["Jay Rathore", "Ashish Maddheshiya", "Krish Koli", "Abhimanyu Saxena"],
    impact:
      "Accelerated API discovery and integration for student developers, reducing redundant backend development by over 50%.",
    category: "Web Apps",
    codeLink: "#",
  },

  {
    id: 9,
    title: "Redundant File Remover",
    status: "completed",
    date: "Oct 2026",
    description:
      "A smart utility application that scans system directories, identifies duplicate files using cryptographic hashing algorithms, and frees up storage space.",
    problem:
      "Accumulated duplicate and temporary files waste valuable disk space, clutter system storage, and degrade file search performance.",
    technologies: ["NodeJs", "Typescript", "Electron", "Python", "SHA-256 Hashing", "File System API"],
    team: ["Vishika Agrawal", "Sambhav Surana", "Ajay Dhakad", "Muskan Jhakrod", "Garvit Hindoliya"],
    impact:
      "Freed up gigabytes of redundant storage space across lab computers, optimizing disk efficiency and workspace organization.",
    category: "Web Apps",
    codeLink: "#",
  },

  {
    id: 10,
    title: "Anonymous Chat Application",
    status: "in progress",
    date: "Oct 2026",
    description:
      "A privacy-focused real-time chat platform allowing students to join temporary encrypted rooms and discuss tech topics without exposing personal identities.",
    problem:
      "Students often hesitate to ask doubts, request feedback, or seek mentorship openly due to privacy concerns and social anxiety.",
    technologies: ["NextJs", "Typescript", "Socket.io", "NodeJs", "Redis", "Tailwind"],
    team: ["Ashish Madhesiya", "Anushka Chouhan", "Devendra Dhaked", "Krish Koli"],
    impact:
      "Enabled open discussions, peer-to-peer tech help, and safe mentorship for 500+ campus students in a confidential environment.",
    category: "Web Apps",
    codeLink: "#",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<string>("All Projects");

  const filteredProjects =
    filter === "All Projects"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <Layout>
      <div className="min-h-screen bg-white text-[#0A1D3D]">
        {/* Header Hero Section */}
        <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 px-6 bg-gradient-to-b from-gray-50 via-white to-white">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl sm:text-6xl fbold font-bold tracking-tight text-[#0A1D3D] mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-[#FF6A00] to-[#FFE600] text-transparent bg-clip-text">
                Projects
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Discover the innovative solutions our club members have built to solve
              real-world problems and make a positive impact on our campus community.
            </p>

            {/* Notification Root for feedback toast */}
            {typeof window !== "undefined" && (
              <div
                id="notification-root"
                style={{ position: "fixed", top: 24, right: 24, zIndex: 9999 }}
              ></div>
            )}

            {/* Stats Overview Cards */}
            <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {/* Completed */}
              <div className="flex flex-col items-center bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-4xl sm:text-5xl fbold text-[#fa4c43]">
                  {projects.filter((p) => p.status === "completed").length}
                </span>
                <span className="mt-2 text-base sm:text-lg font-bold text-[#0A1D3D]">
                  Completed
                </span>
              </div>
              {/* In Progress */}
              <div className="flex flex-col items-center bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-4xl sm:text-5xl fbold text-[#FF6A00]">
                  {projects.filter((p) => p.status === "in progress").length}
                </span>
                <span className="mt-2 text-base sm:text-lg font-bold text-[#0A1D3D]">
                  In Progress
                </span>
              </div>
              {/* Planned */}
              <div className="flex flex-col items-center bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-4xl sm:text-5xl fbold text-[#0A1D3D]">
                  {projects.filter((p) => p.status === "planned").length}
                </span>
                <span className="mt-2 text-base sm:text-lg font-bold text-[#0A1D3D]">
                  Planned
                </span>
              </div>
            </div>

            {/* Filters */}
            <div className="mt-10 sm:mt-12 flex flex-wrap justify-center gap-3">
              {[
                { name: "All Projects", icon: Code },
                { name: "Web Apps", icon: Globe },
                { name: "Mobile", icon: Smartphone },
                { name: "Data Science", icon: Database },
              ].map((item) => {
                const IconComponent = item.icon;
                const isSelected = filter === item.name;
                return (
                  <button
                    key={item.name}
                    onClick={() => setFilter(item.name)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm sm:text-base transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-[#0A1D3D] text-white shadow-md scale-105"
                        : "bg-gray-100 text-[#0A1D3D] hover:bg-gray-200 border border-gray-200/70"
                    }`}
                  >
                    <IconComponent size={18} /> {item.name}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Project Cards Grid Section */}
        <section className="py-8 pb-20 px-6 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col justify-between p-6 rounded-2xl border border-gray-200/90 bg-white shadow-md hover:shadow-xl hover:border-[#FF6A00]/40 transition-all duration-300 group"
              >
                <div>
                  {/* Status + Date Header */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full capitalize border ${
                        project.status === "completed"
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                          : project.status === "in progress"
                          ? "bg-amber-50 text-amber-700 border-amber-200"
                          : "bg-blue-50 text-blue-700 border-blue-200"
                      }`}
                    >
                      {project.status}
                    </span>
                    <p className="text-gray-500 text-xs font-medium">{project.date}</p>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl fbold text-[#0A1D3D] group-hover:text-[#FF6A00] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Problem Statement */}
                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <p className="text-xs uppercase tracking-wider text-gray-500 fbold font-bold">
                      Problem Statement
                    </p>
                    <p className="text-gray-700 text-sm mt-1 leading-snug">
                      {project.problem}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mt-4">
                    <p className="text-xs uppercase tracking-wider text-gray-500 fbold font-bold">
                      Technologies
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-gray-100 text-[#0A1D3D] text-xs font-medium rounded-md border border-gray-200/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Team */}
                  <div className="mt-4">
                    <p className="text-xs uppercase tracking-wider text-gray-500 fbold font-bold">
                      Team
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      {project.team.map((member, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-orange-50 text-[#D96627] text-xs font-medium rounded-md border border-orange-100"
                        >
                          {member}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Community Impact */}
                  <div className="mt-4">
                    <p className="text-xs uppercase tracking-wider text-gray-500 fbold font-bold">
                      Community Impact
                    </p>
                    <p className="text-gray-700 text-sm mt-1 leading-snug">
                      {project.impact}
                    </p>
                  </div>
                </div>

                {/* Buttons (Code & Demo) */}
                <div className="flex gap-3 mt-6 pt-4 border-t border-gray-100">
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full border-2 border-[#0A1D3D] text-[#0A1D3D] font-semibold text-sm hover:bg-[#0A1D3D] hover:text-white transition-colors"
                    >
                      <Github size={16} /> Code
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full bg-[#fa4c43] hover:bg-[#ed374f] text-white font-semibold text-sm shadow-sm hover:shadow transition-all"
                    >
                      Demo <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Bottom Banner */}
        <section className="px-6 pb-20 max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-[#0A1D3D] via-[#0D244B] to-[#102C5A] text-white rounded-3xl p-8 sm:p-14 text-center shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-5xl fbold font-bold mb-4 text-white">
                Ready to Build Something{" "}
                <span className="bg-gradient-to-r from-[#FF6A00] to-[#FFE600] text-transparent bg-clip-text">
                  Amazing?
                </span>
              </h2>
              <p className="text-base sm:text-xl text-gray-300 leading-relaxed mb-8">
                Join our coding club and turn your ideas into reality. Work with
                passionate developers, learn new technologies, and make a real impact
                on your community.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <button
                  type="button"
                  className="bg-[#fa4c43] hover:bg-[#ed374f] text-white px-8 py-3.5 rounded-full fbold tracking-wide text-lg shadow-lg hover:scale-105 transition-all w-full sm:w-auto cursor-pointer"
                  onClick={() => {
                    const root = document.getElementById("notification-root");
                    if (root) {
                      const el = document.createElement("div");
                      el.className =
                        "bg-[#fff] text-black px-6 py-3 rounded-lg shadow-lg mb-2 animate-fade-in";
                      el.innerText =
                        "Thank you for your interest! Registration will open soon.";
                      root.appendChild(el);
                      setTimeout(() => {
                        el.classList.add("animate-fade-out");
                        setTimeout(() => root.removeChild(el), 400);
                      }, 2000);
                    }
                  }}
                >
                  Join Our Club
                </button>
                <a
                  href="https://github.com/Abhyudaya-SVVV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white/80 hover:bg-white hover:text-[#0A1D3D] text-white px-8 py-3.5 rounded-full fbold tracking-wide text-lg transition-all w-full sm:w-auto"
                >
                  Propose a Project
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

