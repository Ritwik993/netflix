import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        movieTrailer:null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
        latestMovies:null,
        trendingMovies:null,
        topRated:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addMovieTrailer:(state,action)=>{
            state.movieTrailer=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload;
        },
        addLatestMovies:(state,action)=>{
            state.latestMovies=action.payload;
        },
        addTrendingMovies:(state,action)=>{
            state.trendingMovies=action.payload;
        },
        addTopRated:(state,action)=>{
            state.topRated=action.payload;
        }
    }
})

export const {addNowPlayingMovies,addMovieTrailer,addPopularMovies,addTopRatedMovies,addUpcomingMovies,addLatestMovies,addTrendingMovies,addTopRated}=movieSlice.actions;
export default movieSlice.reducer;