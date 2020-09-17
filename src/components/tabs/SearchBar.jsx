import React from 'react'
import '../../styles/searchBar.css'

const SearchBar = ({inputText, handleSearchBar, text, item}) => {
    return (
        <div className="searchBar-wrapper">
            <p>Search for an Artists, Song or Album</p>
            <form
            onChange = {e => {
                e.preventDefault()
                handleSearchBar(text)
            }}
            >
                <input 
                    autoFocus
                    // defaultValue={item}
                    placeholder="start typing..."
                    default={item}
                    onChange={(e) => inputText(e)}
                />
            </form>
        </div>
    )
}

export default SearchBar
