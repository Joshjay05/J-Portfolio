import PropTypes from "prop-types";
import { BiCode } from "react-icons/bi";
import { CiLink } from "react-icons/ci";

const EachTimeline = ({
  direction,
  text,
  title,
  index,
  date,
  githubLink,
  website,
  organization,
}) => {
  return (
    <div
      className={`flex items-center justify-around ${
        direction === "left" ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div
        className={`flex flex-col justify-between w-2/5 ${
          direction === "left" ? "text-right" : "text-left"
        }`}
      >
        <p className="text-yellow-400 font-bold">{title}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{date}</p>
        <p className="text-sm text-gray-900 dark:text-gray-100">{text}</p>
      </div>
      <div className="flex flex-col items-center">
        <span className="bg-[#c28e41] w-[2px] h-24"></span>
        <div className="bg-[#c28e41] w-10 h-10 rounded-full flex items-center justify-center">
          <p className="text-white text-sm font-bold">{index + 1}</p>
        </div>
      </div>
      <div
        className={`flex flex-col justify-between w-2/5 ${
          direction === "right" ? "text-right" : "text-left"
        }`}
      >
        <p className="mb-2 font-bold text-gray-900 dark:text-gray-100">
          {organization}
        </p>
        <div
          className={`flex items-center gap-3 ${
            direction === "right"
              ? "lg:ml-[22rem] md:ml-[16rem] sm:ml-[8rem]"
              : "ml-0"
          }`}
        >
          {website && (
            <a href={website} target="_blank" rel="noopener noreferrer">
              <CiLink className="inline-block mr-2 sm:mr-0" />
            </a>
          )}
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <BiCode className="inline-block mr-2" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

EachTimeline.propTypes = {
  id: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(["left", "right"]).isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  website: PropTypes.string, // Made optional
  githubLink: PropTypes.string, // Made optional
  organization: PropTypes.string.isRequired,
};

export default EachTimeline;
