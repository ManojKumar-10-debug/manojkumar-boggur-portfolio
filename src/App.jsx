// App.jsx — root component; sections are composed here in order
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechnicalSkills from './components/TechnicalSkills';
import Projects from './components/Projects';
import Internships from './components/Internships';
import Leadership from './components/Leadership';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <TechnicalSkills />
        <Projects />
        <Internships />
        <Leadership />
        {/* Further sections will be added here in later steps */}
      </main>

      <Footer />
    </>
  );
}

export default App;
