export function addIpoint (ipoint) {
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

export function fetchIpoints(itin_date_id) {
    
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

export function showIpoint(ipoint_id) {
    return function(dispatch) {
        return fetch(`/api/ipoints/${ipoint_id}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json', 
                'Content-Type' : 'applicaiton/json'
            },
            credentials: 'same-origin'
        })
        .then(res=>res.json())
        .then((ipoint)=> {
            if(!ipoint.error) {
                dispatch({type:"SHOW_IPOINT", ipoint: ipoint})
            } else {
                dispatch({type:"SHOW_IPOINT_FAILURE", error: ipoint.error})
            }
        })
    }
}

export function deleteIpoint(ipoint_id) {
    return function(dispatch) {
        return fetch(`/api/ipoints/${ipoint_id}`, {
            method: 'DELETE',
            headers:{
                Accept: 'application/json',
                'Content-Type' :'application/json'
            },
            credentials: 'same-origin'
        })
        .then(res=>res.json())
        .then((ipoints)=>{
            if(!ipoints.error) {
                dispatch({type:"DELETE_IPOINT", ipoints: ipoints})
            } else {
                dispatch({type:"DELETE_IPOINT_FAILURE", error: ipoints.error})
            }
        })
    }
}