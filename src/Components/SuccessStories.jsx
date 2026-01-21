import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const stories = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=500&h=600&fit=crop",
      quote: "Choosing Edwise was a game changer when I decided to study abroad. The staff and my counselor were super friendly and every step became seamless.",
      name: "Vaibhavee Modi",
      institution: "Confederation College, Canada",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=600&fit=crop",
      quote: "Edwise managed my entire journey to Australia, from university selection to visa and flights! I highly recommend Edwise for anyone wanting to study abroad.",
      name: "Bhumika",
      institution: "University of Adelaide, Australia",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <div className="bg-[#c6d3e3] py-8 sm:py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start mb-8 md:mb-12">
          <div className="mb-6 sm:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-slate-900 relative inline-block font-bold">
              Success Stories
              <img 
                src="/images/underline.png" 
                alt="" 
                className="absolute -bottom-3 left-0 w-full h-3 md:h-4"
              />
            </h1>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex gap-3 justify-end sm:self-auto">
            <button
              onClick={prevSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1d428c] text-white flex items-center justify-center transition-all hover:opacity-90 active:scale-95"
              aria-label="Previous"
            >
              <ChevronLeft size={20} sm:size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1d428c] text-white flex items-center justify-center transition-all hover:opacity-90 active:scale-95"
              aria-label="Next"
            >
              <ChevronRight size={20} sm:size={24} />
            </button>
          </div>
        </div>

        {/* Slider/Cards Container */}
        <div className="relative">
          {/* Mobile & Tablet: Single Card Slider */}
          <div className="lg:hidden overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {stories.map((story) => (
                <div 
                  key={story.id} 
                  className="w-full flex-shrink-0 px-2"
                >
                  <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                    {/* Mobile Layout - Stacked */}
                    <div className="flex flex-col">
                      {/* Image Section */}
                      <div className="p-4 pb-0 sm:p-6 sm:pb-2">
                        <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                          <img
                            src={story.image}
                            alt={story.name}
                            className="w-full h-full object-cover"
                          />
                          {/* Play Button */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:scale-110 transition-transform active:scale-95">
                              <Play className="text-blue-600 ml-1" size={24} fill="currentColor" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-4 sm:p-6 pt-3 sm:pt-4 flex flex-col justify-between flex-1">
                        {/* Quote */}
                        <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6 sm:mb-8">
                          {story.quote}
                        </p>

                        {/* Profile */}
                        <div className="flex items-center gap-3 sm:gap-4">
                          <img
                            src={story.avatar}
                            alt={story.name}
                            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
                          />
                          <div>
                            <h3 className="font-semibold text-slate-900 text-base sm:text-lg">
                              {story.name}
                            </h3>
                            <p className="text-slate-600 text-xs sm:text-sm">
                              {story.institution}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Side-by-side Cards */}
          <div className="hidden lg:flex gap-6 xl:gap-8">
            {stories.map((story) => (
              <div 
                key={story.id} 
                className="flex-1 bg-white rounded-3xl overflow-hidden shadow-xl"
              >
                {/* Horizontal Card Layout */}
                <div className="flex flex-col md:flex-row h-full">
                  {/* Left: Image with rounded corners inside card */}
                  <div className="md:w-5/12 p-6 xl:p-8 pb-4 md:pb-6 md:pb-8">
                    <div className="relative rounded-2xl overflow-hidden aspect-[3/4] md:aspect-auto md:h-full">
                      <img
                        src={story.image}
                        alt={story.name}
                        className="w-full h-full object-cover"
                      />
                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:scale-110 transition-transform">
                          <Play className="text-blue-600 ml-1" size={26} fill="currentColor" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className="md:w-7/12 p-6 xl:p-8 pt-4 md:pt-6 md:pt-8 flex flex-col justify-between">
                    {/* Quote */}
                    <p className="text-lg xl:text-xl text-slate-700 leading-relaxed mb-8">
                      {story.quote}
                    </p>

                    {/* Profile */}
                    <div className="flex items-center gap-4">
                      <img
                        src={story.avatar}
                        alt={story.name}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-slate-900 text-lg">
                          {story.name}
                        </h3>
                        <p className="text-slate-600 text-sm">
                          {story.institution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Indicator Dots */}
          <div className="lg:hidden flex justify-center mt-6 space-x-2">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-[#1d428c] w-8' 
                    : 'bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;