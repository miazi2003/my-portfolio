import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import yeasinImg from "../../../assets/yeasin.png";
import { Link } from "react-router";
const Banner = () => {
  return (
    <div id="home" className="w-full bg-[#282c33] text-white pt-24 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left side */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font">Yeasin Miazi</h1>
          <p className="text-lg md:text-xl mb-6 font-sec">
            Frontend Developer crafting clean and modern web experiences
          </p>

          {/* Social icons */}
          <div className="flex justify-center md:justify-start gap-6 mb-6">
            <a
              href="https://facebook.com/amimiazi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9f65b3] hover:text-white text-3xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://github.com/miazi2003"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9f65b3] hover:text-white text-3xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/yeasin-miazi-64068033b/?trk=opento_sprofile_topcard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9f65b3] hover:text-white text-3xl"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Resume button */}
<a href="/yeasin-miazi-cv-2026.pdf" download> <button className="btn border-[#9f65b3] bg-primary text-white shadow-none hover:shadow-md hover:shadow-white">Download Resume</button></a>
        </div>

        {/* Right side */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <img
            src={yeasinImg}
            alt="Me"
            className="w-60 h-60 md:w-80 md:h-80 object-cover "
          />

          <div className="  px-4 py-2 rounded shadow text-center md:text-base border border-gray-600 text-xs flex gap-4">
            <p className="text-gray-500">
              <span className="text-[#9f65b3] text-xl">*</span>Code.
            </p>
            <p className="text-gray-500">
              {" "}
              <span className="text-[#9f65b3] text-xl">*</span>Coffee.
            </p>{" "}
            <p className="text-gray-500">
              <span className="text-[#9f65b3] text-xl">*</span>Conquer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
