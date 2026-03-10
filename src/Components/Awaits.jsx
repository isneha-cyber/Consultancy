import React, { useState, useEffect, useRef } from 'react'

const Awaits = () => {
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setOffsetY(-rect.top);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const imgLeft = [
    'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=500&h=700&fit=crop',
    'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=500&h=700&fit=crop',
    'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=500&h=700&fit=crop',
  ];
  const imgRight = [
    'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=500&h=700&fit=crop',
    'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=500&h=700&fit=crop',
    'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=500&h=700&fit=crop',
  ];

  return (
    
      <div ref={sectionRef} className="relative bg-[#1d428c] rounded-[2rem] sm:rounded-[3rem] overflow-hidden px-6 sm:px-12 md:px-24">

        {/* ── DESKTOP LAYOUT: unchanged ── */}
        <div className="hidden md:grid md:grid-cols-[180px_1fr_180px] lg:grid-cols-[220px_1fr_220px] xl:grid-cols-[260px_1fr_260px] min-h-[400px]">

          {/* Left image column */}
          <div className="overflow-hidden relative">
            <div
              className="flex flex-col gap-3 px-3 pt-3 pb-3"
              style={{
                transform: `translateY(${offsetY * 0.25}px)`,
                transition: 'transform 0.1s linear',
                willChange: 'transform',
              }}
            >
              {imgLeft.map((src, i) => (
                <img key={i} src={src} alt="Russia" className="w-full h-44 object-cover rounded-lg sm:rounded-xl" />
              ))}
            </div>
          </div>

          {/* Centre content */}
          <div className="flex items-center justify-center py-10 px-6 z-10">
            <div className="text-center space-y-7 max-w-xl w-full">
              <div className="space-y-3">
                <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Russia International
                  <br />
                  <span className="relative inline-block mx-1">
                    <span className="relative z-10 bg-white bg-clip-text text-transparent">
                      Education
                    </span>
                    <img
                      src="/images/underline.png"
                      alt=""
                      aria-hidden="true"
                      className="absolute -bottom-3 left-0 w-full"
                      style={{ height: '8px', objectFit: 'fill' }}
                    />
                  </span>
                  {' '}Fair 2026
                </h2>
              </div>

              <p className="text-blue-100 text-base lg:text-lg leading-relaxed font-light">
                A structured academic engagement platform connecting authorised Russian
                university delegates with Nepalese students for direct interaction,
                eligibility assessments, scholarship discussions, and transparent
                admission pathways.
              </p>

              <div className="pt-1 pb-6">
                <button className="inline-flex items-center justify-center bg-white text-[#1d428c] font-semibold text-base px-10 py-3 rounded-lg sm:rounded-xl hover:shadow-xl hover:scale-[1.03] transition-all duration-200 active:scale-95">
                  Apply Now
                </button>
              </div>
            </div>
          </div>

          {/* Right image column */}
          <div className="overflow-hidden relative">
            <div
              className="flex flex-col gap-3 px-3 pt-3 pb-3"
              style={{
                transform: `translateY(${offsetY * -0.25}px)`,
                transition: 'transform 0.1s linear',
                willChange: 'transform',
              }}
            >
              {imgRight.map((src, i) => (
                <img key={i} src={src} alt="Russia" className="w-full h-44 object-cover rounded-lg sm:rounded-xl" />
              ))}
            </div>
          </div>
        </div>

        {/* ── MOBILE LAYOUT: clean minimal ── */}
        <div className="md:hidden">

          {/* Staggered image strip */}
          <div className="flex gap-2.5 pt-7 pb-5 justify-center">
            <img
              src={imgLeft[0]}
              alt="Russia"
              className="w-[30%] h-32 object-cover rounded-xl mt-4 opacity-80"
            />
            <img
              src={imgLeft[1]}
              alt="Russia"
              className="w-[36%] h-40 object-cover rounded-xl"
            />
            <img
              src={imgRight[0]}
              alt="Russia"
              className="w-[30%] h-32 object-cover rounded-xl mt-4 opacity-80"
            />
          </div>

          {/* Text content */}
          <div className="text-center pb-9 px-2 space-y-4">
            <h2 className="text-[1.65rem] font-bold text-white leading-tight tracking-tight">
              Russia International
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 bg-white bg-clip-text text-transparent">
                  Education
                </span>
                <img
                  src="/images/underline.png"
                  alt=""
                  aria-hidden="true"
                  className="absolute -bottom-1.5 left-0 w-full"
                  style={{ height: '6px', objectFit: 'fill' }}
                />
              </span>
              {' '}Fair 2026
            </h2>

            <p className="text-blue-200/80 text-sm leading-relaxed max-w-xs mx-auto">
              Connecting authorised Russian university delegates with Nepalese students
              for direct interaction, eligibility assessments, and transparent admission pathways.
            </p>

            <div className="pt-2">
              <a href="/contact">
              <button className="inline-flex items-center justify-center bg-white text-[#1d428c] font-semibold text-sm px-9 py-2.5 rounded-lg sm:rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-200 active:scale-95">
                Apply Now
              </button>
              </a>
            </div>
          </div>

        </div>

      </div>

  );
};

export default Awaits;