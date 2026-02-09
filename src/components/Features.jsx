import React from "react";
import {
  SiGmail,
  SiGooglecalendar,
  SiGoogledrive,
  SiGoogledocs,
  SiGooglemeet,
  SiGooglesheets,
  SiGoogleslides,
  SiGoogleforms,
  SiGooglekeep,
} from "react-icons/si";
import { FaWhatsapp, FaShieldAlt, FaSearch, FaHdd, FaUsers, FaVideo, FaUserShield, FaMobileAlt, FaArchive } from "react-icons/fa";
import { MdOutlineSecurity, MdDevices } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

// Import Logo Assets
import nep1 from "../assets/nep1.png";
import nep2 from "../assets/nep2.png";
import nep3 from "../assets/nep3.png";
import nep4 from "../assets/nep4.png";
import nep5 from "../assets/nep5.png";
import nep6 from "../assets/nep6.png";
import nep7 from "../assets/nep7.png";
import nep8 from "../assets/nep8.png";

const Features = () => {
  const logos = [
    { src: nep1, alt: "Client 1", w: 136, h: 36 },
    { src: nep2, alt: "Client 2", w: 58, h: 36 },
    { src: nep3, alt: "Client 3", w: 104, h: 34 },
    { src: nep4, alt: "Client 4", w: 44, h: 42 },
    { src: nep5, alt: "Client 5", w: 138, h: 29 },
    { src: nep6, alt: "Client 6", w: 132, h: 34 },
    { src: nep7, alt: "Client 7", w: 37, h: 30 },
    { src: nep8, alt: "Client 8", w: 92, h: 30 },
  ];

  // Repeat logos for smooth marquee
  const marqueeLogos = [...logos, ...logos];

  return (
    <section className="py-0 md:py-2 px-4 max-w-7xl mx-auto font-['Helvetica_Now_Display']">

      {/* --- Trusted By Section --- */}
      <div className="text-center mb-6 md:mb-10">
        <p className="text-gray-600 text-base md:text-lg font-medium mb-1">
          Trusted by 1,000+ Nepali businesses on their
        </p>
        <p className="text-gray-600 text-base md:text-lg font-medium mb-4">
          growth journey. <span className="text-[#1A73E8] font-bold">अब तपाईको team तयार छ?</span>
        </p>

        {/* Desktop Logo Grid (Hidden on Mobile) */}
        <div className="hidden md:flex justify-center items-center gap-8 lg:gap-12">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              style={{ width: `${logo.w}px`, height: `${logo.h}px` }}
              className="object-contain"
            />
          ))}
        </div>

        {/* Mobile Logo Marquee (Hidden on Desktop) */}
        <div className="md:hidden overflow-hidden w-full relative">
          <div className="animate-marquee flex gap-8 items-center">
            {marqueeLogos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                style={{ width: `${logo.w}px`, height: `${logo.h}px` }}
                className="object-contain flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>

      {/* --- Main Headline --- */}
      <div className="text-center mb-8">
        <h2 className="text-[24px] md:text-[38px] leading-tight font-normal mb-2">
          <span className="text-black">के</span>{" "}
          <span className="text-[#1A73E8] font-medium">Google Workspace</span>{" "}
          <span className="text-black">तपाईको</span>
          <br className="hidden md:block" />
          <span className="text-black">business growth</span>{" "}
          <span className="text-[#1A73E8]">को लागि</span>{" "}
          <span className="text-black">best fit</span>{" "}
          <span className="text-[#1A73E8]">हो?</span>
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          Tailored Plans तपाईको Online Presence को हरेक पहलुलाई <br /> Elevate र Empower गर्न
        </p>

        {/* Playful Icons Line Divider */}
        <div className="flex items-center justify-center gap-2 mt-4 mb-8 text-[#EA4335] text-lg">
          <SiGmail className="text-[#EA4335]" />
          <SiGooglecalendar className="text-[#1A73E8]" />
          <SiGoogledrive className="text-[#34A853]" />
          <SiGoogledocs className="text-[#FBBC05]" />
          <SiGooglemeet className="text-[#00AC47]" />
          <div className="text-xl">
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-500">
              <path d="M16.5 3C16.5 3 16.5 8 19 10.5C21.5 13 24 13 24 13C24 13 21.5 13 19 15.5C16.5 18 16.5 23 16.5 23C16.5 23 16.5 18 14 15.5C11.5 13 9 13 9 13C9 13 11.5 13 14 10.5C16.5 8 16.5 3 16.5 3Z" fill="url(#paint0_linear_gemini)" />
              <path d="M5.5 8C5.5 8 5.5 10.5 7 12C8.5 13.5 11 13.5 11 13.5C11 13.5 8.5 13.5 7 15C5.5 16.5 5.5 19 5.5 19C5.5 19 5.5 16.5 4 15C2.5 13.5 0 13.5 0 13.5C0 13.5 2.5 13.5 4 12C5.5 10.5 5.5 8 5.5 8Z" fill="url(#paint1_linear_gemini)" />
              <defs>
                <linearGradient id="paint0_linear_gemini" x1="9" y1="3" x2="24" y2="23" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4285F4" />
                  <stop offset="0.5" stopColor="#9B51E0" />
                  <stop offset="1" stopColor="#FF4081" />
                </linearGradient>
                <linearGradient id="paint1_linear_gemini" x1="0" y1="8" x2="11" y2="19" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4285F4" />
                  <stop offset="0.5" stopColor="#9B51E0" />
                  <stop offset="1" stopColor="#FF4081" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* --- Features Grid (3 Columns) --- */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

        {/* Left Column: Pricing Card (Span 3) */}
        <div className="col-span-1 md:col-span-3">
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Starter</h3>
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-sm font-bold text-gray-500">Rs.</span>
              <span className="text-3xl md:text-4xl font-bold text-black">499</span>
              <span className="text-lg md:text-xl text-gray-400 line-through decoration-red-500 decoration-2">560</span>
            </div>
            <p className="text-gray-500 text-xs md:text-sm mb-1">per user / month,</p>
            <p className="text-gray-500 text-xs md:text-sm mb-4 md:mb-6 flex items-center justify-center gap-1">
              1 year commitment <BiSupport className="text-blue-400" />
            </p>

            <button className="flex items-center justify-center gap-2 bg-pink-100 text-[#FF4081] px-5 py-2 rounded-full font-medium border border-pink-200 hover:bg-pink-200 transition-colors w-full md:w-auto mx-auto cursor-pointer text-sm md:text-base">
              <FaWhatsapp className="text-lg md:text-xl" />
              Contact Sales
            </button>
          </div>
        </div>

        {/* Middle Column: Storage & Communicate (Span 5) */}
        <div className="col-span-1 md:col-span-5 space-y-8 pl-0 md:pl-8 border-l-0 md:border-l border-gray-200">
          {/* Storage */}
          <div>
            <h4 className="font-bold text-gray-700 mb-4">Storage</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <SiGoogledrive className="text-[#34A853] text-xl flex-shrink-0" />
                <span className="text-gray-600 text-sm"><strong>30GB Pooled</strong> Storage per user</span>
              </li>
            </ul>
          </div>

          {/* Communicate */}
          <div>
            <h4 className="font-bold text-gray-700 mb-4">Communicate</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <SiGmail className="text-[#EA4335] text-xl flex-shrink-0" />
                <span className="text-gray-600 text-sm">Secured & Personalized Gmail</span>
              </li>
              <li className="flex items-center gap-3">
                <SiGooglecalendar className="text-[#1A73E8] text-xl flex-shrink-0" />
                <span className="text-gray-600 text-sm">Always in Track with Schedule</span>
              </li>
              <li className="flex items-center gap-3">
                <SiGooglemeet className="text-[#00AC47] text-xl flex-shrink-0" />
                <span className="text-gray-600 text-sm">HD Video Calls <strong>(100 Users)</strong></span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-[#00AC47] p-0.5 rounded text-white flex-shrink-0">
                  <FaUsers className="text-sm" />
                </div>
                <span className="text-gray-600 text-sm">Gossip Secretly in your Group</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Collaborate & Control (Span 4) */}
        <div className="col-span-1 md:col-span-4 space-y-8">
          {/* Collaborate */}
          <div>
            <h4 className="font-bold text-gray-700 mb-4">Collaborate</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <SiGoogledocs className="text-[#1A73E8] text-xl flex-shrink-0" />
                <span className="text-gray-600 text-sm">Documents with Google Docs</span>
              </li>
              <li className="flex items-center gap-3">
                <SiGooglesheets className="text-[#34A853] text-xl flex-shrink-0" />
                <span className="text-gray-600 text-sm">Data Insights with Google Sheets</span>
              </li>
              <li className="flex items-center gap-3">
                <SiGoogleslides className="text-[#FBBC05] text-xl flex-shrink-0" />
                <span className="text-gray-600 text-sm">Present with Google Slides</span>
              </li>
              <li className="flex items-center gap-3">
                <SiGoogleforms className="text-[#7248B9] text-xl flex-shrink-0" />
                <span className="text-gray-600 text-sm">Surveys, To-dos and Many More</span>
              </li>
            </ul>
          </div>

          {/* Control */}
          <div>
            <h4 className="font-bold text-gray-700 mb-4">Control</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <MdOutlineSecurity className="text-[#1A73E8] text-xl flex-shrink-0" />
                <span className="text-gray-600 text-sm"><strong>Basic</strong> Security & Admin Control</span>
              </li>
              <li className="flex items-center gap-3">
                <MdDevices className="text-[#1A73E8] text-xl flex-shrink-0" />
                <span className="text-gray-600 text-sm"><strong>Standard</strong> Endpoint Management</span>
              </li>
              <li className="flex items-center gap-3">
                <FaSearch className="text-[#1A73E8] text-xl flex-shrink-0" />
                <span className="text-gray-600 text-sm">Smart Search with Workspace</span>
              </li>
              <li className="flex items-center gap-3">
                <FaArchive className="text-[#1A73E8] text-xl flex-shrink-0" />
                <span className="text-gray-600 text-sm">Vault for eDiscovery</span>
              </li>
              <li className="flex items-center gap-3">
                <SiGoogledrive className="text-[#34A853] text-xl flex-shrink-0" />
                <span className="text-gray-600 text-sm">Backup options for Drive and Gmail</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
