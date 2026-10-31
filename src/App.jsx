// App.jsx — root component; sections are composed here in order
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        {/* Further sections will be added here in later steps */}
      </main>

      <Footer />
    </>
  );
}

export default App;
