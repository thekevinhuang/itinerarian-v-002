import React, {Component} from 'react'
import {connect} from 'react-redux'
import {showItinDate} from '../../actions/itinDateActions'
import IpointsContainer from '../../containers/IpointsContainer'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Link } from '@material-ui/core'
import Button from '@material-ui/core/Button'

const options = {weekday:'long', year: 'numeric', month: 'long', day: 'numeric', timeZone:'UTC'}

class ItinDateShow extends Component {

    dateFormat = date => {
        let newDate = new Date (date)
        return newDate.toLocaleDateString('en-US', options)
    }

    componentDidMount() {
        this.props.showItinDate(this.props.match.params.itin_date_id)
    }

    renderItinDateShow = () => {
        if(this.props.itinDate){
            let itindate = this.props.itinDate
            return(
                <Grid container direction="column" justify="center" alignItems="center"spacing={5}>
                    <Grid item>
                        <Typography variant="h5">{this.dateFormat(itindate.date)}</Typography>
                    </Grid>
                    <Grid>
                        <Button component={Link} to ={`/itineraries/${itindate.itinerary_id}`}> Back to Itinerary</Button>
                    </Grid>
                    <Grid item>
                        <IpointsContainer itinDate={itindate}/>
                    </Grid>
                    
                </Grid>
            )
        }else {
            return <div>Itinerary Date Loading</div>
        }
    }

    render() {
        
        return(
            <React.Fragment>{this.renderItinDateShow()}</React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        itinDate : state.itinDates.itinDate
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showItinDate : (itin_date_id) => dispatch(showItinDate(itin_date_id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItinDateShow)