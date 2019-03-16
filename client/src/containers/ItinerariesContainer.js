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
        if(typeof localStorage=='object') {
            try {
                const current_user_string = localStorage.getItem('current_user')
                var currentUser = JSON.parse(current_user_string)
                this.setState({
                    currentUser: currentUser,
                    loggedin: true
                })
                this.props.fetchItineraries(currentUser.id)            
            } catch (e) {
                //alert(`ItinerariesContainer component error ${e}`)
            }
        }
    }

    render () {
        return (
            <Grid container justify="flex-start" alignItems="center" direction="column" spacing={24} style={{ minHeight: '100vh' }}>
                <Grid item>
                    <Typography component="h2" variant="h3">Itineraries</Typography>
                </Grid>
                <Grid item>
                    <Route exact path={`${this.props.match.url}`} render={(props)=> (
                        <Grid container direction="row" justify="space-between" alignItems="center" spacing={16}>
                            <Grid item>
                                <ItineraryNew addItinerary={this.props.addItinerary} currentUser={this.state.currentUser}/>
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
        itineraries: state.itineraries
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