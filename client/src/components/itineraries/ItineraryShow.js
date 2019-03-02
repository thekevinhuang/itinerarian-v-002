import React, {Component} from 'react'
import {connect} from 'react-redux'

class ItineraryShow extends Component {
    
    componentDidMount() {
        this.props.showItinerary(this.props.match.params.itinerary_id)
    }

    renderShow = () => {
        
        if(this.props.currItinerary){
            return <div>{this.props.currItinerary.name}</div>
        } else {
            return <div>error</div> 
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