import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'

export default class Itinerary extends Component {

    deleteItinerary = () => {
        this.props.deleteItinerary(this.props.itinerary.id)
    }

    render () {
        return (
            <React.Fragment>
                <Button component={Link} to={`/itineraries/${this.props.itinerary.id}`}>{this.props.itinerary.name}</Button>
                <Button onClick={this.deleteItinerary} style={{color:'red'}}>X</Button>
                <br/>
            </React.Fragment>
        )
    }
}