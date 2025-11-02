import React, { useState } from 'react'
import ContactButtons from './ui/ContactButtons';
import { InteractiveHoverButton } from './ui/interactive-hover-button';


const EMAIL_ADDRESS = "amonrat9298@gmail.com";


const Homepage = () => {

  const [isEmailCopied, setIsEmailCopied] = useState(false);

  const handleEmailCopied = () => {
    setIsEmailCopied(true);

    setTimeout(() => {
      setIsEmailCopied(false);
    }, 2000);
  };

  return (
    <div>
      <h1
        id="homepage"
        className="md:pt-42 md:pb-20 pt-24 pb-8 flex items-center justify-center font-extrabold md:text-8xl text-5xl text-zinc-100"
      >
        Amonrat
        <br />
        Pratoomchai
      </h1>
      <div className="flex items-center justify-center flex-col gap-4">
        <button
          className="relative px-6 py-3 rounded-xl font-semibold cursor-pointer
  text-blue-100 bg-blue-500/10 border border-blue-400/20
  backdrop-blur-xl transition-all duration-300
  hover:text-white hover:bg-blue-500/20
  hover:shadow-[0_0_20px_rgba(59,130,246,0.5) ]
  "
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
        >
          ✨ Download My Resume
        </button>
      </div>

      <div className="md:flex hidden items-center justify-center py-12">
        <ContactButtons onEmailCopy={handleEmailCopied} />
        <p className="text-white md:text-xl text-sm font-bold ">
          {isEmailCopied ? "Email copied!" : EMAIL_ADDRESS}
        </p>
      </div>
    </div>
  );
}

export default Homepage