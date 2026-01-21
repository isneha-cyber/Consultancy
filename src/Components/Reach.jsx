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

  return (
    <div className=" bg-[#1d428c] py-12 sm:py-24 sm:px-0 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12  items-center">
          {/* Image Section */}
          <div className="max-w-2xl mx-autoflex justify-center t">
            <div className="relative w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="images/reach.webp"
                alt="Graduates celebrating"
                className="w-full h-[70vh] object-cover"
              />
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 text-center lg:text-left">
              Let <span className="relative inline-block mx-2 font-bold">Our Team
                 <img 
              src="/images/underline.png" 
              alt="" 
              className="absolute sm:-bottom-4 -bottom-2 left-0 w-full h-4"
            /></span> Reach Out To You
            </h1>

            <div className="space-y-6">
              {/* First and Last Name */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-6 py-2 rounded-lg bg-transparent border-2 border-white/30 text-white placeholder-white/50 focus:border-white focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-6 py-2 rounded-lg bg-transparent border-2 border-white/30 text-white placeholder-white/50 focus:border-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Email and Mobile */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm mb-2">Email ID</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-2 rounded-lg bg-transparent border-2 border-white/30 text-white placeholder-white/50 focus:border-white focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm mb-2">Mobile Number</label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full px-6 py-2 rounded-lg bg-transparent border-2 border-white/30 text-white placeholder-white/50 focus:border-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Destination and Course */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm mb-2">Your preferred study destination</label>
                  <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    placeholder="Select Destination"
                    className="w-full px-6 py-2 rounded-lg bg-transparent border-2 border-white/30 text-white placeholder-white/50 focus:border-white focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm mb-2">Course</label>
                  <input
                    type="text"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-6 py-2 rounded-lg bg-transparent border-2 border-white/30 text-white placeholder-white/50 focus:border-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Month and Year */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm mb-2">When do you plan to study?</label>
                  <select
                    name="month"
                    value={formData.month}
                    onChange={handleChange}
                    className="w-full px-6 py-2 rounded-lg  border-2 border-white/30 text-white focus:border-white focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select Month</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white text-sm mb-2">Your preferred year</label>
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className="w-full px-6 py-2 rounded-lg  border-2 border-white/30 text-white focus:border-white focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select Year</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                  </select>
                </div>
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 rounded border-2 border-white/30 bg-transparent cursor-pointer accent-white"
                />
                <label className="text-white text-sm leading-relaxed">
                  I consent to receiving Calls, WhatsApp, Email and Google RCS from Edwise to assist with this enquiry.
                </label>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  onClick={handleSubmit}
                  className="cursor-pointer px-4 py-2 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}