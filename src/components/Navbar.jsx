import { useState, useEffect } from "react";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // fade/slide-in animation on mount
    const timer = setTimeout(() => setVisible(true), 100);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        const top = section.offsetTop - 100;
        if (window.scrollY >= top) current = section.id;
      });
      if (current) setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { name: "Home", href: "#homepage" },
    { name: "About", href: "#aboutme" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact"},
  ];

  return (
    <>
      <ScrollProgress className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 z-[60]" />
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2 rounded-full 
        backdrop-blur-md border border-white/10 transition-all duration-500
        ${scrolled ? "bg-white/10 shadow-2xl" : "bg-white/5 shadow-md"}
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}
      `}
      >
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setActive(link.href.replace("#", ""))}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
            ${
              active === link.href.replace("#", "")
                ? "bg-white/20 text-white shadow-[0_0_10px_rgba(255,255,255,0.6)]"
                : "text-gray-200 hover:bg-white/10 hover:shadow-[0_0_8px_rgba(255,255,255,0.4)]"
            }`}
          >
            {link.name}
          </a>
        ))}
      </nav>
    </>
  );
}
