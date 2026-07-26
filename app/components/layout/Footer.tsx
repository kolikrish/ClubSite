import React from "react";
import { Link } from "react-router";
import { FaDiscord, FaTwitter, FaGithub, FaLinkedin  } from "react-icons/fa";

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
        {/* Centered and justify-between flex container */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Quick Links */}
          <div className="mb-6 md:mb-0 flex-1 flex flex-col items-center">
            <h4 className="text-white font-bold text-md mb-3 text-center">Quick Links</h4>
            <ul className="space-y-2 text-md flex flex-col items-center">
              <li>
                <Link to="/hackathons" className="text-[#D1D5DB] hover:text-[#F5B282] text-center transition-colors">
                  Competition and Hackathons
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[#D1D5DB] hover:text-[#F5B282] text-center transition-colors">
                  Teams
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-[#D1D5DB] hover:text-[#F5B282] text-center transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Logo and Socials */}
          <div className="mb-6 md:mb-0 flex-1 flex flex-col items-center">
            <img src="/images/logo2.png" alt="Hack Club" className="h-14 mb-4 mx-auto" />
            <div className="flex space-x-4 mb-2">
              <a href="https://discord.gg/knyuXsXz" className="text-[#D1D5DB] hover:text-white transition-colors">
                <FaDiscord size={24} />
              </a>
              <a href="#" className="text-[#D1D5DB] hover:text-white transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="https://github.com/Abhyudaya-SVVV" className="text-[#D1D5DB] hover:text-white transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/company/abhyudaya-coding-club/" className="text-[#D1D5DB] hover:text-white transition-colors">
                <FaLinkedin size={24} />
              </a>

            </div>
            <div className="text-[#D1D5DB] text-sm">
              <a href="mailto:abhyudaya@svvv.edu.in" className="hover:underline">
                abhyudaya@svvv.edu.in
              </a>
            </div>
          </div>

          {/* Resources */}
          <div className="flex-1 flex flex-col items-center">
            <h4 className="text-white font-bold text-md mb-3 text-center">Resources</h4>
            <ul className="space-y-2 text-md flex flex-col items-center">
              <li>
                <Link to="/events" className="text-[#D1D5DB] hover:text-[#F5B282] transition-colors text-center">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-[#D1D5DB] hover:text-[#F5B282] transition-colors text-center">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[#D1D5DB] hover:text-[#F5B282] transition-colors text-center">
                  Scrapbook
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-white/70 text-xs text-[#D1D5DB] text-center">
          <p>© 2025 Abhyudaya Coding Club (c)(3) nonprofit</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
