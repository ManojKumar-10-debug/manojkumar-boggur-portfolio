// Leadership.jsx — vertical timeline for activities, leadership, and community engagement
import { leadershipList } from '../data/portfolioData';

// ── Single Leadership Timeline Item ──────────────────────────────────────
export function LeadershipItem({ item, index }) {
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between mb-12 last:mb-0 w-full pl-10 md:pl-0">
      {/* ── Desktop Left Column (Card for even, Spacer for odd) ──────── */}
      {isEven ? (
        <div
          data-aos="fade-right"
          className="w-full md:w-[45%] md:text-right"
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-red-500/40 hover:shadow-[0_0_25px_rgba(255,42,42,0.15)] group">
            {item.badge && (
              <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-[#ff2a2a] text-xs font-bold uppercase tracking-widest mb-3">
                {item.badge}
              </span>
            )}
            <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-[#ff2a2a] transition-colors duration-200 mb-1">
              {item.title}
            </h3>
            {item.role && (
              <p className="font-mono text-xs uppercase text-red-400 tracking-wider mb-3 font-semibold">
                {item.role}
              </p>
            )}
            <p className="text-white/60 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ) : (
        <div className="hidden md:block md:w-[45%]" />
      )}

      {/* ── Red Glowing Dot on Timeline Line ─────────────────────────── */}
      <div
        className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#ff2a2a] shadow-[0_0_12px_#ff2a2a] border-2 border-[#0a0a0a] z-10 top-6 md:top-1/2 md:-translate-y-1/2"
        aria-hidden="true"
      />

      {/* ── Desktop Right Column (Spacer for even, Card for odd) ─────── */}
      {!isEven ? (
        <div
          data-aos="fade-left"
          className="w-full md:w-[45%] md:text-left"
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-red-500/40 hover:shadow-[0_0_25px_rgba(255,42,42,0.15)] group">
            {item.badge && (
              <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-[#ff2a2a] text-xs font-bold uppercase tracking-widest mb-3">
                {item.badge}
              </span>
            )}
            <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-[#ff2a2a] transition-colors duration-200 mb-1">
              {item.title}
            </h3>
            {item.role && (
              <p className="font-mono text-xs uppercase text-red-400 tracking-wider mb-3 font-semibold">
                {item.role}
              </p>
            )}
            <p className="text-white/60 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ) : (
        <div className="hidden md:block md:w-[45%]" />
      )}
    </div>
  );
}

// ── Main Leadership Section ──────────────────────────────────────────────
export default function Leadership() {
  const hasItems = Array.isArray(leadershipList) && leadershipList.length > 0;

  return (
    <section
      id="leadership"
      className="bg-[#0a0a0a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
    >
      {/* ── Top torn-paper divider (transition from previous red section) ── */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none -translate-y-[1px] rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-20 fill-[#ff2a2a]"
          aria-hidden="true"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* ── Section Header ─────────────────────────────────────────────── */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-[#ff2a2a] text-xs font-semibold uppercase tracking-widest mb-4">
            Activities
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-4">
            Leadership & Engagement
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto">
            Collaborative initiatives, tech community contributions, and leadership experiences.
          </p>
        </div>

        {/* ── Vertical Timeline ──────────────────────────────────────────── */}
        {hasItems ? (
          <div className="relative mt-16">
            {/* 2px Gradient Center Line */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#ff2a2a] via-red-500/50 to-white/10 left-4 md:left-1/2 -translate-x-1/2"
              aria-hidden="true"
            />

            {/* Timeline Items */}
            <div className="relative z-10">
              {leadershipList.map((item, index) => (
                <LeadershipItem
                  key={item.title || index}
                  item={item}
                  index={index}
                />
              ))}
            </div>
          </div>
        ) : (
          <div data-aos="fade-up" className="text-center py-10">
            <p className="text-white/40 text-sm italic">
              Additional community activities and leadership experiences will be highlighted here.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
