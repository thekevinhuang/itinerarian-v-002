function userReducer (state={}, action) {
    switch(action.type) {
        case 'SIGNUP_SUCCESS':
            return {
                ...state
            }
        case 'SIGNUP_FAILURE':
            return {
                ...state
            }
        default:
            return state
    }
}

export default userReducer