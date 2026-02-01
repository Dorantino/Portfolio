import Navbar from "./components/navigation";
import HeroSection from "./components/hero";
import Hero from "./components/heroo";
import About from "./components/about";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Snap container */}
      <main className="h-screen overflow-y-scroll scroll-smooth pt-24">

        <Hero />

        <About />

      </main>
    </>
  );
}
