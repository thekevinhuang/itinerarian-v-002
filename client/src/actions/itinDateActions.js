export function addItinDate(itinDate) {
    return function(dispatch) {
        return fetch(`/api/itineraries/${itinDate.itinerary_id}/itin_dates`, {
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

export function showItinDate(itin_date_id) {
    return function(dispatch) {
        return fetch(`/api/itin_dates/${itin_date_id}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type':'application/json'
            },
            credentials: 'same-origin'
        })
        .then(res=>res.json())
        .then((itinDate)=> {

            if(!itinDate.error) {
                dispatch({type:"SHOW_ITIN_DATE", itinDate: itinDate})
            } else {
                dispatch({type:"SHOW_ITIN_DATE_FAILURE", error: itinDate.error})
            }
        })
    }
}