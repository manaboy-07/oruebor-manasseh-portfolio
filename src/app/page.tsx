import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import SelectedWork from "@/components/SelectedWork";
import About from "@/components/About";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Personal from "@/components/Personal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";
export default function Home() {
  return (
    <MotionProvider>
      <a className="skip" href="#work">
        Skip to work
      </a>
      <div className="preloader" aria-hidden="true">
        <span>
          m<span className="lime">.</span>
        </span>
        <small>MANASSEH ORUEBOR</small>
        <i />
      </div>
      <div className="progress" />
      <Header />
      <main>
        <Hero />
        <Ticker />
        <SelectedWork />
        <About />
        <Experience />
        <TechStack />
        <Personal />
        <Contact />
        <Footer />
      </main>
    </MotionProvider>
  );
}
