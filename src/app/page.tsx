import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/experience";
import Hero from "@/components/sections/hero/Hero";
import Project from "@/components/sections/Project";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <About /> */}
      <Experience />
      <Education />
      <Project />
      <Skills />
      <Contact />
    </>
  );
}
