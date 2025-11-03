import { useState, useEffect } from "react";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import {
  FaHome,
  FaUser,
  FaCode,
  FaCertificate,
  FaFolderOpen,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

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
      let current = " ";
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
    { name: "Home", href: "#homepage", icon: <FaHome />, type: "section" },
    { name: "About", href: "/aboutme", icon: <FaUser />, type: "route" },
    { name: "Skills", href: "#skills", icon: <FaCode />, type: "section" },
    {
      name: "Projects",
      href: "#projects",
      icon: <FaFolderOpen />,
      type: "section",
    },
    {
      name: "Experience",
      href: "#experience",
      icon: <FaBriefcase />,
      type: "section",
    },
    {
      name: "Certificates",
      href: "#certificates",
      icon: <FaCertificate />,
      type: "section",
    },
    {
      name: "Contact",
      href: "#contact",
      icon: <FaEnvelope />,
      type: "section",
    },
  ];

  return (
    <>
      <ScrollProgress className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 z-[60]" />
      {/* --- DESKTOP NAV --- */}
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-2 px-4 py-2 rounded-full 
        backdrop-blur-md border border-white/10 transition-all duration-500
        ${scrolled ? "bg-white/10 shadow-2xl" : "bg-white/5 shadow-md"}
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}
      `}
      >
        {links.map((link) =>
          link.type === "route" ? (
            <Link
              key={link.name}
              to={link.href}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
        ${
          active === link.href.replace("/", "")
            ? "bg-white/20 text-white shadow-[0_0_10px_rgba(255,255,255,0.6)]"
            : "text-gray-200 hover:bg-white/10 hover:shadow-[0_0_8px_rgba(255,255,255,0.4)]"
        }`}
            >
              {link.name}
            </Link>
          ) : (
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
          )
        )}
      </nav>

      {/* --- MOBILE NAV --- */}
      <nav
        className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-50
        flex md:hidden items-center justify-around gap-1 w-[95vw] max-w-md px-2 py-2 rounded-full
        backdrop-blur-md border border-white/10 transition-all duration-500
        ${scrolled ? "bg-white/10 shadow-2xl" : "bg-white/5 shadow-md"}
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
      >
        {links.map((link) =>
          link.type === "route" ? (
            <Link
              key={link.name}
              to={link.href}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
        ${
          active === link.href.replace("/", "")
            ? "bg-white/20 text-white shadow-[0_0_10px_rgba(255,255,255,0.6)]"
            : "text-gray-200 hover:bg-white/10 hover:shadow-[0_0_8px_rgba(255,255,255,0.4)]"
        }`}
            >
              {link.icon}
            </Link>
          ) : (
            <a
              key={`mobile-${link.name}`}
              href={link.href}
              onClick={() => setActive(link.href.replace("#", ""))}
              aria-label={link.name}
              className={`flex items-center justify-center w-12 h-12 rounded-full text-xl transition-all duration-300
            ${
              active === link.href.replace("#", "")
                ? "bg-white/20 text-white shadow-[0_0_10px_rgba(255,255,255,0.6)]"
                : "text-gray-200 hover:bg-white/10"
            }`}
            >
              {link.icon}
            </a>
          )
        )}
      </nav>
    </>
  );
}
