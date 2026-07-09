import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";

import {
  ExternalLink,
  Code2,
  Palette,
  Layout,
  Layers,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import { FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiNextdotjs,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { LuFlower } from "react-icons/lu";

import { PROJECTS } from "../../constants";

const Placeholder = () => (
  <div className="absolute inset-0 w-full h-full">
    <div className="absolute inset-0 bg-gradient-to-r dark:from-transparent dark:via-dark-accent-primary/20 dark:to-transparent from-transparent via-light-accent-primary/20 to-transparent animate-shimmer" />
  </div>
);

/*  Media Renderer */

function ProjectMedia({ project }) {
  const videoRef = useRef(null);

  if (!project?.media?.src) return <Placeholder />;

  const { type, src, poster } = project.media;

  /* IMAGE OR GIF */
  if (type === "image" || type === "gif") {
    return (
      <img
        src={src}
        alt={project.title}
        loading="lazy"
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover"
      />
    );
  }

  /* VIDEO (PLAY ON HOVER)  */

  const handleEnter = async () => {
    const vid = videoRef.current;
    if (!vid) return;

    try {
      vid.currentTime = 0;
      await vid.play();
    } catch {
      
    }
  };

  const handleLeave = () => {
    const vid = videoRef.current;
    if (!vid) return;

    vid.pause();
    vid.currentTime = 0;
  };

  return (
    <div
      className="absolute inset-0 w-full h-full"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <video
        ref={videoRef}
        muted
        playsInline
        preload="metadata"
        poster={poster || undefined}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* subtle hint */}
      <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-full text-xs font-semibold bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity">
        Hover to play
      </div>
    </div>
  );
}

ProjectMedia.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    media: PropTypes.shape({
      type: PropTypes.oneOf(["image", "video", "gif"]).isRequired,
      src: PropTypes.string.isRequired,
      poster: PropTypes.string,
    }),
  }).isRequired,
};

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = useMemo(
    () => (showAll ? PROJECTS.featured : PROJECTS.featured.slice(0, 4)),
    [showAll],
  );

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
    "styled-components": Palette,
    styledComponents: Palette,
  };

  const getTechIcon = (tech) => techIconMap[tech] || Code2;

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
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

        {/* GRID */}
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
                {/* MEDIA */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] mb-6 bg-gradient-to-br dark:from-dark-bg-tertiary dark:to-dark-bg-secondary from-light-bg-tertiary to-light-bg-secondary">
                  <ProjectMedia project={project} />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* CONTENT */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold dark:text-dark-text-primary text-light-text-primary">
                    {project.title}
                  </h3>

                  <p className="dark:text-dark-text-secondary text-light-text-secondary text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* TECH + LINK */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2">
                      {project.technologies.slice(0, 5).map((tech, i) => {
                        const Icon = getTechIcon(tech);
                        return (
                          <div
                            key={`${project.id}-${tech}-${i}`}
                            className="w-10 h-10 rounded-full dark:bg-dark-bg-tertiary bg-light-bg-tertiary flex items-center justify-center border dark:border-dark-border border-light-border"
                            title={tech}
                          >
                            <Icon
                              size={18}
                              className="dark:text-dark-text-primary text-light-text-primary"
                            />
                          </div>
                        );
                      })}
                    </div>

                    {project.live && (
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

        {/* SHOW MORE BUTTON */}
        {PROJECTS.featured.length > 4 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center mt-16"
          >
            <motion.button
              onClick={() => setShowAll((v) => !v)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl dark:bg-dark-bg-tertiary bg-light-bg-tertiary dark:text-dark-text-primary text-light-text-primary hover:dark:bg-dark-accent-primary/20 hover:bg-light-accent-primary/20 transition-all duration-300 font-semibold border dark:border-dark-border border-light-border"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp size={20} />
                </>
              ) : (
                <>
                  See More Projects <ChevronDown size={20} />
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
