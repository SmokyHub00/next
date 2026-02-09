import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail, SiGooglecalendar, SiGoogledrive, SiGoogledocs, SiGooglemeet, SiGooglechat } from "react-icons/si";
import girl from "../assets/girl.png";

const Connect = () => {
    return (
        <section className="py-8 md:py-12 px-4 font-['Helvetica_Now_Display'] max-w-[1100px] mx-auto">
            <div className="rounded-[24px] bg-[#F8F9FA] overflow-hidden relative flex flex-col md:flex-row items-stretch min-h-[400px]">

                {/* Left Content Section */}
                <div className="flex-1 p-6 md:p-10 z-20 relative flex flex-col justify-center">

                    {/* Icons Grid */}
                    <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                        <SiGmail className="text-[#EA4335] text-2xl md:text-3xl" />
                        <SiGoogledrive className="text-[#34A853] text-2xl md:text-3xl" />
                        <SiGooglemeet className="text-[#00AC47] text-2xl md:text-3xl" />
                        <SiGooglechat className="text-[#00AC47] text-2xl md:text-3xl" />
                        {/* Gemini Icon */}
                        <div className="text-2xl md:text-3xl">
                            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-500">
                                <path d="M16.5 3C16.5 3 16.5 8 19 10.5C21.5 13 24 13 24 13C24 13 21.5 13 19 15.5C16.5 18 16.5 23 16.5 23C16.5 23 16.5 18 14 15.5C11.5 13 9 13 9 13C9 13 11.5 13 14 10.5C16.5 8 16.5 3 16.5 3Z" fill="url(#paint0_linear_gemini_connect)" />
                                <path d="M5.5 8C5.5 8 5.5 10.5 7 12C8.5 13.5 11 13.5 11 13.5C11 13.5 8.5 13.5 7 15C5.5 16.5 5.5 19 5.5 19C5.5 19 5.5 16.5 4 15C2.5 13.5 0 13.5 0 13.5C0 13.5 2.5 13.5 4 12C5.5 10.5 5.5 8 5.5 8Z" fill="url(#paint1_linear_gemini_connect)" />
                                <defs>
                                    <linearGradient id="paint0_linear_gemini_connect" x1="9" y1="3" x2="24" y2="23" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#4285F4" />
                                        <stop offset="0.5" stopColor="#9B51E0" />
                                        <stop offset="1" stopColor="#FF4081" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_gemini_connect" x1="0" y1="8" x2="11" y2="19" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#4285F4" />
                                        <stop offset="0.5" stopColor="#9B51E0" />
                                        <stop offset="1" stopColor="#FF4081" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <SiGoogledocs className="text-[#4285F4] text-2xl md:text-3xl" />
                    </div>

                    {/* Heading */}
                    <h2 className="text-[#333333] text-[24px] md:text-[36px] font-bold leading-tight mb-3 md:mb-5">
                        Prefer to talk to sales directly?
                    </h2>

                    {/* Description (Nepali + English) */}
                    <p className="text-[#5F6368] text-sm md:text-lg leading-relaxed mb-6 md:mb-8 max-w-lg">
                        तपाईको company को unique requirements अनुसार तयार गरिएको solution सँग efficiency र collaboration maximize गर्नुहोस्
                    </p>

                    {/* Contact Actions */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                        {/* WhatsApp Button */}
                        <button className="flex items-center gap-2 bg-[#FCE8F3] border border-[#F8BBD0] text-[#E91E63] px-6 py-3 rounded-md font-medium hover:bg-[#F8BBD0] transition-colors whitespace-nowrap shadow-sm">
                            <FaWhatsapp className="text-xl" />
                            <span>Message On WhatsApp</span>
                        </button>

                        {/* Divider (Desktop Only) */}
                        <div className="hidden md:block w-[1px] h-8 bg-gray-300"></div>

                        {/* Call Text */}
                        <div className="text-[#333333] font-medium text-base md:text-lg whitespace-nowrap">
                            Call: +977 9864333517
                        </div>
                    </div>
                </div>

                {/* Right Image Section with Abstract Background */}
                <div className="relative w-full md:w-[45%] min-h-[300px] md:min-h-full flex items-end justify-end">

                    {/* Abstract Shapes - Organic Blobs (Not Circles) */}

                    {/* Blue Shape - Left/Center */}
                    <div className="absolute top-[20%] left-[-20%] md:left-[-10%] w-[220px] h-[220px] md:w-[280px] md:h-[280px] bg-[#6FA8FF] rounded-[45%_55%_63%_37%_/_67%_38%_62%_33%]"></div>

                    {/* Orange Shape - Bottom Left */}
                    <div className="absolute bottom-[-10%] left-[-15%] md:left-[-5%] w-[180px] h-[180px] md:w-[240px] md:h-[240px] bg-[#FF8C00] rounded-[66%_34%_53%_47%_/_37%_58%_42%_63%] opacity-90 mix-blend-multiply"></div>

                    {/* Yellow Shape - Top Right */}
                    <div className="absolute top-[10%] right-[-15%] md:right-[-5%] w-[200px] h-[200px] md:w-[260px] md:h-[260px] bg-[#FFE047] rounded-[37%_63%_39%_61%_/_62%_34%_66%_38%] opacity-90 mix-blend-multiply"></div>

                    {/* Dark Green Shape - Bottom Right (Extended to cover whitespace) */}
                    <div className="absolute bottom-[-15%] right-[-25%] md:right-[-15%] w-[220px] h-[220px] md:w-[280px] md:h-[280px] bg-[#34A853] rounded-[53%_47%_36%_64%_/_48%_66%_34%_52%] opacity-90 mix-blend-multiply"></div>

                    {/* Girl Image */}
                    <img
                        src={girl}
                        alt="Sales Representative"
                        className="absolute bottom-0 md:bottom-[-40px] right-0 md:right-[-20px] z-10 
             w-[360px] md:w-[600px] lg:w-[650px] max-w-none
             h-auto object-contain"
                    />


                </div>

            </div>
        </section>
    );
};

export default Connect;
