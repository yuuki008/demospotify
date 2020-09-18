import axios from 'axios';
import { receiveItem, requestItem , fetchArtistAction, fetchAlbumAction, fetchTrackAction} from './actions';

export const fetchTrack = (item, token) => {
    return async (dispatch) => {
        dispatch(requestItem(item))
        const tracks = []
        axios.get(`https://api.spotify.com/v1/search?q=${item}&type=track`,{
            headers: {'Authorization': 'Bearer ' + token, }
        })
        .then(response => response.data)
        .then(res => {
            res.tracks.items.map(item => {
                const data = {
                    id: item.id,
                    name: item.name,
                    artists: item.artists[0].name,
                    playUrl: item.preview_url
                }
                tracks.push(data)
            })
            dispatch(fetchTrackAction(tracks, token))
        }).catch((error) => console.log(error.response))
    }
}

export const fetchAlbum = (item, token) =>  {
    return async (dispatch) => {
        dispatch(requestItem(item))
        const albums = []
        axios.get(`https://api.spotify.com/v1/search?q=${item}&type=album`,{
            headers :{ 'Authorization': 'Bearer ' + token, }
        })
        .then(response => response.data)
        .then(res => {
            res.albums.items.map(item => {
                const data = {
                    id: item.id,
                    name: item.name,
                    artist: item.artists[0].name,
                    image: item.images[1]
                }
                albums.push(data)
            })
            dispatch(fetchAlbumAction(albums, token))
        })
        .catch((error) => console.log(error.response))
    }
}

export const fetchArtist = (item, token) => {
    return async(dispatch) => {
        dispatch(requestItem(item))
        const artists = []
        axios.get(`https://api.spotify.com/v1/search?q=${item}&type=artist`,{
            headers :{ 'Authorization': 'Bearer ' + token, }
        })
        .then(response => response.data)
        .then(res => {
            res.artists.items.map(item => {
            const data = {
                id: item.id,
                name: item.name,
                image: item.images[1]
            }
            artists.push(data)
        })
        dispatch(fetchArtistAction(artists, token))
    })  
    }
}






