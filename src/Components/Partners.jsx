import { useState, useRef } from "react";

const features = [
  {
    number: "01",
    title: "Regional Outreach",
    desc: "Targeted awareness campaigns across Nepal and South Asia through education fairs, school visits, and community engagement programs that put your institution in front of qualified prospective students.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 256 256" fill="currentColor">
        <path d="M128,16a112,112,0,1,0,112,112A112.12,112.12,0,0,0,128,16Zm87.63,96H175.8a172.57,172.57,0,0,0-23.54-84.29A96.28,96.28,0,0,1,215.63,112ZM128,216a157.63,157.63,0,0,1-28.63-84H156.63A157.63,157.63,0,0,1,128,216Zm-28.63-100A157.63,157.63,0,0,1,128,32a157.63,157.63,0,0,1,28.63,84ZM103.74,27.71A172.57,172.57,0,0,0,80.2,112H40.37A96.28,96.28,0,0,1,103.74,27.71ZM40.37,128H80.2a172.57,172.57,0,0,0,23.54,84.29A96.28,96.28,0,0,1,40.37,128Zm111.89,84.29A172.57,172.57,0,0,0,175.8,128h39.83A96.28,96.28,0,0,1,152.26,212.29Z"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Delegate Representation",
    desc: "Our trained regional delegates represent your university at key touchpoints — counselling centres, education expos, and institutional meetings — maintaining consistent brand presence year-round.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 256 256" fill="currentColor">
        <path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,1.1-8.67,24,24,0,1,0-36.72,0,8,8,0,0,1-6.27,13.56A51.65,51.65,0,0,0,101.6,148.8a8,8,0,1,1-12.8-9.6A67.88,67.88,0,0,1,128,117.71a40,40,0,1,1,48,0,67.88,67.88,0,0,1,39.2,21.49A8,8,0,0,1,244.8,150.4ZM192,232a8,8,0,0,1-8,8H72a8,8,0,0,1-8-8,64,64,0,0,1,128,0Z"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Targeted Student Screening",
    desc: "We pre-qualify applicants through academic assessments, interviews, and profile reviews — delivering your admissions team only students who meet your specific entry requirements and institutional standards.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 256 256" fill="currentColor">
        <path d="M229.66,218.34l-50.07-50.07a88.21,88.21,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.31ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Recruitment Coordination",
    desc: "End-to-end coordination from initial inquiry through enrollment — application management, document verification, offer letter follow-up, and visa guidance handled by our experienced support team.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 256 256" fill="currentColor">
        <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-40-96a8,8,0,0,1-8,8H104a8,8,0,0,1,0-16h48A8,8,0,0,1,160,120Zm0,32a8,8,0,0,1-8,8H104a8,8,0,0,1,0-16h48A8,8,0,0,1,160,152Zm0,32a8,8,0,0,1-8,8H104a8,8,0,0,1,0-16h48A8,8,0,0,1,160,184Z"/>
      </svg>
    ),
  },
];

const stats = [
  { value: "170+", label: "Countries Represented" },
  { value: "12+", label: "Years of Experience" },
  { value: "5000+", label: "Students Placed" },
  { value: "98%", label: "Visa Success Rate" },
];

export default function UniversityPartnerships() {
  const [form, setForm] = useState({ university: "", name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, offsetWidth } = sliderRef.current;
    setActiveSlide(Math.round(scrollLeft / offsetWidth));
  };

  const scrollTo = (index) => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollTo({ left: index * sliderRef.current.offsetWidth, behavior: "smooth" });
    setActiveSlide(index);
  };

  return (
    <section className="bg-white" style={{ fontFamily: "'Poppins', sans-serif" }}>

      {/* ── Hero Banner ── */}
      <div className="relative bg-[#1d438d] overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white opacity-[0.04]" />
        <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full bg-white opacity-[0.04]" />
        <div className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full bg-white opacity-[0.03]" />

        <div className="relative px-4 sm:px-8 lg:px-16 xl:px-24 py-12 sm:py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 sm:mb-5">
              University
              <span className="block text-blue-200">Partnerships</span>
            </h1>
            <p className="text-blue-100 text-sm sm:text-base md:text-xl leading-relaxed max-w-2xl">
              We offer structured collaboration models for universities seeking long-term student recruitment engagement within South Asia. Our partnerships built on transparency, reach, and results.
            </p>
          </div>
        </div>
      </div>

      

      {/* ── Main Content ── */}
      <div className="px-4 sm:px-8 lg:px-16 xl:px-24 pt-10 sm:pt-14 md:pt-20 pb-16 sm:pb-20">

        {/* Section intro */}
        <div className="max-w-2xl mb-8 sm:mb-12 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#231f20] mb-3 sm:mb-4 leading-tight">
            Our Collaboration
            <span className="relative ml-2 inline-block text-[#1d438d]">
              Framework
              <img src="/images/underline.png" alt="" className="w-full h-[6px] md:h-[8px] mt-1 block" />
            </span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed">
            Four pillars that make our university partnerships effective, transparent, and built for long-term success across the South Asian market.
          </p>
        </div>

        {/* ── MOBILE SLIDER (hidden on sm+) ── */}
        <div className="sm:hidden">
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {features.map((f, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[85vw] snap-center relative bg-white rounded-2xl border border-[#e0eaf6] p-6 overflow-hidden"
                style={{ boxShadow: "0 4px 20px rgba(29,67,141,0.09)" }}
              >
                {/* Watermark number */}
                <span className="absolute top-3 right-4 text-7xl font-black text-[#1d438d] opacity-[0.04] select-none leading-none">
                  {f.number}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#eaf0f8] text-[#1d438d] flex items-center justify-center mb-4">
                  {f.icon}
                </div>

                {/* Number pill */}
                <span className="inline-block text-xs font-bold tracking-widest text-[#1d438d] bg-[#eaf0f8] px-2.5 py-1 rounded-full mb-3">
                  {f.number}
                </span>

                <h3 className="text-[#231f20] font-bold text-lg mb-2 leading-snug">
                  {f.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {features.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  activeSlide === i
                    ? "w-6 h-2 bg-[#1d438d]"
                    : "w-2 h-2 bg-[#bfd0e3]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ── DESKTOP GRID (hidden below sm) ── */}
        <div className="hidden sm:grid grid-cols-2 gap-6 xl:gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl border border-[#e0eaf6] p-7 sm:p-8 hover:border-[#1d438d] hover:shadow-[0_8px_32px_rgba(29,67,141,0.12)] transition-all duration-300 overflow-hidden"
            >
              <span className="absolute top-4 right-5 text-7xl font-black text-[#1d438d] opacity-[0.04] select-none leading-none">
                {f.number}
              </span>

              <div className="w-14 h-14 rounded-xl bg-[#eaf0f8] text-[#1d438d] flex items-center justify-center mb-5 group-hover:bg-[#1d438d] group-hover:text-white transition-colors duration-300">
                {f.icon}
              </div>

              <span className="inline-block text-xs font-bold tracking-widest text-[#1d438d] bg-[#eaf0f8] px-2.5 py-1 rounded-full mb-3">
                {f.number}
              </span>

              <h3 className="text-[#231f20] font-bold text-lg sm:text-xl mb-3 leading-snug">
                {f.title}
              </h3>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}