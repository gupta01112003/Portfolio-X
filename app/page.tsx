import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Contact from "./components/contact";
import Footer from "./components/footer";
import VisualEffects from "./components/visualeffect";

export default function Home() {
  return (
    <>
      <VisualEffects />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        
      </main>

      <Footer />
    </>
  );
}