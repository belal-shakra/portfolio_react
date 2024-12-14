import Hero from "./Hero";
import About from "./sections/About";
import Resume from "./sections/Resume/Resume";
import Project from "./sections/Project/Project";
import Certificates from "./sections/Certificates/Certificates";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer";

export default function Main() {
  return (
    <main>
      <Hero />

      <About />

      <Resume />

      <Project />

      <Certificates />

      <Contact />

      <Footer />
    </main>
  );
}
