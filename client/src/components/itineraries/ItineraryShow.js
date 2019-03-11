import React, {Component} from 'react'
import {connect} from 'react-redux'
import ItinDatesContainer from '../../containers/ItinDatesContainer'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'


class ItineraryShow extends Component {
    
    componentDidMount() {
        this.props.showItinerary(this.props.match.params.itinerary_id)
    }

    renderShow = () => {
        
        if(this.props.currItinerary){
            return (
                <Grid container direction="column" justify="center"spacing={16}>
                    <Grid item>
                        <Typography variant="h5">{this.props.currItinerary.name}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="caption">{this.props.currItinerary.description}</Typography>
                    </Grid>

                    <Grid item>
                        <ItinDatesContainer itinerary={this.props.currItinerary}/>
                    </Grid>
                    
                </Grid>
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