// App.jsx — root component; sections are composed in strict chronological order
import SplashCursor from './components/SplashCursor';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechnicalSkills from './components/TechnicalSkills';
import Services from './components/Services';
import Projects from './components/Projects';
import Internships from './components/Internships';
import Leadership from './components/Leadership';
import SoftSkills from './components/SoftSkills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { internshipsList, leadershipList } from './data/portfolioData';

function App() {
  return (
    <>
      {/* Fluid splash cursor trail (pointer-events: none, z-index: 50) */}
      <SplashCursor
        VELOCITY_DISSIPATION={3}
        SPLAT_FORCE={3500}
        COLOR_UPDATE_SPEED={18}
        COLOR="#ffffff"
        RAINBOW_MODE={false}
      />

      {/* 1. Preloader */}
      <Preloader />

      {/* 2. Navbar */}
      <Navbar />

      <main>
        {/* 3. Hero */}
        <Hero />

        {/* 4. About */}
        <About />

        {/* 5. IntroVideo (not created yet) */}

        {/* 6. TechnicalSkills */}
        <TechnicalSkills />

        {/* 7. Services (Process) */}
        <Services />

        {/* 8. Projects */}
        <Projects />

        {/* 9. Internships (rendered only if array is non-empty) */}
        {internshipsList && internshipsList.length > 0 && <Internships />}

        {/* 10. Leadership (rendered only if array is non-empty) */}
        {leadershipList && leadershipList.length > 0 && <Leadership />}

        {/* 11. SoftSkills */}
        <SoftSkills />

        {/* 12. Contact */}
        <Contact />
      </main>

      {/* 13. Footer */}
      <Footer />
    </>
  );
}

export default App;
