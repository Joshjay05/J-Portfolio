import { motion } from "framer-motion";
import keyboard from "../assets/keyboard.jpg";
import mouse from "../assets/keyboardMouse.jpeg";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center text-center py-16 md:py-20 bg-gray-100 dark:bg-gray-900"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">
        Frontend Developer
      </h2>
      <p className="mt-4 text-base md:text-lg text-gray-700 dark:text-gray-300">
        Specialized in React & Next.js | Building cutting-edge web applications
      </p>
      <div className="flex mt-6 space-x-2 md:space-x-4">
        <motion.a
          href="#work"
          className="px-4 py-2 md:px-6 md:py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
          whileHover={{ scale: 1.1 }}
        >
          View my work
        </motion.a>
        <motion.a
          href="/resume.pdf"
          className="px-4 py-2 md:px-6 md:py-3 bg-gray-800 text-white rounded hover:bg-gray-900"
          whileHover={{ scale: 1.1 }}
        >
          Download CV
        </motion.a>
      </div>
      <div className="flex mt-12 flex-wrap justify-center">
        <motion.img
          src={keyboard}
          alt="Keyboard"
          className="w-32 h-auto md:w-48"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        />
        <motion.img
          src={mouse}
          alt="Mouse"
          className="w-32 h-auto md:w-48 mt-6 md:mt-0 md:ml-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        />
      </div>
    </motion.section>
  );
}
