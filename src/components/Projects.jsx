// Projects.jsx — showcase of featured projects with gradient borders and tech tags
import { projects, socialLinks } from '../data/portfolioData';

// ── Inline SVG Icons ──────────────────────────────────────────────────────
export function GitHubIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export function ExternalLinkIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}

// ── Single Project Card with 1px Gradient Border ──────────────────────────
export function ProjectCard({ project, aosDelay }) {
  const isFlagship = project.isFlagship;
  const hasLiveDemo = Boolean(project.links?.demo && project.links.demo.trim() !== '');

  // 1px border styling: red gradient for flagship, white/10 for standard
  const borderGradientClass = isFlagship
    ? 'bg-gradient-to-br from-red-500/50 via-white/10 to-red-500/30 hover:from-red-500/80 hover:via-white/20 hover:to-red-500/50'
    : 'bg-white/10 hover:bg-white/20';

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className={`p-[1px] rounded-2xl transition-all duration-300 shadow-xl ${borderGradientClass}`}
    >
      {/* Inner dark panel */}
      <div className="rounded-2xl p-6 md:p-8 backdrop-blur-md bg-[#0f0f0f]/90 h-full flex flex-col justify-between">
        <div>
          {/* Optional badge */}
          {project.badge && (
            <div className="mb-4">
              <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[#ff2a2a] text-xs font-bold uppercase tracking-widest">
                {project.badge}
              </span>
            </div>
          )}

          {/* Header row: Title + faint serif number */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight">
              {project.title}
            </h3>
            {project.number && (
              <span className="text-5xl font-black font-serif italic text-white/10 select-none shrink-0 leading-none">
                {project.number}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tech Tag Pills */}
          {project.techTags && project.techTags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {project.techTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-bold transition-all duration-200 hover:bg-red-500/20 hover:border-red-500/40 hover:text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold transition-all duration-200"
            >
              <GitHubIcon />
              <span>GitHub</span>
            </a>
          )}

          {hasLiveDemo ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ff2a2a] hover:bg-[#e02424] text-white text-sm font-semibold transition-all duration-200 shadow-[0_0_20px_rgba(255,42,42,0.3)]"
            >
              <span>Live Demo</span>
              <ExternalLinkIcon />
            </a>
          ) : (
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/40 text-sm font-medium cursor-not-allowed select-none"
              aria-disabled="true"
            >
              <span>Demo Coming Soon</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Main Projects Section ─────────────────────────────────────────────────
export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0a0a0a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* ── Section Header ─────────────────────────────────────────────── */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-[#ff2a2a] text-xs font-semibold uppercase tracking-widest mb-4">
            Featured Projects
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4">
            Work that speaks for itself
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto">
            A showcase of full-stack web applications, robust backend architectures, and user-centric interfaces.
          </p>
        </div>

        {/* ── Project Cards List ─────────────────────────────────────────── */}
        <div className="flex flex-col gap-6 md:gap-8 max-w-4xl mx-auto mb-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id || project.title}
              project={project}
              aosDelay={(index + 1) * 100}
            />
          ))}
        </div>

        {/* ── Explore Repositories CTA Button ────────────────────────────── */}
        {socialLinks.github && (
          <div data-aos="fade-up" className="text-center">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold transition-all duration-300 hover:scale-105 hover:border-red-500/40 hover:shadow-[0_0_25px_rgba(255,42,42,0.2)]"
            >
              <GitHubIcon className="w-5 h-5" />
              <span>Explore All My Repositories</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

