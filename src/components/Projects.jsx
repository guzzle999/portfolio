import React from 'react'
import { InteractiveHoverButton } from './ui/interactive-hover-button';

const Projects = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6">
      <div
        id="projects"
        className="md:pt-25 md:pb-12 py-5 flex items-center justify-center font-bold md:text-5xl text-4xl text-white"
      >
        Projects
      </div>
      <div className="md:grid hidden grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full items-center rounded-xl border border-gray-700 bg-[#0F0F0F] shadow-lg shadow-[#bc9fe2]/30 transition-shadow duration-300 p-6">
        <img
          src="p3.jpg"
          alt="devenv"
          className=" flex item-center w-full max-w-[350px] aspect-[3/4]
              object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
        ></img>
        <div className="text-white space-y-4 max-w-md mx-auto">
          <p className="text-zinc-100 text-lg leading-relaxed">
            My journey into software development began with a strong curiosity
            about Artificial Intelligence. This led me to join the SUPER AI
            ENGINEER Season 5 program, where I received hands-on training in AI
            technologies and workflow automation using n8n. As part of the
            program, I developed an AI Chatbot project aimed at supporting local
            entrepreneurs and communities.
          </p>
          <p className="text-zinc-100 text-lg leading-relaxed">
            Later, I joined the Junior Software Developer Bootcamp by Generation
            Thailand, where I built several projects, including a Notes App, a
            personal finance tracking web application (Coin Kept), and a group
            e-commerce web app for a coffee shop.
          </p>
        </div>
      </div>
      <div className="md:pt-10 flex justify-center items-center text-gray-100">
        <div className="max-w-5xl w-full space-y-8 px-4">
          {/* Project Card */}
          {[
            {
              title: "Notory 📝",
              description:
                "A full-stack notes app that supports smart search and AI-driven question answering from user notes.",
              image: "/notory.png",
              link: "https://notory.vercel.app/",
              color: "#a55fe7dd",
              hoverShadow: "hover:shadow-[#a55fe7dd]/30",
            },
            {
              title: "Coin Kept 🪙",
              description:
                "A personal finance tracker that helps users monitor income, expenses, and savings with intuitive dashboards and smart categorization.",
              image: "/coinkept.png",
              link: "https://coinkept.vercel.app/",
              color: "#2bff00",
              hoverShadow: "hover:shadow-[#2bff00]/30",
            },
            {
              title: "Obsidian Sip ☕",
              description:
                "A modern e-commerce platform built collaboratively in an Agile team, featuring product listings, cart, and checkout flow.",
              image: "/obsidiansip2.png",
              link: "https://obsidian-sip.vercel.app",
              color: "#cf9d1e",
              hoverShadow: "hover:shadow-[#D4AF37]/30",
            },
            {
              title: "SmartReply AI 🤖",
              description:
                "A multilingual AI chatbot powered by n8n automation, connecting LINE, Facebook, and Gmail for efficient customer engagement.",
              image: "/chatbot.png",
              link: "https://www.canva.com/design/DAG2nQ6BHhk/P2aEp1J69OYRZVFxklwF_w/view?utm_content=DAG2nQ6BHhk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd8e73a8209",
              color: "#00ffea",
              hoverShadow: "hover:shadow-[#00d9ff]/30",
            },
          ].map((project, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-6 rounded-xl border border-gray-700 bg-[#0F0F0F] shadow-lg ${project.hoverShadow} duration-300 p-6 transform hover:scale-[1.02] transition-transform`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full md:w-[300px] h-[180px] object-cover rounded-xl"
              />
              <div className="flex-1">
                <h2
                  className="text-lg font-semibold pt-2"
                  style={{ color: project.color }}
                >
                  {project.title}
                </h2>
                <p className="text-gray-400 leading-relaxed py-2">
                  {project.description}
                </p>
                <InteractiveHoverButton
                  onClick={() => window.open(project.link, "_blank")}
                  className="text-white cursor-pointer"
                >
                  {project.title.includes("SmartReply")
                    ? "Watch Presentation"
                    : "View Project"}
                </InteractiveHoverButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects