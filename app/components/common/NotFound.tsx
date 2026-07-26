import React from "react";
import { Link } from "react-router";
import { Home, FolderGit2, Calendar } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-6 py-20 bg-white text-[#0A1D3D]">
      <div className="max-w-2xl w-full text-center">
        {/* Stylized 404 Header */}
        <div className="relative inline-block mb-4">
          <h1 className="text-8xl sm:text-9xl fbold font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] via-[#fa4c43] to-[#0A1D3D] select-none">
            404
          </h1>
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-orange-100 text-[#D96627] text-xs uppercase tracking-widest font-bold px-4 py-1 rounded-full border border-orange-200 shadow-sm">
            Page Not Found
          </span>
        </div>

        <h2 className="text-2xl sm:text-4xl fbold font-bold text-[#0A1D3D] mt-6 mb-3">
          Looks like you've ventured into uncharted code!
        </h2>

        <p className="text-gray-600 text-base sm:text-lg max-w-lg mx-auto mb-8 leading-relaxed">
          The page you are looking for might have been removed, renamed, or is temporarily unavailable. Let's get you back on track!
        </p>

        {/* Quick Action Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0A1D3D] hover:bg-[#122b56] text-white fbold font-semibold transition-all shadow-md hover:scale-105"
          >
            <Home size={18} /> Go Back Home
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-100 hover:bg-gray-200 text-[#0A1D3D] border border-gray-300 fbold font-semibold transition-all"
          >
            <FolderGit2 size={18} /> View Projects
          </Link>
          <Link
            to="/events"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#fa4c43] text-[#fa4c43] hover:bg-[#fa4c43] hover:text-white fbold font-semibold transition-colors"
          >
            <Calendar size={18} /> Explore Events
          </Link>
        </div>
      </div>
    </div>
  );
}
