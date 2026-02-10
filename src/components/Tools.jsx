import React from 'react';
import {
  SiGmail, SiGoogledrive, SiGooglemeet, SiGooglecalendar, SiGooglechat,
  SiGoogledocs, SiGooglesheets, SiGoogleslides, SiGoogleforms,
  SiGoogletasks, SiGooglekeep
} from 'react-icons/si';
import { MdVideoLibrary, MdWeb, MdApps, MdAutoAwesome, MdBook, MdViewList } from 'react-icons/md';

const Tools = () => {
  const toolsList = [
    { name: "Gmail", icon: SiGmail, color: "#EA4335" },
    { name: "Drive", icon: SiGoogledrive, color: "#1FA463" },
    { name: "Meet", icon: SiGooglemeet, color: "#00897B" },
    { name: "Calendar", icon: SiGooglecalendar, color: "#4285F4" },
    { name: "Chat", icon: SiGooglechat, color: "#00AC47" },
    { name: "Gemini", icon: MdAutoAwesome, color: "#8E24AA" },
    { name: "Docs", icon: SiGoogledocs, color: "#4285F4" },
    { name: "Sheets", icon: SiGooglesheets, color: "#34A853" },
    { name: "Slides", icon: SiGoogleslides, color: "#FBBC04" },
    { name: "Vids", icon: MdVideoLibrary, color: "#EA4335" },
    { name: "Keep", icon: SiGooglekeep, color: "#FFBB00" },
    { name: "Sites", icon: MdWeb, color: "#4285F4" },
    { name: "Forms", icon: SiGoogleforms, color: "#7248B9" },
    { name: "Tasks", icon: SiGoogletasks, color: "#4285F4" },
    { name: "NotebookLM", icon: MdBook, color: "#5F6368" }, // Fallback to safe Material icon
    { name: "AppSheet", icon: MdViewList, color: "#34A853" }, // Fallback to safe Material icon
  ];

  return (
    <section className="hidden md:flex w-full py-10 justify-center bg-white">
      <div className="w-full max-w-[1196px] flex flex-col items-center gap-8 font-['Helvetica_Now_Display'] text-center px-4">

        {/* Headline */}
        <div className="flex flex-col items-center gap-1">
          <h2 className="text-2xl md:text-[46px] font-medium text-black">
            <span className="text-[#0234F8]">सबै</span> Tools <span className="text-[#0234F8]">एउटै</span> Platform मा
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[#0234F8]">
            Google Workspace
          </h3>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-2">
          {/* Feature 1 */}
          <div className="flex flex-col items-center gap-2 px-4">
            <h4 className="text-lg font-bold text-gray-900">Premium AI built-in</h4>
            <p className="text-gray-600 leading-snug text-sm md:text-base">
              Do your best work faster with the Gemini app, NotebookLM, and Gemini in Gmail, Docs, Sheets, and more.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center gap-2 px-4">
            <h4 className="text-lg font-bold text-gray-900">Tools born in the Cloud</h4>
            <p className="text-gray-600 leading-snug text-sm md:text-base">
              Collaborate in real time, from any device, across tools that are always up-to-date.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center gap-2 px-4">
            <h4 className="text-lg font-bold text-gray-900">Enterprise-grade security</h4>
            <p className="text-gray-600 leading-snug text-sm md:text-base">
              Protect your emails, files, and meetings with AI-powered security and compliance controls.
            </p>
          </div>
        </div>

        {/* Button */}
        <button
          className="flex items-center gap-2 px-5 py-2 border border-gray-400 rounded-full hover:bg-gray-50 transition-colors mt-2 text-gray-800 font-medium text-base"
          style={{ borderRadius: '31px' }} // Explicit from user request
        >
          Get a quotation
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </button>

        {/* Footer / Icons List */}
        <div className="w-full mt-6 pt-6 border-t border-gray-100">
          <p className="text-lg font-bold text-gray-900 mb-4">Google Workspace includes:</p>

          {/* Icons Grid */}
          <div className="flex flex-nowrap justify-between gap-2 w-full overflow-x-auto md:overflow-visible">
            {toolsList.map((tool, index) => (
              <div key={index} className="flex flex-col items-center gap-1 group cursor-default min-w-[40px]">
                {/* Icon Wrapper */}
                <div className="w-9 h-9 rounded-lg bg-gray-50 flex items-center justify-center text-lg shadow-sm group-hover:shadow-md transition-all active:scale-95 duration-200">
                  <tool.icon style={{ color: tool.color }} />
                </div>
                <span className="text-[11px] text-gray-500 font-medium">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Tools;
