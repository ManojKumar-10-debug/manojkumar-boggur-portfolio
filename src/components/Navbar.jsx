// Navbar.jsx — fixed top navigation with mobile menu
import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

// Navigation links — each becomes an anchor to #sectionname
const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

// Pre-built mailto link for the "Hire Me" button
const hireMeMailto = `mailto:${personalInfo.emails.primary}?subject=Hiring Inquiry – Portfolio&body=Hello ${personalInfo.name},%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);       // mobile menu open/closed
  const [isScrolled, setIsScrolled] = useState(false); // true when scrolled > 50px

  // Listen to scroll and update isScrolled; clean up on unmount
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll(); // Check initial state
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  // Dynamic nav background:
  // - mobile menu open  → dark frosted glass with border
  // - scrolled          → sleek dark frosted glass with bottom border & shadow
  // - top of page       → transparent with taller padding
  const navBg = isOpen
    ? 'bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl'
    : isScrolled
    ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-3.5 shadow-lg'
    : 'bg-transparent py-6';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBg}`}>
      {/* ── Inner wrapper ────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 flex justify-between items-center">

        {/* ── Logo ─────────────────────────────────────────── */}
        <a href="#" className="text-white text-xl md:text-2xl font-black tracking-tight select-none">
          {personalInfo.brandName}
          <span className="text-[#ff2a2a]">.</span>
        </a>

        {/* ── Desktop centre links (hidden on mobile) ───────── */}
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link}>
              {/* group enables the hover underline animation */}
              <a
                href={`#${link.toLowerCase()}`}
                className="relative group text-white/80 hover:text-white font-medium text-sm transition-colors duration-200"
              >
                {link}
                {/* Animated underline: grows from 0 → full width on hover */}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#ff2a2a] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* ── Desktop "Hire Me" pill (hidden on mobile) ────── */}
        <a
          href={hireMeMailto}
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full border border-white/25 bg-white/10 hover:bg-white hover:text-black text-white text-sm font-semibold backdrop-blur-md transition-all duration-200 hover:scale-105"
        >
          Hire Me
        </a>

        {/* ── Mobile hamburger / X button ──────────────────── */}
        <button
          className="md:hidden text-white focus:outline-none p-1 cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? (
            /* X icon */
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* Hamburger icon */
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* ── Mobile dropdown panel ─────────────────────────── */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="px-6 pt-2 pb-6 flex flex-col">
          {navLinks.map((link) => (
            <li key={link} className="border-b border-white/10 last:border-0">
              <a
                href={`#${link.toLowerCase()}`}
                onClick={closeMenu}
                className="block py-3.5 text-white/90 font-semibold text-base hover:text-[#ff2a2a] transition-colors duration-200"
              >
                {link}
              </a>
            </li>
          ))}

          {/* Full-width "Hire Me" button at the bottom of the mobile menu */}
          <li className="mt-4 pt-2">
            <a
              href={hireMeMailto}
              onClick={closeMenu}
              className="block w-full text-center py-2.5 rounded-full border border-white/20 bg-white text-black font-bold text-sm transition-opacity duration-200 hover:opacity-90"
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

