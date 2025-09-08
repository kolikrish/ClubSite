import React from 'react';
import backgroundVideo from '/assets/backgroundVideo.mp4'; // Adjust path if needed

const HackathonAbout: React.FC = () => {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 bg-opacity-70 z-10 flex items-center justify-center px-4">
        <div className="text-center text-white max-w-5xl">
          <h2 className="text-2xl font-semibold text-blue-900 tracking-widest mb-2">
            AbhyudayaClub.vercel.com
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6">
            Spread the word about your hackathon.
          </h1>
          <p className="text-lg sm:text-2xl text-gray-300 mb-8 leading-relaxed">
            <span className="text-white font-semibold">AbhyudayaClub.vercel.com </span>
             is a platform for passionate coders and innovators to connect, collaborate, and grow. 
            We organize coding events, hackathons, and workshops that reach students across campuses 
            and provide opportunities to learn, build, and showcase skills.
          </p>
          <button className="bg-gradient-to-r from-yellow-400 to-red-500 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg hover:opacity-90 transition">
            ADD YOUR HACKATHON →
          </button>
        </div>
      </div>
    </div>
  );
};

export default HackathonAbout;
