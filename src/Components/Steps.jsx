import React from 'react';

const Steps = () => {
  const steps = [
    {
      id: 1,
      title: "Education Counseling",
      description: "One on One counseling with our country specialist. Shortlist your ideal destination, institution and program with their expert guidance.",
      stickyTop: "top-10"
    },
    {
      id: 2,
      title: "University Applications",
      description: "Apply to your dream university. Our team will guide you through the application process.",
      stickyTop: "top-20"
    },
    {
      id: 3,
      title: "Loans & Scholarships",
      description: "Explore financial options with our loan and scholarship expertise, making your dream education affordable.",
      stickyTop: "top-[7.5rem]"
    },
    {
      id: 4,
      title: "Visa Processing",
      description: "Apply for your visa with the help of our Visa experts. Our team has a 99% visa success rate.",
      stickyTop: "top-40"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-24 sm:px-0 px-4 ">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            <span className="relative inline-block px-2">
              4 Steps
             <img 
              src="/images/underline.png" 
              alt="" 
              className="absolute -bottom-4 left-0 w-full h-4"
            />
            </span>
            <span className="block sm:inline"> To Your Dream Destination</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          
          {/* Left Side - Sticky Stacked Cards */}
          <div className="w-full lg:w-1/2 space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`sticky ${step.stickyTop} transition-all duration-300`}
              >
                <div className="border-2 border-[#1d428c] rounded-3xl p-8 bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  
                  {/* Step Number Badge */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#1d428c] text-white text-xl font-bold mb-4 shadow-lg">
                    {step.id}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* CTA Button */}
                  <button className="bg-[#1d428c] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#152f63] transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                    Free Expert Consultation
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Sticky Image */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-10 hidden lg:block">
            <div className="relative">
              <img 
                src="/images/steps.webp" 
                alt="Student with travel documents" 
                className="h-[600px] rounded-3xl  object-cover mx-auto"
              />
              
              
            </div>
          </div>
        </div>

        {/* Mobile Image - Shows on mobile/tablet */}
        <div className="lg:hidden mt-12">
          <div className="relative max-w-md mx-auto">
            <img 
              src="/images/steps.webp" 
              alt="Student with travel documents" 
              className="w-full h-auto rounded-3xl  object-cover"
            />
            
          
          </div>
        </div>

      </div>
    </div>
  );
};

export default Steps;
