function itineraryReducer (state={}, action) {
    switch(action.type) {
        case 'ADD_ITINERARY' :

            return {...state, itineraries:[...state, action.itinerary]}

        case 'FETCH_ITINERARIES' :
            return {...state, itineraries:action.itineraries}

        case 'FETCH_ITINERARY' :
            return {...state, searchitinerary: action.itinerary}
        
        case 'ADD_ITINERARY_FAILURE' :
            return {...state, error: action.error}

        case 'FETCH_ITINERARIES_FAILURE':
            return {...state, error:action.error}
        
        case 'FETCH_ITINERARY_FAILURE':
            return {...state, error:action.error}
        default:
            return state
    }
}

export default itineraryReducer