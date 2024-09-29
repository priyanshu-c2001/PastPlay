import React, { useState } from "react";
import Result from "./Result";
import poster from "../images/poster.jpeg";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchResult, setSearchResult] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col bg-gradient-to-b from-stone-700 pt-64 text-white h-screen">
      <div className="flex w-1/2 justify-around mx-auto">
        <input className="h-14 w-3/4 rounded-lg text-stone-700 p-2 font-semibold text-xl" />
        <button
          onClick={() => setSearchResult(!searchResult)}
          className="text-2xl font-semibold bg-neutral-600 text-neutral-300 p-2 rounded-lg"
        >
          Search
        </button>
        {searchResult ? <Result /> : null}
      </div>
      <div className="w-5/6 py-10 mx-auto">
        <img
          className="cursor-pointer aspect-video"
          onClick={() => navigate("/desc")}
          src={poster}
          alt=""
        />
      </div>
    </div>
  );
};

export default Search;
