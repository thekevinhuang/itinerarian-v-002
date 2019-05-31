export function addPackingItem(packing_item) {
    return function(dispatch) {
        return fetch (`/api/itineraries/${packing_item.itinerary_id}/packing_items`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin',
            body: JSON.stringify({packing_item:packing_item})
        })
        .then(res=>res.json())
        .then((responseJson) => {
            if(!responseJson.error) {
                dispatch({type:"ADD_PACKING_ITEM", packingItem: responseJson})
            } else {
                dispatch({type:"ADD_PACKING_ITEM_FAILURE", error: responseJson.error})
            }
        })
    }
}

export function fetchPackingItems(itinerary_id) {
    return function(dispatch) {
        return fetch (`/api/itineraries/${itinerary_id}/packing_items`, {
            method: 'GET', 
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        })
        .then(res=>res.json())
        .then((responseJson)=> {
            if(!responseJson.error) {
                dispatch({type:"FETCH_PACKING_ITEMS", packingItems: responseJson})
            } else {
                dispatch({type:"FETCH_PACKING_ITEMS_FAILURE", error: responseJson.error})
            }
        })
    }
}

export function deletePackingItem(packing_item_id) {
    return function(dispatch) {
        return fetch(`/api/packing_items/${packing_item_id}`, {
            method: 'DELETE',
            headers:{
                Accept: 'application/json',
                'Content-Type' :'application/json'
            },
            credentials: 'same-origin'
        })
        .then(res=>res.json())
        .then((responseJson)=> {
            if(!responseJson.error) {
                dispatch({type:"DELETE_PACKING_ITEM", packingItems: responseJson})
            } else {
                dispatch({type:"DELETE_PACKING_ITEMS_FAILURE", error: responseJson.error})
            }
        })
    }
}