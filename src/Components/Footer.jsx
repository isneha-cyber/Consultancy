import { useState } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Clock,
  Phone,
  Mail,
} from "lucide-react";

const socialLinks = [
  { Icon: Facebook, label: "Facebook", href: "#" },
  { Icon: Twitter, label: "Twitter", href: "#" },
  { Icon: Instagram, label: "Instagram", href: "#" },
  { Icon: Linkedin, label: "LinkedIn", href: "#" },
];

const companyLinks = [
  { name: "Terms & Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "Scholarships", href: "#" },
  { name: "Careers", href: "#" },
];

const emailLinks = [
  { text: "info@albatrossinsights.com", href: "mailto:info@albatrossinsights.com" },
  { text: "admissions@albatrossinsights.com", href: "mailto:admissions@albatrossinsights.com" },
  { text: "partnerships@albatrossinsights.com", href: "mailto:partnerships@albatrossinsights.com" },
];

const contactDetails = [
  { Icon: MapPin, text: "Albatross Insights Pvt. Ltd, Kathmandu, Nepal", href: null },
  { Icon: Clock, text: "Sunday – Friday | 10:00 AM – 6:00 PM (NST)", href: null },
  { Icon: Phone, text: "+977-XXXXXXXXXX", href: "tel:+977XXXXXXXXXX" },
];

function NavLink({ name, href }) {
  return (
    <li>
      <a
        href={href}
        className="text-blue-100 hover:text-white text-sm transition-colors duration-300"
      >
        {name}
      </a>
    </li>
  );
}

function ContactItem({ Icon, text, href }) {
  const inner = (
    <div className="flex items-start gap-3">
      <Icon size={14} className="mt-0.5 shrink-0 text-blue-200 opacity-70" />
      <span className="text-blue-100 text-sm leading-relaxed">{text}</span>
    </div>
  );
  if (href) {
    return (
      <li>
        <a href={href} className="hover:text-white transition-colors duration-200 [&>div>span]:hover:text-white">
          {inner}
        </a>
      </li>
    );
  }
  return <li>{inner}</li>;
}

function EmailItem({ text, href }) {
  return (
    <li>
      <a href={href} className="flex items-start gap-3 group">
        <Mail size={14} className="mt-0.5 shrink-0 text-blue-200 opacity-70 group-hover:opacity-100 transition-opacity duration-200" />
        <span className="text-blue-100 text-sm leading-relaxed break-all group-hover:text-white transition-colors duration-200">
          {text}
        </span>
      </a>
    </li>
  );
}

export default function Footer() {
  const [isHovered, setIsHovered] = useState(null);

  return (
    <footer className="bg-[#1d428c] text-white">
      <div className="px-4 sm:px-6 lg:px-24 py-12 sm:py-20">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">

          {/* Brand — 3/12 */}
          <div className="sm:col-span-2 lg:col-span-3">
            <div className="bg-white p-4 inline-block mb-5">
              <img
                src="/images/logo.png"
                alt="Albatross Insights"
                className="h-12 sm:h-16 w-auto"
              />
            </div>
            <p className="text-blue-100 text-sm leading-relaxed mt-2">
              Nepal's trusted consultancy for structured pathways to Russia's leading universities.
            </p>
          </div>

          {/* Company — 2/12 */}
          <div className="lg:col-span-2 lg:pl-4">
            <h3 className="text-white text-lg font-semibold mb-4 pb-2 border-b-2 border-white inline-block">
              Company
            </h3>
            <ul className="space-y-3 mt-4">
              {companyLinks.map((link) => (
                <NavLink key={link.name} {...link} />
              ))}
            </ul>
          </div>

          {/* Contact Us (emails) — 3/12 */}
          <div className="lg:col-span-3 lg:pl-2">
            <h3 className="text-white text-lg font-semibold mb-4 pb-2 border-b-2 border-white inline-block">
              Contact Us
            </h3>
            <ul className="space-y-3 mt-4">
              {emailLinks.map((item, i) => (
                <EmailItem key={i} {...item} />
              ))}
            </ul>
          </div>

          {/* Get In Touch — 4/12 */}
          <div className="lg:col-span-4 lg:pl-2">
            <h3 className="text-white text-lg font-semibold mb-4 pb-2 border-b-2 border-white inline-block">
              Get In Touch
            </h3>
            <ul className="space-y-4 mt-4">
              {contactDetails.map((item, i) => (
                <ContactItem key={i} {...item} />
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/30 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">

            {/* Social Links */}
            <div className="flex items-center gap-4 order-2 sm:order-1">
              <span className="text-sm text-white hidden sm:block">Follow us:</span>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-white text-[#1d428c] transition-all duration-300 p-2.5 rounded-full hover:scale-110 transform"
                    onMouseEnter={() => setIsHovered(index)}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    <social.Icon
                      size={17}
                      className={isHovered === index ? "animate-pulse" : ""}
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className="flex flex-col items-center sm:items-end gap-1 text-center sm:text-right order-1 sm:order-2">
              <div className="text-sm text-white">
                © 2026{" "}
                <span className="font-semibold">Albatross Insights Private Limited</span>
              </div>
              <div className="text-xs text-blue-100">
                Crafted by{" "}
                <a
                  href="https://www.sait.com.np/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-medium hover:underline transition-all duration-300"
                >
                  S.A I.T Solution Nepal
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}