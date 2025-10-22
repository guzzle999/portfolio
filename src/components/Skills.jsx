import React from 'react'
import { Code2, Server, Database, Users, Wrench } from "lucide-react";

const Skills = () => {
  return (
    <>
      <div
        id="skills"
        className="pt-30 pb-6 flex items-center justify-center font-bold text-5xl text-gray-300"
      >
        Skills
      </div>
      <section className="flex justify-center items-center text-gray-200">
        <div className="relative p-[2px] rounded-xl overflow-hidden max-w-5xl w-full">
          <div className="relative bg-[#0b0b0b]/70 rounded-xl grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-700 p-6 md:p-8">
            <div className="px-6 py-4">
              <div className="flex items-center gap-2 mb-3">
                <Code2 className="text-pink-500 w-5 h-5" />
                <h2 className="text-lg font-semibold text-pink-500">
                  Frontend
                </h2>
              </div>
              <p className="text-gray-400 leading-relaxed">
                HTML, CSS (Tailwind), JavaScript, React
              </p>
            </div>
            <div className="px-6 py-4">
              <div className="flex items-center gap-2 mb-3">
                <Server className="text-sky-400 w-5 h-5" />
                <h2 className="text-lg font-semibold text-sky-400">Backend</h2>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Node.js (Express.js)
              </p>
              <div className="flex items-center gap-2 mb-3">
                <Database className="text-[#CBA0FF] w-5 h-5" />
                <h2 className="text-lg font-semibold text-[#CBA0FF]">
                  Database
                </h2>
              </div>
              <p className="text-gray-400 leading-relaxed">
                MongoDB, PostgreSQL
              </p>
            </div>
            <div className="px-6 py-4">
              <div className="flex items-center gap-2 mb-3">
                <Wrench className="text-amber-400 w-5 h-5" />
                <h2 className="text-lg font-semibold text-amber-400">Tools</h2>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Git, Vite, VS Code, Docker Desktop, n8n, Trello, Figma
              </p>
            </div>
            <div className="px-6 py-4">
              <div className="flex items-center gap-2 mb-3">
                <Users className="text-[#98FF98] w-5 h-5" />
                <h2 className="text-lg font-semibold text-[#98FF98]">
                  Soft Skills
                </h2>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Active listening, Empathy, Customer focus, Adaptability, Growth
                mindset, Teamwork, Proactiveness
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills