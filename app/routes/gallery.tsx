import React from "react";
import type { Route } from "./+types/gallery";
import Layout from "../components/layout/Layout";
import { gallery } from "~/lib/gallery";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Gallery - Abhyudaya" },
    { name: "description", content: "Explore our collection of events, projects, and memorable moments." },
  ];
}

export default function Gallery() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Gallery
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-700 max-w-2xl mx-auto">
            Take a look at our journey through events, workshops, hackathons, and the amazing projects our members have created.
          </p>
        </div>

        {/* Masonry Gallery Grid */}
        <div
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {gallery.map((item, idx) => (
            <div
              key={idx}
              className="mb-6 break-inside-avoid group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                {/* Render the image if src is present */}
                {item.src ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="object-cover w-full h-auto"
                    style={{
                      aspectRatio: "1 / 1",
                      display: "block",
                    }}
                  />
                ) : (
                  <span className="text-white text-lg font-semibold block py-20">
                    Event {idx + 1}
                  </span>
                )}
              </div>
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}