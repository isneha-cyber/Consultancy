import { useState, useMemo } from "react";

// ─── DATA ─────────────────────────────────────────────────────────────────────
const destinations = [
  "Moscow", "Saint Petersburg", "Novosibirsk", "Kazan",
  "Volgograd", "Rostov-on-Don", "Ufa", "Krasnoyarsk",
  "Omsk", "Samara", "Chelyabinsk", "Yekaterinburg",
  "Perm", "Voronezh", "Saratov",
];

const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const years  = ["2025","2026","2027"];

const locations = [
  {
    id: 0,
    name: "Albatross - Head Office, Kathmandu",
    address: "Putalisadak, Kathmandu Metropolitan City, Bagmati Province, Nepal - 44600",
    href: "#",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.9!2d85.3157!3d27.7172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fcb77fd4bd%3A0x58099b8d14f0f4e5!2sPutalisadak%2C%20Kathmandu!5e0!3m2!1sen!2snp!4v1710740839432!5m2!1sen!2snp",
  },
  // {
  //   id: 1,
  //   name: "Albatross - Pokhara Branch",
  //   address: "Lakeside, Baidam, Pokhara Metropolitan City, Gandaki Province, Nepal - 33700",
  //   href: "#",
  //   map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.9!2d83.9580!3d28.2096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995937bbf3bbbf1%3A0x7099fa35b2e0e767!2sLakeside%2C%20Pokhara!5e0!3m2!1sen!2snp!4v1710740839432!5m2!1sen!2snp",
  // },
  // {
  //   id: 2,
  //   name: "Albatross - Chitwan Office",
  //   address: "Bharatpur Metropolitan City, Chitwan, Bagmati Province, Nepal - 44200",
  //   href: "#",
  //   map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.1!2d84.4333!3d27.6833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fb4910e6b3a3%3A0xcb3fcb1c13c37ed0!2sBharatpur%2C%20Chitwan!5e0!3m2!1sen!2snp!4v1710740839432!5m2!1sen!2snp",
  // },
  // {
  //   id: 3,
  //   name: "Albatross - Butwal Branch",
  //   address: "Butwal Sub-Metropolitan City, Rupandehi, Lumbini Province, Nepal - 32907",
  //   href: "#",
  //   map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.0!2d83.4627!3d27.7005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996864172b5d629%3A0x75c87e69e76258d4!2sButwal!5e0!3m2!1sen!2snp!4v1710740839432!5m2!1sen!2snp",
  // },
  // {
  //   id: 4,
  //   name: "Albatross - Biratnagar Office",
  //   address: "Biratnagar Metropolitan City, Morang, Koshi Province, Nepal - 56613",
  //   href: "#",
  //   map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.2!2d87.2798!3d26.4525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef740db8fcd40b%3A0x4f68851f5abd7cd1!2sBiratnagar!5e0!3m2!1sen!2snp!4v1710740839432!5m2!1sen!2snp",
  // },
];

