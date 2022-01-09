
import './ArtistTrackForm.css'

import artisttitle from '../../../../img/GeneratePlaylist/artist.svg'
import artisticon1 from '../../../../img/GeneratePlaylist/artist1.svg'
import artisticon2 from '../../../../img/GeneratePlaylist/artist2.svg'
import tracktitle from '../../../../img/GeneratePlaylist/track.svg'
import trackicon1 from '../../../../img/GeneratePlaylist/track1.svg'
import trackicon2 from '../../../../img/GeneratePlaylist/track2.svg'

function ArtistTrackForm(props){

    let changeArtist = (e)=>{
        props.changeArtist(e.target.value)
    }

    let changeTrack = (e)=>{
        props.changeTrack(e.target.value)
    }

    return(
        <div className='artist-track-container'>
            <div className='artist-container'>
                <div>
                    <img src={artisttitle} alt="Artist"/>
                    <div>
                        <img src={artisticon1} alt="A beat icon"/>
                        <img src={artisticon2} alt="An headphones icon"/>
                        <img src={artisticon1} alt="A beat icon"/>
                    </div>
                </div>
                <input
                    type='text'
                    className='artist-input'
                    placeholder='Juice World'
                    onChange={changeArtist}
                    required>
                
                </input>
            </div>
            <div className='track-container'>
                <div>
                    <img src={tracktitle} alt="Track"/>
                    <div>
                        <img src={trackicon1} alt="A beat icon"/>
                        <img src={trackicon2} alt="An earbuds icon"/>
                        <img src={trackicon1} alt="A beat icon"/>
                    </div>
                </div>
                <input
                    type='text'
                    className='track-input'
                    placeholder='Lucid Dream'
                    onChange={changeTrack}
                    required>
                
                </input>
            </div>
        </div>
    )
}

export default ArtistTrackForm;