import React from 'react'
import { SparklesText } from "@/components/ui/sparkles-text";

const Aboutme = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <SparklesText
        id="aboutme"
        className=" pt-30 pb-12 flex items-center justify-center font-bold text-5xl text-gray-300 "
      >
        About Me
      </SparklesText>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl w-full items-center">
        <div className="text-white space-y-4 max-w-md mx-auto">
          <p className="text-zinc-300 text-lg leading-relaxed">
            Aspiring Full Stack Developer with a strong interest in AI and
            modern web technologies.{" "}
          </p>
          <p className="text-zinc-300 text-lg leading-relaxed">
            Experienced in building scalable, user-centric applications through
            hands-on projects across frontend and backend.
          </p>
          <p className="text-zinc-300 text-lg leading-relaxed">
            Brings nearly 5 years of professional background in sales and
            customer service, combining problem-solving and communication skills
            to bridge technical solutions with real user needs.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="mypicture.jpg"
            alt="Profile"
            className=" w-full max-w-[300px] aspect-[3/4]
              object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
          ></img>
        </div>
      </div>
    </section>
  );
}

export default Aboutme