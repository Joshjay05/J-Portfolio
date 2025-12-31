import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import { Calendar, MapPin } from "lucide-react";
import { EXPERIENCES } from "../../constants";

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="experience"
      className="py-24 px-6 dark:bg-dark-bg-secondary/30 bg-light-bg-secondary/50"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold dark:text-dark-text-primary text-light-text-primary mb-4">
            My <span className="text-gradient">work experience</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 hover:scale-[1.02] transition-transform duration-300 h-full flex flex-col"
            >
              <div className="flex gap-4 items-start">
                {/* Company Icon */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br dark:from-dark-accent-primary/20 dark:to-dark-accent-secondary/20 from-light-accent-primary/20 to-light-accent-secondary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold dark:text-dark-accent-primary text-light-accent-primary">
                    {exp.company.charAt(0)}
                  </span>
                </div>

                <div className="flex-1 space-y-2">
                  <h3 className="text-lg font-bold dark:text-dark-text-primary text-light-text-primary">
                    {exp.role}{" "}
                    <span className="dark:text-dark-accent-primary text-light-accent-primary">
                      @ {exp.company}
                    </span>
                  </h3>

                  <p className="dark:text-dark-text-secondary text-light-text-secondary text-sm leading-relaxed">
                    {exp.description[0]}
                  </p>

                  <div className="flex flex-wrap gap-3 text-xs dark:text-dark-text-tertiary text-light-text-tertiary font-mono">
                    {/* <span className="flex items-center gap-1.5">
                      <Calendar
                        size={12}
                        className="dark:text-dark-accent-primary text-light-accent-primary"
                      />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin
                        size={12}
                        className="dark:text-dark-accent-primary text-light-accent-primary"
                      />
                      {exp.location}
                    </span> */}
                    {exp.current && (
                      <span className="px-2 py-0.5 rounded-full dark:bg-dark-accent-primary/20 bg-light-accent-primary/20 dark:text-dark-accent-primary text-light-accent-primary font-semibold">
                        Current
                      </span>
                    )}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded text-xs font-mono dark:bg-dark-bg-tertiary bg-light-bg-tertiary dark:text-dark-text-secondary text-light-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                    {exp.technologies.length > 4 && (
                      <span className="px-2 py-1 rounded text-xs font-mono dark:bg-dark-bg-tertiary bg-light-bg-tertiary dark:text-dark-text-tertiary text-light-text-tertiary">
                        +{exp.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
