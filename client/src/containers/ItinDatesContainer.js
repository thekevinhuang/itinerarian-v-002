import React, {Component} from 'react'
import {Route} from 'react-router-dom'

class ItinDatesContainer extends Component {
    render() {
        return(
            <div>
                <Route path="/itineraries" render={(routerProps) => <ItinDates itinerary={this.props.itinerary} {...routerProps}/>}/>
                <Route path="/dates/:date_id" render={(routerProps) => <ItinDateShow {...routerProps}/>}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        
    }
}

export default connect(mapStateToProps)(ItinDatesContainer)