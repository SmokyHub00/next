import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full px-0 pb-0 pt-8 md:px-4 md:py-8 flex justify-center">
      <div className="relative w-full max-w-[1492px] min-h-[400px] rounded-[12px] text-white overflow-hidden font-['Helvetica_Now_Display']"
        style={{ background: 'radial-gradient(90.1% 111.19% at 50% 50%, #0234F8 0%, #011F92 100%)' }}>

        {/* Background "Invisible" Text - Desktop (Horizontal) */}
        <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
          <span
            className="font-bold text-transparent whitespace-nowrap opacity-50 leading-none tracking-tighter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: '200px',
              WebkitTextStroke: '2px rgba(255, 255, 255, 0.5)',
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)'
            }}
          >
            NEST NEPAL
          </span>
        </div>

        {/* Background "Invisible" Text - Mobile (Vertical) */}
        <div className="md:hidden absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
          <span
            className="font-bold text-transparent whitespace-nowrap opacity-50 absolute right-[-40px] top-1/2 -translate-y-1/2 -rotate-90 origin-center leading-none"
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: '30px',
              WebkitTextStroke: '2px rgba(255, 255, 255, 0.5)',
              maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)'
            }}
          >
            NEST NEPAL
          </span>
        </div>


        {/* Main Content Container */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between p-6 md:p-8">

          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-start">

            {/* Logo Section */}
            <div className="mb-4 md:mb-0">
              <div className="flex items-center gap-3">
                {/* Logo Image */}
                <img
                  src="/public.png"
                  alt="Nest Nepal"
                  className="h-8 md:h-10 w-auto object-contain brightness-0 invert"
                />
                {/* Text if needed */}
                <span className="text-xl md:text-2xl font-bold tracking-wider">NEST NEPAL</span>
              </div>
            </div>

            {/* Desktop Contact Info (Right Side) */}
            <div className="hidden md:block text-right text-sm md:text-base leading-relaxed opacity-90">
              <p className="font-medium mb-1">Nepal</p>
              <p className="mb-1">Call us : +977 986-160-1174</p>
              <p className="mb-1">Kupondole, Lalitpur, Nepal</p>
              <p>support@nestsms.com</p>
            </div>

          </div>

          {/* Mobile Content (Menu & Contact) - LEFT SIDE */}
          <div className="md:hidden flex flex-col gap-6 mt-2 mb-4 w-[70%]">

            {/* Mobile Menu Links */}
            <div className="flex flex-col gap-3 text-base font-medium">
              <a href="#" className="hover:opacity-80 transition-opacity">Google Workspace</a>
              <a href="#" className="hover:opacity-80 transition-opacity opacity-80 text-sm">Why google workspace?</a>
              <a href="#" className="hover:opacity-80 transition-opacity opacity-80 text-sm">Pricing</a>
              <a href="#" className="hover:opacity-80 transition-opacity opacity-80 text-sm">Testimonials</a>
              <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity text-sm mt-1">
                Get A Quotation
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </a>
            </div>

            {/* Mobile Contact Info */}
            <div className="flex flex-col gap-1 text-xs opacity-80 mt-2">
              <p className="font-semibold text-white opacity-100">Support</p>
              <p>Call us : +977 986-160-1174</p>
              <p>Kupondole, Lalitpur, Nepal</p>
              <p>support@nestsms.com</p>
            </div>
          </div>


          {/* Desktop Bottom Section */}
          <div className="hidden md:flex justify-between items-end mt-auto pt-6">
            {/* Bottom Left */}
            <div>
              <p className="text-lg font-medium">Google Workspace</p>
            </div>

            {/* Bottom Right Links */}
            <div className="flex items-center gap-8 text-sm md:text-base font-medium">
              <a href="#" className="hover:opacity-80 transition-opacity">Why google workspace?</a>
              <a href="#" className="hover:opacity-80 transition-opacity">Pricing</a>
              <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                Get A Quotation
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
