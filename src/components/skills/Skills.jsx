import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code2,
  Database,
  Wrench,
  // Zap,
  // Palette,
  Globe,
  GitBranch,
  Smartphone,
  Figma,
  // Rocket,
} from "lucide-react";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
// import { RiVercelFill } from "react-icons/ri";
// import { TbBrandVercelFilled } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandVite } from "react-icons/tb";
// import { FaFigma } from "react-icons/fa";
import { DiResponsive } from "react-icons/di";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SKILLS } from "../../constants";

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const iconMap = {
    React: FaReact,
    FileCode: SiJavascript,
    Typescript: SiTypescript,
    Next: SiNextdotjs,
    Tailwind: RiTailwindCssFill,
    Database: Database,
    Globe: Globe,
    Responsive: DiResponsive,
    GitBranch: GitBranch,
    Smartphone: Smartphone,
    Figma: Figma,
    Zustand: SiRedux,
    Vite: TbBrandVite,
  };

  const renderIcon = (iconName) => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent size={20} /> : null;
  };

  const getBadgeStyle = (level) => {
    if (level === "Expert") {
      return "dark:bg-green-500/20 bg-green-500/20 dark:text-green-400 text-green-600 border-green-500/30";
    } else if (level === "Advanced") {
      return "dark:bg-cyan-500/20 bg-cyan-500/20 dark:text-cyan-400 text-cyan-600 border-cyan-500/30";
    } else {
      return "dark:bg-blue-500/20 bg-blue-500/20 dark:text-blue-400 text-blue-600 border-blue-500/30";
    }
  };

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: SKILLS.frontend,
      icon: Code2,
    },
    {
      title: "Backend & APIs",
      skills: SKILLS.backend,
      icon: Database,
    },
    {
      title: "Tools & Others",
      skills: SKILLS.tools,
      icon: Wrench,
    },
  ];

  return (
    <section id="skills" className="py-24 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold dark:text-dark-text-primary text-light-text-primary mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
        </motion.div>

        {/* Skills Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="glass-card p-6 h-full"
            >
              {/* Category Header with Green Left Border */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b dark:border-dark-border border-light-border relative">
                {/* Green vertical accent line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500 rounded-full" />

                <h3 className="font-bold text-lg dark:text-dark-text-primary text-light-text-primary ml-4">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <ul className="space-y-5">
                {category.skills.map((skill, index) => (
                  <motion.li
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + catIndex * 0.1 + index * 0.05 }}
                  >
                    {/* Skill Info */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        {/* Render Icon from string name */}
                        <span className="text-lg dark:text-dark-accent-primary text-light-accent-primary">
                          {renderIcon(skill.icon)}
                        </span>
                        <div>
                          {/* Skill Name */}
                          <div className="text-sm font-semibold dark:text-dark-text-primary text-light-text-primary">
                            {skill.name}
                          </div>
                          {/* Experience */}
                          <div className="text-xs dark:text-dark-text-tertiary text-light-text-tertiary">
                            {skill.experience}
                          </div>
                        </div>
                      </div>

                      {/* Proficiency Badge */}
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold border ${getBadgeStyle(
                          skill.proficiency
                        )}`}
                      >
                        {skill.proficiency}
                      </span>
                    </div>

                    {/* Green Progress Bar */}
                    <div className="w-full h-2 dark:bg-dark-bg-tertiary bg-light-bg-tertiary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: 0.5 + catIndex * 0.1 + index * 0.05,
                          ease: "easeOut",
                        }}
                        className="h-full bg-green-500 rounded-full"
                      />
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Years Experience", value: "4+" },
            { label: "Technologies", value: "20+" },
            { label: "Projects Built", value: "50+" },
            { label: "Happy Clients", value: "30+" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1 + index * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-sm dark:text-dark-text-tertiary text-light-text-tertiary font-mono uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
