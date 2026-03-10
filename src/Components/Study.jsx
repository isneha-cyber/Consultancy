import { useState } from "react";

const reasons = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 256 256" fill="currentColor">
        <path d="M247.62,91.93l-40-32A8,8,0,0,0,196,58H60L20.38,91.93A8,8,0,0,0,18,98.14V208a16,16,0,0,0,16,16H222a16,16,0,0,0,16-16V98.14A8,8,0,0,0,247.62,91.93ZM222,208H34V102.4l36.69-29.35A8,8,0,0,0,72,72H184a8,8,0,0,0,1.31-.95L222,102.4ZM80,136a8,8,0,0,1,8-8h80a8,8,0,0,1,0,16H88A8,8,0,0,1,80,136Zm0,32a8,8,0,0,1,8-8h80a8,8,0,0,1,0,16H88A8,8,0,0,1,80,168Z"/>
      </svg>
    ),
    title: "Globally Recognized Degrees",
    desc: "Russian university degrees are recognized worldwide, enabling graduates to pursue careers and further studies across the globe with confidence.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 256 256" fill="currentColor">
        <path d="M152,120H136V56h8a32,32,0,0,1,32,32,8,8,0,0,0,16,0,48.05,48.05,0,0,0-48-48h-8V24a8,8,0,0,0-16,0V40h-8a48,48,0,0,0,0,96h8v64H104a32,32,0,0,1-32-32,8,8,0,0,0-16,0,48.05,48.05,0,0,0,48,48h16v16a8,8,0,0,0,16,0V216h16a48,48,0,0,0,0-96Zm-32,0H104a32,32,0,0,1,0-64h16Zm32,80H136V136h16a32,32,0,0,1,0,64Z"/>
      </svg>
    ),
    title: "Affordable Tuition Structures",
    desc: "Russia offers highly competitive tuition fees compared to Western countries, making quality higher education accessible without the burden of excessive student debt.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 256 256" fill="currentColor">
        <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z"/>
      </svg>
    ),
    title: "English-Medium Programs Available",
    desc: "Many leading Russian universities now offer full degree programs in English, removing the language barrier for international students seeking world-class education.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 256 256" fill="currentColor">
        <path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,1,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104a88,88,0,0,1,176,0Z"/>
      </svg>
    ),
    title: "Advanced Research & Laboratory Infrastructure",
    desc: "Russia's universities boast state-of-the-art research facilities and laboratories, giving students hands-on experience in cutting-edge scientific and technological fields.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 256 256" fill="currentColor">
        <path d="M224,120a96,96,0,1,1-96-96A96,96,0,0,1,224,120Zm-96,72a72,72,0,1,0-72-72A72.08,72.08,0,0,0,128,192Zm-8-112h16v48h-16Zm0,64h16v16h-16Z"/>
      </svg>
    ),
    title: "Strong Medical & Technical Education",
    desc: "Russia is globally acclaimed for its medical and engineering programs, with institutions producing highly skilled professionals recognised by international healthcare and tech organisations.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 256 256" fill="currentColor">
        <path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,1.1-8.67,24,24,0,1,0-36.72,0,8,8,0,0,1-6.27,13.56A51.65,51.65,0,0,0,101.6,148.8a8,8,0,1,1-12.8-9.6A67.88,67.88,0,0,1,128,117.71a40,40,0,1,1,48,0,67.88,67.88,0,0,1,39.2,21.49A8,8,0,0,1,244.8,150.4ZM192,232a8,8,0,0,1-8,8H72a8,8,0,0,1-8-8,64,64,0,0,1,128,0Z"/>
      </svg>
    ),
    title: "Multicultural Student Environment",
    desc: "With students from over 170 countries, Russian universities foster a rich multicultural atmosphere that broadens perspectives and builds lifelong international networks.",
  },
];

export default function Study() {
  return (
    <section className="py-12 md:py-16 bg-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="px-4 sm:px-8 lg:px-16 xl:px-24">
        <div className="flex flex-col lg:flex-row gap-10 xl:gap-16 items-start">

          {/* LEFT — Reasons */}
          <div className="w-full lg:w-[62%]">

            {/* Heading */}
            <div className="mb-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#231f20] leading-tight">
                Why{" "}
                <span className="inline-block font-bold text-[#231f20]">
                  <span className="relative">
                    Study In Russia?
                    <img
                      src="/images/underline.png"
                      alt=""
                      className="w-full h-[7px] md:h-[10px] mt-1 block"
                    />
                  </span>
                </span>
              </h2>
            </div>

            {/* List with dividers */}
            <ul className="flex flex-col divide-y divide-gray-200">
              {reasons.map((r, i) => (
                <li key={i} className="flex gap-5 items-start py-6 sm:py-7">
                  {/* Icon box */}
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-[#eaf0f8] text-[#6b8fc2] flex items-center justify-center">
                    {r.icon}
                  </div>

                  {/* Text */}
                  <div>
                    <h4 className="text-[#231f20] font-bold text-base sm:text-lg md:text-xl mb-1.5 leading-snug">
                      {r.title}
                    </h4>
                    <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-xl">
                      {r.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — Image */}
          <div className="w-full lg:w-[52%] lg:sticky lg:top-8 mt-4 lg:mt-32">
            <div className="rounded-xl overflow-hidden border border-[#ccdcee]"
              style={{ boxShadow: "0 4px 24px rgba(29,67,141,0.10)" }}>
              <img
                src="/images/hero2.avif"
                alt="Study in Russia"
                className="w-full h-full object-cover"
                style={{ minHeight: "580px", maxHeight: "920px" }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}