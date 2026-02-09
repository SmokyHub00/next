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
    <div className="max-w-7xl mx-auto px-4 pt-4 lg:pt-48 pb-10 flex flex-col items-center text-center font-['Helvetica_Now_Display']">
      {/* Header: Google Workspace + Icons */}
      <h2 className="text-[#5F6368] text-2xl md:text-3xl font-medium mb-4 flex flex-col md:flex-row items-center gap-2">
        <span className="text-[#1A73E8] font-semibold text-3xl md:text-4xl">Google Workspace</span>
      </h2>

      {/* Icons Row */}
      <div className="flex items-center justify-center space-x-6 mb-8">
        <button onClick={() => handleIconClick("Gmail")} className="hover:scale-110 transition-transform cursor-pointer">
          <SiGmail className="text-[#EA4335] text-2xl md:text-3xl" />
        </button>
        <button onClick={() => handleIconClick("Calendar")} className="hover:scale-110 transition-transform cursor-pointer">
          <SiGooglecalendar className="text-[#1A73E8] text-2xl md:text-3xl" />
        </button>
        <button onClick={() => handleIconClick("Drive")} className="hover:scale-110 transition-transform cursor-pointer">
          <SiGoogledrive className="text-[#34A853] text-2xl md:text-3xl" />
        </button>
        <button onClick={() => handleIconClick("Docs")} className="hover:scale-110 transition-transform cursor-pointer">
          <SiGoogledocs className="text-[#FBBC05] text-2xl md:text-3xl" />
        </button>
        <button onClick={() => handleIconClick("Meet")} className="hover:scale-110 transition-transform cursor-pointer">
          <SiGooglemeet className="text-[#00AC47] text-2xl md:text-3xl" />
        </button>
      </div>

      {/* Main Headline (Mixed Nepali/English) */}
      <h1 className="text-[32px] md:text-[46px] font-normal leading-[1.3] tracking-normal mb-6 max-w-5xl" style={{ fontFamily: '"Helvetica Now Display", sans-serif' }}>
        <span className="text-[#1A73E8]">किन केही</span>{" "}
        <span className="text-black">Businesses efficiently</span>{" "}
        <span className="text-[#1A73E8]">चल्छन्, र केही</span>
        <br className="hidden md:block" />
        <span className="text-black">daily operations</span>{" "}
        <span className="text-black">मै struggle</span>{" "}
        <span className="text-[#1A73E8]">गर्छन्?</span>
      </h1>

      {/* Sub-headline */}
      <p className="text-gray-600 font-medium text-base md:text-lg mb-8 max-w-xl" style={{ fontFamily: '"Helvetica Now Display", sans-serif' }}>
        Reason luck,ads वा team size होइन. Reason हो right partner with right tools.
      </p>

      {/* New Double Coupon Design (Tilted towards each other on left) */}
      <div className="flex flex-col items-center relative mb-16 gap-6">

        {/* Top Coupon - Tilted Left Down */}
        <div className="relative w-[229.39px] h-[77.23px] md:w-[291.06px] md:h-[98px] drop-shadow-md z-10 transform -rotate-6"
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
          <div className="absolute inset-2 border-2 border-dashed border-white/60 rounded-lg flex items-center justify-between px-4 md:px-6">
            <div className="text-left text-white leading-tight">
              <span className="text-xs md:text-sm font-medium block">DISCOUNT</span>
              <span className="text-xs md:text-sm font-medium block">UP TO</span>
            </div>
            <div className="h-8 md:h-10 w-[1px] bg-white/60"></div>
            <div className="text-3xl md:text-4xl text-white font-bold">20%</div>
          </div>
        </div>

        {/* Bottom Coupon - Tilted Left Up */}
        <div className="relative w-[229.39px] h-[77.23px] md:w-[291.06px] md:h-[98px] drop-shadow-md transform rotate-6"
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
          <div className="absolute inset-2 border-2 border-dashed border-white/60 rounded-lg flex items-center justify-between px-4 md:px-6">
            <div className="text-left text-white leading-tight">
              <span className="text-xs md:text-sm font-medium block">After</span>
              <span className="text-xs md:text-sm font-medium block">Discount</span>
            </div>
            <div className="h-8 md:h-10 w-[1px] bg-white/60"></div>
            <div className="flex items-center gap-1 relative">
              <span className="text-white text-[8px] md:text-[10px] font-bold self-start mt-1">Rs.</span>
              <span className="text-2xl md:text-3xl text-white font-bold">499</span>
            </div>
          </div>
        </div>

      </div>

      {/* Description Text */}
      <p className="text-gray-700 font-medium text-[20px] md:text-[24px] leading-[28px] mb-10 max-w-3xl mx-auto" style={{ fontFamily: '"Helvetica Now Display", sans-serif' }}>
        Everything Your Business Needs to Work Smarter. A complete Google Workspace setup done right by Nest Nepal.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-[16px] mb-16 w-full">
        <button
          onClick={handleDemoClick}
          className="bg-[#FF4081] hover:bg-[#E91E63] text-white px-[24px] py-[12px] rounded-[31px] text-[20px] md:text-[24px] font-medium shadow-md w-full sm:w-auto h-auto sm:h-[52px] transition-colors flex items-center justify-center whitespace-nowrap cursor-pointer">
          15 min - Free Demo
        </button>
        <button
          onClick={handleQuoteClick}
          className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-[24px] py-[12px] rounded-[31px] text-[20px] md:text-[24px] font-medium shadow-sm flex items-center justify-center gap-2 w-full sm:w-auto h-auto sm:h-[52px] transition-colors whitespace-nowrap cursor-pointer">
          Get a quotation
          <GoArrowUpRight className="text-2xl" />
        </button>
      </div>

      {/* Video Placeholder */}
      <div className="w-full max-w-[1322px] h-[300px] md:h-[624px] bg-gray-100 rounded-[12px] flex items-center justify-center shadow-inner relative overflow-hidden group cursor-pointer mb-8">
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors"></div>
        <div className="w-16 h-16 md:w-24 md:h-24 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
          <FaPlay className="text-gray-600 text-2xl md:text-3xl translate-x-1" />
        </div>
      </div>

      {/* Footer Text */}
      <p className="text-gray-500 font-medium text-[16px] md:text-[20px] mt-2 mb-10" style={{ fontFamily: '"Helvetica Now Display", sans-serif' }}>
        Get A Free 15 Min Demo - See if it fits your business
      </p>
    </div>
  );
};

export default Hero;
