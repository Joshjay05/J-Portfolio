// src/components/Skills.jsx
// import React from 'react';
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      name: "React",
      icon: FaReact,
      description: "Building fast and efficient apps",
    },
    {
      name: "Node.js",
      icon: FaNodeJs,
      description: "Backend development with JavaScript",
    },
    { name: "MongoDB", icon: FaDatabase, description: "Database management" },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      description: "Styling modern UIs",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      description: "Core web development",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900">
      <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
        My Skills
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            <skill.icon className="text-5xl text-blue-600 dark:text-yellow-500 mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              {skill.name}
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
