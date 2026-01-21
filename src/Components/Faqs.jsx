import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What does Edwise do as a study abroad consultant?",
      answer: "Edwise is a comprehensive study abroad consultant that helps students navigate their international education journey. We provide guidance on university selection, application process, visa assistance, test preparation, and pre-departure support to ensure a smooth transition to studying abroad."
    },
    {
      question: "Are the services of Edwise available for free?",
      answer: "Edwise offers a range of services with various pricing structures. While some initial consultations and guidance may be complimentary, comprehensive services like application assistance, test preparation, and visa guidance typically involve fees. Contact us directly for detailed pricing information."
    },
    {
      question: "How do I get started on my study abroad journey with Edwise?",
      answer: "Getting started is simple! You can schedule a consultation with our expert counselors either online or at one of our offices. During this session, we'll assess your academic background, career goals, and preferences to create a personalized roadmap for your study abroad journey."
    },
    {
      question: "What does Edwise do as a study abroad consultant?",
      answer: "Edwise is a comprehensive study abroad consultant that helps students navigate their international education journey. We provide guidance on university selection, application process, visa assistance, test preparation, and pre-departure support to ensure a smooth transition to studying abroad."
    },
    {
      question: "Are the services of Edwise available for free?",
      answer: "Edwise offers a range of services with various pricing structures. While some initial consultations and guidance may be complimentary, comprehensive services like application assistance, test preparation, and visa guidance typically involve fees. Contact us directly for detailed pricing information."
    },
    {
      question: "How do I get started on my study abroad journey with Edwise?",
      answer: "Getting started is simple! You can schedule a consultation with our expert counselors either online or at one of our offices. During this session, we'll assess your academic background, career goals, and preferences to create a personalized roadmap for your study abroad journey."
    },
    {
      question: "Does Edwise provide coaching for IELTS?",
      answer: "Yes, Edwise provides comprehensive IELTS coaching to help students achieve their desired scores. Our experienced trainers offer classroom training, mock tests, study materials, and personalized feedback to ensure you're fully prepared for the IELTS examination."
    },
    {
      question: "How much does it cost to study abroad for Indian students?",
      answer: "The cost of studying abroad varies significantly depending on the country, university, and program. On average, tuition fees can range from $10,000 to $50,000 per year, with living expenses adding another $10,000 to $20,000 annually. We can help you explore scholarship opportunities and affordable options based on your budget."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" py-12 sm:py-24 ">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-6xl font-bold text-center mb-12 text-gray-900">
          FAQs
        </h1>
        
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