import React from "react";
import display1 from "../images/display1.jpg";
import display2 from "../images/display2.jpg";
import display3 from "../images/display3.jpg";
import display4 from "../images/display4.jpg";
import ItemList from "./ItemList";
import { useState } from "react";

const Desc = () => {
  const images = [display2, display3, display4];
  const [season, setSeason] = useState(1);

  return (
    <div>
      <main className="relative">
        <img src={display1} alt="" />
        <section className="absolute bottom-8 left-[40%] items-center h-1/5 w-1/6 flex gap-6">
          <button
            className="bg-gray-600 px-4 py-2 rounded-full bg-opacity-80 text-2xl font-semibold"
            onClick={() => setSeason(season + 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
            </svg>
          </button>
          <p className="text-white px-4 py-2 rounded-full bg-gray-600 bg-opacity-80 text-3xl font-semibold">
            {season}
          </p>
          <button
            className="bg-gray-600 px-4 py-2 rounded-full bg-opacity-80 text-2xl font-semibold"
            onClick={() => setSeason(season + 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
            </svg>
          </button>
        </section>
        <ItemList images={images} />
      </main>
    </div>
  );
};

export default Desc;
