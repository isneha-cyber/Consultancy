import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const [isHovered, setIsHovered] = useState(null);

  const socialLinks = [
    { Icon: Facebook, label: 'Facebook', href: '#' },
    { Icon: Twitter, label: 'Twitter', href: '#' },
    { Icon: Instagram, label: 'Instagram', href: '#' },
    { Icon: Linkedin, label: 'LinkedIn', href: '#' }
  ];

  const companyLinks = [
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Scholarships', href: '#' },
    { name: 'Careers', href: '#' }
  ];

  const usefulLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Courses', href: '#' },
    { name: 'Blogs', href: '#' }
  ];

  const getInTouch = [
    { name: 'Contact Us', href: '#' },
    { name: 'Email', href: '#' },
    { name: 'Address', href: '#' }
  ];

  return (
    <footer className="bg-[#1d428c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-0 py-12 sm:py-24">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-0 mb-12">
          {/* Logo Section - 1 Column */}
          <div className="lg:pr-8">
            <div className="bg-white p-4 inline-block mb-4">
              <img 
                src="/images/logo.png" 
                alt="Company Logo" 
                className="sm:h-32 h-12 w-auto"
              />
            </div>
            <p className="text-lg  mt-4 max-w-xs">
              Empowering education and professional growth through innovative solutions.
            </p>
          </div>

          {/* Vertical Border - Hidden on mobile */}
          <div className="hidden lg:block w-px bg-white mx-8"></div>

          {/* Links Section - 3 Columns */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Company Links */}
            <div>
              <h3 className="text-white text-xl font-semibold mb-6 pb-2 border-b-2 border-white inline-block">
                Company
              </h3>
              <ul className="space-y-3 mt-6">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className=" hover:text-white transition-all duration-300 inline-block hover:translate-x-1 transform text-md"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="text-white text-xl font-semibold mb-6 pb-2 border-b-2 border-white  inline-block">
                Useful Links
              </h3>
              <ul className="space-y-3 mt-6">
                {usefulLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-blue-100 hover:text-white transition-all duration-300 inline-block hover:translate-x-1 transform text-lg"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get In Touch */}
            <div>
              <h3 className="text-white text-xl font-semibold mb-6 pb-2 border-b-2 border-white inline-block">
                Get In Touch
              </h3>
              <ul className="space-y-3 mt-6">
                {getInTouch.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className=" text-white transition-all duration-300 inline-block hover:translate-x-1 transform text-lg"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Horizontal Border */}
        <div className="border-t border-white pt-8">
          {/* Bottom Bar */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4 order-2 lg:order-1">
              <span className="text-lg text-white hidden sm:block">Follow us:</span>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-white text-[#1d428c] transition-all duration-300 p-2.5 rounded-full hover:scale-110 transform"
                    aria-label={social.label}
                    onMouseEnter={() => setIsHovered(index)}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    <social.Icon 
                      size={18} 
                      className={isHovered === index ? 'animate-pulse' : ''} 
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Copyright & Credits */}
            <div className="flex flex-col items-center lg:items-end gap-2 text-center lg:text-right order-1 lg:order-2">
              <div className="text-sm text-white">
                <span>© 2026 </span>
                <span className="text-white font-semibold">Albatross Insight Private Limited</span>
              </div>
              <div className="text-md text-white">
                Crafted by{' '}
                <a 
                  href="https://www.sait.com.np/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-medium hover:underline transition-all duration-300"
                >
                  S.A.I.T Solution Nepal
                </a>
              </div>
            </div>

            {/* Scroll to Top Button */}
            <button
              className="bg-white text-[#1d428c] hover:bg-blue-700 hover:text-white p-3 rounded-full transition-all duration-300 hover:rotate-45 hover:scale-110 transform shadow-lg hover:shadow-xl order-3"
              aria-label="Scroll to top"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <ArrowUpRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}