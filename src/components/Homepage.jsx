import React, { useState } from 'react'
import ContactButtons from './ui/ContactButtons';
import { AuroraText } from './ui/aurora-text';
import { BorderBeam } from './ui/border-beam';
import { X } from "lucide-react";

const EMAIL_ADDRESS = "amonrat9298@gmail.com";


const Homepage = () => {

  const [isEmailCopied, setIsEmailCopied] = useState(false);

  const handleEmailCopied = () => {
    setIsEmailCopied(true);

    setTimeout(() => {
      setIsEmailCopied(false);
    }, 2000);
  };

  const [activeImage, setActiveImage] = useState(null);

  const handleOpen = (imagePath) => {
        setActiveImage(imagePath);
  };
  const handleClose = () => {
        setActiveImage(null);
  };

  const handleDownload = () => {
      const link =document.createElement("a");
      link.href = "/cv.pdf";
      link.download = "cv.pdf";
      link.click();
  };

  return (
    <div>
      <h1
        id="homepage"
        className="md:pt-50 pt-20 mb-10 flex-row md:flex item-center justify-center mx-10 font-extrabold md:text-5xl text-xl text-zinc-100 "
      >
        Hello, I’m
        <span>
          <AuroraText className="ml-2 mr-2"> Amonrat Pratoomchai</AuroraText>
        </span>
      </h1>
      <h2 className="font-extrabold flex items-center justify-center md:text-4xl text-xl text-zinc-100 mb-10">
        a Junior Full Stack Developer
      </h2>
      <h2 className="pb-12 mx-10 flex item-center justify-center font-bold md:text-2xl text-lg text-zinc-100 ">
        Building smart, scalable, and user-focused web solutions
      </h2>

      <div className="mt-12 flex items-center justify-center flex-col gap-4">
        <button
          className="relative px-6 py-3 rounded-xl font-semibold cursor-pointer
  text-blue-100 bg-blue-500/10 border border-blue-400/20
  backdrop-blur-xl transition-all duration-300
  hover:text-white hover:bg-blue-500/20
  hover:shadow-[0_0_20px_rgba(59,130,246,0.5) ]
  "
          onClick={() => handleOpen("/newcv.png")}
        >
          View My Resume ✨
        </button>
        <button
          className="relative px-6 py-3 rounded-xl font-semibold cursor-pointer
  text-blue-100 bg-blue-500/10 border border-blue-400/20
  backdrop-blur-xl transition-all duration-300
  hover:text-white hover:bg-blue-500/20
  hover:shadow-[0_0_20px_rgba(59,130,246,0.5) ]
  "
          onClick={handleDownload}
        >
          ✨ Download My Resume
          <BorderBeam duration={8} size={70} />
        </button>
      </div>

      <div className="md:flex hidden items-center justify-center md:mt-6 md:py-12">
        <ContactButtons onEmailCopy={handleEmailCopied} />
        <p className="text-white md:text-xl text-sm font-bold ">
          {isEmailCopied ? "Email copied!" : EMAIL_ADDRESS}
        </p>
      </div>
      {activeImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white hover:text-red-400"
          >
            <X className="w-6 h-6 cursor-pointer" />
          </button>
          <img
            src={activeImage}
            alt="Resume"
            className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-lg pointer-events-none select-none"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>
      )}
    </div>
  );
}

export default Homepage