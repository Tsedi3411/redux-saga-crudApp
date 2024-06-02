
import { createSlice } from "@reduxjs/toolkit"
const songs =createSlice({
    name:'songs',
    initialState:
        {
            id: 0,
            Title: '',
            Artist: ''
       },
       reducers:{
        getSongsSlice:(state, action)=>{
            return state
        },
        addSongSlice:(state, action)=>{
            state.push(action.payload)
            return state
        },
        editSongSlice:(state, action)=>{
            state = state.map(i=>i.id === action.payload.id ? action.payload: i)
            return state
        },
        deleteSongSlice:(state, action)=>{
            state = state.filter(i=>i.id !== action.payload.id)
            return state
        }
       }
    
})

export const { getSongsSlice, addSongSlice, editSongSlice, deleteSongSlice } =songs.actions
export default songs.reducer