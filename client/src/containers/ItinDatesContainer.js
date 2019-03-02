import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import ItinDates from '../components/itin_dates/ItinDates'
import ItinDateShow from '../components/itin_dates/ItinDateShow'


class ItinDatesContainer extends Component {
    render() {
        return(
            <div>
                <Route path="/itineraries" render={(routerProps) => <ItinDates itinerary={this.props.itinerary} {...routerProps}/>}/>
                <Route path="/dates/:itin_date_id" render={(routerProps) => <ItinDateShow {...routerProps}/>}/>
            </div>
        )
    }
}

export default ItinDatesContainer