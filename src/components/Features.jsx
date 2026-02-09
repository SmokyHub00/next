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
  const logos = [nep1, nep2, nep3, nep4, nep5, nep6, nep7, nep8];

  // Repeat logos for smooth marquee
  const marqueeLogos = [...logos, ...logos];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto font-['Helvetica_Now_Display']">

      {/* --- Trusted By Section --- */}
      <div className="text-center mb-16">
        <p className="text-gray-600 text-lg md:text-xl font-medium mb-2">
          Trusted by 1,000+ Nepali businesses on their
        </p>
        <p className="text-gray-600 text-lg md:text-xl font-medium mb-8">
          growth journey. <span className="text-[#1A73E8] font-bold">अब तपाईको team तयार छ?</span>
        </p>

        {/* Desktop Logo Grid (Hidden on Mobile) */}
        <div className="hidden md:flex justify-center items-center gap-8 lg:gap-12">
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt={`Client ${index + 1}`} className="h-8 md:h-10 object-contain" />
          ))}
        </div>

        {/* Mobile Logo Marquee (Hidden on Desktop) */}
        <div className="md:hidden overflow-hidden w-full relative">
          <div className="animate-marquee flex gap-8 items-center">
            {marqueeLogos.map((logo, index) => (
              <img key={index} src={logo} alt={`Client ${index + 1}`} className="h-10 object-contain flex-shrink-0" />
            ))}
          </div>
        </div>
      </div>

      {/* --- Main Headline --- */}
      <div className="text-center mb-12">
        <h2 className="text-[32px] md:text-[46px] leading-tight font-normal mb-4">
          <span className="text-black">के</span>{" "}
          <span className="text-[#1A73E8] font-medium">Google Workspace</span>{" "}
          <span className="text-black">तपाईको</span>
          <br className="hidden md:block" />
          <span className="text-black">business growth</span>{" "}
          <span className="text-[#1A73E8]">को लागि</span>{" "}
          <span className="text-black">best fit</span>{" "}
          <span className="text-[#1A73E8]">हो?</span>
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
          Tailored Plans तपाईको Online Presence को हरेक पहलुलाई Elevate र Empower गर्न
        </p>

        {/* Playful Icons Line Divider */}
        <div className="flex items-center justify-center gap-2 mt-6 mb-12 text-[#EA4335] text-xl">
          <span className="text-blue-500 tracking-[0.2em]">........................</span>
          <SiGmail className="text-[#EA4335]" />
          <SiGooglecalendar className="text-[#1A73E8]" />
          <SiGoogledrive className="text-[#34A853]" />
          <SiGoogledocs className="text-[#FBBC05]" />
          <SiGooglemeet className="text-[#00AC47]" />
          <span className="text-blue-500 tracking-[0.2em]">........................</span>
        </div>
      </div>

      {/* --- Features Grid (3 Columns) --- */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

        {/* Left Column: Pricing Card (Span 3) */}
        <div className="col-span-1 md:col-span-3">
          <div className="text-left md:text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Starter</h3>
            <div className="flex items-baseline justify-start md:justify-center gap-2 mb-2">
              <span className="text-sm font-bold text-gray-500">Rs.</span>
              <span className="text-4xl md:text-5xl font-bold text-black">499</span>
              <span className="text-xl text-gray-400 line-through decoration-red-500 decoration-2">560</span>
            </div>
            <p className="text-gray-500 text-sm mb-1">per user / month,</p>
            <p className="text-gray-500 text-sm mb-6 flex items-center justify-start md:justify-center gap-1">
              1 year commitment <BiSupport className="text-blue-400" />
            </p>

            <button className="flex items-center justify-center gap-2 bg-pink-100 text-[#FF4081] px-6 py-2 rounded-full font-medium border border-pink-200 hover:bg-pink-200 transition-colors w-full md:w-auto mx-auto cursor-pointer">
              <FaWhatsapp className="text-xl" />
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
