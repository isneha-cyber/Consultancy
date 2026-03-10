// import React, { useState } from 'react';
// import {
//   GraduationCap,
//   DollarSign,
//   BookOpen,
//   FlaskConical,
//   Stethoscope,
//   Globe,
//   ChevronRight,
//   Users,
//   Award,
//   Building2,
//   MapPin,
// } from 'lucide-react';

// // ─── Data ──────────────────────────────────────────────────────────────────────

// const reasons = [
//   {
//     Icon: GraduationCap,
//     title: 'Globally Recognized Degrees',
//     desc: 'Russian university degrees are recognized by UNESCO, WHO, and academic bodies worldwide, ensuring your qualification holds value across borders.',
//     color: 'bg-blue-50 text-[#1d428c]',
//   },
//   {
//     Icon: DollarSign,
//     title: 'Affordable Tuition Structures',
//     desc: 'Study at world-class institutions at a fraction of the cost compared to Western universities, with annual tuition starting as low as $2,000–$5,000.',
//     color: 'bg-green-50 text-green-700',
//   },
//   {
//     Icon: BookOpen,
//     title: 'English-Medium Programs',
//     desc: 'Hundreds of programs across medicine, engineering, and business are fully taught in English, removing the language barrier for international students.',
//     color: 'bg-purple-50 text-purple-700',
//   },
//   {
//     Icon: FlaskConical,
//     title: 'Advanced Research Infrastructure',
//     desc: 'Access cutting-edge laboratories and research centers at institutions ranked among the world\'s top universities for STEM disciplines.',
//     color: 'bg-orange-50 text-orange-700',
//   },
//   {
//     Icon: Stethoscope,
//     title: 'Strong Medical & Technical Education',
//     desc: 'Russia\'s medical and engineering faculties are globally acclaimed, producing thousands of successful professionals recognized internationally each year.',
//     color: 'bg-red-50 text-red-700',
//   },
//   {
//     Icon: Globe,
//     title: 'Multicultural Student Environment',
//     desc: 'Study alongside peers from 150+ countries in a vibrant, inclusive environment that fosters global perspective and cross-cultural collaboration.',
//     color: 'bg-teal-50 text-teal-700',
//   },
// ];

// const stats = [
//   { value: '740+', label: 'Universities', icon: Building2 },
//   { value: '250K+', label: 'Int\'l Students', icon: Users },
//   { value: '95%', label: 'WHO Recognized', icon: Award },
//   { value: '150+', label: 'Countries Represented', icon: MapPin },
// ];

// const popularCourses = [
//   { name: 'MBBS / Medicine', icon: '🏥', seats: 'High Availability' },
//   { name: 'Engineering', icon: '⚙️', seats: 'High Availability' },
//   { name: 'Computer Science', icon: '💻', seats: 'High Availability' },
//   { name: 'Dentistry', icon: '🦷', seats: 'Limited Seats' },
//   { name: 'Pharmacy', icon: '💊', seats: 'High Availability' },
//   { name: 'Business & MBA', icon: '📊', seats: 'High Availability' },
// ];

// const topUniversities = [
//   { name: 'Lomonosov Moscow State University', rank: 'QS #87', location: 'Moscow', img: 'https://images.unsplash.com/photo-1563699262547-b43cda4e3420?w=400&h=250&fit=crop' },
//   { name: 'St. Petersburg State University', rank: 'QS #242', location: 'St. Petersburg', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop' },
//   { name: 'Peoples\' Friendship University', rank: 'Top Medical', location: 'Moscow', img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=250&fit=crop' },
//   { name: 'Kazan Federal University', rank: 'QS #392', location: 'Kazan', img: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=400&h=250&fit=crop' },
// ];

// const steps = [
//   { num: '01', title: 'Free Consultation', desc: 'Meet with our Russia education specialists to assess your profile and goals.' },
//   { num: '02', title: 'University Shortlisting', desc: 'We match you with the best-fit universities based on your course, budget, and eligibility.' },
//   { num: '03', title: 'Application & Admission', desc: 'We handle documentation, applications, and secure your official admission letter.' },
//   { num: '04', title: 'Visa & Pre-Departure', desc: 'Full visa guidance with a 99% success rate, plus travel and accommodation support.' },
// ];

