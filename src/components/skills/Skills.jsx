import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SKILLS } from "../../constants";

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const skillCategories = [
    {
      title: "Frontend",
      skills: SKILLS.frontend,
      icon: "💻",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "State Management",
      skills: SKILLS.stateManagement,
      icon: "🔄",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Styling",
      skills: SKILLS.styling,
      icon: "🎨",
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "Tools",
      skills: SKILLS.tools,
      icon: "🛠️",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 px-6 dark:bg-dark-bg-secondary/30 bg-light-bg-secondary/50"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            <span className="number">02.</span>
            Skills & Technologies
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="glass-card p-6 group hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl group-hover:scale-110 transition-transform">
                  {category.icon}
                </span>
                <h3 className="font-mono text-sm dark:text-dark-accent-primary text-light-accent-primary uppercase tracking-wider">
                  {category.title}
                </h3>
              </div>

              <ul className="space-y-4">
                {category.skills.map((skill, index) => (
                  <motion.li
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + catIndex * 0.1 + index * 0.05 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-sm dark:text-dark-text-primary text-light-text-primary font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs dark:text-dark-text-tertiary text-light-text-tertiary font-mono">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Animated Progress Bar */}
                    <div className="w-full h-1.5 dark:bg-dark-bg-tertiary bg-light-bg-tertiary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: 0.5 + catIndex * 0.1 + index * 0.05,
                          ease: "easeOut",
                        }}
                        className={`h-full bg-gradient-to-r ${category.gradient} rounded-full`}
                      />
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <p className="dark:text-dark-text-secondary text-light-text-secondary text-base md:text-lg leading-relaxed">
            I&apos;m constantly learning and exploring new technologies.
            Currently diving deeper into{" "}
            <span className="dark:text-dark-accent-primary text-light-accent-primary font-semibold">
              performance optimization
            </span>
            ,{" "}
            <span className="dark:text-dark-accent-primary text-light-accent-primary font-semibold">
              accessibility best practices
            </span>
            , and{" "}
            <span className="dark:text-dark-accent-primary text-light-accent-primary font-semibold">
              advanced animation techniques
            </span>
            .
          </p>

          {/* Skills Summary Stats - Responsive */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {[
              { label: "Years Experience", value: "4+" },
              { label: "Projects Built", value: "50+" },
              { label: "Technologies", value: "20+" },
              { label: "Happy Clients", value: "30+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.1 }}
                className="glass-card p-4 text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-xs dark:text-dark-text-tertiary text-light-text-tertiary font-mono uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
