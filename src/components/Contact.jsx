// Contact.jsx — parallax contact form with EmailJS integration and fallback mailto handling
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { emailjsConfig, personalInfo, socialLinks } from '../data/portfolioData';

export default function Contact() {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  // Parallax translation for the giant background "Contact" typography
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%']);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');

    const form = formRef.current;
    if (!form) return;

    const firstName = form.querySelector('#firstName')?.value?.trim() || '';
    const lastName = form.querySelector('#lastName')?.value?.trim() || '';
    const email = form.querySelector('#email')?.value?.trim() || '';
    const message = form.querySelector('#message')?.value?.trim() || '';

    // Validation
    if (!firstName || !email || !message) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    // Verify whether real EmailJS credentials exist
    const isConfigured = Boolean(
      emailjsConfig.serviceId &&
      emailjsConfig.templateId &&
      emailjsConfig.publicKey &&
      emailjsConfig.serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      emailjsConfig.templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      emailjsConfig.publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY'
    );

    if (!isConfigured) {
      // Fallback: trigger pre-formatted mailto link
      const subject = `Portfolio Contact from ${firstName} ${lastName}`.trim();
      const body = `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`;
      const mailtoUrl = `mailto:${personalInfo.emails.primary}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      window.open(mailtoUrl, '_blank');
      setStatus('success');
      form.reset();
      setTimeout(() => setStatus('idle'), 3000);
    } else {
      // Send directly via EmailJS SDK
      try {
        const emailjs = await import('@emailjs/browser');
        await emailjs.sendForm(
          emailjsConfig.serviceId,
          emailjsConfig.templateId,
          formRef.current,
          emailjsConfig.publicKey
        );
        setStatus('success');
        form.reset();
      } catch (err) {
        console.error('EmailJS error:', err);
        setStatus('error');
      } finally {
        setTimeout(() => setStatus('idle'), 4000);
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* ── Background Giant Parallax Typography ───────────────────────── */}
      <motion.div
        style={{ y }}
        className="absolute top-10 left-6 md:left-12 pointer-events-none z-0 select-none"
      >
        <div
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter scale-y-[1.6] origin-top text-white/5"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </div>
      </motion.div>

      {/* ── Foreground Red Contact Card ────────────────────────────────── */}
      <div
        data-aos="fade-up"
        className="relative z-10 ml-auto bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 rounded-tl-[3rem] shadow-2xl"
      >
        {/* Top Header Row */}
        <div className="flex items-center justify-between gap-4 mb-10 pb-6 border-b border-white/20">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
            Reach Me
          </span>
          {socialLinks.instagram && (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold backdrop-blur-sm transition-all duration-200 hover:scale-105"
            >
              DM on Instagram ↗
            </a>
          )}
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-10"
        >
          {/* Two-column layout on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column: Underline Inputs */}
            <div className="flex flex-col gap-8">
              <div>
                <input
                  id="firstName"
                  name="first_name"
                  type="text"
                  required
                  placeholder="First Name *"
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white/80 focus:border-white focus:outline-none transition-colors"
                />
              </div>

              <div>
                <input
                  id="lastName"
                  name="last_name"
                  type="text"
                  placeholder="Last Name"
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white/80 focus:border-white focus:outline-none transition-colors"
                />
              </div>

              <div>
                <input
                  id="email"
                  name="user_email"
                  type="email"
                  required
                  placeholder="Email Address *"
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white/80 focus:border-white focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Right Column: Message Textarea */}
            <div className="flex flex-col">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Your Message *"
                className="w-full bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white/80 focus:border-white focus:outline-none transition-colors resize-none min-h-[140px] h-full"
              />
            </div>
          </div>

          {/* Bottom Area: Checkbox, Notes, and Submit Button */}
          <div className="flex flex-col gap-6 pt-4">
            {/* Permission Checkbox */}
            <label className="flex items-start gap-3 cursor-pointer text-xs md:text-sm text-white/80 select-none">
              <input
                type="checkbox"
                required
                className="mt-0.5 rounded border-white/40 bg-transparent text-[#ff2a2a] focus:ring-0"
              />
              <span>
                I give permission to store and process my data to contact me regarding my inquiry.
              </span>
            </label>

            {/* Note & Urgent Mailto link */}
            <div className="text-xs text-white/70 space-y-1">
              <p>
                Your message will be sent directly to my inbox. I typically respond within 24-48 hours.
              </p>
              {personalInfo.emails?.primary && (
                <p>
                  For urgent inquiries, email me directly at{' '}
                  <a
                    href={`mailto:${personalInfo.emails.primary}`}
                    className="underline hover:text-white font-semibold text-white/90"
                  >
                    {personalInfo.emails.primary}
                  </a>
                  .
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              {status === 'sending' && (
                <button
                  type="button"
                  disabled
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/20 border border-white/20 text-white/70 font-bold text-base cursor-wait"
                >
                  <svg
                    className="animate-spin w-5 h-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                  <span>Sending...</span>
                </button>
              )}

              {status === 'success' && (
                <button
                  type="button"
                  disabled
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-emerald-600 border border-emerald-500 text-white font-bold text-base shadow-lg"
                >
                  <span>Sent Successfully ✓</span>
                </button>
              )}

              {status === 'error' && (
                <button
                  type="button"
                  disabled
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-red-950 border border-red-800 text-white font-bold text-base"
                >
                  <span>Failed — Try Again</span>
                </button>
              )}

              {status === 'idle' && (
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-white text-white font-bold text-base transition-all duration-300 hover:bg-white hover:text-[#ff2a2a] cursor-pointer"
                >
                  <span>Send Message</span>
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