// // ─── Component ─────────────────────────────────────────────────────────────────

// export default function WhyRussia() {
//   const [activeTab, setActiveTab] = useState('All');
//   const tabs = ['All', 'Medical', 'Engineering', 'Business'];

//   return (
//     <div className="font-sans text-gray-800 bg-white">

//       {/* ── INNER HERO ── */}
//       <section
//         className="w-full pt-8 pb-0 bg-no-repeat bg-center bg-contain"
//         style={{ background: 'linear-gradient(135deg, #eaf0fb 0%, #f7f9ff 60%, #dce8f8 100%)' }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
//           <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 min-h-[320px] sm:min-h-[380px] lg:min-h-[420px]">

//             {/* Left — text */}
//             <div className="flex-1 space-y-6 py-10 lg:py-14 text-center lg:text-left">
//               <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
//                 <span className="text-[#1d428c]">Study in Russia:</span>{' '}
//                 Unlock Global Opportunities
//               </h1>
//               <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
//                 <button className="bg-[#1d428c] text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-md hover:bg-[#162f6b] hover:shadow-lg transition-all duration-200 text-sm sm:text-base">
//                   Free Expert Consultation
//                 </button>
//                 <button className="border-2 border-[#1d428c] text-[#1d428c] font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-md hover:bg-[#1d428c] hover:text-white transition-all duration-200 text-sm sm:text-base">
//                   View &amp; Download Brochure
//                 </button>
//               </div>
//             </div>

