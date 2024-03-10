import  { useEffect } from "react";
import { API_KEY_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addLatestMovies} from "../utils/movieSlice";
const useLatestMovies=()=>{
    
  const dispatch=useDispatch();

  const getMovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1', API_KEY_OPTIONS);
    const json=await data.json();
   // console.log(json.results);
    dispatch(addLatestMovies(json.results));
  }
  useEffect(()=>{
    getMovies();
  },[])
}

export default useLatestMovies;