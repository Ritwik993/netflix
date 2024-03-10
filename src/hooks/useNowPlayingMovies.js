import  { useEffect } from "react";
import { API_KEY_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
const useNowPlayingMovies=()=>{
    
  const dispatch=useDispatch();

  const getMovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', API_KEY_OPTIONS);
    const json=await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  }
  useEffect(()=>{
    getMovies();
  },[])
}

export default useNowPlayingMovies;