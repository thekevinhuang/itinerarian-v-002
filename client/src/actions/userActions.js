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
            if(!responseJson.errors) {
                dispatch({type: 'SIGNUP_SUCCESS', redirect: true})
            } else {
                dispatch({type: 'SIGNUP_FAILURE', errors: responseJson.errors})
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
                        //alert("you logged in!")
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

export function userLogout() {
    return function (dispatch) {
        dispatch({type:"USER_LOGOUT", user:""})
    }
}

export function googleLogin(authResult){
    
    return function(dispatch) {
        if (authResult['code']) {
            return fetch('/api/auth/request', {
                method: 'POST', 
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                credentials: 'same-origin',
                body: JSON.stringify(authResult)
            })
            .then(res=>res.json())
            .then((responseJson)=> {
                
                if(!responseJson.errors){
                    dispatch({type: 'LOGIN_SUCCESS', user: responseJson})
                    if (typeof localStorage === 'object') {
                        try {
                            //alert("you logged in!")
                            localStorage.setItem('current_user', JSON.stringify(responseJson))
                        } catch (e) {
                            alert("There was an issue!")
                        }
                    }
                } else {
                    dispatch({type: 'LOGIN_FAILURE', errors: responseJson.errors})
                }
            })
        } else {
            dispatch({type: 'LOGIN_FAILURE', errors: 'there was an error'})
        }
        
    }
}