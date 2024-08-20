import ExpCard from "../ExpCard";

const Experience = () => {
  const experiences = [
    {
      id: "ex1",
      experience: "Frontend Developer",
      place: "TM30 Global",
      pos: "Intern",
    },
    {
      id: "ex2",
      experience: "Frontend Developer",
      place: "Echete Academy",
      pos: "React.js Tutor",
    },
    {
      id: "ex3",
      experience: "Frontend Engineer",
      place: "GWC-Tech School",
      pos: "Full-time",
    },
    {
      id: "ex4",
      experience: "Admin",
      place: "Revelation Energy",
      pos: "Full-time",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h3
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="800"
            data-aos-delay="300"
            className="text-xl relative inline-block text-[#001b20] dark:text-white"
          >
            <span className="mr-5 text-[#ffbd59]">4.</span> Experience
            <span className="absolute left-[190px] bottom-[-10px] h-[1.5px] w-[900px] bg-[#f6a326]" />
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className="mb-8"
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="800"
              data-aos-delay={`${(idx + 1) * 150}`}
            >
              <ExpCard>
                <h3 className="text-lg text-[#001b20] dark:text-white">
                  {exp.place}
                </h3>
                <p className="text-[#001b20] dark:text-white">
                  {exp.experience}
                </p>
                <p className="text-[#001b20] dark:text-white">{exp.pos}</p>
              </ExpCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
