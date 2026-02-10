import React, { useState } from "react";
import solutionsImg from "../assets/solutions.png";

const SolutionsSection = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            title: "Your files, all in one place",
            description: (
                <>
                    Edit and organize <span className="text-blue-600">Google Docs</span>,{" "}
                    <span className="text-blue-600">Sheets</span>,{" "}
                    <span className="text-blue-600">Slides</span>, Microsoft Office files, and
                    PDFs in real-time. Plus, access over 100 other file types!
                </>
            ),
        },
        { title: "Annotate PDFs", description: "Quickly highlight and comment on PDF documents directly in your browser." },
        { title: "AI-powered search", description: "Find exactly what you need across all your files using Google's powerful search AI." },
        { title: "Activity view", description: "See who made changes and when, keeping your team's progress transparent." },
    ];

    return (
        <section className="py-4 px-4 bg-white font-['Helvetica_Now_Display'] overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-[46px] font-medium text-[#202124] mb-4">
                        Brands using Google Workspace to <br className="hidden md:block" />
                        succeed online, <span
                            style={{
                                backgroundImage: `linear-gradient(90deg, rgba(172, 135, 235, 0.3) 3.85%, rgba(33, 123, 254, 0.3) 17.76%, rgba(7, 142, 251, 0.3) 32.51%, rgba(172, 135, 235, 0.3) 53.43%, rgba(238, 77, 93, 0.3) 94.82%),
                                            linear-gradient(0deg, #4285F4, #4285F4)`,
                            }}
                            className="bg-clip-text text-transparent bg-cover bg-center font-bold"
                        >कसरी?</span>
                    </h2>
                    <p className="text-[#5F6368] text-lg md:text-xl">
                        कसरी teams Google Workspace सँग productivity <br className="hidden md:block" />
                        बढाउँछन् र समय बचत गर्छन्
                    </p>
                </div>

                {/* Content Grid */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Left Side: Dynamic Image Area */}
                    <div className="flex-1 w-full flex justify-center items-center relative">
                        {/* Subtle Gradient Glow Background */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 via-purple-50 to-pink-50 opacity-60 blur-3xl -z-10 rounded-full" />

                        <img
                            src={solutionsImg}
                            alt="Google Workspace Solutions"
                            className="w-full max-w-[550px] h-auto object-contain transition-all duration-500 transform"
                        />
                    </div>

                    {/* Right Side: Vertical Tabs */}
                    <div className="flex-1 w-full max-w-lg">
                        <div className="space-y-6">
                            {tabs.map((tab, index) => (
                                <div
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    className="cursor-pointer group"
                                >
                                    <div className="flex items-start">
                                        {/* Active Indicator Line */}
                                        <div
                                            style={{
                                                background: activeTab === index ? "linear-gradient(to bottom, #4285F4 20%, #e5e7eb 20%)" : ""
                                            }}
                                            className={`w-[3px] h-auto self-stretch mr-4 transition-colors duration-300 ${activeTab === index ? "" : "bg-gray-200 group-hover:bg-gray-300"
                                                }`}
                                        />

                                        <div className="py-1">
                                            <h3
                                                className={`text-xl md:text-2xl font-medium transition-colors duration-300 ${activeTab === index ? "text-[#202124]" : "text-[#5F6368]"
                                                    }`}
                                            >
                                                {tab.title}
                                            </h3>

                                            {/* Description - Only shows when active */}
                                            <div
                                                className={`overflow-hidden transition-all duration-500 ease-in-out ${activeTab === index ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
                                                    }`}
                                            >
                                                <p className="text-[#5F6368] leading-relaxed text-base md:text-lg">
                                                    {tab.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SolutionsSection;