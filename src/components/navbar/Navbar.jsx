import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { NAVIGATION_LINKS, PERSONAL_INFO } from "../../constants";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "dark:bg-dark-bg-primary/90 bg-light-bg-primary/90 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-bold font-mono dark:text-dark-accent-primary text-light-accent-primary z-50 relative"
          >
            JJ
          </motion.a>

          <ul className="hidden md:flex items-center gap-8">
            {NAVIGATION_LINKS.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="link-hover text-sm font-mono"
                >
                  <span className="dark:text-dark-accent-primary text-light-accent-primary">
                    {link.number}.
                  </span>{" "}
                  {link.name}
                </a>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs px-4 py-2"
              >
                Resume
              </a>
            </motion.li>
          </ul>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden z-50 relative p-2 dark:text-dark-accent-primary text-light-accent-primary"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 dark:bg-dark-bg-primary/80 bg-light-bg-primary/80 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-3/4 max-w-sm dark:bg-dark-bg-secondary bg-light-bg-secondary z-40 md:hidden flex flex-col p-8 pt-24"
            >
              <nav className="flex-1 flex flex-col items-center justify-center gap-8">
                {NAVIGATION_LINKS.map((link, index) => (
                  <motion.a
                    key={link.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-center"
                  >
                    <span className="dark:text-dark-accent-primary text-light-accent-primary font-mono text-sm block mb-2">
                      {link.number}.
                    </span>
                    <span className="dark:text-dark-text-primary text-light-text-primary font-mono text-xl hover:dark:text-dark-accent-primary hover:text-light-accent-primary transition-colors">
                      {link.name}
                    </span>
                  </motion.a>
                ))}
                <motion.a
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline mt-4"
                >
                  Resume
                </motion.a>
              </nav>

              <div className="flex justify-center gap-6 pt-8 border-t dark:border-dark-border border-light-border">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={22} />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={22} />
                </a>
                <a href={`mailto:${PERSONAL_INFO.email}`}>
                  <Mail size={22} />
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
