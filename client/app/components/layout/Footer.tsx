import React from "react";
import { Link } from "react-router";
import { FaDiscord, FaTwitter, FaGithub } from "react-icons/fa";

// Removed unused imports: FaFacebook, PiWhatsappLogoThin

const Footer = () => {
  return (
    <footer className="relative bg-[#091b3a] py-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tech-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="0" cy="0" r="1" fill="currentColor" />
              <circle cx="20" cy="0" r="1" fill="currentColor" />
              <circle cx="10" cy="10" r="1" fill="currentColor" />
              <circle cx="0" cy="20" r="1" fill="currentColor" />
              <circle cx="20" cy="20" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tech-pattern)" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white font-bold text-md mb-3">Quick Links</h4>
            <ul className="space-y-2 text-md">
              <li>
                <Link to="/hackathons" className="text-[#D1D5DB] hover:text-[#F5B282] transition-colors">
                  Competition and Hackathons
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[#D1D5DB] hover:text-[#F5B282] transition-colors">
                  Teams
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-[#D1D5DB] hover:text-[#F5B282] transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-md mb-3">Resources</h4>
            <ul className="space-y-2 text-md">
              <li>
                <Link to="/events" className="text-[#D1D5DB] hover:text-[#F5B282] transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-[#D1D5DB] hover:text-[#F5B282] transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[#D1D5DB] hover:text-[#F5B282] transition-colors">
                  Scrapbook
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-2">
            <img src="/images/logo2.png" alt="Hack Club" className="h-14 mb-4" />
            <div className="flex space-x-4 mb-2 pl-2">
              <a href="https://discord.gg/knyuXsXz" className="text-[#D1D5DB] hover:text-white transition-colors">
                <FaDiscord size={24} />
              </a>
              <a href="#" className="text-[#D1D5DB] hover:text-white transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="https://github.com/Abhyudaya-SVVV" className="text-[#D1D5DB] hover:text-white transition-colors">
                <FaGithub size={24} />
              </a>
            </div>
            <div className="text-[#D1D5DB] text-sm pl-2">
              <a href="tel:918827270123" className="hover:underline">
                91 88272 70123
              </a>
            </div>

            <div className="text-[#D1D5DB] text-sm pl-2">
              <a href="tel:8109235350" className="hover:underline">
                91 81092 35350
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-white/70 text-xs text-[#D1D5DB]">
          <p>© 2025 Abhyudaya Coding Club (c)(3) nonprofit</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
