function userReducer (state={}, action) {
    switch(action.type) {
        case 'SIGNUP_SUCCESS':
            return {
                ...state,
                redirect: action.redirect
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