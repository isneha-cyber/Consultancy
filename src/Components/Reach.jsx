import React, { useState } from 'react';

export default function Reach() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    destination: '',
    course: '',
    month: '',
    year: '',
    consent: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = () => {
    if (!formData.consent) {
      alert('Please provide consent to continue');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  const inputCls = "w-full px-4 py-2.5 rounded-lg bg-transparent border-2 border-white/30 text-white placeholder-white/50 focus:border-white focus:outline-none transition-colors text-sm";
  const selectCls = "w-full px-4 py-2.5 rounded-lg bg-[#1d428c] border-2 border-white/30 text-white focus:border-white focus:outline-none transition-colors appearance-none cursor-pointer text-sm";
  const labelCls = "block text-white/80 text-xs sm:text-sm mb-1.5 font-medium";

  return (
    <div className="bg-[#1d428c] py-10 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-16 xl:px-24">
     
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* ── IMAGE ── */}
          <div className="w-full">
            <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="images/reach.webp"
                alt="Graduates celebrating"
                className="w-full object-cover h-[220px] sm:h-[320px] lg:h-[580px]"
              />
              {/* subtle gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#1d428c]/40 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* ── FORM ── */}
          <div className="w-full">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 sm:mb-8 text-center lg:text-left leading-tight">
              Let{' '}
              <span className="relative inline-block">
                Our Team
                <img
                  src="/images/underline.png"
                  alt=""
                  aria-hidden="true"
                  className="absolute -bottom-1 sm:-bottom-2 left-0 w-full"
                  style={{ height: '7px', objectFit: 'fill' }}
                />
              </span>{' '}
              Reach Out To You
            </h2>

            <div className="space-y-4">

              {/* First / Last Name */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className={labelCls}>First Name</label>
                  <input type="text" name="firstName" value={formData.firstName}
                    onChange={handleChange} placeholder="John" className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Last Name</label>
                  <input type="text" name="lastName" value={formData.lastName}
                    onChange={handleChange} placeholder="Doe" className={inputCls} />
                </div>
              </div>

              {/* Email / Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className={labelCls}>Email ID</label>
                  <input type="email" name="email" value={formData.email}
                    onChange={handleChange} placeholder="you@email.com" className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Mobile Number</label>
                  <input type="tel" name="mobile" value={formData.mobile}
                    onChange={handleChange} placeholder="+977 XXXXXXXXXX" className={inputCls} />
                </div>
              </div>

              {/* Destination / Course */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className={labelCls}>Preferred Study Destination</label>
                  <input type="text" name="destination" value={formData.destination}
                    onChange={handleChange} placeholder="e.g. Moscow" className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Course</label>
                  <input type="text" name="course" value={formData.course}
                    onChange={handleChange} placeholder="e.g. MBBS" className={inputCls} />
                </div>
              </div>

              {/* Month / Year */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className={labelCls}>When do you plan to study?</label>
                  <div className="relative">
                    <select name="month" value={formData.month} onChange={handleChange} className={selectCls}>
                      <option value="">Select Month</option>
                      {['January','February','March','April','May','June',
                        'July','August','September','October','November','December'].map(m => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/60">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label className={labelCls}>Preferred Year</label>
                  <div className="relative">
                    <select name="year" value={formData.year} onChange={handleChange} className={selectCls}>
                      <option value="">Select Year</option>
                      {['2026','2027','2028','2029'].map(y => (
                        <option key={y} value={y}>{y}</option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/60">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consent */}
              <label className="flex items-start gap-3 cursor-pointer">
                <div className="relative mt-0.5 flex-shrink-0">
                  <input type="checkbox" name="consent" checked={formData.consent}
                    onChange={handleChange} className="sr-only peer" />
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded border-2 border-white/40 flex items-center justify-center transition-all peer-checked:bg-white peer-checked:border-white">
                    {formData.consent && (
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="#1d428c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-white/80 text-xs sm:text-sm leading-relaxed">
                  I consent to receiving Calls, WhatsApp, Email and SMS from Albatross Insights to assist with this enquiry.
                </span>
              </label>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                className="w-full sm:w-auto px-8 py-2.5 sm:py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-sm sm:text-base hover:bg-white hover:text-[#1d428c] transition-all duration-300 hover:scale-[1.02]"
              >
                Submit Enquiry
              </button>

            </div>
          </div>

        </div>
     
    </div>
  );
}