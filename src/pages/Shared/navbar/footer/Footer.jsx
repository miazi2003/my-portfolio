import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/miazi2003" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/yeasin-miazi-64068033b" },
    { icon: <FaFacebook />, href: "https://facebook.com/amimiazi" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-12 pb-8 relative overflow-hidden">
      
      {/* Background Noise/Glow (Subtle) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Brand / Copyright */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">
              Yeasin Miazi
            </h2>
            <p className="text-sm text-zinc-500">
              Copyright © {currentYear} - All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: "#fff" }}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 border border-white/10 text-zinc-400 transition-colors duration-300 hover:bg-white/10 hover:border-white/30"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
          >
            Back to Top
            <span className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:bg-white group-hover:text-black transition-all">
              <FaArrowUp />
            </span>
          </motion.button>

        </div>

        {/* Bottom Line decoration */}
        <div className="mt-12 pt-8 border-t border-white/5 text-center md:flex md:justify-between items-center text-xs text-zinc-600">
             <p>Dhaka, Bangladesh</p>
             <p>Built with React & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;