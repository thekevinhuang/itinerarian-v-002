import React, {Component} from 'react'
import ItinDate from './ItinDate'

class ItinDates extends Component {

    renderItinDates = () => {
        return this.props.itinerary.itin_dates.map((itinDate, index)=> <ItinDate itinDate={itinDate}/>)
    }
    
    render() {
        return(
            <div>{this.renderItinDates()}</div>
        )
    }
}

export default ItinDates