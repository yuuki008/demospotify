import * as Actions from './actions';
import initialState from './store/initialState';

export const itemReducer = (state = initialState.item, action) => {
    switch(action.type){
        case Actions.SEARCH_ITEM:
            return action.item
        default:
            return state
    }
}
export const tokenReducer = (state = initialState.token, action) => {
    switch(action.type){
        case Actions.SAVE_TOKEN:
            return action.token
        default:
            return state
    }
}
export const spotifyReducer = (state = initialState.spotify, action) => {
    switch(action.type){
        case Actions.REQUEST_ITEM:
        case Actions.RECEIVE_ITEM:
            return {
                ...state,
                items: action.items
            }
        case Actions.FETCH_ARTIST:
            return{
                ...state,
                artists: [...action.payload]
            }
        case Actions.FETCH_ALUBUM:
            return{
                ...state,
                albums: [...action.payload]
            }
        case Actions.FETCH_TRACK:
            return{
                ...state,
                tracks: [...action.payload]
            }
        default:
            return state
    }
}