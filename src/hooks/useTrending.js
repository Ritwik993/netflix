import  { useEffect } from "react";
import { API_KEY_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import {  addTrendingMovies} from "../utils/movieSlice";
const useTrendingMovies=()=>{
    
  const dispatch=useDispatch();

  const getMovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1', API_KEY_OPTIONS);
    const json=await data.json();
   // console.log(json.results);
    dispatch(addTrendingMovies(json.results));
  }
  useEffect(()=>{
    getMovies();
  },[])
}

export default useTrendingMovies;