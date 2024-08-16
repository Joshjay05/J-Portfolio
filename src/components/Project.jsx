// src/components/Projects.jsx
// import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: "Project One",
      description: "An amazing web app built with React.",
      image: "/project1.jpg",
      link: "#",
    },
    {
      title: "Project Two",
      description: "A powerful tool developed using Node.js.",
      image: "/project2.jpg",
      link: "#",
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
      <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
        My Projects
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            className="block bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {project.title}
              </h4>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
