import React from "react";
export default function Page1() {
  return (
    <div className="bg-white flex flex-col max-w-[95vw] h-auto mx-auto px-6 sm:px-32 text-[#0A1D3D] ">
      <div className="pt-15 pb-15">
        <h1 className="text-4xl sm:text-6xl fbold font-bold mb-4">
          Explore the{" "}
          <span className="bg-gradient-to-r from-[#FF6A00] to-[#FFE600] text-transparent bg-clip-text">
            world of coding
          </span>{" "}
          with us.
        </h1>
        <p className="max-w-3xl text-lg sm:text-xl">
          Join hundreds of students at Abhyudaya Coding Club where we learn,
          build and grow together. Whether you are taking your first steps in
          programming or you are an experienced coder, we have something for
          everyone. Learn about our{" "}
          <span className="text-[#FF6A00] underline underline-offset-4 hover:decoration-wavy">
            {" "}
            community guidelines
          </span>
          .
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-8 sm:gap-15">
        <div className="-rotate-3 transition-transform hover:rotate-0 duration-300 px-5 ">
          {/* Image Div */}
          
          {(() => {
            const images = [
              {
                src: "https://hackclub.com/_next/image/?url=%2Fhome%2Fama.png&w=1920&q=75",
                alt: "Students coding together",
              },
              {
                src: "https://hackclub.com/_next/image/?url=%2Fhome%2Fzephyr-spacex.jpeg&w=1920&q=75",
                alt: "Coding event",
              },
              {
                src: "https://hackclub.com/_next/image/?url=%2Fhackathons%2Fmahacks.jpeg&w=1920&q=75",
                alt: "Teamwork at hackathon",
              },
            ];

            // Use React.useState in a function component
            // But since this is inside a function, we need to hoist state up
            // So, let's use a custom component here

            function ImageStackCarousel() {
              const [current, setCurrent] = React.useState(0);

              // For stacking, show previous images behind with offset and blur
              const prev1 = (current - 1 + images.length) % images.length;
              const prev2 = (current - 2 + images.length) % images.length;

              return (
                <div
                  className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
                  onClick={() => setCurrent((current + 1) % images.length)}
                  title="Click to see next image"
                >
                  {/* Second image behind, more offset and blur */}
                  <img
                    src={images[prev2].src}
                    alt={images[prev2].alt}
                    className="absolute top-6 left-6 w-[90%] h-[90%] object-cover rounded-2xl opacity-60 blur-[2px] z-0 transition-all duration-300"
                    aria-hidden="true"
                  />
                  {/* First image behind, slight offset and blur */}
                  <img
                    src={images[prev1].src}
                    alt={images[prev1].alt}
                    className="absolute top-3 left-3 w-[95%] h-[95%] object-cover rounded-2xl opacity-80 blur-[1px] z-10 transition-all duration-300"
                    aria-hidden="true"
                  />
                  {/* Main image */}
                  <img
                    src={images[current].src}
                    alt={images[current].alt}
                    className="relative w-full h-full object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 z-20"
                  />
                  {/* Dots indicator */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                    {images.map((_, idx) => (
                      <span
                        key={idx}
                        className={`block w-2 h-2 rounded-full ${idx === current ? "bg-[#FF6A00]" : "bg-gray-300"}`}
                      />
                    ))}
                  </div>
                </div>
              );
            }

            return <ImageStackCarousel />;
          })()}
          <p className="text-center mt-1 text-base sm:text-lg text-gray-600 italic">
            Students collaborating at our coding workshops
          </p>
        </div>
        <div className="w-full">
          <div className="mb-6 sm:mb-8">
            <h1 className="fbold text-xl sm:text-2xl">
              <span className="mr-3 sm:mr-4 border-2 sm:border-3 border-[#0A1D3D] text-[#0A1D3D] px-2 sm:px-3 py-[0.2rem] sm:py-[0.4rem] rounded-full text-sm sm:text-base">
                1
              </span>
              Connect with Fellow Programmers
            </h1>
            <p className="text-lg sm:text-xl pl-10 sm:pl-15 mt-2">
              Get help with your code, share your projects, and collaborate with
              other students through our active{" "}
              <a
                href="https://discord.gg/knyuXsXz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF6A00] underline underline-offset-4 hover:decoration-wavy"
              >
                Discord community
              </a>
              .
            </p>
          </div>

          <div className="mb-6 sm:mb-8">
            <h1 className="fbold text-xl sm:text-2xl">
              <span className="mr-3 sm:mr-4 border-2 sm:border-3 border-[#FF6A00] text-[#FF6A00] px-2 sm:px-3 py-[0.2rem] sm:py-[0.4rem]  rounded-full text-sm sm:text-base">
                2
              </span>
              Learn Through Real Projects
            </h1>
            <p className="text-lg sm:text-xl pl-10 sm:pl-15 mt-2">
              Participate in hands-on workshops, hackathons, and collaborative{" "}
              <a
                href="/projects"
                className="text-[#FF6A00] underline underline-offset-4 hover:decoration-wavy"
              >
                projects
              </a>{" "}
              to enhance your coding skills.
            </p>
          </div>

          <div className="mb-6 sm:mb-8">
            <h1 className="fbold text-xl sm:text-2xl">
              <span className="mr-3 sm:mr-4 border-2 sm:border-3 border-[#FFE600] text-[#FFE600] px-2 sm:px-3 py-[0.3rem] sm:py-[0.4rem] rounded-full text-sm sm:text-base">
                3
              </span>
              Grow Your Network
            </h1>
            <p className="text-lg sm:text-xl pl-10 sm:pl-15 mt-2">
              Connect with industry experts, attend{" "}
              <span className="text-[#FF6A00] underline underline-offset-4 hover:decoration-wavy">
                tech talks
              </span>
              , and build your professional network within the college
              community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
