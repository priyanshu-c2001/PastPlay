import React from "react";
import { data } from "../../utils/constants";

const VideoBg = () => {
  return (
    <div className="w-screen">
      <div className="absolute bg-gradient-to-b z-10 from-zinc-900 h-full w-screen"></div>
      <iframe
        className="w-full z-0 object-contain aspect-video border border-black border-collapse"
        src={`https://www.youtube.com/embed/${data.trailerId}?controls=0&rel=0&showinfo=0&autoplay=1&mute=1&loop=1`}
        title="Trailer"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="encrypted-media"
        allowFullScreen={true}
        disablePictureInPicture
      ></iframe>
    </div>
  );
};

export default VideoBg;
