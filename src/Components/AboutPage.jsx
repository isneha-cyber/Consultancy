import { useState, useRef } from "react";

// ─── 1. HERO BANNER ───────────────────────────────────────────────────────────
export function AboutHero() {
  return (
    <div className="relative bg-[#1d438d] overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white opacity-[0.04]" />
      <div className="absolute -bottom-12 -left-12 w-72 h-72 rounded-full bg-white opacity-[0.04]" />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-white opacity-[0.03]" />

      <div className="relative px-4 sm:px-8 lg:px-16 xl:px-24 py-16 sm:py-20 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left */}
          <div className="flex-1">
            <p
              className="text-blue-200 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              About Albatross Insights
            </p>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Explore Albatross:{" "}
              <span className="block text-blue-200">Who We Are</span>
            </h1>
            <p
              className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-xl mb-8"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Albatross Insights Private Limited operates with a commitment to
              ethical advisory practices, regulatory compliance, and long-term
              academic partnerships.
            </p>
            <a
              href="#"
              className="inline-block bg-white text-[#1d438d] font-semibold text-sm sm:text-base px-7 py-3.5 rounded-lg hover:bg-blue-50 transition-colors duration-300"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Free Expert Consultation
            </a>
          </div>

          {/* Right — decorative card */}
          <div className="flex-shrink-0 w-full max-w-xs lg:max-w-sm">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256" fill="white">
                  <path d="M128,16a112,112,0,1,0,112,112A112.12,112.12,0,0,0,128,16Zm87.63,96H175.8a172.57,172.57,0,0,0-23.54-84.29A96.28,96.28,0,0,1,215.63,112ZM128,216a157.63,157.63,0,0,1-28.63-84H156.63A157.63,157.63,0,0,1,128,216Zm-28.63-100A157.63,157.63,0,0,1,128,32a157.63,157.63,0,0,1,28.63,84ZM103.74,27.71A172.57,172.57,0,0,0,80.2,112H40.37A96.28,96.28,0,0,1,103.74,27.71ZM40.37,128H80.2a172.57,172.57,0,0,0,23.54,84.29A96.28,96.28,0,0,1,40.37,128Zm111.89,84.29A172.57,172.57,0,0,0,175.8,128h39.83A96.28,96.28,0,0,1,152.26,212.29Z"/>
                </svg>
              </div>
              <p className="text-white font-bold text-lg mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>Building Bridges</p>
              <p className="text-blue-200 text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>Nepal ↔ Global Universities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── 2. CORE VALUES ───────────────────────────────────────────────────────────
const coreValues = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 256 256" fill="currentColor">
        <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM184,96a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,96Zm0,32a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,128Zm0,32a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,160Z"/>
      </svg>
    ),
    title: "Ethical Advisory",
    desc: "Operating with full transparency and ethical standards in every student interaction and institutional partnership.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 256 256" fill="currentColor">
        <path d="M243.31,136,144,36.69a16,16,0,0,0-22.62,0l-22,22L76.69,36A16,16,0,0,0,54.06,36L12.68,77.37a16,16,0,0,0,0,22.63L112,199.31a16,16,0,0,0,22.63,0l22-22,22.63,22.63a16,16,0,0,0,22.62,0l41.38-41.38A16,16,0,0,0,243.31,136ZM123.31,188.69,24,89.37,65.37,48,76.69,59.31,59.31,76.69a8,8,0,0,0,11.31,11.31L88,70.62l9.37,9.38L80,97.37a8,8,0,1,0,11.32,11.31L109,91l40,40Z"/>
      </svg>
    ),
    title: "Regulatory Compliance",
    desc: "Strict adherence to regulatory frameworks ensuring every process is lawful, credible, and professionally managed.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 256 256" fill="currentColor">
        <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z"/>
      </svg>
    ),
    title: "Academic Partnerships",
    desc: "Building long-term, sustainable collaborations with globally recognized institutions for mutual growth.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 256 256" fill="currentColor">
        <path d="M229.66,218.34l-50.07-50.07a88.21,88.21,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.31ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"/>
      </svg>
    ),
    title: "Transparent Processes",
    desc: "Delivering internationally credible opportunities through clear, accessible, and affordable pathways.",
  },
];

