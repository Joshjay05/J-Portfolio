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
    <section
      id="skills"
      className="py-20 px-[10px] bg-gray-100 dark:bg-gray-900"
    >
      <div className="text-center mb-12">
        <h3
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="800"
          data-aos-delay="300"
          className="text-xl relative inline-block text-white dark:text-[#001b20]"
        >
          <span className="mr-5 text-[#ffbd59]">
            {" "}
            3. my &#123;Dev&#125; Skills
          </span>
          <span className="absolute right-[190px] bottom-[-10px] h-[1.5px] w-[900px] bg-[#f6a326]" />
        </h3>
      </div>
      <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12"></h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center text-center"
          >
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
