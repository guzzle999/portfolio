import React, {useState} from 'react'
import { X } from "lucide-react"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { AuroraText } from './ui/aurora-text';

const Certificates = () => {
  const [activeImage, setActiveImage] = useState(null);

  const handleOpen = (imagePath) => {
    setActiveImage(imagePath);
  };
  const handleClose = () => {
    setActiveImage(null);
  };

  return (
    <>
      <div
        id="certificates"
        className="md:pt-25 md:pb-12 py-5 flex items-center justify-center font-bold md:text-5xl text-4xl text-gray-300"
      >
        My <AuroraText className="ml-3">Certificates</AuroraText>
      </div>
      <section className="flex justify-center items-center text-gray-200">
        <div className="relative p-[2px] rounded-xl overflow-hidden max-w-5xl w-full">
          <div className="relative bg-[#0b0b0b]/70 rounded-xl shadow-[0_0_30px_rgba(0,255,255,0.2)] backdrop-blur-lg border-white/10 border grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-700 p-6 md:p-8">
            <div className="px-6 py-4">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold text-[#FF8C69]">
                  Junior Software Developer Program (Cohort 10)
                </h2>
              </div>
              <p className="text-gray-400 leading-relaxed pb-2">
                Generation Thailand • 9 June 2025 - 24 September 2025
              </p>
              <InteractiveHoverButton
                onClick={() => handleOpen("/certificate-JSD.png")}
                className="text-white cursor-pointer "
              >
                View Certificate
              </InteractiveHoverButton>
            </div>
            <div className="px-6 py-4">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold text-[#BFFF00]">
                  AI Innovator (SmartReply AI)
                </h2>
              </div>
              <p className="text-gray-400 leading-relaxed pb-2">
                Artificial Intelligence Association of Thailand • June 2025
              </p>
              <InteractiveHoverButton
                onClick={() => handleOpen("/certificate-AIInnovator-EN.png")}
                className="text-white cursor-pointer "
              >
                View Certificate
              </InteractiveHoverButton>
            </div>
            <div className="px-6 py-4">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold text-[#7F9CF5]">
                  Foundation AI (Theory)
                </h2>
              </div>
              <p className="text-gray-400 leading-relaxed pb-2">
                Artificial Intelligence Association of Thailand • March 2025
              </p>
              <InteractiveHoverButton
                onClick={() => handleOpen("/certificate-AITheory-EN.png")}
                className="text-white cursor-pointer"
              >
                View Certificate
              </InteractiveHoverButton>
            </div>
          </div>
        </div>
      </section>

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
            alt="Certificate"
            className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-lg pointer-events-none select-none"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>
      )}
    </>
  );
}

export default Certificates