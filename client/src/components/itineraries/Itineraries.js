import React, {Component} from 'react'
import Itinerary from './Itinerary'

class Itineraries extends Component {

    renderItineraries =() => {
        
        if(this.props.itineraries){
            return this.props.itineraries.map((element, index) => <Itinerary itinerary={element} deleteItinerary={this.props.deleteItinerary}/>)
        } else {
            return <p>Add some Itineraries!</p>
        }
        
    }

    render() {
        return (
            <div>{this.renderItineraries()}</div>   
        )
    }
}

export default Itineraries