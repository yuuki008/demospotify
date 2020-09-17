export const REQUEST_ITEM = "REQUEST_ITEM"
export const requestItem = (item) => {
    return {
        type: REQUEST_ITEM,
        item
    }
}

export const SEARCH_ITEM = "SEARCH_ITEM"
export const searchItem = (item) => {
    return {
        type: SEARCH_ITEM,
        item
    }
}

export const RECEIVE_ITEM = "RECEIVE_ITEM"
export const receiveItem = (item, json) => {
    return {
        type: RECEIVE_ITEM,
        item,
        items: json
    }
}

export const SAVE_TOKEN = "SAVE_TOKEN"
export const saveToken = (token) => {
    return{
        type: SAVE_TOKEN,
        token
    }
}

export const FETCH_DATA = "FETCH_DATA"
export const fetchData = (searchedItem, token) => {
    return {
        type: FETCH_DATA,
        searchedItem,
        token
    }
}