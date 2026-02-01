import Navbar from "./components/navigation";
import HeroSection from "./components/hero";
import Hero from "./components/heroo";
import About from "./components/about";
import Projects from "./components/projects";
import TechStack from "./components/techStack";
import Contact from "./components/contact";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Snap container */}
      <main className="h-screen overflow-y-scroll scroll-smooth pt-24">

        <Hero />

        <About />

        <Projects />

        <TechStack />

        <Contact />

      </main>
    </>
  );
}
