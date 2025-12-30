import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, ExternalLink, Folder, Play } from "lucide-react";
import { PROJECTS } from "../../constants";

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="projects"
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
            <span className="number">04.</span>Things I&apos;ve Built
          </h2>
        </motion.div>

        <div className="mt-12 space-y-24">
          {PROJECTS.featured.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative grid md:grid-cols-12 gap-4 items-center ${
                index % 2 === 1 ? "md:text-right" : ""
              }`}
            >
              <div
                className={`md:col-span-7 ${
                  index % 2 === 1 ? "md:col-start-6" : ""
                } relative group`}
              >
                <div className="relative rounded-2xl overflow-hidden glass-card aspect-video bg-gradient-to-br dark:from-dark-bg-tertiary dark:to-dark-bg-secondary from-light-bg-tertiary to-light-bg-secondary flex items-center justify-center">
                  <Folder
                    size={64}
                    className="dark:text-dark-accent-primary/30 text-light-accent-primary/30"
                  />
                </div>
              </div>

              <div
                className={`md:col-span-6 md:row-start-1 ${
                  index % 2 === 1 ? "md:col-start-1" : "md:col-start-7"
                } relative z-10 space-y-4`}
              >
                <p className="font-mono dark:text-dark-accent-primary text-light-accent-primary text-sm">
                  Featured Project
                </p>
                <h3 className="text-2xl md:text-3xl font-bold dark:text-dark-text-primary text-light-text-primary">
                  {project.title}
                </h3>
                <div className="glass-card p-6 backdrop-blur-lg">
                  <p className="dark:text-dark-text-secondary text-light-text-secondary leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <ul
                  className={`flex flex-wrap gap-3 font-mono text-xs ${
                    index % 2 === 1 ? "md:justify-end" : ""
                  }`}
                >
                  {project.technologies.map((tech) => (
                    <li key={tech} className="skill-badge">
                      {tech}
                    </li>
                  ))}
                </ul>
                <div
                  className={`flex gap-4 ${
                    index % 2 === 1 ? "md:justify-end" : ""
                  }`}
                >
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 glass-card hover:scale-110 transition-transform"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.videoUrl && (
                    <a
                      href={project.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 glass-card hover:scale-105 transition-all dark:text-dark-accent-primary text-light-accent-primary font-mono text-sm"
                    >
                      <Play size={18} />
                      Watch Demo
                    </a>
                  )}
                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 glass-card hover:scale-110 transition-transform"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
