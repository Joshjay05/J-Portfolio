import josh from "../assets/josh.jpeg";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900 px-4">
      <article className="max-w-4xl mx-auto lg:text-center flex flex-col lg:flex-row items-center">
        <div>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Problem solver <code>&lt;coder&gt;</code>
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            I am a Frontend Developer, I excel in crafting responsive and
            visually appealing web applications using HTML, CSS, JavaScript, and
            TypeScript. .
          </p>
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li>
              ⚛️ Specializing in React & Next.js, I ensure seamless user
              experiences and robust functionality.
            </li>
            <li>
              My proficiency in testing platforms like Cypress and Jest, CI/CD
              with GitHub, and API integration guarantees high-quality, scalable
              solutions
            </li>

            <li>
              🤝 I love working in teams; I bring a proactive approach, strong
              problem-solving skills, and a passion for delivering exceptional
              results, making me a valuable asset to any development team.
            </li>
          </ul>
        </div>

        <div className="mt-8 flex justify-center space-x-4">
          <img
            src={josh}
            alt="Your Image"
            className="lg:w-[30vw]  lg:h-[20vh] h-[50vh] rounded-md object-contain opacity-80 hover:opacity-100"
          />
        </div>
      </article>
    </section>
  );
}
