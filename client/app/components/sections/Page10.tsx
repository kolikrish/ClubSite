"use client";

import React from "react";
import { 
  Banknote, CreditCard, Globe, DollarSign, Users, Receipt, 
  ShieldCheck, Heart, Headset 
} from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Banknote className="text-red-500 w-6 h-6" />,
    title: "Hands-On Learning",
    description: "Build real projects through coding workshops.",
  },
  {
    icon: <CreditCard className="text-red-500 w-6 h-6" />,
    title: "Peer-to-peer Collaboration",
    description: "Work in teams, share ideas , and grow together.",
  },
  {
    icon: <Globe className="text-red-500 w-6 h-6" />,
    title: "Expert Mentorship",
    description: "Learn directly from industry professionals and experienced.",
  },
  {
    icon: <DollarSign className="text-red-500 w-6 h-6" />,
    title: "Networking Opportunities",
    description: "Connect with students , developers and stand out.",
  },
  {
    icon: <ShieldCheck className="text-red-500 w-6 h-6" />,
    title: "Certificates & Recognition",
    description: "Get certified for participation and communities in your journey.",
  },
  {
    icon: <Receipt className="text-red-500 w-6 h-6" />,
    title: "Diverse Topics",
    description: "From AI to Machines , explore multiple domains.",
  },
  {
    icon: <Users className="text-red-500 w-6 h-6" />,
    title: "Career Growth Support",
    description: "Sharpen problem-solving , teamwork and leadership skill.",
  },
  {
    icon: <Heart className="text-red-500 w-6 h-6" />,
    title: "Collaboration with Others",
    description: "Get opportunities to join forces with other communities.",
  },
  {
    icon: <Headset className="text-red-500 w-6 h-6" />,
    title: "Portfolio Building",
    description: "Add certificates , projects and achievements to your resume.",
  },
];

const Page10: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center md:text-left">
        <h2 className="text-4xl md:text-7xl font-light text-gray-900 leading-tight">
          Why join Abhyudaya Coding Club 
          <br /> Events ?
        </h2>
        <p className="mt-6 text-2xl text-gray-600 max-w-4xl">
          Since day one, we’ve built opportunities for students to learn , collaborate and innovate.
          Our workshops and hackathons are designed to empower you with skills , mentorships , and
          real-world experience.
        </p>

        {/* Features Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0">{feature.icon}</div>
              <div>
                <h4 className="font-bold text-gray-900 text-xl">{feature.title}</h4>
                <p className="text-gray-600 text-lg">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page10;
