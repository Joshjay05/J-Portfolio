import { motion } from "framer-motion";
import keyboard from "../assets/keyboard.jpg";
import mouse from "../assets/keyboardMouse.jpeg";
import Intro from "./Intro";
// import resume from "./files/resume.pdf";

export default function Hero() {
  return (
    <div className="mb-10">
      <Intro />
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center text-center py-4 md:py-20 bg-gray-100 dark:bg-gray-900"
      >
        <div className="flex mt-1 flex-wrap justify-center">
          <motion.img
            src={keyboard}
            alt="Keyboard"
            className="w-64 h-auto md:w-48"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />
          <motion.img
            src={mouse}
            alt="Mouse"
            className="w-64 h-auto md:w-48 mt-6 md:mt-0 md:ml-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          />
        </div>
      </motion.section>
    </div>
  );
}
