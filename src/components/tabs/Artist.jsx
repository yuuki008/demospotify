import React from 'react'
import artistImg from '../../artist-music.jpg'
import '../../styles/artist.css';

const Artist = ({artists}) => {
    if(artists){
        console.log(artists.length)
    }

    return (
        <div className='artists-wrapper'>
            {artists.map(artist => 
            <div key={artist.id} className="artist">
                <img alt={artist.name} src={artist.image === undefined ? artistImg : artist.image.url}/>
                <p>{artist.name}</p>
            </div>
            )}
        </div>
    )
}

export default Artist
