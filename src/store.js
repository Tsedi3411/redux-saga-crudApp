import { configureStore } from '@reduxjs/toolkit';
import song from './redux/slice/song'
import songs from './redux/slice/songs'

const store = configureStore({
    reducer:{
        song,
        songs
    }
})

export default store