import PropTypes from "prop-types";
import { BiCodeCurly } from "react-icons/bi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { events } from "./event";

const TimeLine = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="text-center mb-12">
        <h3
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="800"
          data-aos-delay="300"
          className="text-xl relative inline-block text-[#001b20] dark:text-white"
        >
          <span className="mr-5 text-[#ffbd59] font-bold">
            Project Timeline
          </span>
          <span className="absolute left-[190px] bottom-[-10px] h-[1.5px] w-[900px] bg-[#f6a326]" />
        </h3>
      </div>
      <div className="relative border-l-2 border-gray-300">
        {events?.map((event, index) => (
          <div
            key={index}
            className={`mb-8 flex justify-between items-center w-full ${
              index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            } flex-col-reverse md:items-center`}
          >
            <div className="order-1 w-full md:w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-yellow-500 shadow-xl w-8 h-8 rounded-full animate-bounce">
              <h1 className="mx-auto font-semibold text-lg text-white">
                {index + 1}
              </h1>
            </div>
            <div
              className={`order-1 bg-white rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4 ${
                index % 2 === 0 ? "md:text-right" : "md:text-left"
              }`}
              style={{
                animation: "fadeIn 0.5s ease-in-out",
              }}
            >
              <h3 className="mb-1 font-semibold text-yellow-600">
                {event.title}
              </h3>
              <time className="block mb-2 text-sm font-normal text-gray-400">
                {event.date}
              </time>
              <p className="text-gray-600 text-sm mb-2">{event.description}</p>
              <div className="flex gap-4 justify-end">
                {event.github && (
                  <a
                    href={event.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    <BiCodeCurly className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>
                )}
                {event.live && (
                  <a
                    href={event.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    <FaExternalLinkAlt className="w-5 h-5" />
                    <span>Live</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

TimeLine.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      github: PropTypes.string, // Optional
      live: PropTypes.string, // Optional
    })
  ).isRequired,
};

export default TimeLine;