// ─── CONTACT FORM ─────────────────────────────────────────────────────────────
function ContactForm() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    destination: "", course: "", month: "", year: "", consent: true,
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === "checkbox" ? checked : value }));
    if (errors[name]) setErrors(er => ({ ...er, [name]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = "First name is required";
    if (!form.lastName.trim())  e.lastName  = "Last name is required";
    if (!form.email.trim())     e.email     = "Email is required";
    if (!form.phone.trim())     e.phone     = "Phone is required";
    if (!form.destination)      e.destination = "Please select a city";
    if (!form.course.trim())    e.course    = "Course is required";
    if (!form.month)            e.month     = "Please select a month";
    if (!form.year)             e.year      = "Please select a year";
    if (!form.consent)          e.consent   = "Consent is required";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  const Field = ({ label, children, error }) => (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-[#231f20]">{label}</label>
      {children}
      {error && <p className="text-xs text-red-500 mt-0.5">{error}</p>}
    </div>
  );

  const inputCls = (name) =>
    `w-full h-[50px] px-4 border rounded-lg text-sm text-[#231f20] placeholder-gray-400 outline-none transition-all duration-200
     focus:border-[#1d438d] focus:ring-2 focus:ring-[#1d438d]/10 bg-white
     ${errors[name] ? "border-red-400" : "border-[#ccd6e8]"}`;

  const selectCls = (name) =>
    `w-full h-[50px] px-4 border rounded-lg text-sm text-[#231f20] outline-none transition-all duration-200
     focus:border-[#1d438d] focus:ring-2 focus:ring-[#1d438d]/10 bg-white appearance-none cursor-pointer
     ${errors[name] ? "border-red-400" : "border-[#ccd6e8]"}`;

  if (submitted) {
    return (
      <div className="text-center py-16 px-8">
        <div className="w-20 h-20 rounded-full bg-[#eaf0f8] flex items-center justify-center mx-auto mb-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256" fill="#1d438d">
            <path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"/>
          </svg>
        </div>
        <h3 className="text-[#1d438d] font-bold text-xl mb-2">Enquiry Submitted!</h3>
        <p className="text-gray-500 text-base">Our team will get back to you within 1–2 business days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

        <Field label="First Name" error={errors.firstName}>
          <input name="firstName" type="text" placeholder="Enter first name"
            value={form.firstName} onChange={handleChange} className={inputCls("firstName")} />
        </Field>

        <Field label="Last Name" error={errors.lastName}>
          <input name="lastName" type="text" placeholder="Enter last name"
            value={form.lastName} onChange={handleChange} className={inputCls("lastName")} />
        </Field>

        <Field label="Email ID" error={errors.email}>
          <input name="email" type="email" placeholder="your@email.com"
            value={form.email} onChange={handleChange} className={inputCls("email")} />
        </Field>

        <Field label="Mobile Number" error={errors.phone}>
          <input name="phone" type="tel" placeholder="+977 XXXXXXXXXX"
            value={form.phone} onChange={handleChange} className={inputCls("phone")} />
        </Field>

        <Field label="Preferred City in Russia" error={errors.destination}>
          <div className="relative">
            <select name="destination" value={form.destination} onChange={handleChange} className={selectCls("destination")}>
              <option value="">Select City</option>
              {destinations.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
            </div>
          </div>
        </Field>

        <Field label="Course" error={errors.course}>
          <input name="course" type="text" placeholder="e.g. MBBS, Engineering..."
            value={form.course} onChange={handleChange} className={inputCls("course")} />
        </Field>

        <Field label="When do you plan to study?" error={errors.month}>
          <div className="relative">
            <select name="month" value={form.month} onChange={handleChange} className={selectCls("month")}>
              <option value="">Select Month</option>
              {months.map(m => <option key={m} value={m}>{m}</option>)}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
            </div>
          </div>
        </Field>

        <Field label="Preferred Year" error={errors.year}>
          <div className="relative">
            <select name="year" value={form.year} onChange={handleChange} className={selectCls("year")}>
              <option value="">Select Year</option>
              {years.map(y => <option key={y} value={y}>{y}</option>)}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
            </div>
          </div>
        </Field>

        {/* Consent + Submit — full width */}
        <div className="sm:col-span-2 flex flex-col gap-5">
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative mt-0.5 flex-shrink-0">
              <input type="checkbox" name="consent" checked={form.consent}
                onChange={handleChange} className="sr-only peer" />
              <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all
                peer-checked:bg-[#1d438d] peer-checked:border-[#1d438d]
                ${errors.consent ? "border-red-400" : "border-[#ccd6e8]"}`}>
                {form.consent && (
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
            </div>
            <span className="text-sm text-gray-600 leading-relaxed">
              I consent to receiving calls, WhatsApp, Email and SMS from Albatross Insights to assist with this enquiry.
            </span>
          </label>
          {errors.consent && <p className="text-xs text-red-500 -mt-3">{errors.consent}</p>}

          <button type="submit"
            className="w-full sm:w-auto sm:min-w-[200px] h-[52px] bg-[#1d438d] hover:bg-[#163675] text-white font-semibold text-sm sm:text-base rounded-lg transition-colors duration-300">
            Submit Enquiry
          </button>
        </div>

      </div>
    </form>
  );
}

// ─── LOCATION SECTION ─────────────────────────────────────────────────────────
function LocationSection() {
  const [activeId, setActiveId] = useState(0);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() =>
    locations.filter(l => l.name.toLowerCase().includes(search.toLowerCase())),
    [search]
  );

  const activeLocation = locations.find(l => l.id === activeId) || locations[0];

  return (
    <section className="bg-[#1d438d] py-14 sm:py-20">
      <div className="px-4 sm:px-8 lg:px-16 xl:px-24">

        {/* Section title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-10 sm:mb-14" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Our <span className="text-blue-200">Location</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-6 xl:gap-8">

          {/* ── Left: location list ── */}
          <div className="w-full lg:w-[380px] xl:w-[420px] flex-shrink-0 flex flex-col gap-3">

            {/* Search */}
            <div className="relative mb-1">
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search location..."
                className="w-full h-[46px] pl-10 pr-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200 text-sm outline-none focus:bg-white/15 focus:border-white/40 transition-all"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              />
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-200" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
              </svg>
            </div>

            {/* Scrollable list */}
            <div className="flex flex-col gap-1.5 max-h-[420px] lg:max-h-[500px] overflow-y-auto pr-1"
              style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(255,255,255,0.3) transparent" }}>
              {filtered.length === 0 && (
                <p className="text-blue-200 text-sm text-center py-6">No locations found.</p>
              )}
              {filtered.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setActiveId(loc.id)}
                  className={`w-full text-left rounded-xl px-4 py-3.5 transition-all duration-200 group
                    ${activeId === loc.id
                      ? "bg-white text-[#1d438d]"
                      : "bg-white/10 hover:bg-white/18 text-white border border-white/10 hover:border-white/25"
                    }`}
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  <div className="flex items-start gap-3">
                    <svg className={`flex-shrink-0 mt-0.5 ${activeId === loc.id ? "text-[#1d438d]" : "text-blue-200"}`}
                      width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <div className="flex-1 min-w-0">
                      <p className={`font-semibold text-sm leading-snug ${activeId === loc.id ? "text-[#1d438d]" : "text-white"}`}>
                        {loc.name}
                      </p>
                      {activeId === loc.id && (
                        <div className="mt-2">
                          <p className="text-[#4a5568] text-xs leading-relaxed mb-2.5">{loc.address}</p>
                          <a href={loc.href}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1d438d] border border-[#1d438d] rounded-lg px-3 py-1.5 hover:bg-[#eaf0f8] transition-colors">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
                            Get Directions
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* ── Right: map ── */}
          <div className="flex-1 min-h-[320px] sm:min-h-[400px] lg:min-h-0 rounded-2xl overflow-hidden border-4 border-white/20">
            <iframe
              key={activeLocation.map}
              src={activeLocation.map}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px", display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={activeLocation.name}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
export default function ContactPage() {
  return (
    <main style={{ fontFamily: "'Poppins', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
      `}</style>

      {/* ── HERO ── */}
      <section className="bg-white  pb-10 sm:pb-14">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-24">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <a href="/" className="hover:text-[#1d438d] transition-colors">Home</a>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            <span className="text-[#1d438d] font-medium">Contact Us</span>
          </nav>

          {/* Heading */}
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#231f20] leading-tight mb-4">
              Contact Albatross —{" "}
              <span className="text-[#1d438d] relative inline-block">
                Unlock
                <img src="/images/underline.png" alt="" aria-hidden="true"
                  className="absolute left-0 w-full pointer-events-none"
                  style={{ bottom: "-6px", height: "7px", objectFit: "fill" }} />
              </span>{" "}
              your overseas education opportunities
            </h1>
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
              Fill out the form below and our expert counsellors will get back to you with personalised guidance.
            </p>
          </div>

          {/* ── FORM CARD ── */}
          <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-[#dde6f3] p-7 sm:p-10"
            style={{ boxShadow: "0 4px 32px rgba(29,67,141,0.09)" }}>
            <h2 className="text-[#231f20] font-bold text-xl sm:text-2xl mb-7">Send us an Enquiry</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── LOCATION ── */}
      <LocationSection />

    </main>
  );
}