import React, {Component} from 'react'
import {connect} from 'react-redux'
import ItinDatesContainer from '../../containers/ItinDatesContainer'

class ItineraryShow extends Component {
    
    componentDidMount() {
        this.props.showItinerary(this.props.match.params.itinerary_id)
    }

    renderShow = () => {
        
        if(this.props.currItinerary){
            return (
                <div>
                    <h1>{this.props.currItinerary.name}</h1>
                    <h3>{this.props.currItinerary.description}</h3>
                    <ItinDatesContainer itinerary={this.props.currItinerary}/>
                </div>
            )

        } else {
            return <div>Itinerary Loading</div> 
        }
    }

    render() {
        
        return (
            <div>{this.renderShow()} </div> 
        )
    }
}

const mapStateToProps = state => {
    
    return {
        currItinerary : state.itineraries.itinerary
    }
}


export default connect(mapStateToProps)(ItineraryShow)