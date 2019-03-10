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
                errors: action.errors
            }
        case 'SIGNUP_FAILURE':
            return {
                ...state,
                redirect: false,
                errors: action.errors
            }
        default:
            return state
    }
}

export default userReducer