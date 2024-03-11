import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ title, movies }) => {
  console.log(movies);
  if (!movies) return;
  return (
    <div className="bg-black text-white relative z-20 ">
      <div className=" -mt-20 ">
        <h1 className="text-3xl p-4">{title}</h1>
        <div className=" overflow-x-scroll scrollbar-none">
          <div className=" w-52 m-4 flex gap-4 ">
            {movies.map((movie) => (
              <img src={IMG_CDN_URL + movie?.poster_path} alt="" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
