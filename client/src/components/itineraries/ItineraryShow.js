import React, {Component} from 'react'
import {connect} from 'react-redux'
import ItinDatesContainer from '../../containers/ItinDatesContainer'
import PackingItemsContainer from '../../containers/PackingItemsContainer'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'


class ItineraryShow extends Component {

    constructor() {
        super()
        this.state={
            hide_packing: true
        }
    }
    
    componentDidMount() {
        this.props.showItinerary(this.props.match.params.itinerary_id)
    }

    togglePacking = () => {
        this.setState({
            hide_packing: !this.state.hide_packing
        })
    }

    renderShow = () => {
        
        if(this.props.currItinerary){
            return (
                <Grid container alignItems="center" direction="column" justify="center" spacing={5}>
                    <Grid item >
                        <Typography variant="h5">{this.props.currItinerary.name}</Typography>
                    </Grid>
                    <Grid item style={{padding:10}}>
                        <Typography variant="body1">{this.props.currItinerary.description}</Typography>
                    </Grid>

                    <Grid item>
                        <Grid container direction="column" justify="center" spacing = {5}>
                            <Grid item>
                                <Button onClick={this.togglePacking} color ="primary">Show Packing List</Button>
                            </Grid>
                            <Grid>
                                <div className={this.state.hide_packing ? 'hidden' : ''}>
                                    <PackingItemsContainer itinerary={this.props.currItinerary}/>
                                </div>
                            </Grid>
                        </Grid>
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