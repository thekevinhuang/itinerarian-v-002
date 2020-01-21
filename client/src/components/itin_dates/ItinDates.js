import React, {Component} from 'react'
import ItinDate from './ItinDate'

class ItinDates extends Component {

    renderItinDates = () => {
        return this.props.itinerary.itin_dates.map((itinDate, index)=> <ItinDate itinDate={itinDate}/>)
    }
    
    render() {
        return(
            <React.Fragment>{this.renderItinDates()}</React.Fragment>
        )
    }
}

export default ItinDates