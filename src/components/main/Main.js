import Hero from "./sections/Hero";
import About from "./sections/About";
import Resume from "./sections/Resume/Resume";
import Project from "./sections/Project/Project";
import Certificates from "./sections/Certificates/Certificates";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer";
import useFetch  from "../../hooks/useFetch";

export default function Main({data}) {
  return (
    <main>
      <Hero />

      <About about={data.about[0]} />

      <Resume resume={data.resume[0].sections} />

      <Project projects={data.projects} />

      <Certificates />

      <Contact />

      <Footer />
    </main>
  );
}
