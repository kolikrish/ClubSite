// components/HackathonHero.tsx
import React from "react";

interface HackathonHeroProps {
  backgroundImage: string;
}

const HackathonHero: React.FC<HackathonHeroProps> = ({ backgroundImage }) => {
  return (
    <section
      className={`
        relative w-full min-h-[80vh] sm:min-h-[90vh] flex items-center justify-center text-center overflow-hidden
      `}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(51, 142, 218, 0.9), rgba(51, 142, 218, 0.7) 35%, rgba(91, 192, 222, 0.2) 100%)"
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center px-3 sm:px-6 md:px-12">
        <div className="bg-white/80 rounded-lg shadow-lg px-3 py-6 sm:px-6 sm:py-10 max-w-full sm:max-w-3xl md:max-w-5xl mx-auto">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
            Join Our Coding Club{" "}
            <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-500">
              Where Ideas Turn Into Innovation.
            </span>
          </h1>

          <p className="mt-4 text-gray-700 text-sm xs:text-base sm:text-lg md:text-xl">
            Join Abhyudaya Coding Club to solve real-world challenges.
            <span className="block sm:inline font-bold">
              It&apos;s not an extracurricular or a club. It&apos;s not a class or a lecture.
            </span>{" "}
            Hackathons are a place to build things for fun and meet others doing the same.
          </p>
        </div>

        {/* Floating Button */}
        <div className="relative w-full flex justify-center sm:block">
          <div className="mt-6 sm:mt-0 sm:absolute sm:top-0 sm:right-10 rotate-0 sm:rotate-6 transition-transform duration-300 ease-in-out hover:rotate-0 hover:scale-105">
            <a
              href="#"
              className="block bg-gradient-to-r from-yellow-400 to-pink-400 text-white text-base xs:text-lg sm:text-xl font-bold py-3 px-6 sm:py-4 sm:px-10 rounded-full shadow-lg transition transform"
            >
              WANT TO BUILD SOMETHING EPIC ? →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HackathonHero;
