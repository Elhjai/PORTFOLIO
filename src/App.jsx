import useLenis from "./hooks/useLenis";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Process from "./components/Process";
// import Testimonial from './components/Testimonial'
import Clients from "./components/Clients";
import Blog from "./components/Blog";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  useLenis();

  return (
    <div className="noise-overlay">
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Projects />
        <Services />
        <Process />
        {/* <Testimonial /> */}
        <Clients />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