export function CoreValues() {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

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
    <section className="py-10 sm:py-14 lg:py-20 bg-[#f4f7fc]" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="px-4 sm:px-8 lg:px-16 xl:px-24">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#231f20] text-center mb-3">
          Our <span className="text-[#1d438d]">Core Values</span>
        </h2>
        <p className="text-gray-500 text-center text-sm sm:text-base mb-8 sm:mb-10 max-w-xl mx-auto">
          The principles that guide every decision, partnership, and student interaction at Albatross Insights.
        </p>

        {/* ── MOBILE SLIDER (hidden on sm+) ── */}
        <div className="sm:hidden">
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {coreValues.map((v, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[80vw] snap-center bg-white rounded-2xl border border-[#e0eaf6] p-5"
                style={{ boxShadow: "0 4px 20px rgba(29,67,141,0.08)" }}
              >
                <div className="w-11 h-11 rounded-xl bg-[#eaf0f8] text-[#1d438d] flex items-center justify-center mb-4">
                  {v.icon}
                </div>
                <h3 className="text-[#231f20] font-bold text-base mb-1.5 leading-snug">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-5">
            {coreValues.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  activeSlide === i ? "w-6 h-2 bg-[#1d438d]" : "w-2 h-2 bg-[#bfd0e3]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ── DESKTOP GRID (hidden below sm) ── */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 xl:gap-6">
          {coreValues.map((v, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl border border-[#e0eaf6] p-5 sm:p-7 hover:border-[#1d438d] hover:shadow-[0_8px_32px_rgba(29,67,141,0.12)] transition-all duration-300"
            >
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl bg-[#eaf0f8] text-[#1d438d] flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-[#1d438d] group-hover:text-white transition-colors duration-300">
                {v.icon}
              </div>
              <h3 className="text-[#231f20] font-bold text-sm sm:text-base lg:text-lg mb-1.5 sm:mb-2 leading-snug">{v.title}</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// ─── 3. VISION & MISSION ──────────────────────────────────────────────────────
export function VisionMission() {
  return (
    <section className="py-14 sm:py-20 bg-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="px-4 sm:px-8 lg:px-16 xl:px-24">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#231f20] text-center mb-3">
          Our <span className="text-[#1d438d]">Vision & Mission</span>
        </h2>
        <p className="text-gray-500 text-center text-sm sm:text-base mb-12 max-w-xl mx-auto">
          The objectives that drive Albatross Insights forward every day.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8 max-w-4xl mx-auto">
          {/* Vision */}
          <div className="relative bg-[#1d438d] rounded-2xl p-8 sm:p-10 overflow-hidden">
            <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white opacity-[0.06]" />
            <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-white opacity-[0.05]" />
            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 256 256" fill="white">
                  <path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"/>
                </svg>
              </div>
              <span className="text-blue-200 text-xs font-bold tracking-widest uppercase mb-3 block">Vision</span>
              <p className="text-white text-base sm:text-lg leading-relaxed font-medium">
                To establish a trusted academic bridge between Nepal and globally recognized universities through ethical guidance and structured collaboration.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="relative bg-[#f4f7fc] rounded-2xl p-8 sm:p-10 border border-[#e0eaf6] overflow-hidden">
            <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-[#1d438d] opacity-[0.04]" />
            <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-[#1d438d] opacity-[0.04]" />
            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-[#eaf0f8] text-[#1d438d] flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 256 256" fill="currentColor">
                  <path d="M221.66,90.34a8,8,0,0,1,0,11.32l-96,96a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L120,180.69l90.34-90.35A8,8,0,0,1,221.66,90.34ZM128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z"/>
                </svg>
              </div>
              <span className="text-[#1d438d] text-xs font-bold tracking-widest uppercase mb-3 block">Mission</span>
              <p className="text-[#231f20] text-base sm:text-lg leading-relaxed font-medium">
                To deliver accessible, affordable, and internationally credible higher education opportunities through transparent processes and professional support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 4. ABOUT DESCRIPTION ─────────────────────────────────────────────────────
export function AboutDescription() {
  return (
    <section className="py-14 sm:py-20 bg-[#f4f7fc]" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="px-4 sm:px-8 lg:px-16 xl:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            {/* Left accent block */}
            <div className="flex-shrink-0 w-full lg:w-64 xl:w-72">
              <div className="bg-[#1d438d] rounded-2xl p-8 text-white text-center lg:text-left">
                <div className="text-4xl sm:text-5xl font-black text-blue-200 mb-2">AI</div>
                <div className="text-sm font-semibold tracking-widest uppercase text-blue-200 mb-4">Albatross Insights</div>
                <div className="w-10 h-1 bg-blue-200 rounded mb-4 mx-auto lg:mx-0" />
                <p className="text-blue-100 text-sm leading-relaxed">
                  Private Limited — committed to building academic bridges between Nepal and the world.
                </p>
              </div>
            </div>

            {/* Right text */}
            <div className="flex-1">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#1d438d] bg-[#eaf0f8] px-3 py-1.5 rounded-full mb-5">
                About Us
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#231f20] mb-5 leading-tight">
                Our Objective: Sustainable Academic Bridges
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Albatross Insights Private Limited operates with a commitment to ethical advisory practices, regulatory compliance, and long-term academic partnerships. Our objective is to build sustainable academic bridges between Nepal and globally recognized institutions — ensuring every student and institution we work with receives professional, transparent, and results-driven support.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "Ethical", sub: "Advisory Practices" },
                  { label: "Compliant", sub: "Regulatory Standards" },
                  { label: "Sustainable", sub: "Academic Partnerships" },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-xl border border-[#e0eaf6] p-4 text-center">
                    <p className="text-[#1d438d] font-bold text-sm">{item.label}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── DEFAULT EXPORT: Full Page ─────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <main className="bg-white">
      <AboutHero />
      <AboutDescription />
      <CoreValues />
      <VisionMission />
    </main>
  );
}