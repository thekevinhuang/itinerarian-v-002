function userReducer (state={}, action) {
    switch(action.type) {
        case 'SIGNUP_SUCCESS':
            return {
                ...state,
                redirect: action.redirect
            }   

        case 'LOGIN_SUCCESS':
            return {
                ...state,
                currentUser: action.user
            }
        case 'LOGIN_FAILURE': 
            return {
                ...state,
                curentUser: '',
                error: action.error
            }
        case 'SIGNUP_FAILURE':
            return {
                ...state,
                redirect: false,
                error: action.error
            }
        default:
            return state
    }
}

export default userReducer