import Navbar from "./components/navigation";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import TechStack from "./components/techStack";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

