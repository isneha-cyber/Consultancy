import React from "react";

const pillars = [
  "Ethical advisory standards",
  "Transparent fee structures",
  "Secure documentation handling",
  "Authentic university representation",
];

const Compilance = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="px-4 sm:px-6 lg:px-24">
        <div className="rounded-2xl border border-[#ccdcee] bg-white p-6 sm:p-8 lg:p-10"
          style={{ boxShadow: "0 4px 24px rgba(29,67,141,0.10)" }}>

          <div className="mb-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#231f20] leading-tight">
              <span className="inline-block font-bold relative">
                COMPLIANCE & TRANSPARENCY
                <img
                  src="/images/underline.png"
                  alt=""
                  className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-[6px] sm:h-[8px] md:h-[10px]"
                />
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">

            {/* Left: Description */}
            <div>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                We maintain strict adherence to ethical advisory standards,
                transparent fee structures, secure documentation handling, and
                authentic university representation. Admission decisions remain
                subject to respective university approval and visa issuance is
                governed by embassy regulations.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="px-3 py-1.5 text-xs sm:text-sm font-semibold text-[#1d438d] bg-[#eaf0f8] rounded-full">
                  Policy-led advisory
                </span>
                <span className="px-3 py-1.5 text-xs sm:text-sm font-semibold text-[#1d438d] bg-[#eaf0f8] rounded-full">
                  Embassy-regulated visas
                </span>
              </div>
            </div>

            {/* Right: Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-[#e3ecf7] bg-[#f7faff] p-4 flex items-start gap-3"
                >
                  <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#eaf0f8] text-[#1d438d]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 256 256"
                      fill="currentColor"
                    >
                      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40.49-112.49-48,48a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L116,140.69l42.34-42.35a8,8,0,0,1,11.32,11.32Z" />
                    </svg>
                  </span>
                  <p className="text-sm sm:text-base text-[#231f20] font-semibold leading-snug">
                    {item}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Compilance;
