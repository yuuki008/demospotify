import React from 'react';
import './App.css';
import {useSelector} from 'react-redux';
import SearchMusic from './components/SearchMusic';
import { getAlbum, getArtist, getItem, getItems, getTracks } from './reducks/selector';

function App({token}) {
  const selector = useSelector((state) => state);
  const item = getItem(selector)
  const MusicItem = getItems(selector)
  const artists = getArtist(selector)
  const albums = getAlbum(selector)
  const tracks = getTracks(selector);
  console.log(artists)
  console.log(albums)
  console.log(tracks)
  return (
    <SearchMusic
        token={token}
        item={item}
        artists={artists}
        tracks={tracks}
        albums={albums}
    />
  );
}

export default App;
