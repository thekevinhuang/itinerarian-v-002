import {combineReducers} from 'redux'
import userReducer from './userReducer'
import itineraryReducer from './itineraryReducer'
import itinDateReducer from './itinDateReducer'

const rootReducer = combineReducers({
    user: userReducer,
    itineraries: itineraryReducer,
    itinDates: itinDateReducer
})

export default rootReducer