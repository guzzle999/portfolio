import React from 'react'
import { Code2, Server, Database, Users, Wrench } from "lucide-react";
import { HyperText } from './ui/hyper-text';
import { AuroraText } from './ui/aurora-text';

const Skills = () => {
  return (
    <>
      <div
        id="skills"
        className="md:pt-25 pt-20 md:pb-12 py-5 flex items-center justify-center font-bold md:text-5xl text-4xl text-gray-300"
      >
        My <AuroraText className="ml-2">Skills</AuroraText>
      </div>
      <section className="flex justify-center items-center text-gray-200">
        <div className="relative p-[2px] rounded-xl overflow-hidden max-w-5xl w-full">
          <div className="relative bg-[#0b0b0b]/70 shadow-[0_0_30px_rgba(0,255,255,0.2)] border-white/10 backdrop-blur-lg border rounded-xl grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-700  p-6 md:p-8">
            <div className="px-6 py-4">
              <div className="flex items-center gap-2 mb-3">
                <Code2 className="text-pink-500 w-5 h-5" />
                <HyperText className="text-lg font-semibold text-pink-500">
                  Frontend
                </HyperText>
              </div>
              <p className="text-gray-400 leading-relaxed">
                HTML5, CSS, Tailwind CSS, JavaScript, React
              </p>
            </div>
            <div className="px-6 py-4">
              <div className="flex items-center gap-2 mb-3">
                <Server className="text-sky-400 w-5 h-5" />
                <HyperText className="text-lg font-semibold text-sky-400">
                  Backend
                </HyperText>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Node.js (Express), Python
              </p>
              <div className="flex items-center gap-2 mb-3">
                <Database className="text-[#CBA0FF] w-5 h-5" />
                <HyperText className="text-lg font-semibold text-[#CBA0FF]">
                  Databases
                </HyperText>
              </div>
              <p className="text-gray-400 leading-relaxed">
                MongoDB, PostgreSQL
              </p>
            </div>
            <div className="px-6 py-4">
              <div className="flex items-center gap-2 mb-3">
                <Wrench className="text-amber-400 w-5 h-5" />
                <HyperText className="text-lg font-semibold text-amber-400">
                  Tools & Others
                </HyperText>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Git, Vite, VS Code, Docker, n8n, Trello, Figma
              </p>
            </div>
            <div className="px-6 py-4">
              <div className="flex items-center gap-2 mb-3">
                <Users className="text-[#98FF98] w-5 h-5" />
                <HyperText className="text-lg font-semibold text-[#98FF98]">
                  Soft Skills
                </HyperText>
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