import { useState } from "react";
import consult from "/everyconsult.jpg";
import TM from "/tm30.jpg";
import gwc from "/gwc.jpg";
import shew from "/shew.jpg";
import teenslitracy from "/teens.jpg";
import coffee from "/coffee.jpg";
import association from "/association.jpg";
export default function Projects() {
  const [activeTab, setActiveTab] = useState("website"); // Default to 'Website'

  const projects = {
    website: [
      {
        title: "Everywherewegoconsulting",
        description: "An Travel Agency Platform for all travels types.",
        image: consult,
        // link: "#",
        // repository: "https://github.com/username/project-one",
        // liveLink: "https://project-one-live.com",

        // link: "#",
        // repository: "https://github.com/username/project-one",
        liveLink: "everywherewegoconsult.org",
        stacks: ["Next.js", "Typescript", "Tailwind CSS", "HTML"], // Added tech stacks
      },
      {
        title: "TM30 Academy",
        description:
          "An academic website for aspiring tech students to launch their careers.",
        image: TM,
        // link: "#",
        // repository: "https://github.com/username/project-one",
        liveLink: "https://tmacademy.tm30.net/",
        stacks: ["React", "JavaScript", "CSS", "HTML"],
      },
      {
        title: "GWCTechSChoolAfrica Website",
        description:
          "An amazing tech schools for students who want to start or get a careers in Technology.",
        image: gwc,
        // link: "#",
        repository: "https://gwctechschoolafrica.com/",
        // liveLink: "https://project-one-live.com",
        stacks: [
          "React",
          "JavaScript",
          "styledComponents",
          "CSS",
          "HTML",
          "Material UI",
        ],
      },
      {
        title: "Teens-Literacy Foundation",
        description:
          "An NGO website for young people tailored towards holistic development.",
        image: teenslitracy,
        link: "#",
        // repository: "https://github.com/username/project-two",
        liveLink: "https://teensliteracyfoundation.org/",
        stacks: ["React", "JavaScript", "CSS", "HTML"],
        // stacks: ["Node.js", "Express", "MongoDB"],
      },
      {
        title: "Itsehekiri Association",
        description: "An association website for Itsehekiris.",
        image: association,
        // link: "#",
        // repository: "https://github.com/username/project-one",
        // liveLink: "https://project-one-live.com",

        // link: "#",
        // repository: "https://github.com/username/project-one",
        liveLink: "https://association-omega.vercel.app/",
        stacks: ["React", "JavaScript", "Tailwind CSS", "HTML"],
      },
      {
        title: "shewfoundation",
        description: "An NGO organization whose goal is to combat hunger",
        image: shew,
        // link: "#",
        // repository: "https://github.com/username/project-one",
        // liveLink: "https://project-one-live.com",

        // link: "#",
        // repository: "https://github.com/username/project-one",
        liveLink: "shewfoundation.com",
        stacks: ["React", "JavaScript", "Tailwind CSS", "HTML"],
      },

      {
        title: "Coffe Shop",
        description: "An amazing coffee shop with a unique coffee menu.",
        image: coffee,
        // link: "#",
        // repository: "https://github.com/username/project-one",
        // liveLink: "https://project-one-live.com",

        // link: "#",
        // repository: "https://github.com/username/project-one",
        liveLink: "https://coffee-shop-orcin-gamma.vercel.app/",
        stacks: ["React", "JavaScript", "Tailwind CSS", "HTML"],
      },

      // Add more website projects as needed
    ],
    apps: [
      // {
      //   title: "App One",
      //   description: "A fantastic mobile app built with Flutter.",
      //   image: "/app1.jpg",
      //   link: "#",
      //   repository: "https://github.com/username/app-one",
      //   liveLink: "https://app-one-live.com",
      //   stacks: ["Flutter", "Dart", "Firebase"], // Added tech stacks
      // },
      // {
      //   title: "App Two",
      //   description: "An innovative app developed with React Native.",
      //   image: "/app2.jpg",
      //   link: "#",
      //   repository: "https://github.com/username/app-two",
      //   liveLink: "https://app-two-live.com",
      //   stacks: ["React Native", "JavaScript", "Redux"], // Added tech stacks
      // },
      // Add more apps as needed
    ],
  };

  return (
    <section id="projects" className="py-20 px-6 bg-gray-100 dark:bg-gray-900">
      <div className="text-center mb-12">
        <h3
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="800"
          data-aos-delay="300"
          className="text-xl relative inline-block text-[#001b20] dark:text-white"
        >
          <span className="mr-5 text-[#ffbd59] font-bold">My projects</span>
          <span className="absolute right-[190px] bottom-[-10px] h-[1.5px] w-[900px] bg-[#f6a326]" />
        </h3>
      </div>
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
          <div
            key={index}
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
              <div className="mt-2 text-gray-600 dark:text-gray-400">
                <strong>Tech Stack:</strong>
                <ul className="list-disc list-inside">
                  {project.stacks.map((stack, i) => (
                    <li key={i}>{stack}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 flex justify-between items-center">
                {/* <a
                  href={project.repository}
                  className="text-blue-600 dark:text-yellow-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Repository
                </a> */}
                <a
                  href={project.liveLink}
                  className="text-blue-600 dark:text-yellow-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
