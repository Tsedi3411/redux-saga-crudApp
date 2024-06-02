
import { createSlice } from "@reduxjs/toolkit"
const song =createSlice({
    name:'song',
    initialState:
        {
            id: 0,
            Title: '',
            Artist: ''
       },
       reducers:{
        setSongSlice:(state, action)=>{
            state=action.payload
            return state
        }
       }
    
})

export const { getSongSlice } =song.actions
export default song.reducer