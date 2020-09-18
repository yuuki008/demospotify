import React from 'react'

const AudioController = ({playUrl, label, playToggle}) => {
    return (
        <li style={{textDecoration: 'underline overline', color: '#fff'}}>
            <a onClick={() => playToggle(playUrl)}>{label}</a>
        </li>
    )
}

export default AudioController
