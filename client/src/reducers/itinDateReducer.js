function itinDateReducer (state={}, action) {

    switch(action.type) {
        case 'ADD_ITIN_DATE':
            return {...state, itinDates:[...state.itinDates, action.itinDate]}
        case 'FETCH_ITIN_DATES':
            return {...state, itinDates:action.itinDates}
        case 'SHOW_ITIN_DATE':
            return {...state, itinDate:action.itinDate}
        case 'SHOW_ITIN_DATE_FAILURE':
            return {...state, error: action.error}
        default:
            return state
    }

}

export default itinDateReducer