// import React from "react";
import PropTypes from "prop-types";
import { BiCode } from "react-icons/bi";
import { CiLink } from "react-icons/ci";
// import { IoCodeSlashOutline } from "react-icons/io5";
// import { IoCodeSlashOutline } from "react-icons/io5";

const EachTimeline = ({
  //   id,
  direction,
  text,
  title,
  index,
  //   date,
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
        <div className="flex items-center">
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            // className="text-blue-500 hover:underline"
          >
            <CiLink className="inline-block mr-2" />
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            // className="text-blue-500 hover:underline"
          >
            <BiCode className="inline-block mr-2" />
          </a>
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
  website: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  //   website: PropTypes.string.isRequired,
  //
  organization: PropTypes.string.isRequired,
};

export default EachTimeline;
