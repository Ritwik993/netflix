import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopular from "../hooks/usePopular";
import useTopRated from "../hooks/useTopRated";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useLatestMovies from "../hooks/useLatestMovies";
import useTrendingMovies from "../hooks/useTrending";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const gpt = useSelector((store) => store.GPT.gptSearch);
  useNowPlayingMovies();
  usePopular();
  useTopRated();
  useUpcomingMovies();
  useLatestMovies();
  useTrendingMovies();
  useTopRated();
  return (
    <div className="overflow-x-hidden">
      <Header />
      {gpt ? (
        <GPTSearch />
      ) : (
        <>
          {" "}
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
