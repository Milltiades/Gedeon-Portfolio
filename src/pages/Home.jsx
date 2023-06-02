import React from "react";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ProjectSection from "../components/projectSection";
import Contact from "../components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProjectSection />
      <Contact />
    </>
  );
}
