import React from 'react'
import { Dock, DockIcon } from "@/components/ui/dock";
import { Icons } from './icons/IconList';
import { ArrowUpIcon } from 'lucide-react';
import { AuroraText } from './ui/aurora-text';


const Contact = () => {
  return (
    <div className="py-10">
      <div
        id="contact"
        className="pt-5 pb-6 flex items-center justify-center font-bold text-4xl text-gray-300 "
      >
        <h3>Get In Touch</h3>
      </div>
      <Dock iconMagnification={60} iconDistance={100}>
        <DockIcon>
          <Icons.gitHub
            className="size-full"
            onClick={() =>
              window.open("https://github.com/guzzle999", "_blank")
            }
          />
        </DockIcon>
        <DockIcon>
          <Icons.linkedin
            className="size-full"
            onClick={() =>
              window.open("https://linkedin.com/in/amonrat28/", "_blank")
            }
          />
        </DockIcon>
        <DockIcon>
          <Icons.whatsapp
            className="size-full"
            onClick={() => {
              alert("Opening WhatsApp...");
              window.open(
                "https://wa.me/66859149582?text=Hello!%20I%E2%80%99m%20contacting%20you%20from%20your%20portfolio%20website.",
                "_blank"
              );
            }}
          />
        </DockIcon>
        <DockIcon>
          <Icons.email
            className="size-full"
            onClick={() => window.open("mailto:amonrat9298@gmail.com")}
          />
        </DockIcon>
      </Dock>
    </div>
  );
}

export default Contact