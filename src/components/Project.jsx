import { useState } from "react";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("website"); // Default to 'Website'

  const projects = {
    website: [
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
      // Add more website projects as needed
    ],
    apps: [
      {
        title: "App One",
        description: "A fantastic mobile app built with Flutter.",
        image: "/app1.jpg",
        link: "#",
      },
      {
        title: "App Two",
        description: "An innovative app developed with React Native.",
        image: "/app2.jpg",
        link: "#",
      },
      // Add more apps as needed
    ],
  };

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
      <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
        My Projects
      </h3>
      <div className="flex justify-center mb-8">
        <button
          className={`px-6 py-2 rounded-t-lg focus:outline-none ${
            activeTab === "website"
              ? "bg-blue-600 text-white"
              : "bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-300"
          }`}
          onClick={() => setActiveTab("website")}
        >
          Website
        </button>
        <button
          className={`px-6 py-2 rounded-t-lg focus:outline-none ml-2 ${
            activeTab === "apps"
              ? "bg-blue-600 text-white"
              : "bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-300"
          }`}
          onClick={() => setActiveTab("apps")}
        >
          Apps
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects[activeTab].map((project, index) => (
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
