import React from "react";
import LogoOfMe from "../logo/LogoOfMe";

const Navbar = () => {
  const navLinks = [
    { path: "#home", label: "Home" },
    { path: "#about", label: "About" },
    { path: "#skills", label: "Skills" },
    { path: "#projects", label: "Projects" },
    { path: "#contact", label: "Contact" },
  ];

  return (
    <div className="navbar sticky top-0 z-50 bg-[#282c33] text-white px-4 max-w-7xl mx-auto">
      <div className="navbar-start">
        <a href="#home" className="text-2xl font-bold">
          <LogoOfMe />
        </a>
      </div>

      <div className="navbar-end hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks.map((link) => (
            <li key={link.path}>
              <a
                href={link.path}
                className="flex items-center gap-2 text-gray-400 hover:text-white"
              >
                <span className="text-[#9f65b3]">#</span>
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile dropdown */}
      <div className="navbar-end md:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#282c33] rounded-box w-52"
          >
            {navLinks.map((link) => (
              <li key={link.path}>
                <a
                  href={link.path}
                  className="flex items-center gap-2 text-gray-400 hover:text-white"
                >
                  <span className="text-[#9f65b3]">#</span>
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
