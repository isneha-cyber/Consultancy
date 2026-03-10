import React, { useState, useEffect, useRef } from 'react';

const navLinks = [
  { label: 'Home',            href: '/' },
  { label: 'About',           href: '/about' },
  { label: 'Services',        href: '/service' },
  { label: 'Study in Russia', href: '/study-in-russia' },
];

const SOCIALS = [
  { label: 'Facebook',  d: 'M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z' },
  { label: 'Instagram', d: 'M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z' },
  { label: 'LinkedIn',  d: 'M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176H72V104H96Zm-12-84a12,12,0,1,1,12-12A12,12,0,0,1,84,92Zm100,84H160V140c0-11-4-18-13-18a14.22,14.22,0,0,0-13,9.5,17.75,17.75,0,0,0-1,6.5v38H109V104h24v11.29C137,109,143.85,103,154,103c17,0,30,11,30,34.51Z' },
];

const PhoneIcon = ({ size = 12 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 256 256" fill="currentColor">
    <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46Z"/>
  </svg>
);
const MailIcon = ({ size = 10 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 256 256" fill="currentColor">
    <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"/>
  </svg>
);
const ClockIcon = ({ size = 10 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 256 256" fill="currentColor">
    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"/>
  </svg>
);
const PinIcon = ({ size = 10 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 256 256" fill="currentColor">
    <path d="M128,16a112,112,0,1,0,112,112A112.12,112.12,0,0,0,128,16Zm0,208a96,96,0,1,1,96-96A96.11,96.11,0,0,1,128,224Zm-8-80V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z"/>
  </svg>
);

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled,     setScrolled]     = useState(false);
  const [activePath,   setActivePath]   = useState('/');
  const mobileRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') setActivePath(window.location.pathname);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  useEffect(() => {
    const handler = (e) => {
      if (mobileRef.current && !mobileRef.current.contains(e.target)) setIsMobileOpen(false);
    };
    if (isMobileOpen) document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [isMobileOpen]);

  const isActive = (href) => activePath === href;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        .nav-root { font-family: 'Poppins', sans-serif; }

        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .topbar-marquee {
          display: flex;
          width: max-content;
          animation: marquee 34s linear infinite;
        }
        .topbar-marquee:hover { animation-play-state: paused; }

        .nav-ul-line {
          position: relative;
          padding-bottom: 3px;
        }
        .nav-ul-line::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 2px;
          background: #1d438d;
          border-radius: 2px;
          transition: width 0.24s cubic-bezier(0.4,0,0.2,1);
        }
        .nav-ul-line:hover::after,
        .nav-ul-line.active::after { width: 100%; }

        .drawer-slide {
          transform: translateX(100%);
          transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .drawer-slide.open { transform: translateX(0); }

        .drawer-row { position: relative; }
        .drawer-row::before {
          content: '';
          position: absolute;
          left: 0; top: 18%; bottom: 18%;
          width: 3px;
          background: #1d438d;
          border-radius: 0 3px 3px 0;
          transform: scaleY(0);
          transition: transform 0.18s ease;
        }
        .drawer-row.active::before,
        .drawer-row:hover::before { transform: scaleY(1); }

        .cta-shimmer { position: relative; overflow: hidden; }
        .cta-shimmer::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.2) 50%, transparent 65%);
          transform: translateX(-100%);
          transition: transform 0.5s ease;
        }
        .cta-shimmer:hover::after { transform: translateX(100%); }
      `}</style>

      {/* TOP BAR */}
      <div className="nav-root bg-[#1d438d]" style={{ position: 'relative', zIndex: 50 }}>
        <div className="h-[38px] flex items-center overflow-hidden">
          <div className="hidden md:flex items-center h-full shrink-0 pl-6 lg:pl-10 xl:pl-16 pr-5"
            style={{ borderRight: '1px solid rgba(255,255,255,0.2)' }}>
            <a href="tel:+977XXXXXXXXXX"
              className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors duration-200"
              style={{ fontSize: 11, fontWeight: 500 }}>
              <PhoneIcon size={10} />
              +977-XXXXXXXXXX
            </a>
          </div>
          <div style={{ flex: 1, overflow: 'hidden' }}>
            <div className="topbar-marquee" style={{ color: 'rgba(255,255,255,0.82)', fontSize: 11, fontWeight: 500, letterSpacing: '0.03em' }}>
              {[0, 1].map(copy => (
                <div key={copy} style={{ display: 'flex', alignItems: 'center', gap: 22, padding: '0 18px' }}>
                  <TItem icon={<MailIcon />}  text="info@albatrossinsights.com" />
                  <TDot /><TItem icon={<ClockIcon />} text="Sun–Fri  |  10:00 AM–6:00 PM (NST)" />
                  <TDot /><TItem icon={<MailIcon />}  text="admissions@albatrossinsights.com" />
                  <TDot /><TItem icon={<PinIcon />}   text="Albatross Insights, Kathmandu, Nepal" />
                  <TDot /><TItem icon={<PhoneIcon />} text="+977-XXXXXXXXXX" />
                  <TDot /><TItem icon={<MailIcon />}  text="partnerships@albatrossinsights.com" />
                  <span style={{ width: 32, flexShrink: 0 }} />
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 h-full shrink-0 pl-4 pr-6 lg:pr-10 xl:pr-16"
            style={{ borderLeft: '1px solid rgba(255,255,255,0.2)' }}>
            {SOCIALS.map(({ label, d }) => (
              <a key={label} href="#" aria-label={label}
                className="flex items-center justify-center rounded-full transition-colors duration-200 hover:bg-white/30"
                style={{ width: 22, height: 22, background: 'rgba(255,255,255,0.15)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 256 256" fill="white"><path d={d}/></svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <nav
        className="nav-root bg-white sticky top-0 z-50"
        style={{
          boxShadow: scrolled
            ? '0 4px 24px rgba(29,67,141,0.12)'
            : '0 1px 0 rgba(0,0,0,0.07)',
          transition: 'box-shadow 0.3s ease',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between" style={{ height: 64 }}>

            {/* Logo */}
            <a href="/" className="flex-shrink-0">
              <img
                src="/images/logo.png"
                alt="Albatross Insights"
                className="h-10 sm:h-11 md:h-[55px] w-auto"
                style={{ transition: 'transform 0.3s ease' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              />
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8 lg:gap-11">
              {navLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className={`nav-ul-line flex items-center font-semibold transition-colors duration-200 ${isActive(href) ? 'text-[#1d438d] active' : 'text-[#2d3748] hover:text-[#1d438d]'}`}
                  style={{ fontSize: 15 }}
                >
                  {label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-2.5">
              <a href="tel:+977XXXXXXXXXX"
                className="hidden lg:flex items-center gap-1.5 font-semibold border rounded-lg sm:rounded-xl px-4 py-2.5 transition-colors duration-200 hover:bg-[#f0f5ff]"
                style={{ color: '#1d438d', fontSize: 13, borderColor: '#d0def5' }}>
                <PhoneIcon size={12} />
                +977-XXXXXXXXXX
              </a>
              <a href="/contact">
                <button
                  className="cta-shimmer inline-flex items-center gap-1.5 font-semibold rounded-lg sm:rounded-xl px-5 py-2.5 tracking-wide shadow-sm transition-colors duration-300"
                  style={{ background: '#1d438d', color: 'white', fontSize: 14, border: 'none', cursor: 'pointer' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#163675'}
                  onMouseLeave={e => e.currentTarget.style.background = '#1d438d'}
                >
                  Contact Us
                </button>
              </a>
            </div>

            {/* Mobile: call icon + hamburger */}
            <div className="md:hidden flex items-center gap-1.5">
              <a
                href="tel:+977XXXXXXXXXX"
                className="flex items-center justify-center rounded-lg sm:rounded-xltransition-all duration-200"
                style={{ width: 36, height: 36, background: '#eaf0f8', color: '#1d438d' }}
                onMouseEnter={e => { e.currentTarget.style.background='#1d438d'; e.currentTarget.style.color='white'; }}
                onMouseLeave={e => { e.currentTarget.style.background='#eaf0f8'; e.currentTarget.style.color='#1d438d'; }}
              >
                <PhoneIcon size={14} />
              </a>
              <button
                onClick={() => setIsMobileOpen(v => !v)}
                aria-label="Toggle menu"
                aria-expanded={isMobileOpen}
                className="flex flex-col justify-center items-center rounded-lg sm:rounded-xl hover:bg-[#f0f5ff] transition-colors duration-200"
                style={{ width: 40, height: 40, gap: 5, background: 'none', border: 'none', cursor: 'pointer' }}
              >
                <span style={{
                  display: 'block', width: 20, height: 2,
                  background: '#1d438d', borderRadius: 2,
                  transition: 'transform 0.28s ease',
                  transformOrigin: 'center',
                  transform: isMobileOpen ? 'translateY(7px) rotate(45deg)' : 'none',
                }} />
                <span style={{
                  display: 'block', width: 20, height: 2,
                  background: '#1d438d', borderRadius: 2,
                  transition: 'opacity 0.2s ease, transform 0.2s ease',
                  opacity: isMobileOpen ? 0 : 1,
                  transform: isMobileOpen ? 'scaleX(0)' : 'scaleX(1)',
                }} />
                <span style={{
                  display: 'block', width: 20, height: 2,
                  background: '#1d438d', borderRadius: 2,
                  transition: 'transform 0.28s ease',
                  transformOrigin: 'center',
                  transform: isMobileOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
                }} />
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* BACKDROP */}
      <div
        onClick={() => setIsMobileOpen(false)}
        style={{
          position: 'fixed', inset: 0, zIndex: 40,
          background: 'rgba(0,0,0,0.38)',
          backdropFilter: 'blur(2px)',
          transition: 'opacity 0.3s ease',
          opacity: isMobileOpen ? 1 : 0,
          pointerEvents: isMobileOpen ? 'auto' : 'none',
        }}
      />

      {/* DRAWER */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 60, pointerEvents: 'none' }}>
        <div
          ref={mobileRef}
          className={`drawer-slide ${isMobileOpen ? 'open' : ''}`}
          style={{
            position: 'absolute', top: 0, right: 0,
            height: '100%', width: '80%', maxWidth: 300,
            background: '#fff',
            display: 'flex', flexDirection: 'column',
            boxShadow: '-8px 0 40px rgba(29,67,141,0.14)',
            pointerEvents: 'auto',
          }}
        >
          {/* header */}
          <div className="flex items-center justify-between px-4 py-3.5 border-b border-[#edf2f7]">
            <span className='text-md'>Menu</span>
            <button
              onClick={() => setIsMobileOpen(false)}
              aria-label="Close menu"
              className="flex items-center justify-center rounded-lg sm:rounded-xl transition-all duration-200 hover:bg-[#1d438d] hover:text-white"
              style={{ width: 32, height: 32, background: '#f4f7fc', color: '#374151', border: 'none', cursor: 'pointer' }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>

          {/* links */}
          <div className="flex-1 overflow-y-auto px-3 py-3 flex flex-col gap-0.5">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsMobileOpen(false)}
                className={`drawer-row flex items-center gap-3 px-4 py-3.5 rounded-lg sm:rounded-xlfont-semibold transition-all duration-200 ${isActive(href) ? 'bg-[#eaf0f8] text-[#1d438d] active' : 'text-[#374151] hover:bg-[#f8fafd] hover:text-[#1d438d]'}`}
                style={{ fontSize: 15 }}
              >
                <span
                  style={{ width: 6, height: 6, borderRadius: '50%', flexShrink: 0, background: isActive(href) ? '#1d438d' : '#d1dbe8' }}
                />
                {label}
                {isActive(href) && <span style={{ marginLeft: 'auto', fontSize: 11, color: 'rgba(29,67,141,0.4)', fontWeight: 400 }}>Current</span>}
              </a>
            ))}
          </div>

          {/* contact strip */}
          <div className="px-4 py-3 border-t border-[#edf2f7] space-y-2.5" style={{ background: '#f7f9fd' }}>
            <a href="mailto:info@albatrossinsights.com"
              className="flex items-center gap-2 hover:text-[#1d438d] transition-colors duration-200"
              style={{ fontSize: 11, color: '#4a6fa5' }}>
              <span style={{ opacity: 0.6, display: 'flex' }}><MailIcon size={10} /></span>
              info@albatrossinsights.com
            </a>
            <a href="tel:+977XXXXXXXXXX"
              className="flex items-center gap-2 hover:text-[#1d438d] transition-colors duration-200"
              style={{ fontSize: 11, color: '#4a6fa5' }}>
              <span style={{ opacity: 0.6, display: 'flex' }}><PhoneIcon size={10} /></span>
              +977-XXXXXXXXXX
            </a>
            <p className="flex items-center gap-2" style={{ fontSize: 11, color: '#4a6fa5', margin: 0 }}>
              <span style={{ opacity: 0.6, display: 'flex' }}><ClockIcon size={10} /></span>
              Sun–Fri &nbsp;|&nbsp; 10:00 AM–6:00 PM (NST)
            </p>
          </div>

          {/* footer */}
          <div className="px-4 py-4 border-t border-[#edf2f7] flex flex-col gap-2.5">
            <a href="/contact" onClick={() => setIsMobileOpen(false)}>
              <button
                className="cta-shimmer w-full flex items-center justify-center gap-2 font-semibold rounded-2rem sm:rounded-3xl  shadow-sm transition-colors duration-300"
                style={{ background: '#1d438d', color: 'white', fontSize: 14, padding: '12px', border: 'none', cursor: 'pointer' }}
                onMouseEnter={e => e.currentTarget.style.background = '#163675'}
                onMouseLeave={e => e.currentTarget.style.background = '#1d438d'}
              >
                Contact Us
              </button>
            </a>
            <p style={{ fontSize: 10, textAlign: 'center', color: '#9ca3af', letterSpacing: '0.05em', margin: 0 }}>
              Albatross Insights Pvt. Ltd · Kathmandu, Nepal
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const TDot = () => (
  <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,0.25)', flexShrink: 0, display: 'inline-block' }} />
);
const TItem = ({ icon, text }) => (
  <span style={{ display: 'flex', alignItems: 'center', gap: 5, flexShrink: 0 }}>
    <span style={{ opacity: 0.6, display: 'flex' }}>{icon}</span>
    {text}
  </span>
);

export default Navbar;