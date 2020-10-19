import React, { useState, useCallback } from 'react'
import Sound from 'react-sound'
import AudioController from './AudioController';
import '../../styles/track.css'

const Track = ({tracks}) => {
    const [isPlaying, setIsPlaying] = useState(false),
          [url, setUrl] =useState("");

    const playToggle = useCallback((preview_url) => {
        setIsPlaying(!isPlaying)
        setUrl(preview_url)
    },[setIsPlaying])

    const playBack = () => {
        if(isPlaying === true){
            return(
                <Sound url={url} playStatus={Sound.state.PLAYING}/>
            )
        }
    }

    return (
        <div className='tracks-wrapper'>
            {tracks.map((track, index) => 
                <div key={track.id} className="track">
                    <div className="counter">
                        <p>{++index}.</p>
                    </div>
                    <div className="track-artists">
                        <AudioController playUrl={track.playUrl} label="再生" playToggle={playToggle}/>
                        {<li key={index}>{track.artists}</li>}
                    </div>
                </div>
            )}
            {playBack()}         
        </div>
    )
}

export default Track
