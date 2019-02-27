export function signupUser(user) {
    return function(dispatch) {
        return fetch('/api/users', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type':'application/json'
            },
            credentials: 'same-origin',
            body: JSON.stringify({user: user})
        })
        .then(res=>res.json())
        .then((responseJson)=> {
            if(!responseJson.error) {
                dispatch({type: 'SIGNUP_SUCCESS', redirect: true})
            } else {
                dispatch({type: 'SIGNUP_FAILURE', error: responseJson.error})
            }
        })
    }
}