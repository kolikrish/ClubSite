"use client";

import React from "react";
import { Globe } from "lucide-react";

const Page11: React.FC = () => {
  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Section */}
        <div>
          <h2 className="text-4xl sm:text-6xl font-light text-blue-600 leading-snug">
            One simple<br /> goal: Empower <br />
            <span className="text-blue-600">every coder.</span>
          </h2>
          <p className="mt-4 text-gray-700 text-lg max-w-lg font-extralight">
            At Abhyudaya coding club , we believe that tech education should be accessible
            practical and fun.
            That is why we organize workshops , sessions and tech events where students
            can learn , build and showcase their talent - without barriers.
          </p>

          <ul className="mt-6 space-y-2 font-semibold text-2xl">
            <li className="text-red-500">No prior coding experience required.</li>
            <li className="text-orange-500">No entry barriers for beginners.</li>
            <li className="text-pink-500">No expensive registrations.</li>
            <li className="text-purple-500">No restrictions on creativity.</li>
            <li className="text-pink-600">No limits on learning opportunities.</li>
            <li className="text-purple-600">No pressure - just collaboration and growth.</li>
            <li className="text-blue-600">No credit card processing fees.</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="space-y-8">
          {/* Image Card */}
          <div className="rounded-xl overflow-hidden shadow-md transition-transform duration-500 hover:scale-105 hover:shadow-xl hover:rotate-2" style={{ willChange: "transform" }}>
            <img
              src="https://hackclub.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fouternet-110.c7a20868.jpg&w=640&q=75" // replace with actual image path
              alt="Hack Club Event"
              width={600}
              height={400}
              className="w-full h-auto"
              loading="lazy"
            />
            <p className="bg-gray-100 text-gray-700 text-sm px-4 py-2">
              Each year, 1000s of teenagers attend Hack Club events like this
            </p>
          </div>

          {/* Text Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              Built by Students, {" "}
              <span className="text-red-500 underline underline-offset-4 hover:decoration-wavy">
                {" "}
                 For Students !
              </span>
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              In <span className="text-red-500 font-semibold">Abhyudaya Coding Club</span> was,
              was founded to create a community fo learners and innovators.{" "}
              <strong></strong> Involved in Hack Club with over.
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Each year , we host workshops , hackathons and interactive sessions where Students gain hands-on
              coding experience , network with peers and showcase real projects.
            </p>

            <div className="mt-4 flex items-start gap-7 text-sm text-gray-600">
              <Globe className="text-blue-600 w-10 h-10 mt-0.5" />
              <p>
                We have already impacted hundreds of students and continue
                to grow with every events.{" "}
                <a href="#">
                  {" "}
                  <span className="text-blue-600 underline underline-offset-4 hover:decoration-wavy">
                    {" "}
                    Github
                  </span>
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page11;
