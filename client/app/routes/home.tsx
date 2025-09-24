import React from "react";
import type { Route } from "./+types/home";
import Layout from "../components/layout/Layout";
import { Link } from "react-router";
import Page1 from "~/components/sections/Page1";
import Page2 from "~/components/sections/Page2";
import Page3 from "~/components/sections/Page3";
import Page4 from "~/components/sections/Page4";
import Page5 from "~/components/sections/Page5";
import Page6 from "~/components/sections/Page6";
import Page7 from "~/components/sections/Page7";
import Page8 from "~/components/sections/Page8";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Abhyudaya - Innovation Through Collaboration" },
    {
      name: "description",
      content:
        "Join our technical club to learn, build, and innovate together. Participate in hackathons, workshops, and competitions.",
    },
  ];
}

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      {/* Hero Section with Image Popup */}
      {(() => {
        // Use React.useState for popup state
        const [showPopup, setShowPopup] = React.useState(false);

        // The image to show in popup (can be same as hero or different)
        const popupImage =
          "https://res.cloudinary.com/djtagt9xw/image/upload/v1758686699/web_designing_event_1_jh9bw5.jpg";

        return (
          <section className="relative bg-cover bg-center h-[100vh] sm:h-[90vh]">
            <img
              // src="/images/hero.webp"
              src="https://res.cloudinary.com/djtagt9xw/image/upload/v1758685560/20250822_153145_luobfm.jpg"
              alt="Hero Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0A1D3D]/50 backdrop-blur-[0.5px]"></div>

            <div className="relative max-w-[95vw] mx-auto px-6 sm:px-32 pt-20 sm:pt-14 h-full flex flex-col justify-center">
              <div className="flex items-center gap-6 mb-4 sm:mb-2 ">
                <div>
                  <h2 className="text-[#f97385] fbold text-xl sm:text-2xl font-bold tracking-wider uppercase">
                    Welcome to Abhyudaya Coding Club
                  </h2>
                </div>
              </div>
              <h3 className="fbold text-white text-4xl sm:text-6xl tracking-[1.5px] mb-2 max-w-[80vw] ">
                Igniting the passion in{" "}
                <span className="inline-block bg-[#ed374f] text-white px-2 sm:px-4 sm:py-2 rounded-md -rotate-4 transform shadow-md hover:rotate-0 hover:scale-105 transition-transform duration-300 ease-in-out">
                  future coders
                </span>{" "}
                to lead with technology.
              </h3>
              <p className="text-[#D1D5DB] text-md sm:text-xl max-w-2xl mb-5 sm:mb-10">
                Dive into the world of innovation, creativity, and collaboration.
                Join us to build projects, compete in hackathons, and shape your
                tech journey.
              </p>

              {/* Notification Popup */}
              {typeof window !== "undefined" && (
                <div id="notification-root" style={{ position: "fixed", top: 24, right: 24, zIndex: 9999 }}></div>
              )}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <button
                  type="button"
                  className="bg-[#fa4c43] hover:bg-[#ed374f]/90 text-[#ffff] px-6 sm:px-8 py-3 fbold tracking-wide rounded-full w-full sm:w-auto shadow-lg transition text-base sm:text-lg"
                  onClick={() => {
                    const root = document.getElementById("notification-root");
                    if (root) {
                      const el = document.createElement("div");
                      el.className =
                        "bg-[#fff] text-black px-6 py-3 rounded-lg shadow-lg mb-2 animate-fade-in";
                      el.innerText = "Thank you for your interest! Registration will open soon.";
                      root.appendChild(el);
                      setTimeout(() => {
                        el.classList.add("animate-fade-out");
                        setTimeout(() => root.removeChild(el), 400);
                      }, 2000);
                    }
                  }}
                >
                  JOIN THE CLUB
                </button>
                {/* <button
                  type="button"
                  className="border-2 border-white text-white px-4 py-3 rounded-full fbold w-full sm:w-auto hover:bg-white hover:text-[#0A1D3D] transition tracking-wide text-base sm:text-lg"
                  onClick={() => {
                    const root = document.getElementById("notification-root");
                    if (root) {
                      const el = document.createElement("div");
                      el.className =
                        "bg-[#fff] text-black px-6 py-3 rounded-lg shadow-lg mb-2 animate-fade-in";
                      el.innerText = "Upcoming events will be announced soon. Stay tuned!";
                      root.appendChild(el);
                      setTimeout(() => {
                        el.classList.add("animate-fade-out");
                        setTimeout(() => root.removeChild(el), 400);
                      }, 2000);
                    }
                  }}
                >
                  UPCOMING EVENTS
                </button> */}
                {/* Button to open image popup */}
                <button
                  type="button"
                  className="border-2 border-[#fa4c43] text-[#fa4c43] px-4 py-3 rounded-full fbold w-full sm:w-auto hover:bg-[#fa4c43] hover:text-white transition tracking-wide text-base sm:text-lg"
                  onClick={() => setShowPopup(true)}
                >
                  UPCOMING EVENT
                </button>
              </div>
              {/* Image Popup Modal */}
              {(() => {
                // Show popup on first load
                React.useEffect(() => {
                  setShowPopup(true);
                  // eslint-disable-next-line
                }, []);
                return (
                  showPopup && (
                    <div
                      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/70 backdrop-blur-sm"
                      style={{ animation: "fadeIn 0.2s" }}
                    >
                      <div className="relative bg-white rounded-xl shadow-2xl p-2 sm:p-4 max-w-[90vw] max-h-[90vh] flex flex-col items-end">
                        {/* Close Button */}
                        <button
                          onClick={() => setShowPopup(false)}
                          className="absolute top-2 right-2 text-gray-700 hover:text-red-500 bg-white rounded-full p-1 shadow transition"
                          aria-label="Close"
                          style={{
                            fontSize: "1.5rem",
                            lineHeight: 1,
                            fontWeight: "bold",
                            zIndex: 10,
                          }}
                        >
                          &times;
                        </button>
                        <img
                          src={popupImage}
                          alt="Popup"
                          className="rounded-lg max-w-full max-h-[75vh] object-contain border border-gray-200"
                          style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.25)" }}
                        />
                      </div>
                    </div>
                  )
                );
              })()}
              <style>
                {`
                  @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.98);}
                    to { opacity: 1; transform: scale(1);}
                  }
                  @keyframes fadeOut {
                    from { opacity: 1; transform: scale(1);}
                    to { opacity: 0; transform: scale(0.98);}
                  }
                  .animate-fade-in {
                    animation: fadeIn 0.3s;
                  }
                  .animate-fade-out {
                    animation: fadeOut 0.4s forwards;
                  }
                `}
              </style>
            </div>
          </section>
        );
      })()}

      {/* Page1 : Explore the world of coding with us.*/}
      <section className="pt-4 pb-8 sm:pt-8 sm:pb-15">
        <Page1 />
      </section>

      {/* Page2 : Our Domains */}
      <section className="py-8 sm:pt-8 sm:pb-15">
        <Page2 />
      </section>

      {/* Page3 : Images and Gallary Yard */}
      <section className="py-8 sm:pt-8 sm:pb-15">
        <Page3 />
      </section>

      {/* Page4 : Projects */}
      <section className="py-8 sm:pt-8 sm:pb-15">
        <Page4 />
      </section>

      {/* Page5 : Leadership */}
      <section className="py-8 sm:pt-8 sm:pb-15">
        <Page5 />
      </section>

      {/* Page6 : Our Team*/}
      <section className="py-8 sm:pt-8 sm:pb-15">
        <Page6 />
      </section>

      {/* Page7 : Find your second home at Abhyudaya*/}
      <section className="py-8 sm:pt-8 sm:pb-15">
        <Page7 />
      </section>

      {/* Page8 : About and newsletter*/}
      <section className="">
        <Page8 />
      </section>
    </Layout>
  );
}
