import React from 'react'
import { SparklesText } from "@/components/ui/sparkles-text";
import { AuroraText } from './ui/aurora-text';

const Aboutme = () => {
  return (
    <section className="md:min-h-screen flex flex-col items-center justify-center px-6 md:py-12 ">
      <h1
        id="aboutme"
        className="md:pt-25 md:pb-6 py-5 flex items-center justify-center font-bold md:text-5xl text-4xl md:text-gray-300 text-white"
      >
        About<AuroraText className="ml-2">Me</AuroraText>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl w-full items-center mx-auto px-6">
        <div className="text-white space-y-4 md:pr-6 text-center md:text-left">
          <p className="text-white text-lg leading-relaxed">
            Aspiring Full Stack Developer with a strong interest in AI and
            modern web technologies.
          </p>
          <p className="text-white text-lg leading-relaxed">
            Experienced in building scalable, user-centric applications through
            hands-on projects across frontend and backend.
          </p>
          <p className="text-white text-lg leading-relaxed">
            Brings nearly 5 years of professional background in sales and
            customer service, combining problem-solving and communication skills
            to bridge technical solutions with real user needs.
          </p>
        </div>
        <div className="md:flex justify-center md:justify-end hidden">
          <img
            src="mypicture.jpg"
            alt="Profile"
            className="w-full max-w-[330px] aspect-[3/4] object-cover rounded-2xl md:mt-4 transition duration-500 hover:scale-105
    hover:shadow-[0_0_45px_rgba(0,160,255,0.5)]"
          ></img>
        </div>
      </div>
    </section>
  );
}

export default Aboutme