// app/components/Hero.tsx
"use client";

import React from "react";
import Button from "../ui/Button"; // Fixed import path

const Workshop: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-900 to-blue-300 text-white px-6 pt-32 sm:pt-0">


      {/* Main Content */}
      <div className="relative z-10 max-w-5xl text-center">

        <h1 className="lg:mt-16 text-5xl sm:text-7xl font-extrabold leading-[1.00] text-transparent stroke-white" style={{ WebkitTextStroke: "0.1px #fff" }}>
          The hub of<br /> innovation , learning & <span className="text-white">Collaboration.</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-white/90">
          Join our exciting <span className="font-semibold">Events , Workshops and Hackathons</span> designed to help you learn , build and grow as a developer.
          From Coding competition to hands-on workshops , we create opportunities for every tech enthusiast.
        </p>

        {/* Buttons */}
        {/* <div className="mt-8 flex justify-center gap-4">
          <Button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full text-lg font-semibold transition-transform duration-200 hover:scale-110 hover:shadow-[0_8px_30px_rgb(0,0,0,0.25)]">
            Explore Events
          </Button>
          <Button variant="outline" className="border-white text-white px-6 py-3 rounded-full text-lg">
            Register Now
          </Button>
        </div> */}

        {/* Raffle box */}
        {/* <div className="mt-6 bg-white text-black rounded-lg shadow-md inline-block px-5 py-3 text-sm">
          <p className="font-semibold">Win a 13-Inch MacBook Air!</p>
          <p>We’re giving away a MacBook to a lucky teenager! Join the Raffle by August 31st, 2025.</p>
        </div> */}
      </div>

      {/* Bottom Highlight Bar */}
      <div className="relative z-10 mt-12 bg-white/70 text-black rounded-xl px-6 py-4 shadow-md flex flex-col sm:flex-row sm:items-center sm:justify-between w-full max-w-4xl transition-transform duration-300 hover:scale-105">
        <p className="font-semibold text-xl">HCB is now open source!</p>
        <div className="flex gap-3 mt-3 sm:mt-0">
          <Button className="bg-gray-800 hover:bg-gray-900 text-white rounded-full px-5 py-2 transition-transform duration-200 hover:scale-110">
            ⭐ Star on GitHub
          </Button>
          <Button className="bg-red-500 hover:bg-red-600 text-white rounded-full px-5 py-2 transition-transform duration-200 hover:scale-110">
            Read Our Blog Post →
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="relative z-10 mt-16 flex flex-col sm:flex-row justify-center gap-8 sm:gap-12 text-center text-black w-full max-w-3xl mx-auto">
        <div className="flex-1 flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-bold">20+</h2>
          <p className="text-gray-700 text-base sm:text-lg">Successful Workshops</p>
        </div>
        <div className="flex-1 flex flex-col items-center border-t border-b sm:border-t-0 sm:border-b-0 sm:border-l sm:border-r border-gray-300 py-6 sm:py-0 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold">1000+</h2>
          <p className="text-gray-700 text-base sm:text-lg">Participants Engaged</p>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-bold">2023</h2>
          <p className="text-gray-700 text-base sm:text-lg">Serving Coders Since</p>
        </div>
      </div>
    </section>
  );
};

export default Workshop;
