// import React from "react";
import PropTypes from "prop-types";

const ExpCard = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 h-[200px] cursor-cell transition-transform duration-300 ease-in-out shadow-md bg-white dark:bg-[#001b20] text-[#001b20] dark:text-white rounded-lg hover:shadow-lg hover:scale-105">
      {children}
    </div>
  );
};

ExpCard.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ExpCard;
