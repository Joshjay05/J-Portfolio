import { useState } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="p-4 md:p-6 flex justify-between items-center bg-gray-100 dark:bg-gray-900">
      <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100">
        Frontend Developer
      </h1>
      <nav className="hidden md:flex space-x-4 md:space-x-6">
        <a
          href="#about"
          className="text-gray-700 dark:text-gray-300 hover:underline"
        >
          About
        </a>
        <a
          href="#skills"
          className="text-gray-700 dark:text-gray-300 hover:underline"
        >
          Tools
        </a>
        <a
          href="#projects"
          className="text-gray-700 dark:text-gray-300 hover:underline"
        >
          Projects
        </a>
        <a
          href="#experience"
          className="text-gray-700 dark:text-gray-300 hover:underline"
        >
          Experience
        </a>
      </nav>
      <div className="flex items-center">
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
        <button
          onClick={toggleMobileMenu}
          className="ml-4 p-2 rounded-md md:hidden focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <FaTimes className="text-gray-900 dark:text-gray-100" />
          ) : (
            <FaBars className="text-gray-900 dark:text-gray-100" />
          )}
        </button>
      </div>
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-gray-100 dark:bg-gray-900 md:hidden flex flex-col items-center space-y-4 p-4">
          <a
            href="#about"
            className="text-gray-700 dark:text-gray-300 hover:underline"
            onClick={toggleMobileMenu}
          >
            About
          </a>
          <a
            href="#skills"
            className="text-gray-700 dark:text-gray-300 hover:underline"
            onClick={toggleMobileMenu}
          >
            Tools
          </a>
          <a
            href="#projects"
            className="text-gray-700 dark:text-gray-300 hover:underline"
            onClick={toggleMobileMenu}
          >
            Projects
          </a>
          <a
            href="#experience"
            className="text-gray-700 dark:text-gray-300 hover:underline"
            onClick={toggleMobileMenu}
          >
            Experience
          </a>
        </nav>
      )}
    </header>
  );
}
