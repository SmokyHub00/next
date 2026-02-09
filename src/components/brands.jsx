import React from 'react';
import brand1 from '../assets/brand1.png';
import brand2 from '../assets/brand2.png';
import brand3 from '../assets/brand3.png';

const Brands = () => {
    return (
        <section className="w-full py-16 flex justify-center bg-white font-['Helvetica_Now_Display']">
            <div className="w-full max-w-[1196px] px-4 flex flex-col items-center gap-12">

                {/* Header */}
                <div className="text-center flex flex-col items-center gap-2">
                    <h2 className="text-3xl md:text-5xl font-bold flex flex-col md:block items-center gap-2 leading-tight">
                        <span className="text-black">Solutions for businesses,</span>
                        <span className="text-[#0234F8] md:ml-2">साना देखि ठूला सबैका लागि</span>
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl max-w-3xl mt-2 text-center">
                        No matter the size, Google Workspace ले तपाईको business को सबै needs पूरा गर्छ
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-4">

                    {/* Card 1 - Enterprise */}
                    <div className="flex flex-col gap-4">
                        <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <img src={brand1} alt="Enterprise Solutions" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col gap-2 text-center md:text-left">
                            <h3 className="text-xl font-bold text-gray-900">For enterprise</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Secure collaboration <span className="text-[#0234F8] cursor-pointer hover:underline">tools for enterprise</span>, with premium AI and enterprise-grade security built in for all the ways work is changing.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 - Small Business */}
                    <div className="flex flex-col gap-4">
                        <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <img src={brand2} alt="Small Business Solutions" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col gap-2 text-center md:text-left">
                            <h3 className="text-xl font-bold text-gray-900">For small business</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Tools for <span className="text-[#0234F8] cursor-pointer hover:underline">small businesses</span> that help teams and <span className="text-[#0234F8] cursor-pointer hover:underline">individuals</span> with everyday tasks like scheduling appointments and email marketing.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 - New Business */}
                    <div className="flex flex-col gap-4">
                        <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <img src={brand3} alt="New Business Solutions" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col gap-2 text-center md:text-left">
                            <h3 className="text-xl font-bold text-gray-900">For new business</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Essentials tools for <span className="text-[#0234F8] cursor-pointer hover:underline">new businesses</span> and <span className="text-[#0234F8] cursor-pointer hover:underline">startups</span>, including business email domains, online file sharing and storage, and more.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Brands;
