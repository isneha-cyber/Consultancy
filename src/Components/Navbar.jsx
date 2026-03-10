import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  
  const dropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Handle scroll shadow
  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside (desktop)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Toggle dropdown with smooth animation
  const toggleDropdown = (e) => {
    if (e) e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle mobile dropdown toggle
  const handleMobileDropdownToggle = (e) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Handle mobile menu item click
  const handleMobileMenuItemClick = () => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu (only called by X button)
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`bg-white relative z-50 sticky top-0 transition-all duration-300 ${hasShadow ? 'shadow-lg' : 'shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-0">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a href="/">
            <img 
              className="h-10 w-12 sm:h-12 sm:w-16 md:h-14 md:w-18 transition-transform duration-300 hover:scale-105" 
              src="images/logo.png" 
              alt="Logo" 
              width="72"
              height="60"
            />
            </a>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-12 text-base lg:text-lg">
            <a 
              href="/" 
              className="text-gray-700 hover:text-black font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </a>
            <a 
              href="/about" 
              className="text-gray-700 hover:text-black font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </a>
            <a 
              href="/service" 
              className="text-gray-700 hover:text-black font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
              Services
            </a>

              <a 
              href="/study-in-russia" 
              className="text-gray-700 hover:text-black font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
              Study in Russia
            </a>
            
            {/* Dropdown Section - Desktop */}
            {/* <div 
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button 
                onClick={toggleDropdown}
                className="flex items-center text-gray-700 hover:text-black font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
              >
                Pages
                <svg 
                  className={`ml-1 h-4 w-4 lg:h-5 lg:w-5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
             
              <div 
                className={`absolute left-0 mt-2 w-48 lg:w-56 bg-white rounded-md shadow-xl ring-1 ring-black ring-opacity-5 z-10 overflow-hidden transition-all duration-200 ease-out ${
                  isDropdownOpen 
                    ? 'opacity-100 translate-y-0 visible' 
                    : 'opacity-0 -translate-y-2 invisible'
                }`}
              >
                <div className="py-1">
                  {['Courses', 'Admission', 'Job Opportunities', 'Scholarships'].map((item) => (
                    <a 
                      key={item}
                      href="#" 
                      className="block px-4 py-2.5 text-sm lg:text-md text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 border-l-4 border-transparent hover:border-blue-500"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div> */}
            
            {/* <a 
              href="#" 
              className="text-gray-700 hover:text-black font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
              Blog
            </a> */}
          </div>

          {/* Contact Section */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button className="hidden md:inline-flex items-center text-white px-4 py-2 lg:px-5 lg:py-2.5 border border-[#1d438d] bg-[#1d438d] text-sm lg:text-lg font-medium rounded-md hover:bg-black hover:text-white transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
              Contact
            </button>
            
            {/* <a 
              href="#" 
              className="p-1.5 sm:p-2 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-110"
              aria-label="WhatsApp"
            >
              <img 
                className="h-8 w-8 md:h-10 md:w-10 lg:h-11 lg:w-11" 
                src="/images/whatsapp.png" 
                alt="WhatsApp" 
                width="44"
                height="44"
              />
            </a> */}
            
            {/* Mobile menu button - Always shows hamburger, never X */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
              aria-label={isMobileMenuOpen ? "Menu is open" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {/* Hamburger icon - Always shows 3 lines, never changes to X */}
              <svg 
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Full screen overlay */}
        <div className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}>
          {/* Backdrop - NO CLICK FUNCTIONALITY */}
          <div 
            className={`absolute inset-0 bg-black transition-opacity duration-300 ease-in-out ${
              isMobileMenuOpen ? 'opacity-50' : 'opacity-0'
            }`}
            style={{ pointerEvents: 'none' }} // Disable clicking on backdrop
            aria-hidden="true"
          ></div>
          
          {/* Menu Panel */}
          <div 
            ref={mobileMenuRef}
            className={`absolute top-0 left-0 h-full w-4/5 max-w-sm bg-white z-50 shadow-2xl transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Logo and X button */}
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <div className="flex-shrink-0">
                <a href="/">
                <img 
                  className="h-10 w-12" 
                  src="images/logo.png" 
                  alt="Logo" 
                  width="48"
                  height="40"
                />
                </a>
              </div>
              
              {/* X button - ONLY WAY TO CLOSE THE MENU */}
              <button 
                onClick={closeMobileMenu}
                className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 "
                aria-label="Close menu"
              >
                <svg 
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </button>
            </div>
            
            {/* Menu Items */}
            <div className="px-4 pt-6 pb-8 space-y-1 overflow-y-auto h-[calc(100%-80px)]">
              <a 
                href="/" 
                onClick={handleMobileMenuItemClick}
                className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-all duration-200 active:bg-gray-100"
              >
                Home
              </a>
              <a 
                href="/about" 
                onClick={handleMobileMenuItemClick}
                className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-all duration-200 active:bg-gray-100"
              >
                About
              </a>
              <a 
                href="/service" 
                onClick={handleMobileMenuItemClick}
                className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-all duration-200 active:bg-gray-100"
              >
                Services
              </a>
              
                <a 
                href="/study-in-russia" 
                onClick={handleMobileMenuItemClick}
                className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-all duration-200 active:bg-gray-100"
              >
                Study in Russia
              </a>
              {/* Mobile Dropdown */}
              {/* <div ref={mobileDropdownRef} className="space-y-1">
                <button 
                  onClick={handleMobileDropdownToggle}
                  className="flex items-center justify-between w-full px-4 py-3 text-lg font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-all duration-200 active:bg-gray-100"
                  aria-expanded={isDropdownOpen}
                >
                  <span>Pages</span>
                  <svg 
                    className={`ml-1 h-5 w-5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                <div 
                  className={`pl-6 space-y-1 overflow-hidden transition-all duration-300 ease-in-out ${
                    isDropdownOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
                  }`}
                >
                  {['Courses', 'Admission', 'Job Opportunities', 'Scholarships'].map((item) => (
                    <a 
                      key={item}
                      href="#" 
                      onClick={handleMobileMenuItemClick}
                      className="block px-4 py-2.5 text-base font-medium text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition-all duration-200 active:bg-gray-100"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div> */}
              
              {/* <a 
                href="#" 
                onClick={handleMobileMenuItemClick}
                className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-all duration-200 active:bg-gray-100"
              >
                Blog
              </a> */}
              
              {/* WhatsApp section */}
              <div className="px-4 py-4 border-t mt-4">
                <a 
                  href="#" 
                  onClick={handleMobileMenuItemClick}
                  className="inline-flex items-center p-3 rounded-xl hover:bg-gray-100 transition-all duration-200 bg-gray-50 w-full active:bg-gray-200"
                >
                  <img 
                    className="h-10 w-10" 
                    src="/images/whatsapp.png" 
                    alt="WhatsApp" 
                    width="40"
                    height="40"
                  />
                  <div className="ml-3">
                    <span className="block text-base font-medium text-gray-700">Chat with us</span>
                    <span className="block text-sm text-gray-500">Typically replies in minutes</span>
                  </div>
                </a>
              </div>
              
              {/* Contact button */}
              {/* <button 
                onClick={handleMobileMenuItemClick}
                className="w-full mt-4 px-4 py-3 border border-transparent text-lg font-medium rounded-lg text-white bg-[#1d438d] hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Contact
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;