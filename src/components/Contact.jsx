import React from 'react'
import { Home, Search, Settings } from "lucide-react";
import { Dock, DockIcon } from "@/components/ui/dock";

const Contact = () => {
  return (
    <>
      <div
        id="contact"
        className="pt-5 pb-6 flex items-center justify-center font-bold text-5xl text-gray-300"
      >
        Contact
      </div>
      <Dock>
        <DockIcon>
          <Home />
          <Settings />
          <Search />
        </DockIcon>
      </Dock>
    </>
  );
}

export default Contact