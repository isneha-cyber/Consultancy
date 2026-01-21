import React, { useState, useEffect, useRef } from 'react'

const Awaits = () => {
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = -rect.top;
        setOffsetY(scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Main section with parallax */}
      <div ref={sectionRef} className="relative bg-[#1d428c] overflow-hidden">
        {/* Desktop left decorative image with parallax */}
        <div 
          className="hidden md:block absolute left-0 top-0 w-32 sm:w-48 md:w-56 lg:w-72 space-y-4 pointer-events-none"
          style={{
            transform: `translateY(${offsetY * 0.3}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1513326738677-b964603b136d?w=500&h=700&fit=crop" 
            alt="Russian architecture" 
            className="w-full h-80 object-cover "
          />
          <img 
            src="https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=500&h=700&fit=crop" 
            alt="Moscow landmarks" 
            className="w-full h-80 object-cover "
          />
          <img 
            src="https://images.unsplash.com/photo-1513326738677-b964603b136d?w=500&h=700&fit=crop" 
            alt="Russian architecture" 
            className="w-full h-80 object-cover "
          />
        </div>

        {/* Desktop right decorative image with parallax */}
        <div 
          className="hidden md:block absolute right-0 top-0 w-32 sm:w-48 md:w-56 lg:w-72 space-y-4 pointer-events-none"
          style={{
            transform: `translateY(${offsetY * -0.3}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=500&h=700&fit=crop" 
            alt="Moscow landmarks" 
            className="w-full h-80 object-cover "
          />
          <img 
            src="https://images.unsplash.com/photo-1513326738677-b964603b136d?w=500&h=700&fit=crop" 
            alt="Russian architecture" 
            className="w-full h-80 object-cover "
          />
          <img 
            src="https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=500&h=700&fit=crop" 
            alt="Moscow landmarks" 
            className="w-full h-80 object-cover "
          />
        </div>

        {/* Mobile Top Images */}
        <div className="md:hidden">
          <div className="flex justify-center space-x-2 sm:space-x-4 pt-6 sm:pt-8 px-4">
            <div className="w-1/3 sm:w-1/4">
              <img 
                src="https://images.unsplash.com/photo-1513326738677-b964603b136d?w=500&h=700&fit=crop" 
                alt="Russian architecture" 
                className="w-full h-40 sm:h-48 object-cover "
              />
            </div>
            <div className="w-1/3 sm:w-1/4 transform translate-y-4">
              <img 
                src="https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=500&h=700&fit=crop" 
                alt="Moscow landmarks" 
                className="w-full h-44 sm:h-52 object-cover "
              />
            </div>
            <div className="w-1/3 sm:w-1/4">
              <img 
                src="https://images.unsplash.com/photo-1513326738677-b964603b136d?w=500&h=700&fit=crop" 
                alt="Russian architecture" 
                className="w-full h-40 sm:h-48 object-cover "
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative max-w-7xl mx-auto py-8 sm:py-12 md:py-24 px-4 sm:px-6 z-10 flex items-center min-h-[70vh] md:min-h-screen">
          <div className="text-center space-y-4 sm:space-y-6 lg:space-y-8 w-full">
            {/* Main heading */}
            <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl md:max-w-xl md:mx-auto font-bold text-white px-2'>
              Your Dream Study{' '}
              <span className='relative inline-block mx-1 sm:mx-2'>
                <span className='relative z-10 bg-white bg-clip-text text-transparent'>
                  Destination
                </span>
                <img 
                  className='absolute -bottom-2 sm:-bottom-3 md:-bottom-4 lg:-bottom-5 left-0 w-full' 
                  src="/images/underline.png" 
                  alt="underline decoration" 
                />
              </span>
              {' '}Awaits
            </h2>
            
            {/* Description */}
            <p className='text-blue-50 text-sm sm:text-base md:text-lg lg:text-xl md:max-w-2xl md:mx-auto max-w-3xl mx-auto leading-relaxed font-light px-2 sm:px-4 lg:px-6'>
              Learn all about the country's top universities, scholarships, cost of living, 
              post-study work rights and more from the finest foreign education consultants 
              in the industry!
            </p>
            
            {/* CTA button */}
            <div className="pt-2 sm:pt-4 md:pt-6">
              <button className='inline-flex items-center justify-center bg-white text-[#1d428c] font-semibold text-sm sm:text-base md:text-lg px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 active:scale-95'>
                Apply Now
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Bottom Images */}
        <div className="md:hidden">
          <div className="flex justify-center space-x-2 sm:space-x-4 pb-6 sm:pb-8 px-4">
            <div className="w-1/3 sm:w-1/4">
              <img 
                src="https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=500&h=700&fit=crop" 
                alt="Moscow landmarks" 
                className="w-full h-40 sm:h-48 object-cover "
              />
            </div>
            <div className="w-1/3 sm:w-1/4 transform -translate-y-4">
              <img 
                src="https://images.unsplash.com/photo-1513326738677-b964603b136d?w=500&h=700&fit=crop" 
                alt="Russian architecture" 
                className="w-full h-44 sm:h-52 object-cover "
              />
            </div>
            <div className="w-1/3 sm:w-1/4">
              <img 
                src="https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=500&h=700&fit=crop" 
                alt="Moscow landmarks" 
                className="w-full h-40 sm:h-48 object-cover "
              />
            </div>
          </div>
          
          {/* Additional decorative element for mobile */}
          <div className="flex justify-center pb-8">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Awaits