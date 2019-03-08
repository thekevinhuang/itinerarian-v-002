import React, {Component} from 'react'
import {Link} from 'react-router-dom'



export default class Itinerary extends Component {

    deleteItinerary = () => {
        this.props.deleteItinerary(this.props.itinerary.id)
    }

    render () {
        return (
            <React.Fragment>
                <Link key={this.props.itinerary.id} to={`/itineraries/${this.props.itinerary.id}`}>{this.props.itinerary.name}</Link><br/>
                <button onClick={this.deleteItinerary}>Delete!</button>
                <br/>
            </React.Fragment>
        )
    }
}