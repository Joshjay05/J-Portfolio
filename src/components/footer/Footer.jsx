import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, ExternalLink } from "lucide-react";
import { PERSONAL_INFO } from "../../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t dark:border-dark-border border-light-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold font-mono dark:text-dark-accent-primary text-light-accent-primary mb-4"
            >
              JJ
            </motion.h3>
            <p className="dark:text-dark-text-secondary text-light-text-secondary text-sm leading-relaxed">
              Frontend Engineer crafting beautiful, performant web experiences.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-sm dark:text-dark-text-primary text-light-text-primary mb-4 uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["About", "Skills", "Experience", "Projects", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-sm dark:text-dark-text-secondary text-light-text-secondary hover:dark:text-dark-accent-primary hover:text-light-accent-primary transition-colors link-hover"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-sm dark:text-dark-text-primary text-light-text-primary mb-4 uppercase">
              Get In Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-sm dark:text-dark-text-secondary text-light-text-secondary hover:dark:text-dark-accent-primary hover:text-light-accent-primary transition-colors flex items-center gap-2 group"
                >
                  <Mail
                    size={16}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span className="break-all">{PERSONAL_INFO.email}</span>
                </a>
              </li>
              <li className="text-sm dark:text-dark-text-secondary text-light-text-secondary flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                {PERSONAL_INFO.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t dark:border-dark-border border-light-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card hover:scale-110 transition-all dark:text-dark-text-secondary text-light-text-secondary hover:dark:text-dark-accent-primary hover:text-light-accent-primary"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card hover:scale-110 transition-all dark:text-dark-text-secondary text-light-text-secondary hover:dark:text-dark-accent-primary hover:text-light-accent-primary"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-3 glass-card hover:scale-110 transition-all dark:text-dark-text-secondary text-light-text-secondary hover:dark:text-dark-accent-primary hover:text-light-accent-primary"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href={PERSONAL_INFO.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card hover:scale-110 transition-all dark:text-dark-text-secondary text-light-text-secondary hover:dark:text-dark-accent-primary hover:text-light-accent-primary"
                aria-label="Portfolio"
              >
                <ExternalLink size={20} />
              </a>
            </div>

            <div className="text-center md:text-right">
              <p className="text-sm dark:text-dark-text-secondary text-light-text-secondary mb-2">
                Designed & Built by{" "}
                <span className="dark:text-dark-accent-primary text-light-accent-primary font-semibold">
                  {PERSONAL_INFO.name}
                </span>
              </p>
              <p className="text-xs dark:text-dark-text-tertiary text-light-text-tertiary font-mono flex items-center justify-center md:justify-end gap-1">
                Made with{" "}
                <Heart className="text-red-500 fill-red-500" size={12} /> in{" "}
                {PERSONAL_INFO.location.split(",")[0]}
              </p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs dark:text-dark-text-tertiary text-light-text-tertiary font-mono">
              © {currentYear} {PERSONAL_INFO.fullName}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
