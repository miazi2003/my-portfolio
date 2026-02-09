import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaDownload, FaTimes } from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";
import LogoOfMe from "../logo/LogoOfMe";

const NAV_OFFSET = 90;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#home"); // logic only

  const navLinks = useMemo(
    () => [
      { path: "#home", label: "Home" },
      { path: "#about", label: "About" },
      { path: "#skills", label: "Expertise" },
      { path: "#projects", label: "Work" },
      { path: "#contact", label: "Contact" },
    ],
    []
  );

  const scrollToHash = (hash) => {
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const handleLinkClick = (path) => {
    setIsOpen(false);
    setActiveLink(path); // optional
    scrollToHash(path);
  };

  // Navbar background on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy (logic only, no UI effect)
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.path.slice(1)))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) {
          setActiveLink(`#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: `-${NAV_OFFSET + 60}px 0px -55% 0px`,
        threshold: 0.2,
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, [navLinks]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#home");
            }}
            className="relative z-50"
          >
            <LogoOfMe />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center bg-zinc-900/50 backdrop-blur-md border border-white/5 rounded-full px-2 py-1.5 mr-2">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.path);
                  }}
                  className="
                    px-5 py-2 text-sm font-medium rounded-full
                    text-zinc-400
                    transition-all duration-300
                    hover:bg-white hover:text-black
                  "
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Resume */}
            <a
              href="/yeasin-miazi-cv-2026.pdf"
              download
              className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-bold hover:bg-zinc-200 transition-colors"
            >
              <FaDownload className="text-xs" /> Resume
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="md:hidden relative z-50 p-2 text-white bg-zinc-900 border border-white/10 rounded-full active:scale-95 transition"
          >
            {isOpen ? <FaTimes /> : <HiMenuAlt4 className="text-xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-[72px] left-4 right-4 md:hidden bg-zinc-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className="
                    px-4 py-3 rounded-xl text-sm font-medium
                    text-zinc-400
                    transition-all
                    hover:bg-white hover:text-black
                  "
                >
                  {link.label}
                </button>
              ))}

              <hr className="border-white/10 my-1" />

              <a
                href="/yeasin-miazi-cv-2026.pdf"
                download
                className="flex items-center justify-center gap-2 bg-zinc-800 text-white px-4 py-3 rounded-xl text-sm font-bold hover:bg-zinc-700 transition"
              >
                <FaDownload /> Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
