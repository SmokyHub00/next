import React from "react";
import {
  SiGmail,
  SiGooglecalendar,
  SiGoogledrive,
  SiGoogledocs,
  SiGooglemeet,
} from "react-icons/si";
import { FaPlay } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

const Hero = () => {
  const handleDemoClick = () => {
    alert("Free Demo Requested!");
  };

  const handleQuoteClick = () => {
    alert("Quotation Requested!");
  };

  const handleIconClick = (appName) => {
    alert(`Redirecting to Google ${appName}...`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 pt-4 lg:pt-40 pb-6 flex flex-col items-center text-center font-['Helvetica_Now_Display']">
      {/* Header: Google Workspace + Icons */}
      <h2 className="text-[#5F6368] text-xl md:text-2xl font-medium mb-2 flex flex-col md:flex-row items-center gap-2">
        <span className="text-[#1A73E8] font-semibold text-2xl md:text-3xl">Google Workspace</span>
      </h2>

      {/* Icons Row */}
      <div className="flex items-center justify-center space-x-4 mb-4">
        <button onClick={() => handleIconClick("Gmail")} className="hover:scale-110 transition-transform cursor-pointer">
          <SiGmail className="text-[#EA4335] text-xl md:text-2xl" />
        </button>
        <button onClick={() => handleIconClick("Calendar")} className="hover:scale-110 transition-transform cursor-pointer">
          <SiGooglecalendar className="text-[#1A73E8] text-xl md:text-2xl" />
        </button>
        <button onClick={() => handleIconClick("Drive")} className="hover:scale-110 transition-transform cursor-pointer">
          <SiGoogledrive className="text-[#34A853] text-xl md:text-2xl" />
        </button>
        <button onClick={() => handleIconClick("Docs")} className="hover:scale-110 transition-transform cursor-pointer">
          <SiGoogledocs className="text-[#FBBC05] text-xl md:text-2xl" />
        </button>
        <button onClick={() => handleIconClick("Meet")} className="hover:scale-110 transition-transform cursor-pointer">
          <SiGooglemeet className="text-[#00AC47] text-xl md:text-2xl" />
        </button>
      </div>

      {/* Main Headline (Mixed Nepali/English) */}
      {/* Main Headline (Mixed Nepali/English) */}
      <h1 className="text-[24px] md:text-[36px] font-normal leading-[1.3] tracking-normal mb-4 max-w-5xl" style={{ fontFamily: '"Helvetica Now Display", sans-serif' }}>
        <span className="text-[#1A73E8]">किन केही</span>{" "}
        <span className="text-black">Businesses efficiently</span>{" "}
        <span className="text-[#1A73E8]">चल्छन्, र केही</span>
        <br className="hidden md:block" />
        <span className="text-black">daily operations</span>{" "}
        <span className="text-black">मै struggle</span>{" "}
        <span className="text-[#1A73E8]">गर्छन्?</span>
      </h1>

      {/* Sub-headline */}
      <p className="text-gray-600 font-medium text-sm md:text-base mb-6 max-w-xl" style={{ fontFamily: '"Helvetica Now Display", sans-serif' }}>
        Reason luck,ads वा team size होइन. Reason हो right partner with right tools.
      </p>

      {/* New Double Coupon Design (Tilted towards each other on left) */}
      <div className="flex flex-col items-center relative mb-10 gap-4">

        {/* Top Coupon - Tilted Left Down */}
        <div className="relative w-[180px] h-[60px] md:w-[230px] md:h-[78px] drop-shadow-md z-10 transform -rotate-6"
          style={{
            clipPath: 'polygon(10px 0, 100% 0, 100% 100%, 0 100%, 0 0)',
            mask: 'radial-gradient(circle at 0 0, transparent 15px, black 16px) top left, radial-gradient(circle at 100% 0, transparent 15px, black 16px) top right, radial-gradient(circle at 100% 100%, transparent 15px, black 16px) bottom right, radial-gradient(circle at 0 100%, transparent 15px, black 16px) bottom left',
            maskSize: '51% 51%',
            maskRepeat: 'no-repeat',
            WebkitMask: 'radial-gradient(circle at 0 0, transparent 15px, black 16px) top left, radial-gradient(circle at 100% 0, transparent 15px, black 16px) top right, radial-gradient(circle at 100% 100%, transparent 15px, black 16px) bottom right, radial-gradient(circle at 0 100%, transparent 15px, black 16px) bottom left',
            WebkitMaskSize: '51% 51%',
            WebkitMaskRepeat: 'no-repeat'
          }}>
          <div className="absolute inset-0 bg-[#FF4081]"></div>

          {/* Inner Dashed Border */}
          <div className="absolute inset-2 border-2 border-dashed border-white/60 rounded-lg flex items-center justify-between px-3 md:px-5">
            <div className="text-left text-white leading-tight">
              <span className="text-[10px] md:text-xs font-medium block">DISCOUNT</span>
              <span className="text-[10px] md:text-xs font-medium block">UP TO</span>
            </div>
            <div className="h-6 md:h-8 w-[1px] bg-white/60"></div>
            <div className="text-2xl md:text-3xl text-white font-bold">20%</div>
          </div>
        </div>

        {/* Bottom Coupon - Tilted Left Up */}
        <div className="relative w-[180px] h-[60px] md:w-[230px] md:h-[78px] drop-shadow-md transform rotate-6"
          style={{
            clipPath: 'polygon(10px 0, 100% 0, 100% 100%, 0 100%, 0 0)',
            mask: 'radial-gradient(circle at 0 0, transparent 15px, black 16px) top left, radial-gradient(circle at 100% 0, transparent 15px, black 16px) top right, radial-gradient(circle at 100% 100%, transparent 15px, black 16px) bottom right, radial-gradient(circle at 0 100%, transparent 15px, black 16px) bottom left',
            maskSize: '51% 51%',
            maskRepeat: 'no-repeat',
            WebkitMask: 'radial-gradient(circle at 0 0, transparent 15px, black 16px) top left, radial-gradient(circle at 100% 0, transparent 15px, black 16px) top right, radial-gradient(circle at 100% 100%, transparent 15px, black 16px) bottom right, radial-gradient(circle at 0 100%, transparent 15px, black 16px) bottom left',
            WebkitMaskSize: '51% 51%',
            WebkitMaskRepeat: 'no-repeat'
          }}>
          <div className="absolute inset-0 bg-[#FF4081]"></div>

          {/* Inner Dashed Border */}
          <div className="absolute inset-2 border-2 border-dashed border-white/60 rounded-lg flex items-center justify-between px-3 md:px-5">
            <div className="text-left text-white leading-tight">
              <span className="text-[10px] md:text-xs font-medium block">After</span>
              <span className="text-[10px] md:text-xs font-medium block">Discount</span>
            </div>
            <div className="h-6 md:h-8 w-[1px] bg-white/60"></div>
            <div className="flex items-center gap-1 relative">
              <span className="text-white text-[6px] md:text-[8px] font-bold self-start mt-1">Rs.</span>
              <span className="text-xl md:text-2xl text-white font-bold">499</span>
            </div>
          </div>
        </div>

      </div>

      {/* Description Text */}
      <p className="text-gray-700 font-medium text-[16px] md:text-[20px] leading-[24px] mb-8 max-w-3xl mx-auto" style={{ fontFamily: '"Helvetica Now Display", sans-serif' }}>
        Everything Your Business Needs to Work Smarter. A complete Google Workspace setup done right by Nest Nepal.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-[12px] mb-10 w-full">
        <button
          onClick={handleDemoClick}
          className="bg-[#FF4081] hover:bg-[#E91E63] text-white px-[20px] py-[10px] rounded-[31px] text-[16px] md:text-[20px] font-medium shadow-md w-full sm:w-auto h-auto sm:h-[42px] transition-colors flex items-center justify-center whitespace-nowrap cursor-pointer">
          15 min - Free Demo
        </button>
        <button
          onClick={handleQuoteClick}
          className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-[20px] py-[10px] rounded-[31px] text-[16px] md:text-[20px] font-medium shadow-sm flex items-center justify-center gap-2 w-full sm:w-auto h-auto sm:h-[42px] transition-colors whitespace-nowrap cursor-pointer">
          Get a quotation
          <GoArrowUpRight className="text-xl" />
        </button>
      </div>

      {/* Video Placeholder */}
      <div className="w-full max-w-[1000px] h-[250px] md:h-[500px] bg-gray-100 rounded-[12px] flex items-center justify-center shadow-inner relative overflow-hidden group cursor-pointer mb-6">
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors"></div>
        <div className="w-12 h-12 md:w-20 md:h-20 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
          <FaPlay className="text-gray-600 text-xl md:text-2xl translate-x-1" />
        </div>
      </div>

      {/* Footer Text */}
      <p className="text-gray-500 font-medium text-[14px] md:text-[16px] mt-2 mb-6" style={{ fontFamily: '"Helvetica Now Display", sans-serif' }}>
        Get A Free 15 Min Demo - See if it fits your business
      </p>
    </div>
  );
};

export default Hero;
