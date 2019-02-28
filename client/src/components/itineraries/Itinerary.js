import React, {Component} from 'react'
import {Link} from 'react-router-dom'



export default class Itinerary extends Component {
    render () {
        return (
            <React.Fragment>
                <Link key={this.props.itinerary.id} to={`/itineraries/${this.props.itinerary.id}`}>{this.props.itinerary.name}</Link><br/>
            </React.Fragment>
        )
    }
}