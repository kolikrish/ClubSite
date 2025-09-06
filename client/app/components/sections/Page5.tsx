import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import { leader } from "~/lib/leader";

export default function Page5() {
  return (
    <div className="bg-white flex flex-col items-center max-w-[95vw] mx-auto px-6 sm:px-12 md:px-32 text-[#0A1D3D]">
      <div className="text-center mb-6 sm:mb-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl fbold font-bold mb-4">
          <span className="bg-gradient-to-r px-2 rounded-lg text-white from-[#0A1D3D] via-[#0A1D3D]/80 to-[#FFE600]">
            Our
          </span>{" "}
          Leadership
        </h1>
        <p className="text-lg sm:text-xl text-[#0A1D3D]/80">
          Meet the dedicated faculty and administrators who guide and support our club.
        </p>
      </div>

      {/* Leaders */}
      <div className="w-full flex flex-wrap justify-center gap-6 sm:gap-8">
        {leader.map((leader, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row w-full sm:w-[90%] md:w-[45%] border rounded-md overflow-hidden border-gray-600/20 shadow-md"
          >
            <div className="w-full sm:w-[10rem] p-4">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-40 sm:h-full object-contain sm:object-cover rounded"
              />
            </div>
            <div className="w-full sm:w-[60%] p-4 flex flex-col justify-center">
              <h1 className="text-lg sm:text-xl font-bold">{leader.name}</h1>
              <p className="text-sm text-gray-600 mt-1">{leader.position}</p>
              <p className="text-sm mt-4 italic">{leader.quote}</p>
              <div className="mt-2">
                <BsLinkedin className="inline-block mr-1 text-blue-600" />
                <Link
                  to={leader.link}
                  target="_blank"
                  className="text-blue-600 hover:text-blue-800 underline underline-offset-2 hover:decoration-wavy"
                >
                  LinkedIn Profile
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
