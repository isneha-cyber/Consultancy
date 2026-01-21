import React from 'react';

export default function StatsBanner() {
  const stats = [
    {
      value: "150+",
      label: "Experienced Counsellor"
    },
    {
      value: "5+ Years",
      label: "Average Experience"
    },
    {
      value: "99%",
      label: "Visa Success Rate"
    },
    {
      value: "Unlimited",
      label: "Follow Ups"
    },
    {
      value: "Best",
      label: "SOP Writers"
    }
  ];

  return (
    <div className="py-12  flex items-center justify-center ">
      <div className="w-full max-w-7xl">
        <div className="bg-[#e8edf4] rounded-3xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="flex flex-col items-center justify-center text-center p-6 relative 
                           md:after:absolute md:after:right-0 md:after:top-1/2 md:after:-translate-y-1/2 
                           md:after:h-12 md:after:w-px md:after:bg-gray-300
                           last:after:hidden"
              >
                <div className="text-4xl font-bold text-[#1d438d] mb-3">
                  {stat.value}
                </div>
                <div className="text-xl font-medium text-gray-800">
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