import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
import LogoOfMe from "../logo/LogoOfMe";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const navLinks = [
    { path: "#home", label: "Home" },
    { path: "#about", label: "About" },
    { path: "#skills", label: "Skills" },
    { path: "#projects", label: "Projects" },
    { path: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active link
      const sections = navLinks.map(link => link.path.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveLink(`#${current}`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsOpen(false);
    
    // Smooth scroll to section
    const element = document.getElementById(path.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-black/95 backdrop-blur-lg py-3" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0"
          >
            <a 
              href="#home" 
              className="flex items-center space-x-2 group"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#home");
              }}
            >
              <div className="relative">
                <LogoOfMe />
                <div className="absolute -inset-1 bg-purple-600/10 blur-sm group-hover:blur transition-all duration-300 rounded-lg" />
              </div>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <a
                  href={link.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.path);
                  }}
                  className={`relative px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                    activeLink === link.path
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    <span className={`font-mono text-xs ${activeLink === link.path ? "text-purple-400" : "text-purple-500"}`}>
                      #
                    </span>
                    {link.label}
                  </span>
                  
                  {/* Active indicator - Using the same layoutId for all */}
                  {activeLink === link.path && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-purple-500 rounded-full"
                      layoutId="navbar-indicator"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              </motion.div>
            ))}
            
            {/* Resume Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="ml-3"
            >
              <a
                href="/yeasin-miazi-cv-2026.pdf"
                download
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all duration-300 border border-gray-800 hover:border-purple-500/30"
              >
                <FaDownload className="w-3.5 h-3.5" />
                <span className="text-sm">Resume</span>
              </a>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-colors"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTimes className="w-5 h-5 text-gray-300" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaBars className="w-5 h-5 text-gray-300" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden overflow-hidden bg-gray-900/95 backdrop-blur-lg border border-gray-800 rounded-xl mt-2 shadow-2xl"
            >
              <motion.div 
                variants={menuVariants}
                className="px-2 py-3 space-y-1"
              >
                {navLinks.map((link) => (
                  <motion.div
                    key={link.path}
                    variants={itemVariants}
                    className="relative"
                  >
                    <a
                      href={link.path}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.path);
                      }}
                      className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
                        activeLink === link.path
                          ? "text-white bg-gray-800/50"
                          : "text-gray-400 hover:text-white hover:bg-gray-800/30"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className={`font-mono ${activeLink === link.path ? "text-purple-400" : "text-purple-500"}`}>
                            #
                          </span>
                          <span className="font-medium">{link.label}</span>
                        </div>
                        {activeLink === link.path && (
                          <motion.div
                            className="w-2 h-2 rounded-full bg-purple-500"
                            layoutId="mobile-indicator"
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          />
                        )}
                      </div>
                    </a>
                  </motion.div>
                ))}
                
                {/* Mobile Resume Button */}
                <motion.div 
                  variants={itemVariants}
                  className="pt-3 px-3"
                >
                  <a
                    href="/yeasin-miazi-cv-2026.pdf"
                    download
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-700 transition-all duration-300 border border-gray-700"
                    onClick={() => setIsOpen(false)}
                  >
                    <FaDownload className="w-4 h-4" />
                    <span>Download Resume</span>
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;