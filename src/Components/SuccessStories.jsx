import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const stories = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=500&h=600&fit=crop",
      quote: "Choosing Albatross Insights was a game changer when I decided to study abroad. The staff and my counselor were super friendly and every step became seamless.",
      name: "Vaibhavee Modi",
      institution: "Confederation College, Canada",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      country: "🇨🇦"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=600&fit=crop",
      quote: "Albatross Insights managed my entire journey to Australia, from university selection to visa and flights! I highly recommend Albatross Insights for anyone wanting to study abroad.",
      name: "Bhumika",
      institution: "University of Adelaide, Australia",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      country: "🇦🇺"
    }
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % stories.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);

  return (
    <div className="bg-[#e8edf4] py-10 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 rounded-[3rem]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <div>
            <p className="text-[#1d428c] font-semibold text-sm tracking-widest uppercase mb-1">Our Alumni</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Success Stories
            </h2>
          </div>
          <div className="flex gap-2 sm:gap-3">
            <button
              onClick={prevSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1d428c] text-white flex items-center justify-center hover:bg-[#163270] active:scale-95 transition-all shadow-md"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1d428c] text-white flex items-center justify-center hover:bg-[#163270] active:scale-95 transition-all shadow-md"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Slider */}
        <div className="lg:hidden overflow-hidden">
          <div
            className="flex transition-transform duration-400 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {stories.map((story) => (
              <div key={story.id} className="w-full flex-shrink-0">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                  {/* Content - Full width since image is removed */}
                  <div className="p-5 sm:p-6 flex flex-col justify-between">
                    <div>
                      <Quote className="text-[#1d428c] opacity-30 mb-3" size={32} fill="currentColor" />
                      <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                        {story.quote}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-5 pt-4 border-t border-slate-100">
                      <img
                        src={story.avatar}
                        alt={story.name}
                        className="w-11 h-11 rounded-full object-cover ring-2 ring-[#1d428c]/20"
                      />
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">{story.name}</p>
                        <p className="text-slate-500 text-xs">{story.institution}</p>
                      </div>
                      <span className="ml-auto text-xl">{story.country}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-5 gap-2">
            {stories.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex ? 'bg-[#1d428c] w-7' : 'bg-slate-400 w-2'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-2 gap-6 xl:gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Content - Full width since image is removed */}
              <div className="p-7 xl:p-8 flex flex-col justify-between">
                <div>
                  <Quote className="text-[#1d428c] opacity-25 mb-4" size={36} fill="currentColor" />
                  <p className="text-slate-700 text-base xl:text-lg leading-relaxed">
                    {story.quote}
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-5 border-t border-slate-100">
                  <img
                    src={story.avatar}
                    alt={story.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-[#1d428c]/20"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-slate-900">{story.name}</p>
                    <p className="text-slate-500 text-sm">{story.institution}</p>
                  </div>
                  <span className="text-2xl">{story.country}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default SuccessStories;