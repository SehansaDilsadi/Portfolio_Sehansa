
// Force IDE TS Server refresh
import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Projects from "./components/Projects.tsx";
import Experience from "./components/Experience.tsx";
import Certifications from "./components/Certifications.tsx";
import Footer from "./components/Footer.tsx";
import './App.css';

function App() {
  return (
    <>
      {/* Background Animated Spheres */}
      <div className="bg-gradient-sphere sphere-1"></div>
      <div className="bg-gradient-sphere sphere-2"></div>
      <div className="bg-gradient-sphere sphere-3"></div>

      <Header />

      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Certifications />
      </main>

      <Footer />
    </>
  );
}

export default App;
