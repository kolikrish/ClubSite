import React from "react";
import { Link } from "react-router-dom";
import { member } from "~/lib/member";

export default function Page6() {
  return (
    <div className="bg-white flex flex-col items-center max-w-[95vw] h-auto mx-auto px-6 sm:px-32 text-[#0A1D3D]">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl fbold font-bold mb-2">
          Our{" "}
          <span className="bg-gradient-to-r px-2 rounded-lg text-white from-orange-400 to-[#0A1D3D]">
            Team
          </span>{" "}
        </h1>
        <p className="text-lg sm:text-xl text-[#0A1D3D]/80">
          Meet the talented students who lead our club and organize our
          activities.
        </p>
      </div>

    {/* Team Members Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mt-6 sm:mt-12">
      {member.map((member, index) => (
        <div key={index} className="relative w-[18rem] h-[25rem] overflow-hidden group transition-all duration-300 bg-white border rounded-md border-gray-600/20 shadow-md">
        <div className="w-full h-[70%] overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            loading="lazy"
            width={288}  // 18rem = 288px
            height={280} // 70% of 25rem = 280px
            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white p-4 transform translate-y-0 transition-transform duration-300">
          <div className="w-20 h-20 bg-[#121F3F]/70 rounded-full absolute -left-2 top-0 blur-3xl"></div>
          <h1 className="text-xl font-bold text-[#0A1D3D]">{member.name}</h1>
          <h2 className="text-md text-[#0A1D3D]/80 mb-2">{member.position}</h2>
          <p className="text-sm text-gray-600 mb-1">
            Specialization: {member.specialization}
          </p>
          <Link
            to={member.linkedin}
            target="_blank"
            className="text-blue-600 hover:text-blue-800 mt-4 underline underline-offset-2 hover:decoration-wavy"
          >
            LinkedIn
          </Link>
        </div>
        </div>
      ))}
    </div>
    </div>
  );
}
