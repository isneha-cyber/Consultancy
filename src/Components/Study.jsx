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

const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];

const chevronSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 256 256'%3E%3Cpath d='M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z' fill='%231d438d'/%3E%3C/svg%3E")`;

export default function Study() {
  const [form, setForm] = useState({
    name: "", email: "", mobile: "", course: "", month: "", year: "", consent: true,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const selectStyle = {
    backgroundImage: chevronSvg,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 12px center",
  };

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

          {/* RIGHT — Form card */}
          <div className="w-full lg:w-[36%] lg:sticky lg:top-8 mt-4 lg:mt-0">
            <div className="rounded-2xl border border-[#ccdcee] p-6 sm:p-8 bg-white"
              style={{ boxShadow: "0 4px 24px rgba(29,67,141,0.10)" }}>

              <h4 className="text-[#231f20] font-bold text-base sm:text-lg mb-6 leading-snug">
                Book your Free Consultation with Trustworthy Counsellors
              </h4>

              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-[#e8edf7] flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256" fill="#1d438d">
                      <path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"/>
                    </svg>
                  </div>
                  <p className="text-[#1d438d] font-semibold text-base">Thank you! We'll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">

                  {[
                    { name: "name", placeholder: "Name", type: "text" },
                    { name: "email", placeholder: "Email", type: "email" },
                    { name: "mobile", placeholder: "Mobile Number", type: "tel" },
                    { name: "course", placeholder: "Preferred Course", type: "text" },
                  ].map((f) => (
                    <input
                      key={f.name}
                      type={f.type}
                      name={f.name}
                      placeholder={f.placeholder}
                      value={form[f.name]}
                      onChange={handleChange}
                      required
                      className="w-full h-[48px] px-4 border border-[#bfd0e3] rounded-lg text-sm sm:text-base text-[#231f20] placeholder-gray-400 focus:outline-none focus:border-[#1d438d] focus:ring-1 focus:ring-[#1d438d] transition bg-white"
                    />
                  ))}

                  <select
                    name="month"
                    value={form.month}
                    onChange={handleChange}
                    required
                    style={selectStyle}
                    className="w-full h-[48px] px-4 border border-[#bfd0e3] rounded-lg text-sm sm:text-base text-gray-400 bg-white focus:outline-none focus:border-[#1d438d] focus:ring-1 focus:ring-[#1d438d] transition appearance-none"
                  >
                    <option value="">Select Month</option>
                    {months.map((m) => <option key={m} value={m}>{m}</option>)}
                  </select>

                  <select
                    name="year"
                    value={form.year}
                    onChange={handleChange}
                    required
                    style={selectStyle}
                    className="w-full h-[48px] px-4 border border-[#bfd0e3] rounded-lg text-sm sm:text-base text-gray-400 bg-white focus:outline-none focus:border-[#1d438d] focus:ring-1 focus:ring-[#1d438d] transition appearance-none"
                  >
                    <option value="">Select Year</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                  </select>

                  <label className="flex items-start gap-2.5 cursor-pointer mt-1">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={form.consent}
                      onChange={handleChange}
                      required
                      className="mt-0.5 w-4 h-4 accent-[#1d438d] flex-shrink-0"
                    />
                    <span className="text-xs sm:text-sm text-[#5b7ab5] leading-relaxed">
                      I consent to receiving Calls, WhatsApp, Email and Google RCS from Edwise to assist with this enquiry.
                    </span>
                  </label>

                  <div className="mt-2">
                    <button
                      type="submit"
                      className="px-8 h-[46px] border-2 border-[#1d438d] text-[#1d438d] hover:bg-[#1d438d] hover:text-white text-sm sm:text-base font-semibold rounded-lg transition-colors duration-200"
                    >
                      Submit
                    </button>
                  </div>

                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}