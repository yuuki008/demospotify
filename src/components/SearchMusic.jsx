import React, { useState, useCallback, useEffect} from 'react'
import SearchBar from './tabs/SearchBar'
import { fetchAlbum, fetchArtist, fetchData, fetchTrack } from '../reducks/operations'
import { saveToken, searchItem } from '../reducks/actions'
import {useDispatch} from 'react-redux';
import TablistItem from './tabs/TablistItem';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Artist from './tabs/Artist'
import '../styles/navbar.css';
import '../styles/searchmusic.css';
import Track from './tabs/Track';
import Album from './tabs/Album';

const SearchMusic = ({token, item, artists, tracks, albums}) => {
    const dispatch = useDispatch()
    const [text, setText] = useState("")

    const inputText = useCallback((e) => {
        setText(e.target.value)
    },[setText])

    const handleSearchBar = (nextItem) => {
        dispatch(searchItem(nextItem))
    }


    useEffect(() => {
        if(item === "")return
        dispatch(fetchAlbum(item, token))
        dispatch(fetchArtist(item, token))
        dispatch(fetchTrack(item, token))
        saveToken(token)
    },[item])


    return (
        <div>
            <SearchBar 
              inputText={inputText}
              handleSearchBar={handleSearchBar}
              text={text}
              item={item}
            />
            <Router>
                <ul className="navbar-wrapper" role="tablist">
                    <TablistItem label="tracks" path="/track"/>
                    <TablistItem label="albums" path="/album"/>
                    <TablistItem label="artists"path="/artist"/>
                </ul>
                <div className="tab-content">
                    <Route exact path="/artist">
                        <Artist artists={artists}/>
                    </Route>
                    <Route exact path="/track">
                        <Track tracks={tracks}/>
                    </Route>
                    <Route exact path="/album">
                        <Album albums={albums}/>
                    </Route>
                </div>
            </Router>
        </div>
    )
}

export default SearchMusic
