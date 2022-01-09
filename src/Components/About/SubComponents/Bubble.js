import React, {useState} from 'react';

import './Bubble.css'
import './BubblePlacement.css'

import playicon from '../../../img/About/Bubble/play-icon.svg'
import nexttrackicon from '../../../img/About/Bubble/next-music-icon.svg'



function Bubble(props) {

  const [track,setTrack] = useState(props.teamMember.tracks[props.teamMember.trackindex])

  let previousTrack = ()=>{
    if(props.teamMember.trackindex!=0){
      props.teamMember.trackindex-=1
    setTrack(props.teamMember.tracks[props.teamMember.trackindex])
    }
  }

  let nextTrack = ()=>{
    if(props.teamMember.trackindex!=9){
      props.teamMember.trackindex+=1
      setTrack(props.teamMember.tracks[props.teamMember.trackindex])
    }
  }

  let browseTrack = ()=>{
    window.open(track.tracklink)
  }



  return (
    <div className="bubble">
      <div className='bubble-infos'>
            <h2 className='teammate-name'>{props.teamMember.name}</h2>
            <p className='teammate-position'>{props.teamMember.skills}</p>
            <h3 className='teammate-musical-description'>My musical description</h3>
            <div className='music-player-container'>
                <img src={nexttrackicon} onClick={previousTrack} className='next-button'/>
                <img src={playicon} onClick={browseTrack} className='play-button'/>
                <img src={nexttrackicon} onClick={nextTrack} className='reverse next-button'/>
            </div>
            <p className='teammate-music-title'>{track.trackname} - <span>{track.artistname}</span></p>
      </div>
    </div>
  );
}

export default Bubble;