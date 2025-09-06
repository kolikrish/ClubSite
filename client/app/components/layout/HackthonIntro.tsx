// components/HackathonIntro.tsx
import React from "react";
import hackthon1 from '/images/hackthon1.jpg'
import hackthon2 from '/images/hackthon2.jpg'
import hackthon3 from '/images/hackthon3.jpg'
import workshop from "/images/workshop.jpg";

const HackathonIntro: React.FC = () => {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-purple-700 leading-snug">
        A hackathon brings curious minds together to {" "}
        <span className="bg-yellow-400 text-black px-1">experiment</span> , {" "}
        <span className="bg-yellow-400 text-black px-1">learn </span> and {" "}
        <span className="bg-yellow-400 text-black px-1">
          create
        </span>
        . In just a weekend, you will turn bold ideas into real soultions.
      </h1>

      {/* Subsections */}
      <div className="grid md:grid-cols-2 gap-8 mt-10">
        {/* Left */}
        <div>
          <h2 className="text-3xl font-semibold text-blue-600">
            The best way to learn is by <span className="font-bold">building.</span>
          </h2>
          <p className="mt-3 text-gray-700 text-xl">
            A hackathon is a space that helps give makers everything they need to
            start building—mentors, collaborators, inspiration, and a goal to work
            towards. Hackers will leave a hackathon with a project of their own,
            ready and excited to keep hacking once they get home.
          </p>
        </div>

        {/* Right */}
        <div>
          <h2 className="text-3xl font-semibold text-green-600">
            We&apos;re at our best when we&apos;re{" "}
            <span className="font-bold">making.</span>
          </h2>
          <p className="mt-3 text-gray-700 text-xl">
            Hack Club is a global community of thousands of high school makers.
            We&apos;re organizers, coders, hackers, painters, engineers, musicians,
            writers, volunteers. We make things. We want others to make things too.
          </p>
        </div>
      </div>

      {(() => {
        const sections = [
          {
            img: hackthon1,
            alt: "MoonHack Hackthon",
            title: "MoonHack Hackthon",
            desc: "Work together with fellow hackers to brainstorm, code, and create amazing projects in a supportive environment.",
          },
          {
            img: hackthon2,
            alt: "Level SuperMind Hackthone",
            title: "Level SuperMind Hackthone",
            desc: "Get guidance from experienced mentors who help you overcome challenges and learn new skills during the hackathon.",
          },
          {
            img: hackthon3,
            alt: "Hack Indore",
            title: "Hack Indore",
            desc: "Present your finished project to peers and judges, and celebrate your creativity and hard work.",
          },
          {
            img: workshop,
            alt: "Fun & Networking",
            title: "Fun & Networking",
            desc: "Enjoy games, snacks, and make new friends from different backgrounds who share your passion for technology.",
          },
        ];
        return (
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {sections.map((section, idx) => (
              <div
                key={idx}
                className="relative group rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={section.img}
                  alt={section.alt}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center px-4">
                    <h3 className="text-xl font-bold mb-2">{section.title}</h3>
                    <p className="text-sm">{section.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      })()}
    </section>
  );
};

export default HackathonIntro;
