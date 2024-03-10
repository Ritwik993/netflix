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


const Browse = () => {
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
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
