import { API_KEY_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  //fetch the trailer video and updating the store with trailer video data

  const dispatch = useDispatch();
  const getMoviesDetails = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-U",
      API_KEY_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    const filteredData = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    console.log(trailer);
    dispatch(addMovieTrailer(trailer));
  };
  useEffect(() => {
    getMoviesDetails();
  }, []);
};

export default useMovieTrailer;
