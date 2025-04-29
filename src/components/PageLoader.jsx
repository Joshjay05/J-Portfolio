/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1000);

    const hideTimer = setTimeout(() => setVisible(false), 1500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`
            fixed inset-0 
            bg-white dark:bg-gray-900
            flex items-center justify-center
            z-50
          `}
        >
          <motion.div
            className="absolute inset-0 bg-white dark:bg-gray-900"
            animate={{ opacity: [0.8, 0.6, 0.8] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />

          <motion.svg
            className="relative h-16 w-16 text-blue-600 dark:text-yellow-400"
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ scale: 0.8, rotate: 0 }}
            animate={{ scale: [0.8, 1.2, 0.8], rotate: 360 }}
            transition={{
              scale: { duration: 1.5, repeat: Infinity },
              rotate: { duration: 1.0, repeat: Infinity, ease: "linear" },
            }}
          >
            <circle
              cx="25"
              cy="25"
              r="20"
              stroke="currentColor"
              strokeWidth="5"
              fill="none"
              opacity="0.2"
            />
            <path
              fill="currentColor"
              d="M25 5 a20 20 0 0 1 0 40 a20 20 0 0 1 0 -40"
            />
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
