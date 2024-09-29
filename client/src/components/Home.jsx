import React from "react";
import VideoBg from "./Home/VideoBg";
import Discover from "./Home/Discover";

const Home = () => {
  return (
    <div className="w-screen h-screen relative">
      <VideoBg />
      <Discover />
    </div>
  );
};

export default Home;
