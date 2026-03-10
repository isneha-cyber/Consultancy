import React from "react";

const highlights = [
  "Direct University Coordination",
  "Transparent Admission Processing",
  "Structured Visa Guidance",
  "Institutional Collaboration Platform",
];

const Introduction = () => {
  return (
    <section className="py-12 md:py-24 bg-[#e8edf4]">
      <div className="px-4 sm:px-6 lg:px-24">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-14">

          {/* Left: Intro content */}
          <div className="w-full lg:w-1/2">
            <div className="mb-5">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#231f20] leading-tight">
                <span className="inline-block font-bold relative">
                  Introduction
                  <img
                    src="/images/underline.png"
                    alt=""
                    className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-[6px] sm:h-[8px] md:h-[10px]"
                  />
                </span>
              </h2>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl">
              Albatross Insights Private Limited is a Kathmandu-based international
              education advisory firm specializing in academic placement and
              institutional collaboration with leading universities in Russia. We
              ensure authentic admissions, compliant documentation, and
              comprehensive visa facilitation.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="px-3 py-1.5 text-xs sm:text-sm font-semibold text-[#1d438d] bg-[#eaf0f8] rounded-full">
                Kathmandu, Nepal
              </span>
              <span className="px-3 py-1.5 text-xs sm:text-sm font-semibold text-[#1d438d] bg-[#eaf0f8] rounded-full">
                Russia University Network
              </span>
            </div>
          </div>

          {/* Right: Core highlights */}
          <div className="w-full lg:w-1/2">
            <div
              className="rounded-2xl border border-[#ccdcee] bg-white p-6 sm:p-8"
             
            >
              <h3 className="text-[#231f20] font-bold text-lg sm:text-xl mb-6">
                Core Highlights
              </h3>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-[#e3ecf7] bg-[#f7faff] px-4 py-4"
                  >
                    <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#eaf0f8] text-[#1d438d]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 256 256"
                        fill="currentColor"
                      >
                        <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56A8,8,0,0,1,45.66,138.34L96,188.69l122.34-122.35a8,8,0,0,1,11.32,11.32Z" />
                      </svg>
                    </span>
                    <p className="text-sm sm:text-base text-[#231f20] font-semibold leading-snug">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Introduction;
