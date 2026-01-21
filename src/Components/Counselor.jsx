import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Counselor = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "34 Years of Excellence",
      description: "Counselor consultation",
      image: "images/counselor.png"
    },
    {
      title: "950+ Partner Universities",
      description: "University partnership",
      image: "images/counselor.png"
    },
    {
      title: "34 Years of Excellence",
      description: "Counselor consultation",
      image: "images/counselor.png"
    },
    {
      title: "950+ Partner Universities",
      description: "University partnership",
      image: "images/counselor.png"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const getNextSlideIndex = (index) => {
    return (index + 1) % slides.length;
  };

  const getSecondSlideIndex = (index) => {
    return (index + 1) % slides.length;
  };

  return (
    <div className="bg-gray-50 py-8 sm:py-12 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Left Section */}
          <div className="w-full space-y-4 md:space-y-6 order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug md:leading-tight">
              Your{' '}
              <span className="relative inline-block font-bold">
                Trusted Partner
                <img 
                  src="/images/underline.png" 
                  alt=""
                  className="w-full h-2 md:h-3 mt-1"
                />
              </span>{' '}
              In<br />Global Education
            </h2>
            
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Edwise, study abroad consultants, have been the architects of dreams and shapers of destinies for aspiring students for over three decades.
            </p>
            
            <button className="sm:w-auto border-2 border-[#1e3a8a] text-[#1e3a8a] px-4 sm:px-8 sm:py-3 py-2 rounded-lg font-medium hover:bg-[#1e3a8a] hover:text-white transition-all duration-300 text-sm sm:text-base">
              Free Expert Consultation
            </button>
          </div>

          {/* Right Section - Carousel */}
          <div className="relative w-full order-1 lg:order-2 overflow-hidden">
            <div 
              className="flex gap-4 md:gap-6 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              
              {slides.map((slide, index) => {
                const secondSlideIndex = getSecondSlideIndex(index);
                return (
                  <div key={index} className="flex-shrink-0 w-full">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                      {/* First Card - Full Width on mobile, 2/3 on desktop */}
                      <div className="hidden lg:block w-full md:w-2/3 bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 border-2 border-blue-100 ">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-6 md:mb-8">
                          {slide.title}
                        </h3>
                        <div className="relative w-full aspect-video md:aspect-[4/3]">
                          <img 
                            className="w-full h-full object-cover rounded-lg" 
                            src={slide.image}
                            alt={slide.description}
                          />
                        </div>
                      </div>
                      
                      {/* Second Card - Hidden on mobile, 1/3 on desktop */}
                      <div className="hidden md:block w-1/3">
                        <div className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 border-2 border-blue-100  h-full">
                          <h3 className="text-lg md:text-xl font-bold text-center mb-4 md:mb-6">
                            {slides[secondSlideIndex].title}
                          </h3>
                          <div className="relative w-full aspect-square">
                            <img 
                              className="w-full h-full object-cover rounded-lg" 
                              src={slides[secondSlideIndex].image}
                              alt={slides[secondSlideIndex].description}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              
            </div>

            {/* Mobile Layout for Second Slide */}
            <div className="md:hidden mt-4">
              <div className="bg-white rounded-2xl p-6 border-2 border-blue-100 shadow-lg">
                <h3 className="text-xl font-bold text-center mb-4">
                  {slides[getSecondSlideIndex(currentSlide)].title}
                </h3>
                <div className="relative w-full aspect-square">
                  <img 
                    className="w-full h-full object-cover rounded-lg" 
                    src={slides[getSecondSlideIndex(currentSlide)].image}
                    alt={slides[getSecondSlideIndex(currentSlide)].description}
                  />
                </div>
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mt-4 md:mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                    currentSlide === index ? 'bg-[#1e3a8a] scale-125' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-3 mt-4 sm:mt-6">
              <button
                onClick={prevSlide}
                className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-blue-600 hover:bg-gray-50 transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1e3a8a] rounded-lg flex items-center justify-center hover:bg-[#1e40af] transition-all shadow-md"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Counselor;