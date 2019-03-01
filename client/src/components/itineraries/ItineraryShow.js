import React, {Component} from 'react'

const initialState= {
    currItinerary:""
}

class ItineraryShow extends Component {
    constructor() {
        super()
        this.state=initialState
    }

componentDidMount() {
    this.props.showItinerary(this.props.match.params.itinerary_id)
    this.setState({
        currItinerary : this.props.singleItinerary
    })
}

    render() {
        return (
            <div>{this.state.currItinerary.name}</div>   
        )
    }
}

export default ItineraryShow