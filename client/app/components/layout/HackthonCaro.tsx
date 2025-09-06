import React, { useState, useRef, useEffect } from "react";
import { FaBrain, FaCode, FaCloud, FaShieldAlt } from "react-icons/fa";

const domains = [
  {
    id: 1,
    title: "MOONHACK 2025",
    description: "Moonhack hackathon organized by Medicaps where we have won this.",
    icon: FaBrain,
    bgColor: "from-purple-500 to-pink-500",
    techStack: ["TensorFlow", "PyTorch", "Scikit-learn"]
  },
  {
    id: 2,
    title: "Level SuperMind", 
    description: "Build responsive and dynamic web applications using modern frameworks.",
    icon: FaCode,
    bgColor: "from-blue-500 to-cyan-500",
    techStack: ["React", "Next.js", "Node.js"]
  },
  {
    id: 3,
    title: "Witty Hacks",
    description: "Learn to deploy, scale, and manage applications on leading cloud platforms.",
    icon: FaCloud,
    bgColor: "from-green-500 to-emerald-500", 
    techStack: ["AWS", "Azure", "Google Cloud"]
  },
  {
    id: 4,
    title: "Void Hacks",
    description: "Understand security principles and protect systems from vulnerabilities.",
    icon: FaShieldAlt,
    bgColor: "from-red-500 to-orange-500",
    techStack: ["Kali Linux", "Wireshark", "Metasploit"]
  },    
];

export default function HackthonCaro() {
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Repeat the domains to create a continuous carousel effect
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
    // Array of background image URLs (replace with your own images as needed)
    const bgImages = [
      "https://hackathons-hackclub.s3.amazonaws.com/liqkw8wpwb2yhy07vgbb7rdify22?response-content-disposition=inline%3B%20filename%3D%22Screenshot%202025-08-09%20at%2010.03.13%253FPM.png%22%3B%20filename%2A%3DUTF-8%27%27Screenshot%25202025-08-09%2520at%252010.03.13%25E2%2580%25AFPM.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4OCVI72OYNROZU74%2F20250817%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250817T041026Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=8525e6106016412166fd0118425fb1a7dca18020e4c1069e5b9eb626a68e96d6",
      "https://hackathons-hackclub.s3.amazonaws.com/b1cx0hheazrgthmlule6kt8ast6t?response-content-disposition=inline%3B%20filename%3D%22CnP_02082025_165200.png%22%3B%20filename%2A%3DUTF-8%27%27CnP_02082025_165200.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4OCVI72OYNROZU74%2F20250817%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250817T041114Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=2bca08a68d9d693c71bbeda37aee2f8393a578b4c93348a8d0c318e8a86e7ba3",
      "https://hackathons-hackclub.s3.amazonaws.com/yyv97cjy4lww9k24qv8ltgb3nwhg?response-content-disposition=inline%3B%20filename%3D%221000007114.png%22%3B%20filename%2A%3DUTF-8%27%271000007114.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4OCVI72OYNROZU74%2F20250817%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250817T041203Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=f5b4b3526f0b169506d32adbcba2d7882d09859867786f9cdf30e58c0bd08ca8",
    //   "https://hackathons-hackclub.s3.amazonaws.com/adcauu1hychyhuw62to7k1b7jzcl?response-content-disposition=inline%3B%20filename%3D%22banner.jpg%22%3B%20filename%2A%3DUTF-8%27%27banner.jpg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4OCVI72OYNROZU74%2F20250817%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250817T041321Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=d645345e60db389f506ea979bcef6d606a75cc1bdde365913fa6723ae8a4c6f7",
    //   "https://hackathons-hackclub.s3.amazonaws.com/f9bem92ad0yl5eynwfdhb26jnlhb?response-content-disposition=inline%3B%20filename%3D%22Banner%20Background.png%22%3B%20filename%2A%3DUTF-8%27%27Banner%2520Background.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4OCVI72OYNROZU74%2F20250817%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250817T041437Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=2e80daf574801447724542370614261f2d4723431ebbef210586df8bb5fb686e",
      "https://hackathons-hackclub.s3.amazonaws.com/liqkw8wpwb2yhy07vgbb7rdify22?response-content-disposition=inline%3B%20filename%3D%22Screenshot%202025-08-09%20at%2010.03.13%253FPM.png%22%3B%20filename%2A%3DUTF-8%27%27Screenshot%25202025-08-09%2520at%252010.03.13%25E2%2580%25AFPM.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4OCVI72OYNROZU74%2F20250817%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250817T041026Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=8525e6106016412166fd0118425fb1a7dca18020e4c1069e5b9eb626a68e96d6",
    ];
    const textColors = [
      "text-blue-100",
      "text-white",
      "text-white",
      "text-white",
      "text-white",
      "text-white",
    ];
    return {
      bg: "",
      text: textColors[index % textColors.length],
      bgImage: bgImages[index % bgImages.length],
    };
  };

  return (
    <div className="bg-white flex flex-col h-auto mx-auto text-[#0A1D3D] gap-8 mb-16">
        
      <div className="w-full max-w-5xl mx-auto text-center px-4 sm:px-6 py-6 my-8">
        <h1 className="text-3xl xs:text-3xl sm:text-4xl md:text-6xl font-extrabold text-purple-700 leading-snug">
          Be Part of the Next Big Hack!{" "}
          <span className="bg-yellow-400 text-black px-1">upcoming Hackthons</span>
          <span className="hidden xs:inline">.</span>
        </h1>
        <p className="mt-4 sm:mt-6 text-lg xs:text-lg sm:text-2xl text-gray-600">
          Push your limits, explore new technologies, and code your way to the future.
          <span className="hidden xs:inline"> Ideas come alive in just a weekend.</span>
          <span className="block xs:hidden">Ideas come alive in a weekend.</span>
        </p>
      </div>

      {/* <div className="relative overflow-hidden py-5">

        <div
          ref={sliderRef}
          className="flex gap-16 slider-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            animation: `slide ${5 * domains.length}s linear infinite`,
            animationPlayState: "running",
          }}
        >
          {extendedDomains.map((domain, index) => {
            const IconComponent = domain.icon;
            const { bg, text, bgImage } = getCardColors(index);
            return (
              <div
                key={`${domain.id}-${index}`}
                className={`flex-none w-52 h-52 sm:w-96 sm:h-70 rounded-2xl bg-gradient-to-br ${bg} px-0 py-0 ${text} transition-all duration-500 hover:scale-105 cursor-pointer group backdrop-blur-sm flex flex-col items-center justify-between`}
                style={{
                  backgroundImage: `linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(0,0,0,0.1)), url('${bgImage}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  gap: 0,
                  marginRight: "0.5rem", // Add a small margin to close the gap
                }}>

                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/80 flex items-center justify-center border-2 border-white shadow mb-0 mt-8">
                  <IconComponent className="w-10 h-10 sm:w-12 sm:h-12 text-[#0A1D3D]" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-center group-hover:translate-x-1 transition-all duration-500 mb-1">
                  {domain.title} Hackathon
                </h3>

                <p className="text-xs sm:text-sm opacity-90 mb-8 mt-1 text-center leading-snug sm:leading-relaxed">
                  Join us for an exciting hackathon. Code. Create. Collaborate.
                </p>
              </div>
            );
          })}
        </div>
      </div> */}

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
