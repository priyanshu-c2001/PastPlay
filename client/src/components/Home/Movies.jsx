import React from "react";
import Card from "../Card";

const Movies = () => {
  return (
    <div className="-my-24 flex flex-col gap-8 z-50">
      {/* Title */}
      <div className="flex justify-between">
        <p className="text-white">Movies</p>
        <svg
          className="cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#FFFFFF"
        >
          <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
        </svg>
      </div>
      {/* List Container */}
      <div className="flex overflow-x-scroll gap-8">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Movies;
