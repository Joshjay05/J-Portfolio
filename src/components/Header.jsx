import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="p-4 md:p-6 flex justify-between items-center bg-gray-100 dark:bg-gray-900">
      <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100">
        Frontend Developer
      </h1>
      <nav className="space-x-4 md:space-x-6">
        <a
          href="#about"
          className="text-gray-700 dark:text-gray-300 hover:underline"
        >
          About
        </a>
        <a
          href="#portfolio"
          className="text-gray-700 dark:text-gray-300 hover:underline"
        >
          Portfolio
        </a>
        <a
          href="#blog"
          className="text-gray-700 dark:text-gray-300 hover:underline"
        >
          Blog
        </a>
        <a
          href="#contact"
          className="text-gray-700 dark:text-gray-300 hover:underline"
        >
          Contact
        </a>
      </nav>
      <motion.button
        onClick={toggleDarkMode}
        className="ml-4 p-2 rounded-full bg-blue-600 dark:bg-yellow-500"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        {darkMode ? (
          <FaSun className="text-white" />
        ) : (
          <FaMoon className="text-white" />
        )}
      </motion.button>
    </header>
  );
}
