import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import PropTypes from "prop-types";

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="fixed bottom-8 right-8 z-40 p-4 rounded-full glass-card hover:shadow-glow transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <motion.div
          initial={false}
          animate={{
            scale: theme === "dark" ? 1 : 0,
            opacity: theme === "dark" ? 1 : 0,
            rotate: theme === "dark" ? 0 : 180,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          <Moon className="w-6 h-6 dark:text-dark-accent-primary" />
        </motion.div>

        <motion.div
          initial={false}
          animate={{
            scale: theme === "light" ? 1 : 0,
            opacity: theme === "light" ? 1 : 0,
            rotate: theme === "light" ? 0 : -180,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          <Sun className="w-6 h-6 text-light-accent-primary" />
        </motion.div>
      </div>

      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg glass-card text-sm font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none dark:text-dark-text-primary text-light-text-primary">
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </span>
    </motion.button>
  );
};

ThemeToggle.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default ThemeToggle;
