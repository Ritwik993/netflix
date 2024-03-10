import  { useEffect } from "react";
import { API_KEY_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import {  addTopRated} from "../utils/movieSlice";
const useTopRated=()=>{
    
  const dispatch=useDispatch();

  const getMovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1', API_KEY_OPTIONS);
    const json=await data.json();
   // console.log(json.results);
    dispatch(addTopRated(json.results));
  }
  useEffect(()=>{
    getMovies();
  },[])
}

export default useTopRated;