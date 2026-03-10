import React from 'react';

export default function StatsBanner() {
  const stats = [
    {
      value: "500+",
      label: "Students Placed"
    },
    {
      value: "50+",
      label: "Partner Universities"
    },
    {
      value: "99%",
      label: "Visa Success Rate"
    },
    {
      value: "Free",
      label: "End-to-End Support"
    },
    {
      value: "Best",
      label: "SOP Writers"
    }
  ];

  return (
    <div className="py-8 sm:py-12 flex items-center justify-center px-4 sm:px-6 lg:px-24">
      <div className="w-full">
        <div className="bg-[#e8edf4] rounded-2xl sm:rounded-[2rem] lg:rounded-[3rem] p-3 sm:p-5 lg:p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`flex flex-col items-center justify-center text-center p-3 sm:p-4 lg:p-6 relative 
                           ${index >= 2 ? 'col-span-1' : ''}
                           md:after:absolute md:after:right-0 md:after:top-1/2 md:after:-translate-y-1/2 
                           md:after:h-12 md:after:w-px md:after:bg-gray-300
                           md:last:after:hidden
                           ${index === 4 ? 'col-span-2 sm:col-span-1' : ''}`}
              >
                <div className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1d438d] mb-1 sm:mb-2 lg:mb-3">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base lg:text-lg xl:text-xl font-medium text-gray-800 whitespace-nowrap sm:whitespace-normal">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}