# Manojkumar Boggur — Portfolio

A high-performance, single-page developer portfolio showcasing full-stack web applications, RESTful microservices, and modern UI engineering.

**Live site:** [https://my-portfolio-xi-taupe.vercel.app/](https://my-portfolio-xi-taupe.vercel.app/)

Built during the placement training program at [TAP Academy](https://thetapacademy.com/) (full-stack development, AI and augmented reality training).

---

## 🛠️ Tech Stack

- **Framework & Runtime:** React 19, Vite
- **Styling:** Tailwind CSS 4
- **Animations & Effects:** Framer Motion, AOS (Animate On Scroll), WebGL (fluid splash cursor)
- **Communications:** EmailJS (`@emailjs/browser`)

---

## 💻 Run Locally

Clone the repository and install dependencies:

```bash
git clone https://github.com/ManojKumar-10-debug/manojkumar-boggur-portfolio.git
cd manojkumar-boggur-portfolio
npm install
```

Start the local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## 🔐 Environment Variables

Create a `.env.local` file in the project root to configure EmailJS:

```env
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

*(If these variables are omitted, the contact form automatically falls back to an optimized pre-filled email client mailto draft.)*

---

## 📜 Credits

Built during the placement training program at [TAP Academy](https://thetapacademy.com/) (full-stack development, AI and augmented reality training).
