export function addItinDate(itinDate) {
    return function(dispatch) {
        return fetch(`/api/itineraries/${itinDate.itinerary_id}/itindates`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type':'application/json'
            },
            credentials: 'same-origin',
            body: JSON.stringify({itinDate:itinDate})
        })
        .then(res=>res.json())
        .then((responseJson) => {
            if(!responseJson.error) {
                dispatch({type:"ADD_ITIN_DATE", itinDate: responseJson})
            } else {
                dispatch({type:"ADD_ITIN_DATE_FAILURE", error: responseJson.error})
            }
        })
    }
}