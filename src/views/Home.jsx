import React from "react";
import Homepage from "../components/Homepage.jsx";
import AboutMe from "../components/Aboutme.jsx";
import Skills from "../components/Skills.jsx";
import Certificates from "../components/Certificates.jsx";
import Projects from "../components/Projects.jsx";
import Experience from "../components/Experience.jsx";
import Contact from "../components/Contact.jsx";
import { Meteors } from "@/components/ui/meteors.jsx";
const Home = () => {
  return (
    // <div
    //   className="min-h-screen w-full
    //           bg-gradient-to-b from-[#000004] via-[#242145] to-[#0f0f10]
    //           bg-repeat bg-contain bg-center"
    // >
    <>
      <section className="min-h-screen w-full bg-[url('/bg04.jpg')] bg-no-repeat bg-cover bg-center relative overflow-hidden ">
        <Meteors number={20} />
        <div div className="relative z-10 h-full">
          <Homepage />
        </div>
      </section>
      <section className="min-h-screen w-full bg-[url('/bg04.jpg')] bg-contain bg-center  bg-black/50 bg-blend-overlay">
        <div className="container mx-auto">
          <Skills />
          <Projects />
          <Experience />
          <Certificates />
          <Contact />
        </div>
      </section>
    </>
  );
};

export default Home;
