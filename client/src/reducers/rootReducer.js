import {combineReducers} from 'redux'
import userReducer from './userReducer'
import itineraryReducer from './itineraryReducer'
import itinDateReducer from './itinDateReducer'
import ipointReducer from './ipointReducer'

const rootReducer = combineReducers({
    user: userReducer,
    itineraries: itineraryReducer,
    itinDates: itinDateReducer,
    ipoints: ipointReducer
})

export default rootReducer