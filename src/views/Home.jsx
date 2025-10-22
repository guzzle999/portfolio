import React from 'react'
import Homepage from "../components/Homepage.jsx"
import AboutMe from "../components/Aboutme.jsx"
import Skills from "../components/Skills.jsx"
import Certificates from "../components/Certificates.jsx"
import Projects from "../components/Projects.jsx"
import Experience from "../components/Experience.jsx"
import Contact from "../components/Contact.jsx"
import { Footer } from '../components/Footer.jsx'
const Home = () => {
  return (
    <div
      className="min-h-screen w-full
              bg-gradient-to-b from-[#000004] via-[#242145] to-[#0f0f10] 
              bg-repeat bg-contain bg-center"
    >
      <Homepage />
      <AboutMe />
      <Skills />
      <Certificates />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default Home