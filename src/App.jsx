
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Nav from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0f0f] text-slate-100 antialiased">
      <Nav />
      <main>
        <Hero/>
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}