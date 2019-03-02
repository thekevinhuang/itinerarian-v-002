function itineraryReducer (state={}, action) {
    
    switch(action.type) {
        
        case 'ADD_ITINERARY' :

            return {...state, itineraries:[...state.itineraries, action.itinerary]}

        case 'FETCH_ITINERARIES' :
            return {...state, itineraries:action.itineraries}

        case 'SHOW_ITINERARY' :
            return {...state, itinerary: action.itinerary}
        
        case 'ADD_ITINERARY_FAILURE' :
            return {...state, error: action.error}

        case 'FETCH_ITINERARIES_FAILURE':
            return {...state, error:action.error}
        
        case 'SHOW_ITINERARY_FAILURE':
            return {...state, error:action.error}

        default:
            return state
    }
}

export default itineraryReducer