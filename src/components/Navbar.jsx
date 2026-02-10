import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 14,
    minutes: 40,
    seconds: 35,
  });

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let newSeconds = prev.seconds - 1;
        let newMinutes = prev.minutes;
        let newHours = prev.hours;
        let newDays = prev.days;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }
        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }
        if (newHours < 0) {
          newHours = 23;
          newDays -= 1;
        }

        if (newDays < 0) {
          clearInterval(timer);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute top-[36px] left-[112px] w-[1306px] h-[90px] bg-white flex justify-between items-center px-8 rounded-md
      max-sm:static max-sm:w-full max-sm:h-auto max-sm:px-4 max-sm:py-3 max-sm:rounded-none max-sm:flex-wrap max-sm:gap-y-4">

      {/* Left Section - Logo & Partner (Mobile: Order 1) */}
      <div className="flex items-center space-x-3 max-sm:space-x-2 max-sm:order-1">
        <img src="/public.png" alt="Nest Nepal Logo" className="h-12 max-sm:h-6" />
        <div className="w-[1px] h-10 max-sm:h-6 block bg-gradient-to-b from-[#EA4335] via-[#FBBC05] via-[#34A853] to-[#4285F4]"></div>

        <div className="flex flex-col items-start pl-2 max-sm:pl-1">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg"
            alt="Google Cloud"
            className="h-6 max-sm:h-4"
          />
          <span className="text-gray-400 text-sm max-sm:text-[10px] font-medium mt-[-2px] ml-[34px] max-sm:ml-[22px]">Partner</span>
        </div>
      </div>

      {/* Center Countdown (Desktop: Center, Mobile: Order 3 / Row 2) */}
      <div className="text-center max-sm:order-3 max-sm:w-full max-sm:mt-2">
        <p className="text-[#E75480] text-4xl font-bold italic" style={{ fontFamily: '"Dancing Script", cursive' }}>
          Valentine’s OFFER
        </p>
        <div className="flex items-center justify-center space-x-2 mt-0">
          {['days', 'hours', 'minutes', 'seconds'].map((unit, idx) => (
            <React.Fragment key={unit}>
              <div className="text-[#1A73E8] font-bold text-3xl max-sm:text-xl">
                {String(timeLeft[unit]).padStart(2, '0')}
              </div>
              {idx !== 3 && <span className="text-[#E75480] font-bold text-2xl max-sm:text-lg">:</span>}
            </React.Fragment>
          ))}
        </div>
        <div className="text-sm text-gray-600 flex justify-center space-x-5 mt-0 font-bold tracking-wide">
          <span>Days</span>
          <span>Hrs</span>
          <span>Min</span>
          <span>Sec</span>
        </div>
      </div>

      {/* Right WhatsApp Button (Desktop: Right, Mobile: Order 2 / Row 1) */}
      <button className="flex items-center space-x-2 bg-[#E8F5E9] border border-[#4CAF50] hover:bg-[#d0f0d0] text-[#2E7D32]
px-6 py-3 max-sm:px-2 max-sm:py-1 rounded-md text-base max-sm:text-xs font-medium transition max-sm:order-2 whitespace-nowrap">
        <FaWhatsapp className="text-[#4CAF50] text-2xl max-sm:text-sm" />
        <span>Contact Sales</span>
      </button>


    </div>
  );
};

export default Navbar;
