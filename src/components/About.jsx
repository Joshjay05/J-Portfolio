export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900">
      <article className="max-w-4xl mx-auto text-center flex flex-col lg:flex-row items-center">
        <div>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Problem solver <code>&lt;coder&gt;</code>
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Frontend developer with over 3 years of experience.
          </p>
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li>
              🎓 Master of Science in IT, Graduated from XYZ University with a
              focus on frontend web development.
            </li>
            <li>
              ⚛️ Specializing in React & Next.js, I’m constantly working on
              building cutting-edge web applications using TypeScript.
            </li>
            <li>
              🤝 I love working in teams; I enjoy working in a team environment
              and helping others with their web development journey.
            </li>
          </ul>
        </div>

        <div className="mt-8 flex justify-center space-x-4">
          <img
            src="/path/to/your/image.jpg"
            alt="Your Image"
            className="w-24 h-24 rounded-full object-cover"
          />
        </div>
      </article>
    </section>
  );
}
