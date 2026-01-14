import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PERSONAL_INFO } from "../../constants";

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const technologies = [
    "React & Next.js",
    "TypeScript",
    // "React Native",
    "Redux & Zustand",
    "Tailwind CSS",
    "TanStack Query",
    "REST APIs",
    "Git & GitHub",
  ];

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            <span className="number">01.</span>
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 space-y-4 dark:text-dark-text-secondary text-light-text-secondary"
          >
            <p className="text-lg leading-relaxed">
              Hello! I&#39;m{" "}
              <span className="dark:text-dark-accent-primary text-light-accent-primary font-semibold">
                {PERSONAL_INFO.name}
              </span>
              , a passionate Frontend Engineer based in {PERSONAL_INFO.location}
              . I specialize in building exceptional digital experiences that
              combine beautiful design with robust functionality.
            </p>

            <p className="leading-relaxed">
              {/* My journey in web development started during my university days, */}
              {/* and  */}
              I&#39;ve
              {/* accumulated{" "} */}
              <span className="dark:text-dark-text-primary text-light-text-primary font-semibold px-2">
                {PERSONAL_INFO.yearsOfExperience} years of professional
                experience
              </span>{" "}
              working with diverse teams and clients. I&#39;m currently
              enhancing internal processes and building feature-rich
              applications at{" "}
              <span className="dark:text-dark-accent-primary text-light-accent-primary font-semibold">
                Hoperays
              </span>
              .
            </p>

            <p className="leading-relaxed">
              I&#39;ve had the privilege of working at an innovative tech
              school, mentoring aspiring developers, and contributing to
              enterprise-level applications. I love collaborating in Agile
              environments and turning complex problems into elegant solutions.
            </p>

            <p className="dark:text-dark-text-primary text-light-text-primary font-semibold mt-6">
              Technologies I&#39;ve been working with recently:
            </p>

            <ul className="grid grid-cols-2 gap-3 mt-4 font-mono text-sm">
              {technologies.map((tech, index) => (
                <motion.li
                  key={tech}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  className="flex items-center gap-2 dark:text-dark-text-secondary text-light-text-secondary hover:dark:text-dark-accent-primary hover:text-light-accent-primary transition-colors"
                >
                  <span className="dark:text-dark-accent-primary text-light-accent-primary text-base">
                    ▹
                  </span>
                  {tech}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative group"
          >
            {/* Main Card */}
            <div className="relative rounded-2xl overflow-hidden aspect-square glass-card flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br dark:from-dark-accent-primary/30 dark:to-dark-accent-secondary/30 from-light-accent-primary/30 to-light-accent-secondary/30 flex items-center justify-center">
                <span className="text-6xl font-bold text-gradient">JJ</span>
              </div>

              <div className="absolute inset-0 dark:bg-dark-accent-primary/20 bg-light-accent-primary/20 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-0" />
            </div>

            <div className="absolute -inset-2 border-2 dark:border-dark-accent-primary border-light-accent-primary rounded-2xl -z-10 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
