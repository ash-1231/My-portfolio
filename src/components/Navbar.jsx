import React, { useState, useEffect, useRef } from "react";
import anime from "animejs";
import codechef from "../assets/codechef.ico";
import github from "../assets/github.png";
import leetcode from "../assets/LeetCode.png";
import linkedin from "../assets/linkedin.svg";

const profiles = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ashutosh-aditya-265886282/",
    imgSrc: linkedin,
  },
  {
    name: "GitHub",
    url: "https://github.com/ash-1231",
    imgSrc: github,
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/aSh_1_1/",
    imgSrc: leetcode,
  },
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/cpknight_1123",
    imgSrc: codechef,
  },
];

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinksRef = useRef([]);
  const dropdownRef = useRef(null);
  const dropdownLinksRef = useRef([]);

  // Animate main nav links on mount
  useEffect(() => {
    anime({
      targets: navLinksRef.current,
      translateY: [-50, 0],
      opacity: [0, 1],
      easing: "easeOutExpo",
      delay: anime.stagger(120, { start: 200 }),
    });
  }, []);

  // Animate dropdown open/close
  useEffect(() => {
    if (dropdownOpen) {
      anime({
        targets: dropdownRef.current,
        scale: [0.95, 1],
        opacity: [0, 1],
        duration: 450,
        easing: "easeOutCubic",
      });

      anime({
        targets: dropdownLinksRef.current,
        opacity: [0, 1],
        translateY: [-8, 0],
        delay: anime.stagger(90, { start: 100 }),
        duration: 350,
        easing: "easeOutCubic",
      });
    } else {
      anime({
        targets: dropdownRef.current,
        scale: [1, 0.95],
        opacity: [1, 0],
        duration: 300,
        easing: "easeInCubic",
      });
    }
  }, [dropdownOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-sm shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <a href="#hero" className="text-2xl font-bold text-teal-400">
          MyPortfolio
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex items-center text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            ) : (
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="space-x-6 hidden md:flex items-center">
          <a
            ref={(el) => (navLinksRef.current[0] = el)}
            href="#about"
            className="hover:text-teal-400 transition"
          >
            About
          </a>
          <a
            ref={(el) => (navLinksRef.current[1] = el)}
            href="#projects"
            className="hover:text-teal-400 transition"
          >
            Projects
          </a>
          <a
            ref={(el) => (navLinksRef.current[2] = el)}
            href="#skills"
            className="hover:text-teal-400 transition"
          >
            Skills
          </a>

          {/* Dropdown */}
          <div
            ref={(el) => (navLinksRef.current[3] = el)}
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="hover:text-teal-400 transition flex items-center cursor-pointer focus:outline-none">
              Profiles
              <svg
                className="ml-1 w-3 h-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {dropdownOpen && (
              <ul
                ref={dropdownRef}
                className="absolute left-0 mt-1 w-45 bg-black/70 backdrop-blur-md border border-black/10 rounded-lg shadow-lg z-60 py-4 px-2"
              >
                {profiles.map(({ name, url, imgSrc }, i) => (
                  <li key={name}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      ref={(el) => (dropdownLinksRef.current[i] = el)}
                      className="flex items-center px-4 py-3 rounded hover:bg-gray-200/40 transition-colors"
                    >
                      <img
                        src={imgSrc}
                        alt={`${name} logo`}
                        className="w-5 h-5 mr-2 rounded"
                      />
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <a
            ref={(el) => (navLinksRef.current[4] = el)}
            href="#contact"
            className="hover:text-teal-400 transition"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-sm border-t border-gray-800 px-4 pb-4 space-y-2">
          <a
            href="#about"
            className="block py-2 text-white hover:text-teal-400"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#projects"
            className="block py-2 text-white hover:text-teal-400"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#skills"
            className="block py-2 text-white hover:text-teal-400"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Skills
          </a>

          {/* Mobile Profiles */}
          <div>
            <p className="text-gray-400 text-sm mb-1">Profiles</p>
            {profiles.map(({ name, url, imgSrc }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center py-2 text-white hover:text-teal-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <img src={imgSrc} alt={`${name} logo`} className="w-5 h-5 mr-2 rounded" />
                {name}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="block py-2 text-white hover:text-teal-400"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

