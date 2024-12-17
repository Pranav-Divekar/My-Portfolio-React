
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { TbSquareRoundedLetterP } from "react-icons/tb";
import { IoDownload } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import React from "react";

const Navbar = () => {
  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) {
      return "Good Morning";
    } else if (hour < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-md py-6">
        {/* Left Section with Greeting */}
        <div className="container mx-auto flex items-center justify-between px-8">
          <div className="flex flex-shrink-0 items-center">
            <h1>
              <span className="font-bold">{getGreeting()}</span>,
            </h1>
            <div className="mx-2 w-19">{/* Placeholder for additional content */}</div>
          </div>

          {/* Right Section with Icons */}
          <div className="flex items-center justify-center gap-4 text-2xl">
            <a
              href="https://www.linkedin.com/in/pranav-divekar/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Pranav-Divekar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://leetcode.com/u/divekarpranav04/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
            >
              <SiLeetcode />
            </a>
            <a
              href="https://www.instagram.com/hi_pranav_d/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Resume"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
