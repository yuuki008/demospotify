import axios from 'axios';
import { receiveItem, requestItem } from './actions';

export const fetchTracks = (item,token) => {
    return async (dispatch) => {
        dispatch(requestItem(item))
        return axios.get(`https://api.spotify.com/v1/search?q=${item}&type=track`, {
            headers :{ 'Authorization': 'Bearer ' + token, }
        })
        .then(response => response.data)
        .then(res => res.tracks.items.map(item => ({
            id: item.id,
            name: item.name,
            artists: item.artists[0].name,
            playUrl: item.preview_url
        })))
        .catch(err => console.log(err))
    }
}

export const fetchAlbums = (item,token) => {
    return async (dispatch) => {
        dispatch(requestItem(item))
        return axios.get(`https://api.spotify.com/v1/search?q=${item}&type=album`, {
            headers :{ 'Authorization': 'Bearer ' + token, }
        })
        .then(response => {
            const data = response.data
            return data
        })
        .then(res => res.albums.items.map(item => ({
            id: item.id,
            name: item.name,
            artsit: item.artists[0].name,
            image: item.images[1]
        })))
        .catch(err => console.log(err))
    }
}

export  const fetchArtist = (item,token) => {
    return async (dispatch) => {
        dispatch(requestItem(item))
        return axios.get(`https://api.spotify.com/v1/search?q=${item}&type=artist`,{
            headers :{ 'Authorization': 'Bearer ' + token, }
        })
        .then(response => {
            const data = response.data
            return data
        })
        .then(res => res.artists.items.map(item => ({
          id: item.id,
          name: item.name,
          image: item.images[1]
        })))
        .catch(err => console.log(err))
    }
}

const mergeData = (artists, albums, tracks) => {
    return {
        artists: artists, 
        albums: albums,
        tracks: tracks
    }
}

export const fetchData = (searchedItem, token) => {
    return async (dispatch) => {
        const tracks = dispatch(fetchTracks(searchedItem, token));
        const albums = dispatch(fetchAlbums(searchedItem, token));
        const artists = dispatch(fetchArtist(searchedItem, token))
        const mergeItem = mergeData(artists, albums, tracks)
        dispatch(receiveItem(searchedItem, mergeItem))
    }
}