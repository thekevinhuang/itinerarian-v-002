import React, {Component} from 'react'
import {connect} from 'react-redux'
import {showItinDate} from '../../actions/itinDateActions'
import IpointsContainer from '../../containers/IpointsContainer'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const options = {weekday:'long', year: 'numeric', month: 'long', day: 'numeric'}

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
                <Grid container direction="column" justify="center" alignItems="center">
                    <Typography variant="h5">{this.dateFormat(itindate.date)}</Typography>
                    <IpointsContainer itinDate={itindate}/>
                </Grid>
            )
        }else {
            return <div>Itinerary Date Loading</div>
        }
    }

    render() {
        
        return(
            <div>{this.renderItinDateShow()}</div>
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