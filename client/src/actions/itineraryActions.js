export function addItinerary(itinerary) {
    return function(dispatch) {
        return fetch(`/api/users/${itinerary.user_id}/itineraries`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type':'application/json'
            },
            credentials: 'same-origin',
            body: JSON.stringify({itinerary:itinerary})
        })
        .then(res=>res.json())
        .then((responseJson) => {
            if(!responseJson.error) {
                dispatch({type:"ADD_ITINERARY", itinerary: responseJson})
            } else {
                dispatch({type:"ADD_ITINERARY_FAILURE", error: responseJson.error})
            }
        })
    }
}

export function fetchItineraries(user_id) {
    return function(dispatch) {
        return fetch(`/api/users/${user_id}/itineraries`, {
            method: 'GET', 
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            credentials: 'same-origin'
        })
        .then(res=>res.json())
        .then((responseJson)=> {
            if(!responseJson.error){
                dispatch({type:"FETCH_ITINERARIES", itineraries: responseJson})

            } else {
                dispatch({type:"FETCH_ITINERARIES_FAILURE", error: responseJson.error})
            }
        })
    }
}

export function showItinerary(itinerary_id) {
    return function(dispatch) {
        return fetch(`/api/itineraries/${itinerary_id}`, {
            method: 'GET',
            header: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        })
        .then(res=> res.json())
        .then((itinerary)=> {
            
            if(!itinerary[0].error) {
                dispatch({type: "SHOW_ITINERARY", itinerary: itinerary[0]})
            } else {
                dispatch({type:"SHOW_ITINERARY_FAILURE", error: itinerary[0].error})
            }
        })
    }
}