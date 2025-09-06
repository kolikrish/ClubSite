import React from "react";
import { useState, useRef, useEffect } from "react";
import { domains } from "../../lib/domains";

export default function Page2() {
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const sliderRef = useRef<HTMLDivElement>(null);

  const extendedDomains = [...domains, ...domains, ...domains];

  const handleMouseEnter = () => setAnimationSpeed(0.3);
  const handleMouseLeave = () => setAnimationSpeed(1);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.setProperty(
        "--animation-speed",
        animationSpeed.toString()
      );
    }
  }, [animationSpeed]);

  const getCardColors = (index: number) => {
    const colors = [
      { bg: "from-[#0A1D3D] to-[#1a2d4d]", text: "text-blue-100" },
      { bg: "from-[#FF6A00] to-[#ff8533]", text: "text-red-900" },
      { bg: "from-[#FFE600] to-[#ffed4d]", text: "text-yellow-900" },
      { bg: "from-[#F5B282] to-[#f7c3a3]", text: "text-orange-900" },
      { bg: "from-[#D1D5DB] to-[#e5e7eb]", text: "text-gray-900" },
      { bg: "from-[#4B4B4B] to-[#666666]", text: "text-gray-100" },
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="bg-white flex flex-col h-auto mx-auto text-[#0A1D3D]">
      <h1 className="text-2xl px-8 sm:px-36 text-gray-500 fbold tracking-wide mb-4">
        {"Key Domains Driving Our Club Forward : ".toUpperCase()}
      </h1>

      <div className="relative overflow-hidden py-5">
        <div className="absolute left-0 top-0 w-6 sm:w-15 h-full bg-gradient-to-r from-white sm:via-white/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-6 sm:w-15 h-full bg-gradient-to-l from-white sm:via-white/80 to-transparent z-10 pointer-events-none"></div>

        <div
          ref={sliderRef}
          className="flex gap-6 slider-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            animation: `slide ${5 * domains.length}s linear infinite`,
            animationPlayState: "running",
          }}
        >
          {extendedDomains.map((domain, index) => {
            const IconComponent = domain.icon;
            const { bg, text } = getCardColors(index);
            return (
              <div
                key={`${domain.id}-${index}`}
                className={`flex-none w-52 h-42 sm:w-72 sm:h-48 rounded-2xl bg-gradient-to-br ${bg} p-4 sm:p-5 ${text} transition-all duration-500 hover:scale-105 cursor-pointer group backdrop-blur-sm`}
              >
                <div className="flex items-start justify-between mb-2 sm:mb-3">
                  <IconComponent className="text-xl sm:text-3xl opacity-90 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500" />
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all duration-500">
                    <span className="text-xs sm:text-sm font-bold">
                      {domain.id}
                    </span>
                  </div>
                </div>

                <h3 className="text-sm sm:text-lg font-bold mb-1 sm:mb-2 group-hover:translate-x-1 transition-all duration-500">
                  {domain.title}
                </h3>

                <p className="text-[10px] sm:text-xs opacity-90 mb-2 sm:mb-3 leading-snug sm:leading-relaxed line-clamp-3 group-hover:opacity-100 transition-opacity duration-500">
                  {domain.description}
                </p>

                <div className="flex flex-wrap gap-1.5 max-w-full overflow-hidden">
                  {domain.techStack.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-[3px] sm:px-2.5 sm:py-1 text-[10px] sm:text-xs bg-white/20 rounded-full backdrop-blur-sm group-hover:bg-white/30 transition-all duration-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
                @keyframes slide {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(calc(-${domains.length * 288}px));
                    }
                }

                .slider-container {
                    animation-duration: calc(30s / var(--animation-speed, 1));
                    transition: animation-duration 0.3s ease-out;
                    will-change: transform;
                }

                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .slider-container {
                    transform: translateZ(0);
                    backface-visibility: hidden;
                    perspective: 1000px;
                }

                .slider-container > * {
                    transform: translateZ(0);
                }

                @media (prefers-reduced-motion: reduce) {
                    .slider-container {
                        animation: none;
                    }
                }
            `}</style>
    </div>
  );
}

