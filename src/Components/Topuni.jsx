import React from 'react'

const Topuni = () => {
  // Array of image paths (replace with your actual image paths)
  const universities = [
    { id: 1, name: "Moscow State University", logo: "/images/university/img1.png" },
    { id: 2, name: "Saint Petersburg State University", logo: "/images/university/img2.png" },
    { id: 3, name: "Novosibirsk State University", logo: "/images/university/img3.png" },
    { id: 4, name: "Bauman Moscow State Technical University", logo: "/images/university/img4.png" },
    { id: 5, name: "Moscow Institute of Physics and Technology", logo: "/images/university/img5.png" },
    { id: 6, name: "National Research University Higher School of Economics", logo: "/images/university/img6.png" },
    { id: 7, name: "Tomsk State University", logo: "/images/university/img7.png" },
    { id: 8, name: "Ural Federal University", logo: "/images/university/img8.png" },
    { id: 9, name: "Kazan Federal University", logo: "/images/university/img9.png" },
    { id: 10, name: "Moscow State Institute of International Relations", logo: "/images/university/img10.png" },
    { id: 11, name: "ITMO University", logo: "/images/university/img11.png" },
    { id: 12, name: "RUDN University", logo: "/images/university/img12.png" },
    { id: 13, name: "Peter the Great St. Petersburg Polytechnic University", logo: "/images/university/img13.png" },
    { id: 14, name: "National University of Science and Technology MISIS", logo: "/images/university/img14.png" },
    { id: 15, name: "Siberian Federal University", logo: "/images/university/img15.png" },
    { id: 16, name: "Far Eastern Federal University", logo: "/images/university/img16.png" },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-8 sm:py-12 md:py-16 lg:py-24 text-center">
        {/* Title Section */}
        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 px-2'>
          Russia's 
          <span className='relative inline-block mx-2 font-bold'>
            Top Ranked 
            <img 
              src="/images/underline.png" 
              alt="" 
              className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 left-0 w-full h-2 sm:h-3 md:h-4"
            />
          </span> 
          Universities
        </h2>
        
        {/* Description */}
        <p className='text-sm sm:text-base md:text-lg lg:text-xl max-w-5xl mx-auto mb-8 sm:mb-10 md:mb-12 text-gray-600 px-3 sm:px-4'>
          Here are the top universities according to the QS World Rankings. Albatross is proud to partner with these esteemed institutions
        </p>

        {/* Compact Grid - Improved for mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 px-2 sm:px-0">
          {universities.map((uni) => (
            <div
              key={uni.id}
              className="bg-white rounded-md border border-gray-100 p-2 sm:p-3 md:p-4 hover:shadow-sm transition-shadow duration-200"
            >
              {/* Logo Container */}
              <div className="h-14 sm:h-16 md:h-20 mb-1 sm:mb-2 flex items-center justify-center">
                <img
                  src={uni.logo}
                  alt={uni.name}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              
              {/* University Name */}
              <p className="text-xs sm:text-sm md:text-base font-medium sm:font-semibold text-gray-700 text-center line-clamp-2 leading-tight sm:leading-normal">
                {uni.name}
              </p>
            </div>
          ))}
        </div>
        
        {/* View More Button */}
        <button className='text-sm sm:text-base md:text-lg hover:text-white hover:bg-[#1d428c] transition-all duration-200 mt-8 sm:mt-10 md:mt-12 px-4 sm:px-5 py-2 sm:py-2.5 rounded-md border border-[#1d428c] text-[#1d428c] font-medium'>
          <a href="https://www.topuniversities.com/world-university-rankings?countries=ru">View More</a>
        </button>
      </div>
    </>
  )
}

export default Topuni