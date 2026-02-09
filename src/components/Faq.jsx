import React, { useState } from 'react';
import { faqData } from '../data/faq';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-24 px-4 w-full max-w-[752px] mx-auto font-['Helvetica_Now_Display']">
      <h2 className="text-[24px] md:text-[36px] font-normal text-center mb-[40px] md:mb-[60px] leading-tight">
        <span className="text-black">Frequently Asked Questions</span>{" "}
        <span className="text-[#1A73E8]">(FAQs)</span>
      </h2>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              onClick={() => toggleFaq(index)}
              className="w-full py-5 md:py-6 flex justify-between items-center text-left focus:outline-none group"
            >
              <span className="text-gray-800 font-normal text-base md:text-lg pr-8 leading-snug">
                {item.question}
              </span>
              <span className="text-gray-500">
                {openIndex === index ? (
                  <FiChevronUp className="text-2xl" />
                ) : (
                  <FiChevronDown className="text-2xl" />
                )}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'
                }`}
            >
              <p className="text-gray-600 font-light text-sm md:text-base leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
