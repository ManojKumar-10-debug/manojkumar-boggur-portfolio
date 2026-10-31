// About.jsx — red "ID badge" section with 3D flippable visiting card and bio
import { useState } from 'react';
import { motion } from 'framer-motion';
import QRCode from 'react-qr-code';
import stackImage from '../assets/about/profile.png';
import { aboutContent, personalInfo, socialLinks } from '../data/portfolioData';

export default function About() {
  const [flipped, setFlipped] = useState(false);

  const qrValue =
    socialLinks.linkedin ||
    (personalInfo.emails?.primary ? `mailto:${personalInfo.emails.primary}` : '');

  return (
    <section
      id="about"
      className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 relative overflow-hidden"
    >
      {/* ── Decorative 4-point star — top right ────────────────────────── */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="absolute top-10 right-10 w-16 h-16 fill-black opacity-30 animate-pulse"
        aria-hidden="true"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      {/* ── Decorative 4-point star — bottom left (delayed pulse) ──────── */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="absolute bottom-24 left-8 w-10 h-10 fill-black opacity-30 animate-pulse"
        style={{ animationDelay: '1s' }}
        aria-hidden="true"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      {/* ── Inner layout ─────────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        {/* ── LEFT — ID badge on a lanyard with 3D Flip ─────────────────── */}
        <div className="md:w-[350px] shrink-0 flex flex-col items-center">
          <motion.div
            className="relative flex flex-col items-center pt-32 w-full max-w-[280px]"
            initial={{ y: -300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ type: 'spring', stiffness: 110, damping: 9, mass: 1.1 }}
          >
            {/* Lanyard string */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-40 bg-black rounded-full z-0" />

            {/* Metal clip rectangle */}
            <div className="relative z-10 w-8 h-5 bg-gray-500 rounded-sm shadow-inner mb-1" />

            {/* Flip Card Wrapper Button */}
            <button
              type="button"
              aria-label="Flip ID card"
              onClick={() => setFlipped((prev) => !prev)}
              className="relative w-full max-w-[280px] -rotate-3 hover:rotate-0 transition-transform duration-500 [perspective:1200px] focus:outline-none cursor-pointer text-left"
            >
              {/* Card Container that flips in 3D */}
              <div
                className="relative w-full aspect-[3/4] transition-transform duration-700 [transform-style:preserve-3d]"
                style={{
                  transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                {/* ── FRONT FACE ────────────────────────────────────────── */}
                <div className="absolute inset-0 [backface-visibility:hidden] bg-gray-900 rounded-2xl p-3 shadow-2xl flex flex-col justify-between">
                  {/* Cutout slot at the top */}
                  <div className="flex justify-center mb-2 shrink-0">
                    <div className="w-12 h-2 bg-gray-700 rounded-full" />
                  </div>

                  {/* Portrait photo */}
                  <img
                    src={stackImage}
                    alt="Manojkumar Boggur — Java Full Stack Developer, TAP Academy student"
                    className="w-full flex-1 min-h-0 rounded-xl object-cover object-top"
                  />
                </div>

                {/* ── BACK FACE (Visiting Card) ─────────────────────────── */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl bg-gradient-to-br from-[#141414] to-[#1f1f1f] shadow-2xl p-5 text-white flex flex-col justify-between overflow-hidden">
                  {/* 6px red bar across the top */}
                  <div className="absolute top-0 left-0 right-0 h-[6px] bg-[#ff2a2a]" />

                  {/* Header info */}
                  <div className="pt-2">
                    <h3 className="text-xl font-black tracking-tight text-white">
                      {personalInfo.brandName}
                      <span className="text-[#ff2a2a]">.</span>
                    </h3>
                    {personalInfo.title && (
                      <p className="text-xs uppercase tracking-widest text-red-400 font-semibold mt-0.5">
                        {personalInfo.title}
                      </p>
                    )}
                    <hr className="border-white/10 my-3" />
                  </div>

                  {/* Contact rows */}
                  <div className="space-y-2 text-xs text-white/85">
                    {personalInfo.emails?.primary && (
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-red-400 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <a
                          href={`mailto:${personalInfo.emails.primary}`}
                          onClick={(e) => e.stopPropagation()}
                          className="truncate hover:text-white hover:underline"
                        >
                          {personalInfo.emails.primary}
                        </a>
                      </div>
                    )}

                    {personalInfo.phone && (
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-red-400 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        <a
                          href={`tel:${personalInfo.phone}`}
                          onClick={(e) => e.stopPropagation()}
                          className="hover:text-white hover:underline"
                        >
                          {personalInfo.phone}
                        </a>
                      </div>
                    )}

                    {personalInfo.location && (
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-red-400 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span className="truncate">{personalInfo.location}</span>
                      </div>
                    )}

                    {socialLinks.linkedin && (
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-red-400 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        <a
                          href={socialLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="hover:text-white hover:underline"
                        >
                          LinkedIn
                        </a>
                      </div>
                    )}

                    {socialLinks.github && (
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-red-400 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        <a
                          href={socialLinks.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="hover:text-white hover:underline"
                        >
                          GitHub
                        </a>
                      </div>
                    )}
                  </div>

                  {/* QR Code at bottom */}
                  {qrValue && (
                    <div className="flex items-center gap-3 pt-2">
                      <div className="bg-white rounded-lg p-1.5 inline-block shrink-0 shadow-sm">
                        <QRCode value={qrValue} size={76} />
                      </div>
                      <span className="text-[10px] text-white/60 leading-tight">
                        Scan to connect
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </button>

            {/* Hint below card */}
            <p className="text-xs font-bold text-black/60 mt-4 select-none">
              Tap the card to flip ↻
            </p>
          </motion.div>
        </div>

        {/* ── RIGHT — heading + bio ─────────────────────────────────────── */}
        <div className="flex-1 pt-4 md:pt-16" data-aos="fade-left">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
            {aboutContent.heading}
          </h2>

          <p
            className="text-lg font-bold leading-relaxed text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />
        </div>
      </div>

      {/* ── Torn-paper white SVG divider along the bottom ────────────────── */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-24 fill-white"
          aria-hidden="true"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
}
