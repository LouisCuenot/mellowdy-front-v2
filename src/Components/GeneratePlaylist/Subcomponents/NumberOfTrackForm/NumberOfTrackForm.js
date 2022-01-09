import React, {useState} from 'react';

import Slider from '@mui/material/Slider';
import './NumberOfTrackForm.css'


function NumberOfTrackForm(props){

    const [nbtrack,setNbtrack] = useState('30')

    

    let changenbtrack = (e)=>{
        setNbtrack(e.target.value)
        props.changenbtrack(e.target.value)
    }

    return(
        <div className='number-of-track-container'>

            <p>How many songs would you like in your playlist?</p>
            <Slider
                size="medium"
                defaultValue={30}
                min={1}
                max={60}
                onChange={changenbtrack}
            />
            <p>{nbtrack}</p>
        </div>
    )
}

export default NumberOfTrackForm;