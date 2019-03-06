function addIpoint (ipoint) {
    return function(dispatch) {
        return fetch (`/api/itin_dates/${ipoint.itin_date_id}/ipoints`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin',
            body: JSON.stringify({ipoint:ipoint})
        })
        .then(res=>res.json())
        .then((responseJson) => {
            if(!responseJson.error) {
                dispatch({type:"ADD_IPOINT", ipoint: responseJson})
            } else {
                dispatch({type:"ADD_IPOINT_FAILURE", error: responseJson.error})
            }
        })
    }
}

function fetchIpoints(itin_date_id) {
    return function(dispatch) {
        return fetch (`/api/itin_dates/${itin_date_id}/ipoints`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        })
        .then(res=>res.json())
        .then((ipoints)=> {
            if(!ipoints.error) {
                dispatch({type:"FETCH_IPOINTS", ipoints: ipoints})
            } else {
                dispatch({type:"FETCH_IPOINTS_FAILURE", error: ipoints.error})
            }
        })
    }
}