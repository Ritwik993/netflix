import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);

  console.log(movies?.nowPlayingMovies);

  return (
    <div>
      <MovieCard
        title={"Now Playing Movies"}
        movies={movies?.nowPlayingMovies}
      />
      <MovieCard title={"Top Rated Movies"} movies={movies?.topRatedMovies} />
      <MovieCard title={"Popular Movies"} movies={movies?.popularMovies} />
      <MovieCard title={"Upcoming Movies"} movies={movies?.upcomingMovies} />
      <MovieCard title={"Airing Today"} movies={movies?.latestMovies} />
      <MovieCard title={"Trending Movies"} movies={movies?.trendingMovies} />
      {/* <MovieCard title={"Top Rated"} movies={movies?.topRated} /> */}
    </div>
  );
};

export default SecondaryContainer;
