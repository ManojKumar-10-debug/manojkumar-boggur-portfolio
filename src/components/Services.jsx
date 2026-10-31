// Services.jsx — interactive process roadmap with animated SVG trail and reactive hanging tags
import { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';
import { skillsContent } from '../data/portfolioData';

// ── Hanging Tag Card with active state tracking scroll progress ────────────
export function TagCard({
  number,
  title,
  text,
  className = '',
  aosDelay = 100,
  aosType = 'fade-up',
  pathLength,
  containerRef,
}) {
  const cardRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  // Monitor line progress tip and activate when it reaches cardTop + 50px
  useMotionValueEvent(pathLength, 'change', (latest) => {
    if (cardRef.current && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const cardRect = cardRef.current.getBoundingClientRect();
      const cardTopRelativeToContainer = cardRect.top - containerRect.top;
      const containerHeight = containerRect.height;
      const progressPx = latest * containerHeight;

      setIsActive(progressPx >= cardTopRelativeToContainer + 50);
    }
  });

  return (
    <div
      ref={cardRef}
      data-aos={aosType}
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 transition-all duration-700 ${
        isActive
          ? 'bg-[#ff2a2a] shadow-[0_20px_45px_rgba(255,42,42,0.35)] scale-[1.02]'
          : 'bg-white shadow-xl border border-gray-100 hover:shadow-2xl'
      } ${className}`}
    >
      {/* Small punched hole circle at the top */}
      <div className="pt-2 flex justify-center">
        <div
          className={`w-5 h-5 rounded-full border shadow-inner transition-colors duration-700 ${
            isActive ? 'bg-red-900 border-red-500' : 'bg-gray-200 border-gray-300'
          }`}
          aria-hidden="true"
        />
      </div>

      {/* Inner panel */}
      <div
        className={`mt-4 p-8 min-h-[220px] rounded-[1.5rem] flex flex-col justify-between transition-colors duration-700 ${
          isActive
            ? 'bg-red-700/50 text-white'
            : 'bg-[#f4f4f4] text-gray-800'
        }`}
      >
        <div>
          <span
            className={`block text-3xl font-serif italic mb-2 select-none transition-colors duration-700 ${
              isActive ? 'text-white/40' : 'text-gray-400'
            }`}
          >
            {number}
          </span>
          <h3 className="text-2xl font-black tracking-tight mb-3">
            {title}
          </h3>
        </div>

        <p
          className={`text-sm leading-relaxed transition-colors duration-700 ${
            isActive ? 'text-white/90' : 'text-gray-600'
          }`}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

// ── Main Process / Services Section ───────────────────────────────────────
export default function Services() {
  const containerRef = useRef(null);

  // Scroll progress through the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  const desktopCurve =
    'M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200';

  // Desktop positioning configuration for 4 steps
  const cardConfigs = [
    {
      className: 'md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6',
      aosType: 'fade-left',
      aosDelay: 100,
    },
    {
      className: 'md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6',
      aosType: 'fade-right',
      aosDelay: 200,
    },
    {
      className: 'md:top-[700px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3',
      aosType: 'fade-left',
      aosDelay: 300,
    },
    {
      className: 'md:top-[1050px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3',
      aosType: 'fade-right',
      aosDelay: 400,
    },
  ];

  return (
    <section
      id="process"
      ref={containerRef}
      className="bg-white pt-24 pb-32 px-6 md:px-12 relative overflow-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] text-gray-900"
    >
      <div className="max-w-6xl mx-auto relative md:h-[1350px]">
        {/* ── Section Header Block ───────────────────────────────────────── */}
        <div
          data-aos="fade-up"
          className="mb-16 md:mb-0 md:absolute top-10 left-0 md:w-[450px] z-20"
        >
          {skillsContent.badge && (
            <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-[#ff2a2a] text-xs font-semibold uppercase tracking-widest mb-4">
              {skillsContent.badge}
            </span>
          )}

          <div className="relative inline-block mb-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-gray-900">
              {skillsContent.heading}
            </h2>
            {/* Hand-drawn arrow SVG */}
            <svg
              className="absolute -bottom-6 -right-6 w-8 h-8 text-[#ff2a2a] stroke-current fill-none"
              viewBox="0 0 20 20"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10" />
            </svg>
          </div>

          <p className="text-gray-500 text-base md:text-lg leading-relaxed mt-4">
            {skillsContent.description}
          </p>
        </div>

        {/* ── Desktop SVG Interactive Path Trail ─────────────────────────── */}
        <svg
          className="hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none z-0"
          viewBox="0 0 1000 1350"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* 1. Faint guide path */}
          <path
            d={desktopCurve}
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="8 10"
            fill="none"
          />

          {/* 2. Mask revealing path with scroll spring */}
          <mask id="path-mask">
            <motion.path
              d={desktopCurve}
              stroke="white"
              strokeWidth="20"
              fill="none"
              style={{ pathLength }}
            />
          </mask>

          {/* 3. Real dashed path traced in black */}
          <path
            d={desktopCurve}
            stroke="black"
            strokeWidth="2"
            strokeDasharray="8 10"
            fill="none"
            mask="url(#path-mask)"
          />
        </svg>

        {/* ── Mobile SVG Vertical Trail ─────────────────────────────────── */}
        <div className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 w-4 h-full pointer-events-none z-0">
          <svg
            className="w-full h-full"
            viewBox="0 0 4 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* 1. Faint guide path */}
            <path
              d="M 2,0 L 2,100"
              stroke="#cbd5e1"
              strokeWidth="2"
              strokeDasharray="4 6"
              fill="none"
              vectorEffect="non-scaling-stroke"
            />

            {/* 2. Mask revealing vertical path */}
            <mask id="path-mask-mobile">
              <motion.path
                d="M 2,0 L 2,100"
                stroke="white"
                strokeWidth="20"
                fill="none"
                vectorEffect="non-scaling-stroke"
                style={{ pathLength }}
              />
            </mask>

            {/* 3. Real dashed path */}
            <path
              d="M 2,0 L 2,100"
              stroke="black"
              strokeWidth="2"
              strokeDasharray="4 6"
              fill="none"
              vectorEffect="non-scaling-stroke"
              mask="url(#path-mask-mobile)"
            />
          </svg>
        </div>

        {/* ── Tag Cards Container ────────────────────────────────────────── */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10">
          {skillsContent.cards?.map((card, index) => {
            const config = cardConfigs[index] || {
              className: '',
              aosType: 'fade-up',
              aosDelay: 100,
            };

            return (
              <TagCard
                key={card.number || card.title}
                number={card.number}
                title={card.title}
                text={card.text}
                className={`md:absolute ${config.className}`}
                aosDelay={config.aosDelay}
                aosType={config.aosType}
                pathLength={pathLength}
                containerRef={containerRef}
              />
            );
          })}
        </div>

        {/* ── Hand-written End Note ──────────────────────────────────────── */}
        {skillsContent.endText && (
          <div
            className="hidden md:block absolute top-[1250px] left-[60%] font-['Caveat',cursive] text-3xl text-gray-600 rotate-6 select-none"
            aria-hidden="true"
          >
            {skillsContent.endText}
          </div>
        )}
      </div>
    </section>
  );
}

