import React from 'react'
import artistImg from '../../artist-music.jpg';
import '../../styles/album.css';

const Album = ({albums}) => {
    return (
        <div className="albums-wrapper">
            {albums.map(album => 
            <div key={album.id} className="album">
                <img alt={album.name} src={album.image === undefined ? artistImg : album.image.url}/>
                <h5>{album.name}</h5>
                <p>By {album.artist}</p>
            </div>
            )}
        </div>
    )
}

export default Album
