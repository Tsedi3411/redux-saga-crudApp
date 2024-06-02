import container from '@mui/material/Container';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { useState } from 'react';

const MyForm = () =>{
  const [song,setSong]=useState({
         id: 0,
         Title: '',
         Artist: ''
    })
    const handleChange =(prop)=>(event)=>{
        setSong({...song, [prop]:event.target.value})
    }

    return <>
    <container>
        <Input value={song.id} fullwidth disable/>
        <Input onChange={handleChange('Title')} placeholder='Enter Song Title' value={song.Title} fullwidth />
        <Input onChange={handleChange('Artist')} placeholder='Enter Artist' value={song.Artist} fullwidth />
        <Button  fullwidth variant="contained">Submit</Button>
    </container>
    </>
  
}

export default MyForm