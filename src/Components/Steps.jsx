import React from 'react';

const Steps = () => {
  const steps = [
    {
      id: 1,
      title: "Academic Consultation & Assessment",
      description: "We begin with a thorough one-on-one assessment of your academic background, career goals, and budget. Our Russia specialists help you understand which programs and universities align best with your profile.",
      stickyTop: "top-10",
      bg:'bg-red-50'
    },
    {
      id: 2,
      title: "University Shortlisting",
      description: "Based on your assessment, we curate a personalised list of Russian universities that match your academic qualifications, preferred city, course, and financial plan — ensuring the best possible fit.",
      stickyTop: "top-16",
      bg:'bg-green-50'
    },
    {
      id: 3,
      title: "Admission Processing & Offer Confirmation",
      description: "Our team manages the entire application process — from document preparation and submission to follow-ups with the university — until you receive your official admission offer letter.",
      stickyTop: "top-24",
      bg:'bg-yellow-50'
    },
    {
      id: 4,
      title: "Documentation Structuring",
      description: "We assist in structuring and verifying all required documents including transcripts, SOP, recommendation letters, and medical certificates to meet Russian university and embassy standards.",
      stickyTop: "top-32",
      bg:'bg-blue-50'
    },
    {
      id: 5,
      title: "Visa Application & Approval",
      description: "Our dedicated visa team guides you through the Russian student visa application with a 99% success rate — handling every form, checklist, and appointment to ensure a smooth and timely approval.",
      stickyTop: "top-40",
      bg:'bg-purple-50'
    },
    {
      id: 6,
      title: "Pre-Departure Orientation",
      description: "Before you fly, we equip you with everything you need — accommodation arrangements, travel guidance, cultural orientation, banking tips, and a full Russia student survival briefing.",
      stickyTop: "top-",
      bg:'bg-pink-50'
    }
  ];

  return (
    <div className="py-12 sm:py-24 bg-gray-50">
      <div className="px-4 sm:px-6 lg:px-0">
        <div className="sm:px-24 max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              <span className="relative inline-block px-2">
                Student
                <img
                  src="/images/underline.png"
                  alt=""
                  className="absolute -bottom-3 sm:-bottom-4 left-0 w-full h-3 sm:h-4"
                />
              </span>
              <span className="block sm:inline sm:ml-2 mt-2 sm:mt-0">
                Process Flow
              </span>
            </h2>
            <p className="mt-6 text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
              A structured, end-to-end journey from first consultation to landing in Russia — guided by experts at every stage.
            </p>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-48 items-start">

            {/* Left Side - Stacked Sticky Cards */}
            <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`sticky ${step.stickyTop} transition-all duration-300`}
                >
                  <div
                    className={`rounded-2xl sm:rounded-3xl p-6 sm:p-8 duration-300 ${step.bg} transition-all `}
                    // style={{ backgroundColor: '#e8edf4' }}
                  >

                    {/* Step Badge + Title Row */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#1d428c] text-white text-lg sm:text-xl font-bold shadow-lg">
                        {step.id}
                      </div>
                      <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
                        {step.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* CTA */}
                   
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side - Sticky Image (desktop only) */}
            <div className="hidden lg:block w-full lg:w-1/2 lg:sticky lg:top-10">
              <div className="relative">
                <img
                  src="/images/steps.webp"
                  alt="Student with travel documents"
                  className="w-full h-[600px] rounded-3xl object-cover mx-auto "
                />
                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 bg-white rounded-2xl px-8 py-4 shadow-lg">
                  <p className="text-[#1d428c] font-bold text-lg">99% Visa Success</p>
                  <p className="text-gray-500 text-sm">Across all student applications</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mt-10 sm:mt-12">
            <div className="relative max-w-md mx-auto">
              <img
                src="/images/steps.webp"
                alt="Student with travel documents"
                className="w-full h-auto rounded-2xl sm:rounded-3xl object-cover shadow-xl"
              />
              <div className="absolute bottom-4 left-4 bg-white rounded-xl px-4 py-3 shadow-lg">
                <p className="text-[#1d428c] font-bold text-base">99% Visa Success</p>
                <p className="text-gray-500 text-xs">Across all student applications</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Steps;