import React, { useEffect, useRef } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import yeasinImg from "../../../assets/yeasin.png";
import "./Banner.css";

const Banner = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const text = "MERN Stack Developer building fast, clean, and user-focused web experiences";
    let index = 0;
    
    const typeWriter = () => {
      if (index < text.length && textRef.current) {
        textRef.current.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
      }
    };

    const timer = setTimeout(typeWriter, 500);
    return () => clearTimeout(timer);
  }, []);

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div id="home" className="banner-container">
      {/* Animated background elements */}
      <div className="animated-bg">
        <div className="gradient-circle circle-1"></div>
        <div className="gradient-circle circle-2"></div>
        <div className="gradient-circle circle-3"></div>
      </div>

      <div className="banner-content">
        {/* Left side - Text content */}
        <motion.div 
          className="banner-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="greeting-text">
            <span className="wave">👋</span> Hello, I'm
          </div>
          
          <h1 className="name-title">
            <span className="gradient-text">Yeasin</span> Miazi
          </h1>
          
          <div className="typing-container">
            <div ref={textRef} className="typing-text"></div>
            <span className="cursor">|</span>
          </div>

          {/* Social icons with hover effects */}
          <div className="social-icons-container">
            <motion.a
              href="https://facebook.com/amimiazi"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon facebook"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaFacebook />
              <span className="tooltip">Facebook</span>
            </motion.a>
            
            <motion.a
              href="https://github.com/miazi2003"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon github"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
              <span className="tooltip">GitHub</span>
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/yeasin-miazi-64068033b/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon linkedin"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
              <span className="tooltip">LinkedIn</span>
            </motion.a>
          </div>

          {/* Resume button with animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <a href="/yeasin-miazi-cv-2026.pdf" download className="resume-btn">
              <motion.button
                className="download-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="btn-icon" />
                Download Resume
                <span className="btn-sparkle">✨</span>
              </motion.button>
            </a>
          </motion.div>
        </motion.div>

        {/* Right side - Image */}
        <motion.div 
          className="banner-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="image-wrapper">
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="floating-container"
            >
              <div className="image-frame">
                <img
                  src={yeasinImg}
                  alt="Yeasin Miazi"
                  className="profile-image"
                  ref={imageRef}
                />
                <div className="image-glow"></div>
              </div>
            </motion.div>
            
            {/* Tech stack floating badges - First row */}
            <div className="tech-badges">
              <motion.span 
                className="badge react-badge"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                React
              </motion.span>
              <motion.span 
                className="badge js-badge"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                JavaScript
              </motion.span>
              <motion.span 
                className="badge css-badge"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
              >
                CSS3
              </motion.span>
            </div>

            {/* Tech stack floating badges - Second row (Node.js & MongoDB) */}
            <div className="tech-badges second-row">
              <motion.span 
                className="badge node-badge"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.5 }}
              >
                Node.js
              </motion.span>
              <motion.span 
                className="badge mongo-badge"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.5 }}
              >
                MongoDB
              </motion.span>
            </div>
          </div>

          {/* Motto text with animation */}
          <motion.div 
            className="motto-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <div className="motto">
              <span className="motto-icon">💻</span>
              <span className="motto-text">Code</span>
            </div>
            <div className="motto">
              <span className="motto-icon">☕</span>
              <span className="motto-text">Coffee</span>
            </div>
            <div className="motto">
              <span className="motto-icon">🚀</span>
              <span className="motto-text">Conquer</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="scroll-line"></div>
        <span>Scroll</span>
      </motion.div>
    </div>
  );
};

export default Banner;