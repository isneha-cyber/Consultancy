import React from 'react'

const services = [
  {
    title: "Career Counselling & University Selection",
    description: "Personalized academic advisory based on academic profile, budget planning, and career goals.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80",
  },
  {
    title: "Admission Processing",
    description: "Document verification, university application submission, offer letter coordination, and admission confirmation.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
  },
  {
    title: "Visa Documentation & Guidance",
    description: "Comprehensive visa application assistance, checklist preparation, and interview readiness.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
  },
  {
    title: "Scholarship & Financial Advisory",
    description: "Guidance on tuition structures, scholarship opportunities, and bank-compliant documentation.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
  },
  {
    title: "Pre-Departure Support",
    description: "Orientation covering travel, accommodation, compliance, and post-arrival protocols.",
    image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&q=80",
  },
  {
    title: "Scholarship & Financial Advisory",
    description: "Guidance on tuition structures, scholarship opportunities, and bank-compliant documentation.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
  },
]

const StudentServices = () => {
  return (
    <div className="bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-8 lg:px-24">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
        {services.map((service, index) => {
          const isLastOdd = services.length % 2 !== 0 && index === services.length - 1
          return (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col ${isLastOdd ? 'sm:col-span-2 sm:max-w-md sm:mx-auto w-full' : ''}`}
            >
              {/* Image */}
              <div className="overflow-hidden rounded-xl m-3" style={{ height: '220px' }}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Content */}
              <div className="px-5 pb-5 flex flex-col flex-1">
                <h2 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h2>
                <p className="text-sm text-gray-600 leading-relaxed text-justify flex-1">
                  {service.description}
                </p>
                <div className="mt-4">
                  <button className="border border-gray-300 text-gray-700 text-sm px-4 py-2 rounded-md hover:bg-gray-50 transition-colors">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default StudentServices