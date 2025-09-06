import React from "react";
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileNav from "./MobileNav";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  interface NavItem {
    path: string;
    label: string;
  }

  const navItems = [
    { path: '/', label: "Home"},
    { path: "/events", label: "Events" },
    { path: "/hackathons", label: "Hackathons" },
    { path: "/Gallery", label: "Gallery" },
    // { path: "/blogs", label: "Blogs" },
    { path: "/projects", label: "Projects" },
    { path: "/admin", label: "Admin" },
  ];

  const isActive = (path: string): boolean => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className="fixed w-full py-1 top-0 z-30 transition-all duration-300 bg-[#0A1D3D]/80 backdrop-blur-md shadow-md"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center user-select-none">
              <Link to="/" className="flex items-center space-x-2">
                <img
                  src="/images/logo2.png"
                  alt="Club Logo"
                  className={`no-drag pointer-events-none user-select-none transition-all duration-150 ${
                    scrolled ? "h-10 w-auto sm:h-14" : "h-15 w-auto sm:h-16"
                  }`}
                />
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-lg font-medium transition-all duration-300 hover:scale-105 ${
                      isActive(item.path)
                        ? "text-[#FFE600]"
                        : "text-white hover:text-[#F5B282]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
                aria-label="Toggle mobile menu"
              >
                <RxHamburgerMenu size="26" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={isMenuOpen}
        onClose={closeMenu}
        navItems={navItems}
        isActive={isActive}
      />
    </>
  );
};

export default Navigation;
