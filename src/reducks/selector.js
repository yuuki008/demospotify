import {createSelector} from 'reselect';


const itemSelector = (state) => state.item;
const spotifySelector = (state) => state.spotify

export const getItem = createSelector(
    [itemSelector],
    state => state
)

export const getItems = createSelector(
    [spotifySelector],
    state => state.items
)