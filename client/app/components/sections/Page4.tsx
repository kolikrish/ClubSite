import React from "react";
import {Link} from 'react-router-dom';
export default function Page4() {
    return (
        <div className="bg-white flex flex-col items-center max-w-[95vw] h-auto mx-auto px-6 sm:px-32 text-[#0A1D3D]">
            <div className="flex flex-col-reverse lg:flex-row lg:space-x-4 space-y-8 lg:space-y-0 justify-center">
                <div className="max-w-full lg:max-w-[70%] -translate-y-1 z-9 md:z-0 md:-translate-y-0">
                    <h1 className="text-4xl sm:text-4xl lg:text-5xl fbold font-bold mb-2">
                        We build {" "}
                        <span className="bg-gradient-to-r from-[#FF6A00]/80 to-[#FFE600] text-transparent bg-clip-text">
                            projects
                        </span>{" "}
                        and <br className="hidden sm:block" /> 
                        <span className="sm:hidden"> </span>tools together.
                    </h1>
                    <p className="max-w-full lg:max-w-lg text-lg sm:text-xl">
                        In collaboration with engineers on the Abhyudaya team, Abhyudaya
                        build learning tools for each other. Get involved with these
                        projects by building something with our tools or contribute to the
                        tools themselves.
                    </p>
                    <Link
                        to="/projects"
                        className="border-2 inline-block border-[#D96627] text-[#D96627] bg-[#D96627]/5 px-4 sm:px-6 py-2 fbold tracking-wide rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all text-base sm:text-lg mt-4"
                    >
                        See our projects →
                    </Link>
                </div>
                <div className="lg:translate-y-2 w-full lg:w-auto">
                    <p className="font-light text-sm italic mb-1 lg:text-left">Live from GitHub</p>
                    <div className="space-y-0 md:space-y-2">
                        <div className="flex items-center justify-between lg:justify-start lg:space-x-4 bg-gray-50 lg:bg-transparent py-2 lg:p-0 rounded-lg lg:rounded-none">
                            <div className="flex items-center space-x-2">
                                <img
                                    src="images/logo.jpeg"
                                    alt="logo"
                                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-gray-600/40"
                                />
                                <p className="text-sm sm:text-base">AbhyudayaCodingClub</p>
                            </div>
                            <div className="flex items-center space-x-2 lg:space-x-4">
                                <p className="text-sm sm:text-base">Project #17</p>
                                <p className="text-xs">2 hours ago</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between lg:justify-start lg:space-x-4 opacity-75 bg-gray-50 lg:bg-transparent py-2 lg:p-0 rounded-lg lg:rounded-none">
                            <div className="flex items-center space-x-2">
                                <img
                                    src="images/logo.jpeg"
                                    alt="logo"
                                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-gray-600/40"
                                />
                                <p className="text-sm sm:text-base">AbhyudayaCodingClub</p>
                            </div>
                            <div className="flex items-center space-x-2 lg:space-x-4">
                                <p className="text-sm sm:text-base">Project #19</p>
                                <p className="text-xs">2 hours ago</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between lg:justify-start lg:space-x-4 opacity-50 bg-gray-50 lg:bg-transparent py-2 lg:p-0 rounded-lg lg:rounded-none">
                            <div className="flex items-center space-x-2">
                                <img
                                    src="images/logo.jpeg"
                                    alt="logo"
                                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-gray-600/40"
                                />
                                <p className="text-sm sm:text-base">AbhyudayaCodingClub</p>
                            </div>
                            <div className="flex items-center space-x-2 lg:space-x-4">
                                <p className="text-sm sm:text-base">Project #18</p>
                                <p className="text-xs">2 hours ago</p>
                            </div>
                        </div>
                        <div className="hidden md:flex items-center justify-between lg:justify-start lg:space-x-4 opacity-25 bg-gray-50 lg:bg-transparent py-2 lg:p-0 rounded-lg lg:rounded-none">
                            <div className="flex items-center space-x-2">
                                <img
                                    src="images/logo.jpeg"
                                    alt="logo"
                                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-gray-600/40"
                                />
                                <p className="text-sm sm:text-base">AbhyudayaCodingClub</p>
                            </div>
                            <div className="flex items-center space-x-2 lg:space-x-4">
                                <p className="text-sm sm:text-base">Project Bin</p>
                                <p className="text-xs">2 hours ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}