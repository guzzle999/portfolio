import React from "react";
import { AuroraText } from "./ui/aurora-text";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Particles } from "./ui/particles";

const Aboutme = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-center justify-center px-6">
      <h1
        id="aboutme"
        className="md:pb-10 pb-5 flex items-center justify-center font-bold md:text-5xl text-5xl md:text-gray-300 text-white"
      >
        About<AuroraText className="ml-2">Me</AuroraText>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 md:max-w-5xl max-w-6xl w-full items-center mx-auto md:px-6 p-4 border border-white/20 bg-white/10 backdrop-blur-xl shadow-xl shadow-purple-500/20 rounded-xl transition z-10">
        <div className="text-white space-y-4 text-center md:text-left">
          <p className="text-white md:text-lg leading-relaxed">
            I’m a Junior Full Stack Developer passionate about modern web
            technologies and AI-driven solutions.
          </p>
          <p className="text-white md:text-lg leading-relaxed">
            With a professional background in sales and customer service, I
            bring strong problem-solving, communication, and user-centric
            thinking into every project — ensuring that the technology I build
            truly aligns with real business needs.
          </p>
          <p className="text-white md:text-lg leading-relaxed">
            I’m continuously upskilling and exploring new tools in the web
            development ecosystem, excited to contribute to meaningful products
            and keep growing in this field.
          </p>
          <button
            onClick={() => navigate("/")}
            className="mb-6 relative flex px-2 py-2 md:px-6 md:py-3 rounded-xl font-semibold cursor-pointer
  text-blue-100 border border-purple-800
  backdrop-blur-xl transition-all duration-300
  hover:text-white hover:bg-purple-500/20
  "
          >
            <ArrowLeft className="mr-2" /> Back to Home
          </button>
        </div>

        <div className="md:flex justify-center md:justify-end hidden">
          <img
            src="mypicture.jpg"
            alt="Profile"
            className="w-full max-w-[330px] aspect-[3/4] object-cover rounded-2xl md:my-6 transition duration-500 hover:scale-105
    hover:shadow-[0_0_45px_rgba(0,160,255,0.5)]"
          ></img>
        </div>
      </div>
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
    </section>
  );
};

export default Aboutme;
