import React, {useState} from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';

import './GeneratePlaylist.css'
import ArtistTrackForm from './Subcomponents/ArtistTrackForm/ArtistTrackForm';
import NumberOfTrackForm from './Subcomponents/NumberOfTrackForm/NumberOfTrackForm';
import ParametersForm from './Subcomponents/ParametersForm/ParametersForm';

function GeneratePlaylist() {

 const navigate = useNavigate()

  const [artist,setArtist]=useState('')
  const [track, setTrack]=useState('')

  const [getnbtrack,setGetnbtrack]=useState(30)

  const [getEnergy,setGetEnergy]=useState(60)
  const [getTempo,setGetTempo]=useState(120)
  const [getPopularity,setGetPopularity]=useState(30)
  const [getInstrumentalness,setGetInstrumentalness] = useState(0.5)
  const [getLiveness,setGetLiveness] = useState(0.7)


  let submitValues = ()=>{
    if(artist !== '' && track !== ''){
      const route = 'https://mellow-dy.tinker.ovh/'
      
    axios({
          method: 'post',
          url: route + '?artist='+ artist + '&track='+track+'&limit='+getnbtrack+'&popularity='+getPopularity+'&liveness='+getLiveness+'&tempo='+getTempo+'&instrumentalness='+getInstrumentalness+'&energy='+getEnergy,
          headers: { Authorization: `Bearer ${window.localStorage.getItem('FrontToken')}`}
        }).then(()=>{
          console.log('sossurr')
          navigate('/playlist-generated')
        }).catch(()=>{
          console.log('soossur')
          navigate('/error')
        })

        
      }
  }

  return (
    <div className="GeneratePlaylist">
      
      <div className='Form'>

        <div className='wlcm-user-container'>
          <h2>Hey <span>You</span>,</h2>
          <p>What do you feel like listening to today ?</p>
        </div>

        <ArtistTrackForm 
          changeArtist={artist=>setArtist(artist)}
          changeTrack={track=>setTrack(track)}
        />

        <NumberOfTrackForm
          changenbtrack={getnbtrack=>setGetnbtrack(getnbtrack)}
        />

        <ParametersForm
          changeEnergy={getEnergy=>setGetEnergy(getEnergy)}
          changeTempo={getTempo=>setGetTempo(getTempo)}
          changePopularity={getPopularity=>setGetPopularity(getPopularity)}
          changeInstrumentalness={getInstrumentalness=>setGetInstrumentalness(getInstrumentalness)}
          changeLiveness={getLiveness=>setGetLiveness(getLiveness)}
        />

        <div className='submit-button-container'>
          <button onClick={submitValues}>Generate your playlist</button>
        </div>

      </div>
    </div>
  );
}

export default GeneratePlaylist;