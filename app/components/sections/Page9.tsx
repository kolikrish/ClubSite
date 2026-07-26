// app/components/Organizations.tsx
"use client";

import React from "react";
import Button from "../ui/Button";

type Organization = {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
  icon?: string; // optional small logo/icon
};

const organizations: Organization[] = [
  {
    id: 1,
    name: "AR / VR Workshop",
    location: "Explore the world of Augmented and virtual reality.",
    description:
      "Dive into the future with our AR/VR Workshop! Learn the basics of Augmented and Virtual Reality.",
    image: "https://imgs.search.brave.com/uRNu7IygsdfznhebTRFJPfUyDFwSDkd7E6x8TWEkt5o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyNC8w/OC8xMC8yMC8yMy9h/aS1nZW5lcmF0ZWQt/ODk2MDAyN182NDAu/cG5n",
    icon: "https://hackclub.com/_next/image/?url=%2Ffiscal-sponsorship%2Freboot.png&w=128&q=75",
  },
  {
    id: 2,
    name: "Git and Github Workshop",
    location: "Introuduction to Github and Open source.",
    description:
      "Unlock the power of collaboration with our Git and GitHub Workshop! Learn the essentials of version control.",
    image: "https://imgs.search.brave.com/xoXIfBjadad5FaAnbbrBT3d052Alj2RfZirWu2O3jok/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9kaWdpdGFsLWJs/dWUtcGFydGljbGVz/LXdhdmUtZmxvdy13/aXRoLWR1c3QtYm9r/ZWhfMjQwNzAtMTIx/MS5qcGc_c2VtdD1h/aXNfaHlicmlkJnc9/NzQwJnE9ODA",
    icon: "https://hackclub.com/_next/image/?url=%2Ffiscal-sponsorship%2Fapocalypse.png&w=128&q=75",
  },
  {
    id: 3,
    name: "DSA Workshop",
    location: "Getting Started with DSA !",
    description: "This was the offline session for 100 Days of code. Introducing to DSA , how to progress , streghten your fundamentals. Placement related guidance.",
    image: "https://imgs.search.brave.com/zjGFDrE9DcdYqBqPlCqj60PKOT3HJt3_UmZu57zczD0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmFt/ZXJ1c2VyY29udGVu/dC5jb20vaW1hZ2Vz/L0hlQlpod09WeFF5/RlUzNnBrZlF5RU1F/eElPZy5wbmc",
    icon: "https://hackclub.com/_next/image/?url=%2Ffiscal-sponsorship%2Fgreen-mountain-robotics.png&w=128&q=75",
  },
  {
    id: 4,
    name: "Game Alchemy (Game Development Workshop)",
    location: "Learn Unity / Unreal from Industry experts.",
    description: "Level up your skills at our hands-on Game Development Workshop and bring your game ideas to life.",
    image: "https://imgs.search.brave.com/_Fmons_PJYfCquMdTdDc6zIoAOelBjX4XX6j-qjQt8A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by92/aXJ0dWFsLWFzc2lz/dGFudC1jaXJjbGUt/YmFja2dyb3VuZC1w/dXJwbGUtZ3JhZGll/bnQtZGlzcnVwdGl2/ZS10ZWNobm9sb2d5/XzUzODc2LTEyNDY3/Ni5qcGc_c2VtdD1h/aXNfaHlicmlkJnc9/NzQwJnE9ODA",
    icon: "https://hackclub.com/_next/image/?url=https%3A%2F%2Fcloud-91boqw8z9-hack-club-bot.vercel.app%2F0icon-rounded.png&w=128&q=75",
  },
];

const Page9: React.FC = () => {
  return (
    <section className="w-full py-16 px-6 bg-white">
      {/* Stats Section */}
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Meet the Events Powered by Abhyudaya Coding Club.
        </h2>
        <p className="text-lg text-gray-700">
          From hackathons to coding bootcamps , we organize impactful events that empower students to learn , build and innovate.
          Here are some of our past highlights.
        </p>
      </div>

      {/* Organization Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {organizations.map((org) => (
          <div
            key={org.id}
            className="relative rounded-xl overflow-hidden shadow-lg h-64 sm:h-56 flex items-end text-white transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl group cursor-pointer"
            style={{
              backgroundImage: `url(${org.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 transition-colors duration-300 group-hover:bg-black/30"></div>

            {/* Content */}
            <div className="relative z-10 p-4 w-full">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                {org.icon && (
                  <img
                    src={org.icon}
                    alt={`${org.name} logo`}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white transition-transform duration-300 group-hover:scale-110"
                  />
                )}
                <h3 className="text-2xl sm:text-3xl font-bold break-words">{org.name}</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-200 mb-1 break-words">{org.location}</p>
              <p className="text-xs sm:text-lg break-words">{org.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="mt-10 flex justify-center">
        <Button
          variant="outline"
          className="bg-gray-800 text-white border-none hover:bg-gray-900 transition-transform duration-200 hover:scale-110"
        >
          SEE MORE Workshops →
        </Button>
      </div>
    </section>
  );
};

export default Page9;
