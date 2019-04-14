import {combineReducers} from 'redux'
import userReducer from './userReducer'
import itineraryReducer from './itineraryReducer'
import itinDateReducer from './itinDateReducer'
import ipointReducer from './ipointReducer'
import packingItemReducer from './packingItemReducer'

const rootReducer = combineReducers({
    user: userReducer,
    itineraries: itineraryReducer,
    itinDates: itinDateReducer,
    ipoints: ipointReducer,
    packingItems: packingItemReducer
})

export default rootReducer