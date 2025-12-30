import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin, ChevronRight, Award } from "lucide-react";
import { EXPERIENCES } from "../../constants";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            <span className="number">03.</span>
            Where I&apos;ve Worked
          </h2>
        </motion.div>

        {/* Experience Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex md:flex-col overflow-x-auto md:overflow-visible gap-2 md:gap-0 border-b md:border-b-0 md:border-l-2 dark:border-dark-border border-light-border pb-2 md:pb-0 scrollbar-hide">
              {EXPERIENCES.map((exp, index) => (
                <button
                  key={exp.id}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-3 text-sm font-mono text-left whitespace-nowrap transition-all duration-300 relative flex-shrink-0 ${
                    activeTab === index
                      ? "dark:text-dark-accent-primary text-light-accent-primary dark:bg-dark-bg-tertiary/50 bg-light-bg-tertiary/50"
                      : "dark:text-dark-text-secondary text-light-text-secondary dark:hover:bg-dark-bg-tertiary/30 hover:bg-light-bg-tertiary/30"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {exp.current && (
                      <span className="w-2 h-2 rounded-full dark:bg-dark-accent-primary bg-light-accent-primary animate-pulse" />
                    )}
                    <span>{exp.company}</span>
                  </div>

                  {activeTab === index && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute md:left-0 md:top-0 md:w-0.5 md:h-full bottom-0 left-0 right-0 md:right-auto h-0.5 md:h-auto w-full dark:bg-dark-accent-primary bg-light-accent-primary"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="flex-1 min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold dark:text-dark-text-primary text-light-text-primary">
                      {EXPERIENCES[activeTab].role}{" "}
                      <span className="dark:text-dark-accent-primary text-light-accent-primary">
                        @ {EXPERIENCES[activeTab].company}
                      </span>
                    </h3>

                    {/* Job Info  */}
                    <div className="flex flex-wrap gap-4 mt-3 text-sm dark:text-dark-text-secondary text-light-text-secondary font-mono">
                      <span className="flex items-center gap-2">
                        <Calendar
                          size={14}
                          className="dark:text-dark-accent-primary text-light-accent-primary"
                        />
                        {EXPERIENCES[activeTab].period}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin
                          size={14}
                          className="dark:text-dark-accent-primary text-light-accent-primary"
                        />
                        {EXPERIENCES[activeTab].location}
                      </span>
                      {EXPERIENCES[activeTab].current && (
                        <span className="px-2 py-1 rounded-full dark:bg-dark-accent-primary/20 bg-light-accent-primary/20 dark:text-dark-accent-primary text-light-accent-primary text-xs font-semibold">
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Job Description */}
                  <ul className="space-y-4">
                    {EXPERIENCES[activeTab].description.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex gap-3 dark:text-dark-text-secondary text-light-text-secondary"
                      >
                        <ChevronRight
                          size={20}
                          className="dark:text-dark-accent-primary text-light-accent-primary mt-0.5 flex-shrink-0"
                        />
                        <span className="leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {EXPERIENCES[activeTab].technologies.map((tech) => (
                      <span key={tech} className="skill-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Key Achievements  */}
                  {EXPERIENCES[activeTab].highlights && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mt-6 p-4 md:p-6 glass-card"
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <Award
                          size={18}
                          className="dark:text-dark-accent-primary text-light-accent-primary"
                        />
                        <h4 className="text-sm font-mono dark:text-dark-accent-primary text-light-accent-primary uppercase">
                          Key Achievements
                        </h4>
                      </div>
                      <ul className="space-y-2 text-sm dark:text-dark-text-secondary text-light-text-secondary">
                        {EXPERIENCES[activeTab].highlights.map(
                          (highlight, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full dark:bg-dark-accent-primary bg-light-accent-primary mt-2 flex-shrink-0" />
                              <span className="leading-relaxed">
                                {highlight}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Timeline Summary*/}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 hidden md:block"
        >
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px dark:bg-dark-border bg-light-border" />
            <div className="space-y-8 pl-8">
              {EXPERIENCES.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative ${
                    index === activeTab ? "opacity-100" : "opacity-50"
                  } transition-opacity`}
                >
                  <div className="absolute -left-8 w-3 h-3 rounded-full dark:bg-dark-accent-primary bg-light-accent-primary border-4 dark:border-dark-bg-primary border-light-bg-primary" />
                  <div className="text-xs font-mono dark:text-dark-text-tertiary text-light-text-tertiary mb-1">
                    {exp.period}
                  </div>
                  <div className="text-sm dark:text-dark-text-secondary text-light-text-secondary">
                    <span className="font-semibold dark:text-dark-text-primary text-light-text-primary">
                      {exp.role}
                    </span>
                    {" at "}
                    <span className="dark:text-dark-accent-primary text-light-accent-primary">
                      {exp.company}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
