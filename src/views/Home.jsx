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
      <div className="min-h-screen w-full bg-black bg-repeat bg-contain bg-center ">
        <Meteors number={30} />
        <Homepage />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
      </div>
    </>
  );
};

export default Home;
