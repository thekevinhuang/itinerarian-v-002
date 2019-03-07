function ipointReducer (state={}, action) {
    switch(action.type) {
        case 'ADD_IPOINT':
            return {...state,ipoints: [...state.ipoints, action.ipoint]}
        case 'FETCH_IPOINTS':
            return {...state, ipoints: action.ipoints}

        case 'SHOW_IPOINT':
            return {...state, ipoint: action.ipoint}

        case 'ADD_IPOINT_FAILURE':
            return state
        default: 
            return state
    }
}

export default ipointReducer