//             {/* Right — image */}
//             <div className="flex-shrink-0 w-full lg:w-[48%] flex items-end justify-center lg:justify-end">
//               <img
//                 src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=700&h=500&fit=crop"
//                 alt="Study in Russia"
//                 className="w-full max-w-sm sm:max-w-md lg:max-w-full object-contain drop-shadow-xl"
//                 style={{ maxHeight: '420px' }}
//               />
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* ── STATS BAR ── */}
//       <section className="bg-[#1d428c] py-5 sm:py-6">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 sm:divide-x sm:divide-white/20">
//             {stats.map(({ value, label, icon: Icon }) => (
//               <div key={label} className="flex items-center justify-center gap-3 py-1 sm:px-6">
//                 <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center shrink-0">
//                   <Icon size={17} className="text-white" />
//                 </div>
//                 <div>
//                   <p className="text-white font-bold text-lg sm:text-2xl leading-none">{value}</p>
//                   <p className="text-blue-200 text-xs mt-0.5">{label}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── WHY STUDY REASONS GRID ── */}
//       <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12 sm:mb-16 space-y-3">
//             <span className="text-[#1d428c] text-sm font-semibold tracking-widest uppercase">Reasons to Choose Russia</span>
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
//               6 Compelling Reasons to<br className="hidden sm:block" />
//               <span className="text-[#1d428c]"> Study in Russia</span>
//             </h2>
//             <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
//               From affordable degrees to globally respected qualifications, Russia offers a complete package for ambitious students.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
//             {reasons.map(({ Icon, title, desc, color }, i) => (
//               <div
//                 key={i}
//                 className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
//               >
//                 <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${color}`}>
//                   <Icon size={22} />
//                 </div>
//                 <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#1d428c] transition-colors duration-200">
//                   {title}
//                 </h3>
//                 <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── POPULAR COURSES ── */}
//       <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-16 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
//             <div className="space-y-2">
//               <span className="text-[#1d428c] text-sm font-semibold tracking-widest uppercase">What You Can Study</span>
//               <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Popular Courses in Russia</h2>
//             </div>
//             {/* Tab filters */}
//             <div className="flex gap-2 flex-wrap">
//               {tabs.map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
//                     activeTab === tab
//                       ? 'bg-[#1d428c] text-white'
//                       : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
//                   }`}
//                 >
//                   {tab}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
//             {popularCourses.map(({ name, icon, seats }) => (
//               <div
//                 key={name}
//                 className="border-2 border-gray-100 hover:border-[#1d428c] rounded-2xl p-4 sm:p-5 text-center cursor-pointer group transition-all duration-200 hover:shadow-md"
//               >
//                 <div className="text-3xl sm:text-4xl mb-3">{icon}</div>
//                 <p className="text-gray-800 font-semibold text-sm leading-snug group-hover:text-[#1d428c] transition-colors">{name}</p>
//                 <span className={`inline-block mt-2 text-xs px-2 py-0.5 rounded-full font-medium ${
//                   seats === 'Limited Seats'
//                     ? 'bg-red-50 text-red-600'
//                     : 'bg-green-50 text-green-700'
//                 }`}>
//                   {seats}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── TOP UNIVERSITIES ── */}
//       <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12 space-y-3">
//             <span className="text-[#1d428c] text-sm font-semibold tracking-widest uppercase">Where You'll Study</span>
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
//               Top Universities in Russia
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
//             {topUniversities.map(({ name, rank, location, img }) => (
//               <div key={name} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
//                 <div className="relative h-40 overflow-hidden">
//                   <img src={img} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
//                   <span className="absolute top-3 left-3 bg-[#1d428c] text-white text-xs font-semibold px-3 py-1 rounded-full">
//                     {rank}
//                   </span>
//                 </div>
//                 <div className="p-4 sm:p-5">
//                   <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-snug mb-1 group-hover:text-[#1d428c] transition-colors">
//                     {name}
//                   </h3>
//                   <div className="flex items-center gap-1 text-gray-400 text-xs">
//                     <MapPin size={11} />
//                     <span>{location}</span>
//                   </div>
//                   <button className="mt-4 w-full text-[#1d428c] border border-[#1d428c] rounded-lg py-1.5 text-xs font-semibold hover:bg-[#1d428c] hover:text-white transition-all duration-200">
//                     Learn More
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-10">
//             <button className="inline-flex items-center gap-2 text-[#1d428c] border-2 border-[#1d428c] px-7 py-3 rounded-full font-semibold hover:bg-[#1d428c] hover:text-white transition-all duration-200 text-sm sm:text-base">
//               View All Universities
//               <ChevronRight size={16} />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* ── HOW IT WORKS ── */}
//       <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-16 bg-[#1d428c]">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12 sm:mb-16 space-y-3">
//             <span className="text-blue-200 text-sm font-semibold tracking-widest uppercase">Simple Process</span>
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
//               4 Steps to Studying in Russia
//             </h2>
//             <p className="text-blue-100 text-base sm:text-lg max-w-xl mx-auto">
//               From consultation to landing in Russia — we handle every step of your journey.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
//             {steps.map(({ num, title, desc }) => (
//               <div key={num} className="relative bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8 group hover:bg-white/15 transition-all duration-300">
//                 <span className="text-5xl sm:text-6xl font-black text-white/10 absolute top-4 right-5 select-none leading-none">
//                   {num}
//                 </span>
//                 <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-5">
//                   <span className="text-white font-bold text-sm">{num}</span>
//                 </div>
//                 <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
//                 <p className="text-blue-100 text-sm leading-relaxed">{desc}</p>
//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <button className="bg-white text-[#1d428c] font-bold px-8 py-3.5 rounded-full hover:shadow-xl hover:scale-[1.02] transition-all duration-200 text-sm sm:text-base">
//               Start Your Application
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* ── CTA BANNER ── */}
//       <section className="py-14 sm:py-16 px-4 sm:px-6 lg:px-16 bg-white border-t border-gray-100">
//         <div className="max-w-4xl mx-auto text-center space-y-5">
//           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
//             Ready to Begin Your Russia Journey?
//           </h2>
//           <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
//             Talk to our expert counselors today — free consultation, no obligations.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-3 justify-center">
//             <button className="bg-[#1d428c] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#162f6b] hover:shadow-lg transition-all duration-200 text-sm sm:text-base">
//               Book Free Consultation
//             </button>
//             <button className="border-2 border-[#1d428c] text-[#1d428c] px-8 py-3 rounded-full font-semibold hover:bg-[#1d428c] hover:text-white transition-all duration-200 text-sm sm:text-base">
//               Download Brochure
//             </button>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// }

import React from 'react'
import Hero2 from '../Components/Hero2'
import Study from '../Components/Study'
import UniversityPartnerships from '../Components/Partners'
import Courses from '../Components/Courses'

const StudyInRussia = () => {
  return (
    <div>
      <Hero2/>
      <Study/>
      <UniversityPartnerships/>
      <Courses/>
    </div>
  )
}

export default StudyInRussia
