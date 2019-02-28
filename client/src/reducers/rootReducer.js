import {combineReducers} from 'redux'
import userReducer from './userReducer'
import itineraryReducer from './itineraryReducer'

const rootReducer = combineReducers({
    user: userReducer,
    itineraries: itineraryReducer
})

export default rootReducer