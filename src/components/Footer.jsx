// src/components/Footer.jsx
// import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 bg-gray-200 dark:bg-gray-800">
      <div className="text-center text-gray-700 dark:text-gray-300">
        &copy; 2024 Your Name. All rights reserved.
      </div>
      <div className="flex justify-center space-x-4 mt-4">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-blue-500"
        >
          Twitter
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-blue-700"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
