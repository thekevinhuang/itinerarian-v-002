import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import ItinDates from '../components/itin_dates/ItinDates'
import ItinDateShow from '../components/itin_dates/ItinDateShow'

import Grid from '@material-ui/core/Grid'



class ItinDatesContainer extends Component {
    
    render() {
        return(
            <Grid container justify="flex-start" alignItems="center" direction="column" spacing={5} style={{ minHeight: '100vh' }}>
                <Grid>
                    <Route path="/itineraries" render={(routerProps) => <ItinDates itinerary={this.props.itinerary} {...routerProps}/>}/>
                    <Route path="/dates/:itin_date_id" render={(routerProps) => <ItinDateShow {...routerProps}/>}/>
                </Grid>
                
            </Grid>
        )
    }
}

export default ItinDatesContainer