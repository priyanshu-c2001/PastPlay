import React from "react";
import poster from "../images/poster.jpeg";

const Card = () => {
  return (
    <div>
      <img
        className="hover:-translate-y-4 transition-all duration-1000 max-w-max border-0 rounded-xl"
        src={poster}
        alt=""
      />
    </div>
  );
};

export default Card;
