import  { useEffect } from "react";
import { API_KEY_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import {  addUpcomingMovies } from "../utils/movieSlice";
const useUpcomingMovies=()=>{
    
  const dispatch=useDispatch();

  const getMovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_KEY_OPTIONS);
    const json=await data.json();
   // console.log(json.results);
    dispatch(addUpcomingMovies(json.results));
  }
  useEffect(()=>{
    getMovies();
  },[])
}

export default useUpcomingMovies;