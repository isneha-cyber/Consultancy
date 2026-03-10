import { useEffect, useRef, useState } from "react";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
];

export default function BottomBanner() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        .btm-bnr-wrap { font-family: 'Poppins', sans-serif; }

        .btm-fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .btm-fade-in.show  { opacity: 1; transform: translateY(0); }
        .btm-fade-in.delay-1 { transition-delay: 0.10s; }
        .btm-fade-in.delay-2 { transition-delay: 0.22s; }
        .btm-fade-in.delay-3 { transition-delay: 0.34s; }
        .btm-fade-in.delay-4 { transition-delay: 0.46s; }

        .social-icon-btn {
          width: 42px; height: 42px;
          border-radius: 9px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(255,255,255,0.15);
          color: white;
          transition: background 0.2s ease, transform 0.2s ease;
          flex-shrink: 0;
        }
        .social-icon-btn:hover {
          background: rgba(255,255,255,0.28);
          transform: translateY(-2px);
        }

        .contact-btn {
          display: inline-flex; align-items: center; justify-content: center;
          background: white; color: #1d438d;
          font-weight: 600; font-size: 15px;
          padding: 13px 34px; border-radius: 9px;
          text-decoration: none;
          transition: background 0.2s, box-shadow 0.2s, transform 0.2s;
          white-space: nowrap; flex-shrink: 0;
        }
        .contact-btn:hover {
          background: #f0f5ff;
          box-shadow: 0 4px 16px rgba(0,0,0,0.15);
          transform: translateY(-1px);
        }
      `}</style>

      {/* ── outer padding wrapper ── */}
      <div className="btm-bnr-wrap w-full px-4 sm:px-8 lg:px-16 xl:px-24 py-10 sm:py-14">

        {/*
          NO overflow-hidden here — the image is allowed to grow above the card.
          The card itself clips left/right/bottom via its own overflow-hidden.
          The image div sits outside the card's overflow, anchored absolutely.
        */}
        <div className="relative">

          {/* ── blue card — clips its own content but NOT the absolute image ── */}
          <div
            ref={ref}
            className="relative bg-[#1d438d] rounded-2xl overflow-hidden"
            style={{ minHeight: "clamp(300px, 33vw, 420px)" }}
          >
            {/* ── LEFT CONTENT ── */}
            <div
              className="relative z-10 flex flex-col justify-center px-8 sm:px-12 lg:px-16 pt-12 pb-10 sm:pb-14"
              style={{ maxWidth: "clamp(300px, 56%, 620px)" }}
            >
              {/* Headline */}
              <h2 className={`btm-fade-in${visible ? " show" : ""} delay-1
                              text-white font-semibold leading-tight mb-5
                              text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl`}>
                Get Ready To Begin{" "}
                <br className="hidden sm:block" />
                <span className="relative inline-block font-bold">
                  Your Journey
                  <img
                    src="/images/underline.png"
                    alt="" aria-hidden="true"
                    className="absolute left-0 w-full pointer-events-none select-none"
                    style={{ bottom: "-8px", height: "8px", objectFit: "fill" }}
                  />
                </span>
              </h2>

              {/* Subtitle */}
              <p className={`btm-fade-in${visible ? " show" : ""} delay-2
                             text-blue-100 text-base sm:text-lg font-light mb-9 max-w-sm leading-relaxed`}>
                Explore more, stay informed, and start your journey to academic excellence.
              </p>

              {/* CTA + desktop socials */}
              <div className={`btm-fade-in${visible ? " show" : ""} delay-3 flex flex-wrap items-center gap-3`}>
                <a href="/contact" className="contact-btn">Contact Us</a>

                <div className="hidden sm:flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2 flex-wrap">
                  {socialLinks.map((s) => (
                    <a key={s.label} href={s.href}
                       target="_blank" rel="noopener noreferrer"
                       aria-label={s.label} className="social-icon-btn">
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile socials */}
              <div className={`btm-fade-in${visible ? " show" : ""} delay-4 sm:hidden mt-6 flex flex-wrap gap-2`}>
                {socialLinks.map((s) => (
                  <a key={s.label} href={s.href}
                     target="_blank" rel="noopener noreferrer"
                     aria-label={s.label} className="social-icon-btn">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

         
          <div className="absolute bottom-0 right-0 sm:right-4 lg:right-8 xl:right-12 z-20 hidden sm:block pointer-events-none select-none">
            <img
              src="/images/btm.webp"
              alt="Student ready to study abroad"
              className="object-contain object-bottom block"
              style={{
                height: "clamp(340px, 42vw, 540px)",
                width: "auto",
                maxWidth: "500px",
              }}
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
          </div>

        </div>
      </div>
    </>
  );
}