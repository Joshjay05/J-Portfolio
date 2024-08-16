// import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt } from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiJest,
  SiNextdotjs,
} from "react-icons/si";

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
    {
      name: "TypeScript",
      icon: SiTypescript,
      description: "Typed JavaScript for robust apps",
    },
    {
      name: "Git",
      icon: FaGitAlt,
      description: "Version control and collaboration",
    },
    {
      name: "Jest",
      icon: SiJest,
      description: "Testing JavaScript applications",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      description: "React framework for production",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900">
      <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
        my &#123;Dev&#125; Skills
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
