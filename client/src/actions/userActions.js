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

export function loginUser(user) {
    return function(dispatch) {
        return fetch('/api/signin', {
            method: 'POST', 
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            credentials: 'same-origin',
            body: JSON.stringify({user:user})
        })
        .then(res=>res.json())
        .then((responseJson)=> {
            
            if(!responseJson.errors){
                dispatch({type: 'LOGIN_SUCCESS', user: responseJson})
                if (typeof localStorage === 'object') {
                    try {
                        localStorage.setItem('current_user', JSON.stringify(responseJson))
                    } catch (e) {
                        alert("There was an issue!")
                    }
                }
            } else {
                dispatch({type: 'LOGIN_FAILURE', errors: responseJson.errors})
            }
        })
    }
}