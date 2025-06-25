import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { TbSquareRoundedLetterP } from "react-icons/tb";
import { IoDownload } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";


import { CONTACT } from "../constants";
import React from 'react';

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      {/* Contact Section */}
      <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
     

      <div className="mt-10 flex items-center justify-center gap-4 text-2xl">
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
            <a
              href="https://drive.google.com/file/d/1YrSEigbtPpViLzJDMtm93XZSdmJJLuHc/view?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Resume"
            >
              <IoDownload />
            </a>
          </div>

          <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#" className="border-b hover:text-blue-500">
          {CONTACT.email}
        </a>
      </div>

      {/* Footer Section */}
      <footer className="mt-10 text-center text-neutral-500 text-sm">
        Made by Pranav Divekar completely
      </footer>
    </div>
  );
};

export default Contact;
