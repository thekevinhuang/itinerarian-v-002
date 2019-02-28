import React, {Component} from 'react'
import {connect, Route} from 'react-router-dom'
import {fetchItineraries, addItinerary, showItinerary} from '../actions/itineraryActions'
import ItineraryNew from '../components/itineraries/ItineraryNew'
import ItineraryShow from '../components/itineraries/ItineraryShow'
import Itineraries from '../components/itineraries/Itineraries'

class ItinerariesContainer extends Component {
    render () {
        return (
            <div>
                <h1>Itineraries</h1>
                <Route exact path={`${this.props.match.url}`} render={(props)=> (
                    <div>
                        <ItineraryNew addItinerary={this.props.addItinerary}/>
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