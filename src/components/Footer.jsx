// Footer.jsx — large editorial-style footer with social links
import { personalInfo, socialLinks, footerContent, academy } from '../data/portfolioData';

// Computed once at module load — avoids calling an impure function during render
const currentYear = new Date().getFullYear();

export default function Footer() {

  return (
    <footer className="bg-[#111111] text-[#d4d4d4] py-12 md:py-16 px-5 sm:px-6 md:px-12 font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh]">

      {/* ── TOP ROW ─────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Col 1 — taglines */}
        <div className="flex flex-col gap-2">
          {footerContent.taglines.map((line) => (
            <p key={line}>{line.toUpperCase()}</p>
          ))}
        </div>

        {/* Col 2 — credential + view work */}
        <div className="flex flex-col gap-2 md:items-center">
          <p>{footerContent.credential.toUpperCase()}</p>
          <a
            href="#projects"
            className="underline underline-offset-2 hover:text-white transition-colors duration-200"
          >
            VIEW WORK
          </a>
        </div>

        {/* Col 3 — availability + year */}
        <div className="flex flex-col gap-2 md:items-end">
          <p>AVAILABLE FOR OPPORTUNITIES</p>
          <p>{currentYear}</p>
        </div>
      </div>

      {/* ── MIDDLE — giant brand name ────────────────────────── */}
      <div className="py-20 md:py-24 overflow-hidden text-center">
        <h2
          className="text-[18vw] md:text-[16vw] leading-none font-sans font-bold tracking-tighter lowercase select-none"
          style={{ color: '#f4f4f4' }}
        >
          {personalInfo.brandName.toLowerCase()}
        </h2>
      </div>

      {/* ── BOTTOM ROW ──────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">

        {/* Col 1 — contact link + copyright + TAP Academy credit */}
        <div className="flex flex-col gap-1">
          <a
            href="#contact"
            className="underline underline-offset-2 hover:text-white transition-colors duration-200"
          >
            CONTACT
          </a>
          <p className="text-white/60 mt-1">{footerContent.copyright}</p>
          {/* TAP Academy training credit — required by project rules */}
          <p className="text-white/60 mt-1">
            TRAINED AT{' '}
            <a
              href={academy.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-white transition-colors duration-200"
            >
              {academy.name.toUpperCase()}
            </a>
          </p>
        </div>

        {/* Col 2 — email + social icons */}
        <div className="flex flex-col gap-3 md:items-center">
          {/* Primary email as a mailto link */}
          <a
            href={`mailto:${personalInfo.emails.primary}`}
            className="underline underline-offset-2 hover:text-white transition-colors duration-200"
          >
            {personalInfo.emails.primary.toUpperCase()}
          </a>

          {/* Social icon row */}
          <div className="flex gap-5 items-center">
            {/* GitHub */}
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="hover:text-white transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="hover:text-white transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram profile"
              className="hover:text-white transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Col 3 — GitHub explore link */}
        <div className="flex flex-col md:items-end">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-white transition-colors duration-200"
          >
            EXPLORE MY GITHUB
          </a>
        </div>
      </div>
    </footer>
  );
}
