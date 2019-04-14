import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import DeleteButton from '../general/DeleteButton'


const ItineraryButton = (props) =>
    <Button component={Link} to={`/itineraries/${props.id}`}>{props.name}</Button>

export default class Itinerary extends Component {

    deleteItinerary = () => {
        this.props.deleteItinerary(this.props.itinerary.id)
    }
    

    render () {
        return (
            <React.Fragment>
                <ItineraryButton id={this.props.itinerary.id} name={this.props.itinerary.name}/>
                <DeleteButton clickFunction={this.deleteItinerary}/>
                
                <br/>
            </React.Fragment>
        )
    }
}