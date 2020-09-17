import React, { useState, useCallback, useEffect} from 'react'
import SearchBar from './tabs/SearchBar'
import { fetchData } from '../reducks/operations'
import { saveToken, searchItem } from '../reducks/actions'
import {useDispatch} from 'react-redux';
import TablistItem from './tabs/TablistItem';
import Artist from './tabs/Artist'
import '../styles/navbar.css';
import '../styles/searchmusic.css';

const SearchMusic = ({token, item, MusicItem}) => {
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
        dispatch(fetchData(item, token))
        saveToken(token)
    },[item])

    console.log(MusicItem)

    return (
        <div>
            <SearchBar 
              inputText={inputText}
              handleSearchBar={handleSearchBar}
              text={text}
              item={item}
            />
            <ul className="navbar-wrapper" role="tablist">
                <TablistItem label="tracks"/>
                <TablistItem label="albums"/>
                <TablistItem label="artists"/>
            </ul>
            <div className="tab-content">
                {MusicItem !== undefined && (
                    <Artist artists={MusicItem.artists}/>
                )}
            </div>
        </div>
    )
}

export default SearchMusic
