import React from "react";
import { motion } from "framer-motion";

export default function Page8() {
  return (
    <div className="min-h-screen w-full mx-auto text-[#0A1D3D] relative overflow-hidden flex justify-center items-center px-4 sm:px-0 py-8">
      {/* Background */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/back5.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></motion.div>
      <div className="absolute inset-0 bg-[#091B3A]/30"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 bg-white/50 backdrop-blur-sm border border-black/10 shadow-lg rounded-xl flex flex-col sm:flex-row w-full max-w-[60rem] sm:h-[30rem]"
      >
        {/* Left */}
        <div className="w-full sm:w-1/2 px-4 sm:px-8 py-6 sm:py-8 flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="fbold text-4xl sm:text-6xl sm:text-left"
          >
            Join the <br />
            newsletter
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm sm:text-xl text-left text-[#0A1D3D]/80 pt-3"
          >
            We’ll send you an email no more than once a month when we work on
            something cool for you.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="space-y-3 sm:space-y-4 mt-5 w-full max-w-md mx-auto sm:mx-0"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="bg-white/60 text-center text-sm sm:text-lg rounded-lg w-full p-2 transition-all hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#F36A00]/50"
            />
            <input
              type="text"
              placeholder="Your Email"
              className="bg-white/60 text-center text-sm sm:text-lg rounded-lg w-full p-2 transition-all hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#F36A00]/50"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#F36A00] text-white w-full text-sm sm:text-lg rounded-full py-2 cursor-pointer transition-colors hover:bg-[#E05A00]"
            >
              Subscribe
            </motion.button>
          </motion.div>
        </div>

        {/* Right */}
        <div className="w-full sm:w-1/2 flex justify-center items-center mt-4 pb-10 sm:pb-0 sm:mt-0 px-4 sm:px-0">
          <motion.img
            src="/images/about.png"
            alt="about"
            className="w-[90%] sm:w-[26rem] h-auto object-cover rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-[1.1] hover:rotate-1"
          />
        </div>
      </motion.div>
    </div>
  );
}
