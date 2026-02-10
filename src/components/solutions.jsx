import React from 'react';
import brand1 from '../assets/brand1.png';
import brand2 from '../assets/brand2.png';
import brand3 from '../assets/brand3.png';

const Solutions = () => {
    return (
        <section className="w-full py-16 flex justify-center bg-white font-['Helvetica_Now_Display']">
            <div className="w-full max-w-[1196px] px-4 flex flex-col items-center gap-1">

                {/* Header */}
                <div className="text-center flex flex-col items-center gap-2">
                    <h2 className="text-3xl md:text-[46px] font-medium flex flex-col items-center gap-2 leading-tight text-[#202124]">
                        Solutions for businesses,
                        <span className="text-[#1a73e8]">साना देखि ठूला सबैका लागि</span>
                    </h2>
                    <p className="text-[#5f6368] text-lg md:text-xl max-w-3xl mt-4 text-center">
                        No matter the size, Google Workspace ले तपाईको business को सबै needs पूरा गर्छ
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-0">

                    {/* Card 1 - Enterprise */}
                    <div className="flex flex-col gap-6 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                        <div className="w-full h-[160px] flex items-center justify-center bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
                            <img src={brand1} alt="Enterprise Solutions" className="w-auto h-full object-contain p-4" />
                        </div>
                        <div className="flex flex-col gap-3 text-center">
                            <h3 className="text-xl font-bold text-[#202124]">For enterprise</h3>
                            <p className="text-[#5f6368] text-sm leading-relaxed opacity-100">
                                Secure collaboration <span className="text-[#1a73e8]">tools for enterprise</span>, with premium AI and enterprise-grade security built in for all the ways work is changing.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 - Small Business (Active/Highlighted) */}
                    <div className="flex flex-col gap-6 relative p-4">
                        {/* Dotted Blue Border Container for Image */}
                        <div className="w-full md:w-[370px] h-[160px] mx-auto flex items-center justify-center bg-white rounded-2xl overflow-hidden shadow-sm relative z-10">
                            <img src={brand2} alt="Small Business Solutions" className="w-auto h-full object-cover" />
                        </div>

                        {/* Blue Border Wrapper for the whole card content if needed, strictly following 'middle' highlight implies focus */}
                        <div className="flex flex-col gap-3 text-center px-4">
                            <h3 className="text-xl font-bold text-[#202124]">For small business</h3>
                            <p className="text-[#5f6368] text-sm leading-relaxed opacity-100">
                                Tools for <span className="text-[#1a73e8]">small businesses</span> that help teams and <span className="text-[#1a73e8]">individuals</span> with everyday tasks like scheduling appointments and email marketing.
                            </p>
                        </div>


                    </div>

                    {/* Card 3 - New Business */}
                    <div className="flex flex-col gap-6 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                        <div className="w-full h-[160px] flex items-center justify-center bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
                            <img src={brand3} alt="New Business Solutions" className="w-auto h-full object-contain p-4" />
                        </div>
                        <div className="flex flex-col gap-3 text-center">
                            <h3 className="text-xl font-bold text-[#202124]">For new business</h3>
                            <p className="text-[#5f6368] text-sm leading-relaxed opacity-100">
                                Essentials tools for <span className="text-[#1a73e8]">new businesses</span> and <span className="text-[#1a73e8]">startups</span>, including business email domains, online file sharing and storage, and more.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Solutions;
