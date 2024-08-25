// src/components/Footer.jsx
// import React from 'react';
import { BsWhatsapp, BsLinkedin, BsGithub } from "react-icons/bs";
import { CgMail } from "react-icons/cg";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-8 bg-gray-200 dark:bg-gray-800">
      <div className="text-center text-gray-700 dark:text-gray-300">
        &copy; {year} Jesulona Joshua. All rights reserved.
      </div>
      <div className="flex justify-center space-x-4 mt-4">
        <a
          href="mailto:odeladejesulona@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-aliceblue hover:scale-110 transition-all duration-200 ease-in-out"
        >
          <CgMail className="text-xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/jesulona-joshua-608037141/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-blue-700"
        >
          <BsLinkedin className="text-xl" />
        </a>
        <a
          href="https://wa.me/+2348160147822"
          target="_blank"
          rel="noopener noreferrer"
          className="text-aliceblue hover:scale-110 transition-all duration-200 ease-in-out"
        >
          <BsWhatsapp className="text-xl" />
        </a>
        <a
          href="https://github.com/Joshjay05"
          target="_blank"
          rel="noopener noreferrer"
          className="text-aliceblue hover:scale-110 transition-all duration-200 ease-in-out"
        >
          <BsGithub className="text-xl" />
        </a>
      </div>
    </footer>
  );
}
