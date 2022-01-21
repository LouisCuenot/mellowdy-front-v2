import React, {useState} from 'react';
import axios from 'axios';

import './GeneratePlaylist.css'
import ArtistTrackForm from './Subcomponents/ArtistTrackForm/ArtistTrackForm';
import NumberOfTrackForm from './Subcomponents/NumberOfTrackForm/NumberOfTrackForm';
import ParametersForm from './Subcomponents/ParametersForm/ParametersForm';

function GeneratePlaylist() {

  

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
        }).then((response)=>{
          console.log('response :', response)
        }).catch((e)=>{
          console.log('error :', e)
        }).then(()=>{
          alert('Check your spotify account, your playlist has been created')
        })

        
      }
  }

  return (
    <div className="GeneratePlaylist">
      
      <form>

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
          <input type='submit' placeholder='Generate playlist' onClick={submitValues} />
        </div>

      </form>
    </div>
  );
}

export default GeneratePlaylist;