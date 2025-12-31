import { motion } from "framer-motion";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  // ExternalLink,
} from "lucide-react";
import { PERSONAL_INFO } from "../../constants";

const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  return (
    <section
      id="hero"
      className="hero min-h-screen flex items-center justify-center relative px-6 pt-24 pb-12 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-96 h-96 dark:bg-dark-accent-primary/20 bg-light-accent-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 dark:bg-dark-accent-secondary/20 bg-light-accent-secondary/20 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-5xl w-full mx-auto"
      >
        <motion.p
          variants={fadeInUp}
          className="font-mono dark:text-dark-accent-primary text-light-accent-primary mb-6 text-sm md:text-base"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold dark:text-dark-text-primary text-light-text-primary mb-4 leading-tight"
        >
          {PERSONAL_INFO.name}.
        </motion.h1>

        <motion.h2
          variants={fadeInUp}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold dark:text-dark-text-secondary text-light-text-secondary mb-8"
        >
          I craft <span className="text-gradient">exceptional digital</span>
          <br className="hidden sm:block" /> experiences.
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="dark:text-dark-text-secondary text-light-text-secondary max-w-2xl text-base md:text-lg mb-10 leading-relaxed"
        >
          I&apos;m a{" "}
          <span className="dark:text-dark-accent-primary text-light-accent-primary font-semibold">
            Frontend Engineer
          </span>{" "}
          with over{" "}
          <span className="dark:text-dark-accent-primary text-light-accent-primary font-semibold">
            {PERSONAL_INFO.yearsOfExperience} years
          </span>{" "}
          of experience building user-centric web applications. crafting
          accessible, performant products
          {/* at{" "} */}
          <span className="dark:text-dark-accent-primary text-light-accent-primary font-semibold">
            {/* Switchive */}
          </span>
          .
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-12">
          <button
            onClick={() =>
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-primary"
          >
            View My Work <ChevronDown size={18} />
          </button>
          <button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-outline"
          >
            Get In Touch <Mail size={18} />
          </button>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex items-center gap-6">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-dark-text-secondary text-light-text-secondary hover:dark:text-dark-accent-primary hover:text-light-accent-primary transition-all duration-300 hover:-translate-y-1"
          >
            <Github size={24} />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-dark-text-secondary text-light-text-secondary hover:dark:text-dark-accent-primary hover:text-light-accent-primary transition-all duration-300 hover:-translate-y-1"
          >
            <Linkedin size={24} />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="dark:text-dark-text-secondary text-light-text-secondary hover:dark:text-dark-accent-primary hover:text-light-accent-primary transition-all duration-300 hover:-translate-y-1"
          >
            <Mail size={24} />
          </a>
          {/* <a
            href={PERSONAL_INFO.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-dark-text-secondary text-light-text-secondary hover:dark:text-dark-accent-primary hover:text-light-accent-primary transition-all duration-300 hover:-translate-y-1"
          >
            <ExternalLink size={24} />
          </a> */}
          <div className="w-24 h-px dark:bg-dark-border bg-light-border ml-2" />
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs dark:text-dark-text-tertiary text-light-text-tertiary">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="dark:text-dark-accent-primary text-light-accent-primary"
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
