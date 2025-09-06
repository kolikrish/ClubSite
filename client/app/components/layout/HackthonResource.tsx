import React from 'react';

const HackathonResource: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white text-center transition-colors duration-300 hover:bg-gray-50">
      {/* Subtitle */}
      <h3 className="text-3xl font-bold text-gray-400 mb-2 uppercase tracking-wide transition-colors duration-300 hover:text-teal-500">
        Get started today
      </h3>

      {/* Title */}
      <h2 className="text-4xl sm:text-6xl font-extrabold text-gray-900 mb-12 leading-tight max-w-4xl mx-auto transition-colors duration-300 hover:text-purple-700">
        Resources so you can organize an{' '}
        <span className="bg-teal-300 text-teal-900 px-2 rounded-md inline-block transition-colors duration-300 hover:bg-teal-400 hover:text-teal-950">
          amazing
        </span>{' '}
        hackathon.
      </h2>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-8 max-w-8xl mx-auto w-full">
        {/* Slack Community Card */}
        <div className="flex-1 bg-gradient-to-br from-pink-400 to-purple-600 text-white p-6 sm:p-10 md:p-14 rounded-xl shadow-lg max-w-xs sm:max-w-md w-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:from-pink-500 hover:to-purple-700 group">
          <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4 text-center sm:text-left">
            <div className="bg-white p-2 sm:p-3 rounded-lg transition-transform duration-300 group-hover:scale-110 flex-shrink-0 mx-auto sm:mx-0">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111615.png"
                alt="Slack icon"
                className="h-8 w-8"
              />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 sm:mt-0 sm:ml-5 transition-colors duration-300 group-hover:text-gray-200">
              Slack community
            </h3>
          </div>
          <p className="text-left sm:text-left text-white/90 text-lg sm:text-2xl md:text-3xl transition-colors duration-300 group-hover:text-white">
            Chat in Slack for support with organizing your hackathon, from finding a venue to marketing your event.
          </p>
        </div>

        {/* Marketing Card */}
        <div className="flex-1 bg-gradient-to-br from-cyan-500 to-green-400 text-white p-6 sm:p-10 md:p-14 rounded-xl shadow-lg max-w-xs sm:max-w-md w-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:from-cyan-600 hover:to-green-500 group mt-6 md:mt-0">
          <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4 text-center sm:text-left">
            <div className="bg-white p-2 sm:p-3 rounded-lg transition-transform duration-300 group-hover:scale-110 flex-shrink-0 mx-auto sm:mx-0">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1042/1042340.png"
                alt="Marketing icon"
                className="h-8 w-8"
              />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 sm:mt-0 sm:ml-5 transition-colors duration-300 group-hover:text-gray-200">
              Marketing
            </h3>
          </div>
          <p className="text-left sm:text-left text-white/90 text-lg sm:text-2xl md:text-3xl transition-colors duration-300 group-hover:text-white">
            Get your event listed on Google&apos;s front page, emailed to nearby teens calendar&apos;s 3K+ monthly users.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HackathonResource;
