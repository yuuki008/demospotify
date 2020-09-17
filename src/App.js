import React from 'react';
import './App.css';
import {useSelector} from 'react-redux';
import SearchMusic from './components/SearchMusic';
import { getItem, getItems } from './reducks/selector';

function App({token}) {
  const selector = useSelector((state) => state);
  const item = getItem(selector)
  const MusicItem = getItems(selector)
  return (
    <SearchMusic
        token={token}
        item={item}
        MusicItem={MusicItem}
    />
  );
}

export default App;
