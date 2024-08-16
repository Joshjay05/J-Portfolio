// src/components/Header.jsx
import { useState } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="p-6 flex justify-between items-center bg-gray-100 dark:bg-gray-900">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
        Frontend Developer
      </h1>
      <nav className="space-x-6">
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
      <button
        onClick={toggleDarkMode}
        className="ml-4 p-2 bg-blue-600 text-white rounded dark:bg-yellow-500"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}
