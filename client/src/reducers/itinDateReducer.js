function itinDateReducer (state={}, action) {

    switch(action.type) {
        case 'ADD_ITIN_DATE':
            return {...state, itinDates:[...state, action.itinDate]}
        default:
            return state
    }

}

export default itinDateReducer