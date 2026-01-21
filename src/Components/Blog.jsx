import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Blog = () => {
  const blog = [
    {
      id: 1,
      title: 'MBBS vs. MD: Understanding Key Differences in Medical Degrees',
      image: '/images/c1.webp',
    },
    {
      id: 2,
      title: "Top Russian Cities Every MBBS Student Must Know",
      image: '/images/c2.webp',
    },
    {
      id: 3,
      title: "Top 10 Part-Time Jobs in Russia for Indian Students in 2025-26",
      image: '/images/c3.webp',
    },
   
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto py-12 sm:py-24 text-center">
        <h2 className='text-3xl sm:text-4xl lg:text-5xl mb-8 sm:mb-12'>
          Trending <span className='relative inline-block mx-2 font-bold'>Insights & Blogs
            <img 
              src="/images/underline.png" 
              alt="" 
              className="absolute -bottom-4 left-0 w-full h-4"
            />
          </span>
        </h2>
        
        {/* Desktop/Tablet Grid View */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blog.map((blogItem) => (
            <div
              key={blogItem.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-48 sm:h-52 md:h-56 lg:h-60 overflow-hidden">
                <img
                  src={blogItem.image}
                  alt={blogItem.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
              
              <div className="p-5 sm:p-6 md:p-7">
                <h3 className="font-semibold text-gray-900 text-lg sm:text-xl md:text-xl lg:text-2xl mb-4 line-clamp-2 min-h-[3.5rem]">
                  {blogItem.title}
                </h3>
                <button className="w-full py-3 bg-[#1d428c] text-white text-base sm:text-lg rounded-xl font-semibold hover:bg-[#153266] transition-all duration-300 hover:shadow-lg">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider View */}
        <div className="md:hidden relative px-2 sm:px-4">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1.1}
            centeredSlides={false}
            grabCursor={true}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              480: {
                slidesPerView: 1.3,
                spaceBetween: 24,
              },
              640: {
                slidesPerView: 1.8,
                spaceBetween: 24,
              },
            }}
            className="pb-12"
          >
            {blog.map((blogItem) => (
              <SwiperSlide key={blogItem.id}>
                <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-lg h-full">
                  <div className="relative h-56 sm:h-60 overflow-hidden rounded-t-2xl">
                    <img
                      src={blogItem.image}
                      alt={blogItem.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>
                  
                  <div className="p-5 sm:p-6">
                    <h3 className="font-semibold text-gray-900 text-lg sm:text-xl mb-4 line-clamp-2 min-h-[3.5rem]">
                      {blogItem.title}
                    </h3>
                    <button className="w-full py-3 bg-[#1d428c] text-white text-base rounded-xl font-semibold hover:bg-[#153266] transition-all duration-300 active:scale-95">
                      Learn More
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev !hidden sm:!flex !w-10 !h-10 !bg-white !rounded-full !shadow-lg !text-[#1d428c] after:!text-lg !top-[40%] !left-2"></div>
          <div className="swiper-button-next !hidden sm:!flex !w-10 !h-10 !bg-white !rounded-full !shadow-lg !text-[#1d428c] after:!text-lg !top-[40%] !right-2"></div>
          
          {/* Custom Pagination Style */}
          <style jsx>{`
            :global(.swiper-pagination-bullet) {
              background: #d1d5db;
              opacity: 1;
              width: 8px;
              height: 8px;
            }
            :global(.swiper-pagination-bullet-active) {
              background: #1d428c;
              width: 24px;
              border-radius: 4px;
            }
          `}</style>
        </div>

        {/* Load More Button for Mobile */}
        <div className="mt-8 ">
          <button className="px-8 py-3 bg-[#1d428c] text-white rounded-xl font-semibold hover:bg-[#153266] transition-all duration-300">
            View All Blogs
          </button>
        </div>
      </div>
    </>
  );
};

export default Blog;