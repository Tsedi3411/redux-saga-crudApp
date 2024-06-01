

import axios from 'axios'

axios.defaults.baseUrl='http://localhost:8000'

export const getSongsAPI= async ()=>axios.get('/songs')

export const getSongByIdAPI= async (id)=>axios.get(`/songs/${id}`)

export const createSongsAPI= async (song)=>axios.post(`/songs` , song)

export const updateSongAPI= async (song)=>axios.put(`/songs/${song.id}` , song)

export const deleteSongByIdAPI= async (id)=>axios.delete(`/songs/${getSongByIdAPI.id}`)
