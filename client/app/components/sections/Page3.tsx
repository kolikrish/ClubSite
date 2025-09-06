import React from "react";
import { Link } from "react-router";

export default function Page3() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 flex flex-col justify-center items-center max-w-[95vw] mx-auto px-4 sm:px-6 md:px-12 text-[#0A1D3D] overflow-hidden">
      <h1 className="text-4xl md:text-[3.5rem] fbold text-center mb-1 sm:mb-3 animate-fade-in leading-tight">
        Explore our{" "}
        <span className="bg-[#0A1D3D] text-white px-2 sm:px-4 sm:py-2 rounded-lg inline-block transform hover:scale-105 transition-transform">
          tech
        </span>{" "}
        community
      </h1>

      <p className="text-base sm:text-lg md:text-xl leading-relaxed text-center mb-8 text-[#0A1D3D]/80 max-w-2xl">
        Be part of an innovative tech ecosystem where students collaborate,
        innovate, and create the future of technology!
      </p>

      <div className="w-full max-w-4xl h-auto rounded-2xl overflow-hidden shadow-xl bg-cover bg-center relative border border-gray-600/50 mb-10">
        <img
          src="/images/scrap.png"
          alt=""
          className="w-full h-auto object-cover"
        />
        <Link
          to=""
          className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 border border-white/25 inline-block bg-[#D96627] text-white px-6 sm:px-8 py-3 sm:py-4 fbold tracking-wide rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all text-sm sm:text-lg"
        >
          Learn more →
        </Link>
      </div>

      <div
        className="flex flex-col md:flex-row w-full max-w-4xl h-auto rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://hackclub.com/home/slack_ama.webp")',
        }}
      >
        <div className="absolute inset-0 bg-black/80 z-0"></div>

        {/* Left section */}
        <div className="w-full md:w-[70%] h-full p-6 sm:p-8 relative z-10">
          <h1 className="fbold text-2xl sm:text-3xl md:text-4xl text-white mb-4 sm:mb-6">
            Our Vibrant Network
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-100 mb-6 sm:mb-8">
            Join a dynamic community of tech enthusiasts where innovation meets
            collaboration. Our platform offers workshops, hackathons, and
            networking events that help you grow both technically and
            professionally.
            <br />
            <br />
            We regularly host tech talks and workshops with industry leaders,
            successful entrepreneurs, and renowned developers who share their
            insights and experiences.
          </p>
          <Link
            to=""
            className="inline-block bg-[#D6D9DE] text-[#0A1D3D] px-6 sm:px-8 py-3 sm:py-4 fbold tracking-wide rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all text-sm sm:text-lg"
          >
            Join our Community →
          </Link>
        </div>

        {/* Right statistics section */}
        <div className="w-full md:w-[30%] h-auto bg-black/70 flex flex-row md:flex-col justify-around md:justify-center items-center gap-6 md:space-y-8 p-4 sm:p-6 relative z-10">
          {[
            ["50+", "Team Members"],
            ["1000+", "Instagram Followers"],
            ["800+", "Active Students"],
          ].map(([value, label], i) => (
            <div
              key={i}
              className="flex flex-col items-center transform hover:scale-105 transition-all"
            >
              <h1 className="fbold text-2xl sm:text-3xl text-white">{value}</h1>
              <p className="text-sm sm:text-base text-blue-100 text-center">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
