import React from "react";
import { Link } from "react-router";
import { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";

interface NavItem {
  path: string;
  label: string;
}

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  isActive: (path: string) => boolean;
}

const MobileNav = ({ isOpen, onClose, navItems, isActive }: MobileNavProps) => {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Menu - Fixed Full Screen Overlay */}
      <div
        className={`fixed inset-0 bg-white/50 backdrop-blur-2xl z-50 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Header with Logo and Close - Match Desktop Positioning */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16 pt-2">
            <Link to="/" onClick={onClose} className="flex items-center">
              <img
                src="/images/logo1.png"
                alt="Club Logo"
                className="h-15 w-auto"
              />
            </Link>
            <button
              onClick={onClose}
              className="text-gray-800 hover:text-black focus:outline-none p-2 pr-3"
            >
              <RxCross2 size="26" />
            </button>
          </div>
        </div>

        {/* Navigation Items - Slide from -100Y to position */}
        <div className="pt-4">
          {navItems.map((item, index) => (
            <div
              key={item.path}
              className={`transform transition-transform duration-200 ease-out ${
                isOpen ? "translate-y-0" : "-translate-y-24"
              }`}
              style={{
                transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
              }}
            >
              <Link
                to={item.path}
                onClick={onClose}
                className={`block py-5 text-xl px-6 font-semibold transition-colors duration-300 border-b border-gray-600/40 ${
                  isActive(item.path)
                    ? "text-[#0A1D3D]"
                    : "text-gray-700 hover:text-[#0A1D3D]"
                }`}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileNav;
