import React, { useState } from "react";
import type { Route } from "./+types/projects";
import Layout from "../components/layout/Layout";

// Import icons from lucide-react (or your icon library)
import { Code, Globe, Smartphone, Database } from "lucide-react";

// Fix: meta should not contain React logic or hooks, only static meta info
export function meta() {
  return [
    { title: "Projects - Abhyudaya" }
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
    team: ["Mandeep Yadav", "Devang Sharma",],
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
    team: ["Akshat Mishra","Adiya Patel"],
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
    technologies: ["NextJs", "Typescript", "Tailwind", "NodeJs" , "MongoDB"],
    team: ["Krish Koli","Mandeep Yadav"],
    impact:
      ".",
    category: "Web Apps",
    codeLink: "#",
  },

  {
    id: 5,
    title: "Event Management",
    status: "in progress",
    date: "Oct 2024",
    description:
      "An event management app that helps clubs organize, promote, and track events efficiently, offering features like registrations, reminders, and real-time updates to enhance student participation.",
    problem:
      "Clubs face challenges in managing events manually, leading to miscommunication, poor attendance tracking, and limited engagement among students.",
    technologies: ["NextJs", "Typescript", "Tailwind", "NodeJs" , "MongoDB"],
    team: ["Nawadha Jadiya","Aayush Madhesiya", "Mandeep Yadav"],
    impact:
      "Streamlined event organization, boosted participation by 60%, and improved communication between clubs and students, creating more engaging campus experiences.",
    category: "Web Apps",
    codeLink: "#",
  },

  {
    id: 6,
    title: "Time Table Generator",
    status: "in progress",
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
];

export default function Projects() {
  const [filter, setFilter] = useState<string>("All Projects");

  const filteredProjects =
    filter === "All Projects"
      ? projects
      : projects.filter((p) => p.category === filter);

  // 'stats' is not used, so remove it to fix lint warning

  return (
    <Layout>
      <div className="min-h-screen">

      <section className="py-16 px-6 bg-gradient-to-b from-[#0a0f1a] to-[#101826] pt-32 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl font-bold text-center bg-gradient-to-r from-purple-400 to-teal-300 bg-clip-text text-transparent">
          Our Projects
        </h2>
        <p className="text-2xl mt-4 text-gray-300 text-center max-w-3xl mx-auto">
          Discover the innovative solutions our club members have built to solve
          real-world problems and make a positive impact on our campus
          community.
        </p>

        <div className="mt-12 mb-8 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {/* Completed */}
          <div className="flex flex-col items-center bg-[#181f2e] rounded-2xl p-6 border border-green-700/30 shadow-md">
            <span className="text-4xl font-bold text-green-400">
              {projects.filter((p) => p.status === "completed").length}
            </span>
            <span className="mt-2 text-lg font-medium text-green-200">Completed</span>
          </div>
          {/* In Progress */}
          <div className="flex flex-col items-center bg-[#181f2e] rounded-2xl p-6 border border-purple-700/30 shadow-md">
            <span className="text-4xl font-bold text-purple-400">
              {projects.filter((p) => p.status === "in progress").length}
            </span>
            <span className="mt-2 text-lg font-medium text-purple-200">In Progress</span>
          </div>
          {/* Planned */}
          <div className="flex flex-col items-center bg-[#181f2e] rounded-2xl p-6 border border-blue-700/30 shadow-md">
            <span className="text-4xl font-bold text-blue-400">
              {projects.filter((p) => p.status === "planned").length}
            </span>
            <span className="mt-2 text-lg font-medium text-blue-200">Planned</span>
          </div>
        </div>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setFilter("All Projects")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl border ${
              filter === "All Projects"
                ? "bg-blue-500 text-white border-blue-500"
                : "border-gray-700 text-gray-300 hover:border-blue-400"
            }`}
          >
            <Code size={18} /> All Projects
          </button>
          <button
            onClick={() => setFilter("Web Apps")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl border ${
              filter === "Web Apps"
                ? "bg-blue-500 text-white border-blue-500"
                : "border-gray-700 text-gray-300 hover:border-blue-400"
            }`}
          >
            <Globe size={18} /> Web Apps
          </button>
          <button
            onClick={() => setFilter("Mobile")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl border ${
              filter === "Mobile"
                ? "bg-blue-500 text-white border-blue-500"
                : "border-gray-700 text-gray-300 hover:border-blue-400"
            }`}
          >
            <Smartphone size={18} /> Mobile
          </button>
          <button
            onClick={() => setFilter("Data Science")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl border ${
              filter === "Data Science"
                ? "bg-blue-500 text-white border-blue-500"
                : "border-gray-700 text-gray-300 hover:border-blue-400"
            }`}
          >
            <Database size={18} /> Data Science
          </button>
        </div>

        {/* Project Cards */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-2xl border border-gray-700 bg-[#111827] hover:shadow-lg hover:shadow-blue-500/10 transition"
            >
              {/* Status + Date */}
              <div className="flex items-center justify-between">
                <span
                  className={`px-3 py-1 text-xs rounded-full capitalize ${
                    project.status === "completed"
                      ? "bg-green-500/20 text-green-400"
                      : project.status === "in progress"
                      ? "bg-purple-500/20 text-purple-400"
                      : "bg-blue-500/20 text-blue-400"
                  }`}
                >
                  {project.status}
                </span>
                <p className="text-gray-400 text-sm">{project.date}</p>
              </div>

              {/* Title + Description */}
              <h3 className="text-xl font-semibold mt-3">{project.title}</h3>
              <p className="text-gray-300 mt-2 text-sm">
                {project.description}
              </p>

              {/* Problem Statement */}
              <p className="mt-4 text-white font-semibold">Problem Statement</p>
              <p className="text-gray-400 text-sm">{project.problem}</p>

              {/* Technologies */}
              <p className="mt-4 text-white font-semibold">Technologies</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Team */}
              <p className="mt-4 text-white font-semibold">Team</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.team.map((member, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-lg"
                  >
                    {member}
                  </span>
                ))}
              </div>

              {/* Community Impact */}
              <p className="mt-4 text-white font-semibold">Community Impact</p>
              <p className="text-gray-400 text-sm">{project.impact}</p>

              {/* Buttons */}
              <div className="flex gap-4 mt-6">
                {project.codeLink && (
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 border border-gray-600 rounded-lg text-center hover:bg-gray-800 transition"
                  >
                    Code
                  </a>
                )}
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 border border-gray-600 rounded-lg text-center hover:bg-gray-800 transition"
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


    <section className="py-20 px-6 bg-gradient-to-b from-[#101826] to-[#0a0f1a] text-center text-white">
    
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Build Something Amazing?
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-gray-300 text-lg">
          Join our coding club and turn your ideas into reality. Work with
          passionate developers, learn new technologies, and make a real impact
          on your community.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-6">
          <a
            href="#join"
            className="px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-purple-400 to-blue-400 text-black shadow-lg hover:opacity-90 transition"
          >
            Join Our Club
          </a>
          <a
            href="#propose"
            className="px-6 py-3 rounded-xl font-medium border border-gray-600 hover:bg-gray-800 transition"
          >
            Propose a Project
          </a>
        </div>
      </div>
    </section>


      </div>
    </Layout>
  );
}
