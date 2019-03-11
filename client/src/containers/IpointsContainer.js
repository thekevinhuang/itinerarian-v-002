import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addIpoint, fetchIpoints, deleteIpoint} from '../actions/ipointActions'
import {Route} from 'react-router-dom'

import IpointNew from '../components/ipoints/IpointNew'
import Ipoints from '../components/ipoints/Ipoints'
import IpointShow from '../components/ipoints/IpointShow'

import Grid from '@material-ui/core/Grid'

class IpointsContainer extends Component {

    componentDidMount() {
        if (this.props.itinDate){
            this.props.fetchIpoints(this.props.itinDate.id)
        }
    }

    render() {
        
        return (
            <div>
                <Route path='/dates/:itin_date_id' render={(routerProps)=> (
                    <Grid container direction="row" alignItems="center" justify="space-around" spacing={32}>
                        <Grid item>
                            <IpointNew addIpoint={this.props.addIpoint} itinDate={this.props.itinDate}/>
                        </Grid>
                        <Grid item>
                            <Ipoints ipoints={this.props.ipoints.ipoints} deleteIpoint={this.props.deleteIpoint}/>
                        </Grid>                        
                    </Grid>
                )}/>
                <Route path='/points/:ipoint_id' render={(routerProps)=> <IpointShow {...routerProps}/>}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ipoints: state.ipoints
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addIpoint : (ipoint) => dispatch(addIpoint(ipoint)),
        fetchIpoints: (itin_date_id) => dispatch(fetchIpoints(itin_date_id)),
        deleteIpoint: (ipoint_id) => dispatch(deleteIpoint(ipoint_id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IpointsContainer)

