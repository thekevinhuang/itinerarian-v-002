import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {fetchItineraries, addItinerary, showItinerary, deleteItinerary} from '../actions/itineraryActions'
import {addItinDate} from '../actions/itinDateActions'
import ItineraryNew from '../components/itineraries/ItineraryNew'
import ItineraryShow from '../components/itineraries/ItineraryShow'
import Itineraries from '../components/itineraries/Itineraries'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'



const initialState={
    currentUser: '',
    loggedin:false
}

class ItinerariesContainer extends Component {

    constructor () {
        super()
        this.state=initialState
    }

    componentDidMount() {
        let currentUser = this.props.currentUser
        if (currentUser) {
            
            this.setState( {
                loggedin: true,
                currentUser: currentUser
            })
            this.props.fetchItineraries(currentUser.id)
        }
    }

    render () {
        return (
            <Grid container justify="flex-start" alignItems="center" direction="column" spacing={5} style={{ minHeight: '100vh' }}>
                <Grid item>
                    <Typography component="h2" variant="h3">Itineraries</Typography>
                </Grid>
                
                <Grid item style={{padding:20}}>
                    <Route exact path={`${this.props.match.url}`} render={(props)=> (
                        <Grid container direction="row" justify="space-between" alignItems="center" spacing={5}>
                            <Grid item>
                                <ItineraryNew addItinerary={this.props.addItinerary} currentUser={this.props.currentUser}/>
                            </Grid>
                            <Grid item>
                                <Itineraries itineraries={this.props.itineraries.itineraries} deleteItinerary={this.props.deleteItinerary}/>
                            </Grid>
                        </Grid>
                    )}/>
                    <Route path={`${this.props.match.url}/:itinerary_id`} render={(props)=> <div><ItineraryShow showItinerary={this.props.showItinerary} {...props}/></div>}/>
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = state => {
    
    return {
        itineraries: state.itineraries,
        currentUser: state.user.currentUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchItineraries : (user_id) => dispatch(fetchItineraries(user_id)),
        addItinerary : (itinerary) => dispatch(addItinerary(itinerary)),
        showItinerary : (itinerary_id) => dispatch(showItinerary(itinerary_id)),
        addItinDate : (itin_date) => dispatch(addItinDate(itin_date)),
        deleteItinerary : (itinerary_id) => dispatch(deleteItinerary(itinerary_id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItinerariesContainer)