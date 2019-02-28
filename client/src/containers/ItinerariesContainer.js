import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {fetchItineraries, addItinerary, showItinerary} from '../actions/itineraryActions'
import ItineraryNew from '../components/itineraries/ItineraryNew'
import ItineraryShow from '../components/itineraries/ItineraryShow'
import Itineraries from '../components/itineraries/Itineraries'

const initialState={
    currentUser: '',
    loggedin:false
}

class ItinerariesContainer extends Component {

    constructor () {
        super()
        this.state=initialState
    }

    componentDidMount() {
        if(typeof localStorage==='object') {
            try {
                const current_user_string = localStorage.getItem('current_user')
                var currentUser = JSON.parse(current_user_string)
                this.setState({
                    currentUser: currentUser,
                    loggedin: true
                })
            } catch (e) {
                alert('ItinerariesContainer component error')
            }
        }
    }

    render () {
        return (
            <div>
                <h1>Itineraries</h1>
                <Route exact path={`${this.props.match.url}`} render={(props)=> (
                    <div>
                        <ItineraryNew addItinerary={this.props.addItinerary} currentUser={this.state.currentUser}/>
                        <Itineraries itineraries={this.props.itineraries}/>
                    </div>
                )}/>
                <Route path={`${this.props.match.url}/:itinerary_id`} render={(props)=> <div><ItineraryShow /></div>}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        itineraries: state.itineraries
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchItineraries : (user_id) => dispatch(fetchItineraries(user_id)),
        addItinerary : (itinerary) => dispatch(addItinerary(itinerary)),
        showItinerary : (itinerary_id) => dispatch(showItinerary(itinerary_id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItinerariesContainer)