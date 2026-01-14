import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import {
  ExternalLink,
  Code2,
  Palette,
  // PackageOpen,
  Layout,
  Layers,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";

import { RiTailwindCssFill } from "react-icons/ri";
// import { TbBrandVite } from "react-icons/tb";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { PROJECTS } from "../../constants";
import { LuFlower } from "react-icons/lu";

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll
    ? PROJECTS.featured
    : PROJECTS.featured.slice(0, 4);

  const techIconMap = {
    React: FaReact,
    "Next.js": SiNextdotjs,
    TypeScript: SiTypescript,
    JavaScript: SiJavascript,
    "Tailwind CSS": RiTailwindCssFill,
    Redux: SiRedux,
    "TanStack Query": LuFlower,
    "Material-UI": Layout,
    HTML: Layers,
    CSS: Palette,
    styledComponents: Palette,
  };

  const getTechIcon = (tech) => {
    const IconComponent = techIconMap[tech];
    return IconComponent || Code2;
  };

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold dark:text-dark-text-primary text-light-text-primary mb-4">
            A small selection of{" "}
            <span className="text-gradient">recent projects</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                layout
                className="group relative"
              >
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] mb-6 bg-gradient-to-br dark:from-dark-bg-tertiary dark:to-dark-bg-secondary from-light-bg-tertiary to-light-bg-secondary">
                  {project.videoUrl ? (
                    // GIF
                    project.videoUrl.endsWith(".gif") ? (
                      <img
                        src={project.videoUrl}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : // Direct video (MP4, WebM)
                    project.videoUrl.match(/\.(mp4|webm|ogg)$/i) ? (
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                      >
                        <source
                          src={project.videoUrl}
                          type={`video/${project.videoUrl.split(".").pop()}`}
                        />
                      </video>
                    ) : (
                      <div className="absolute inset-0 w-full h-full">
                        <div className="absolute inset-0 bg-gradient-to-r dark:from-transparent dark:via-dark-accent-primary/20 dark:to-transparent from-transparent via-light-accent-primary/20 to-transparent animate-shimmer" />
                      </div>
                    )
                  ) : (
                    <div className="absolute inset-0 w-full h-full">
                      <div className="absolute inset-0 bg-gradient-to-r dark:from-transparent dark:via-dark-accent-primary/20 dark:to-transparent from-transparent via-light-accent-primary/20 to-transparent animate-shimmer" />
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold dark:text-dark-text-primary text-light-text-primary">
                    {project.title}
                  </h3>

                  <p className="dark:text-dark-text-secondary text-light-text-secondary text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2">
                      {project.technologies.slice(0, 5).map((tech, i) => {
                        const IconComponent = getTechIcon(tech);
                        return (
                          <div
                            key={i}
                            className="w-10 h-10 rounded-full dark:bg-dark-bg-tertiary bg-light-bg-tertiary flex items-center justify-center border dark:border-dark-border border-light-border"
                            title={tech}
                          >
                            <IconComponent
                              size={18}
                              className="dark:text-dark-text-primary text-light-text-primary"
                            />
                          </div>
                        );
                      })}
                      {project.technologies.length > 5 && (
                        <div
                          className="w-10 h-10 rounded-full dark:bg-dark-bg-tertiary bg-light-bg-tertiary flex items-center justify-center border dark:border-dark-border border-light-border"
                          title={`+${project.technologies.length - 5} more`}
                        >
                          <span className="text-xs font-mono dark:text-dark-text-tertiary text-light-text-tertiary">
                            +{project.technologies.length - 5}
                          </span>
                        </div>
                      )}
                    </div>

                    {project.live && project.live !== "#" && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg dark:bg-dark-accent-primary/20 bg-light-accent-primary/20 dark:text-dark-accent-primary text-light-accent-primary hover:dark:bg-dark-accent-primary/30 hover:bg-light-accent-primary/30 transition-colors text-sm font-semibold whitespace-nowrap"
                      >
                        Check Live Site
                        <ExternalLink size={16} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {PROJECTS.featured.length > 4 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center mt-16"
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl dark:bg-dark-bg-tertiary bg-light-bg-tertiary dark:text-dark-text-primary text-light-text-primary hover:dark:bg-dark-accent-primary/20 hover:bg-light-accent-primary/20 transition-all duration-300 font-semibold border dark:border-dark-border border-light-border"
            >
              {showAll ? (
                <>
                  Show Less
                  <ChevronUp size={20} />
                </>
              ) : (
                <>
                  See More Projects
                  {/* ({PROJECTS.featured.length - 4} more) */}
                  <ChevronDown size={20} />
                </>
              )}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
