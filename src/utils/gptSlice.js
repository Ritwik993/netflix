import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"GPT",
    initialState:{
        gptSearch:true,
    },
    reducers:{
        toggleGPTSearch:(state)=>{
            state.gptSearch=!state.gptSearch
        }
    }
})

export const {toggleGPTSearch}=gptSlice.actions;
export default gptSlice.reducer;