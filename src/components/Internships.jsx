// Internships.jsx — work experience and internship history section
import { internshipsList } from '../data/portfolioData';

// ── Single Internship Card ────────────────────────────────────────────────
export function InternshipCard({ intern, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between shadow-xl"
    >
      <div>
        {/* Top row: Duration + Internship mini badge */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <span className="font-mono text-xs text-white/50 uppercase tracking-wider">
            {intern.duration}
          </span>
          <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest">
            Internship
          </span>
        </div>

        {/* Role & Organization */}
        <h3 className="text-2xl font-black text-white leading-tight mb-1">
          {intern.role}
        </h3>
        <p className="uppercase text-red-200 text-xs font-bold tracking-wider mb-6">
          {intern.organization}
        </p>

        {/* Skills Gained list */}
        {intern.skills && intern.skills.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xs uppercase font-bold text-white/70 tracking-wider mb-3">
              Skills Gained:
            </h4>
            <ul className="space-y-2">
              {intern.skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-start gap-2.5 text-sm text-white/90 font-medium"
                >
                  <span className="text-white/60 font-bold leading-tight select-none">
                    •
                  </span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Bottom row: Technologies */}
      {intern.tech && intern.tech.length > 0 && (
        <div className="border-t border-white/10 pt-5 mt-4">
          <h4 className="text-xs uppercase font-bold text-white/70 tracking-wider mb-3">
            Technologies:
          </h4>
          <div className="flex flex-wrap gap-2">
            {intern.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-xs px-2.5 py-1 rounded-md bg-white/10 text-white/90 border border-white/10"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Main Internships Section ──────────────────────────────────────────────
export default function Internships() {
  if (!internshipsList || internshipsList.length === 0) {
    return null;
  }

  return (
    <section
      id="experience"
      className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
    >
      {/* ── Top torn-paper divider (transition from previous dark section) ── */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none -translate-y-[1px] rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-20 fill-[#0a0a0a]"
          aria-hidden="true"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      {/* ── Decorative pulsing black star bottom-left ──────────────────── */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="absolute bottom-10 left-8 w-12 h-12 fill-black opacity-20 animate-pulse pointer-events-none"
        aria-hidden="true"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ── Section Header ─────────────────────────────────────────────── */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight mb-4">
            Work Experience
          </h2>
          <p className="text-red-100 text-base md:text-lg max-w-xl mx-auto font-medium">
            Practical industry exposure and frontend engineering contributions in production teams.
          </p>
        </div>

        {/* ── Internships Grid ───────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {internshipsList.map((intern, index) => (
            <InternshipCard
              key={`${intern.organization}-${intern.role}`}
              intern={intern}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

