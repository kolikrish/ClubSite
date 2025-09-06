import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaGithub, FaUsers } from "react-icons/fa";
import type { IconType } from "react-icons";

interface CardData {
  icon: IconType;
  iconColor: string;
  title: string;
  description: string;
  link: string;
  gradientColors: string[];
}

export default function Page7() {
  const cards: CardData[] = [
    {
      icon: FaWhatsapp,
      iconColor: "text-[#3D3342]",
      title: "Join Our WhatsApp Community",
      description:
        "Connect with fellow developers and stay updated with club activities",
      link: "https://chat.whatsapp.com/your-link",
      gradientColors: ["#0A1D3D", "#FF6A00"],
    },
    {
      icon: FaGithub,
      iconColor: "text-[#e2ce15]",
      title: "Explore Our GitHub",
      description:
        "Contribute to open-source projects and learn collaboratively",
      link: "https://github.com/your-org",
      gradientColors: ["#FFE600", "#FF6A00"],
    },
    {
      icon: FaUsers,
      iconColor: "text-[#0A1D3D]",
      title: "Become a Member",
      description: "Join our community of passionate developers and learners",
      link: "/join",
      gradientColors: ["#0A1D3D", "#4B4B4B"],
    },
  ];

  return (
    <div className="bg-white flex flex-col items-center max-w-[95vw] h-auto mx-auto px-4 sm:px-32 text-[#0A1D3D]">
      <div className="text-center">
        <h1 className="text-md sm:text-xl px-4 sm:px-36 text-gray-600/70 fbold tracking-wide mb-1">
          {"We've got a lot going on - Let's recap".toUpperCase()}
        </h1>
        <h1 className="text-4xl sm:text-6xl fbold font-bold mb-2">
          Find your second <br />
          home at{" "}
          <span className="bg-gradient-to-r px-2 rounded-lg from-[#F23969] to-[#0A1D3D] text-transparent bg-clip-text">
            ABHYUDAYA
          </span>{" "}
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-[14rem] h-[14rem] sm:w-[17rem] sm:h-[17rem] rounded-xl p-1 transition-transform hover:scale-105 group"
            style={{
              background: `linear-gradient(to bottom right, ${card.gradientColors[0]}, ${card.gradientColors[1]})`,
            }}
          >
            <Link to={card.link} className="h-full block">
              <div className="bg-transparent h-full rounded-lg p-4 sm:p-6 hover:bg-opacity-95 transition-all">
                <div className="bg-white inline-block p-2 sm:p-3 rounded-xl transition-transform group-hover:rotate-12">
                  <card.icon size={28} className={card.iconColor} />
                </div>
                <h1 className="text-lg sm:text-2xl font-bold mt-4 text-white">
                  {card.title}
                </h1>
                <p className="text-sm sm:text-base text-white mt-2">
                  {card.description}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
