import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Are Russian degrees internationally recognized?",
      answer: "Yes, many Russian universities hold global accreditation and recognition. Degrees from top Russian institutions are recognized by UNESCO, WHO, and educational bodies across 150+ countries. Medical degrees in particular are recognized by the Nepal Medical Council (NMC), making Russia one of the most sought-after destinations for Nepali medical students."
    },
    {
      question: "Are English-medium programs available?",
      answer: "Yes, especially in Medicine, Engineering, and technical disciplines. Most leading Russian universities offer full degree programs taught entirely in English for international students. Foundation Russian language courses are also included in the curriculum to help students adapt to daily life."
    },
    {
      question: "How long does the visa process take?",
      answer: "Processing timelines vary but are streamlined when documentation is properly structured. On average, the Russian student visa takes 2–4 weeks after your university acceptance letter is issued. Our dedicated visa team has a 99% success rate and manages the entire process on your behalf."
    },
    {
      question: "What are the tuition fees for studying in Russia?",
      answer: "Tuition fees in Russia are significantly more affordable compared to Western countries. Depending on the university and program, annual fees range from approximately USD 3,500 to USD 7,000. Combined with a low cost of living — around USD 200–350 per month — Russia offers exceptional value for international students."
    },
    {
      question: "Is it safe for Nepali students to study in Russia?",
      answer: "Yes. Major university cities like Moscow, Saint Petersburg, Kazan, and Tomsk have large and well-established international student communities. Universities provide on-campus accommodation, student support services, and orientation programs specifically designed to help foreign students settle in comfortably."
    },
    {
      question: "What scholarships are available for Nepali students?",
      answer: "Russian government scholarships are available through the Rossotrudnichestvo program, which covers tuition fees for selected international students each year. Many universities also offer merit-based partial scholarships. Albatross Insights helps you identify and apply for all relevant scholarship opportunities as part of our service."
    },
    {
      question: "What documents are required for university admission?",
      answer: "Typically required documents include academic transcripts and certificates, a valid passport, a Statement of Purpose (SOP), recommendation letters, a medical fitness certificate, and passport-sized photographs. Our documentation team assists you in structuring and verifying every document to meet both university and embassy standards."
    },
    {
      question: "How does Albatross Insights support students after arrival?",
      answer: "Our support does not end when you board the flight. We provide a comprehensive pre-departure orientation covering accommodation, banking, local transport, cultural adjustment, and emergency contacts. We also stay in touch throughout your first semester to ensure a smooth transition into university life in Russia."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-12 sm:py-24 px-4 sm:px-6 lg:px-0">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl sm:text-6xl font-bold text-center mb-4 text-gray-900">
          FAQs
        </h1>
        <p className="text-center text-gray-500 text-base sm:text-lg mb-10 sm:mb-14 max-w-2xl mx-auto">
          Everything you need to know about studying in Russia with Albatross Insights.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 sm:px-8 py-5 sm:py-8 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-base sm:text-2xl font-medium text-gray-900 pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#1d428c] flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 text-[#1d428c]" />
                  ) : (
                    <Plus className="w-4 h-4 text-[#1d428c]" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 sm:px-8 pb-5 sm:pb-6">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FAQAccordion;