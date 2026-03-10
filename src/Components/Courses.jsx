import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'MBBS',
      image: '/images/c1.webp',
    },
    {
      id: 2,
      title: "Master's in Space Science",
      image: '/images/c2.webp',
    },
    {
      id: 3,
      title: "Bachelor's in Nanotechnology and Materials Science",
      image: '/images/c3.webp',
    },
    {
      id: 4,
      title: "Master's in Petroleum Engineering",
      image: '/images/c4.webp',
    },
    {
      id: 5,
      title: "Bachelor's in Robotics and Automation",
      image: '/images/c5.webp',
    },
  ];

  return (
    <>
      <div className="py-12 sm:py-24 px-4 sm:px-6 lg:px-24 text-center">
        {/* Fixed Title Section */}
        <div className="mb-8 sm:mb-12">
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-medium'>
            <span className="inline-block">
              Discover
              <span className='relative inline-block mx-2 sm:mx-3 font-bold text-[#1d428c]'>
                Trending Courses
                <img 
                  src="/images/underline.png" 
                  alt="" 
                  className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3 sm:h-4"
                  style={{ transform: 'translateY(2px)' }}
                />
              </span>
              in Russia
            </span>
          </h2>
        </div>

        {/* Mobile Slider (hidden on medium screens and above) */}
        <div className="block md:hidden relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1.1}
            centeredSlides={false}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            breakpoints={{
              375: {
                slidesPerView: 1.2,
                spaceBetween: 16,
              },
              480: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1.8,
                spaceBetween: 20,
              },
            }}
            className="courses-swiper pb-12"
          >
            {courses.map((course) => (
              <SwiperSlide key={course.id}>
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg h-full mx-2">
                  <div className="relative h-48 sm:h-52 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                  </div>
                  
                  <div className="p-5">
                    <h3 className="font-semibold text-gray-900 text-lg mb-3 line-clamp-2">
                      {course.title}
                    </h3>
                    
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation Arrows - Hidden by default, shown on larger mobile */}
          <div className="hidden sm:flex justify-center items-center gap-4 mt-6">
            <button className="custom-prev w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#1d428c] border border-gray-300 shadow-md hover:shadow-lg transition-shadow duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="custom-next w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#1d428c] border border-gray-300 shadow-md hover:shadow-lg transition-shadow duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Custom CSS for slider controls */}
          <style jsx>{`
            .courses-swiper {
              padding-bottom: 40px;
            }
            .courses-swiper :global(.swiper-pagination) {
              bottom: 0;
            }
            .courses-swiper :global(.swiper-pagination-bullet) {
              background-color: #1d428c;
              opacity: 0.3;
              width: 8px;
              height: 8px;
            }
            .courses-swiper :global(.swiper-pagination-bullet-active) {
              opacity: 1;
              width: 24px;
              border-radius: 4px;
            }
            
            /* Hide default Swiper navigation on mobile */
            .courses-swiper :global(.swiper-button-next),
            .courses-swiper :global(.swiper-button-prev) {
              display: none;
            }
            
            /* Show custom navigation on larger screens */
            @media (min-width: 640px) {
              .courses-swiper :global(.swiper-pagination) {
                bottom: 20px;
              }
            }
          `}</style>
        </div>

        {/* Desktop Grid (hidden on mobile) */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 mt-12">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-52 md:h-56 lg:h-60 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </div>
              
              <div className="p-5 md:p-4">
                <h3 className="font-semibold text-gray-900 text-lg md:text-xl mb-3 line-clamp-2">
                  {course.title}
                </h3>
            
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Courses;