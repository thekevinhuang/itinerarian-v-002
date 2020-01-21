import React from 'react'
import {connect} from 'react-redux'
import {showIpoint} from '../../actions/ipointActions'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import GoogleMaps from './googleMaps'

const google = window.google

const initial_state = {
    name: '',
    address: '',
    lat: '',
    long: '',
    user_ratings_total: ''
}

class IpointShow extends React.Component {

    constructor() {
        super()
        this.googlePlaceShow = React.createRef()
        this.state=initial_state
        this.gmapSetState = this.gmapSetState.bind(this)
    }

    gmapSetState(place) {
        
        this.setState({
            name: place.name,
            address: place.formatted_address,
            user_ratings_total: place.rating,
            lat: place.geometry.location.lat(),
            long: place.geometry.location.lng()
        })
    }

    componentDidMount() {
        this.props.showIpoint(this.props.match.params.ipoint_id)
    }

    googlePointLoad() {
        const ipointShow = this
        if (this.props.ipoint && this.props.ipoint.gmaps_id) {
            let gmap_id = this.props.ipoint.gmaps_id
            var request = {
                fields: ['name', 'formatted_address','rating','geometry'],
                placeId: gmap_id
            }
            var service = new google.maps.places.PlacesService(this.googlePlaceShow.current)
            service.getDetails(request, function(place, status) {
                
                if(status===google.maps.places.PlacesServiceStatus.OK) {
                    ipointShow.gmapSetState(place)
                }
            })
        }
    }

    loadRating() {
        if(this.state.user_ratings_total) {
            return <Typography variant = "h6">Overall Rating {this.state.user_ratings_total}</Typography>
        }
    }

    renderIpointsShow= () => {
        this.googlePointLoad()
        if (this.props.ipoint) {
            return (
                <Grid container justify="center" direction="column" alignItems="center" spacing={5}>
                    <Grid item>
                        <Typography variant="h4">{this.state.name}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant = "h5">{this.state.address}</Typography>
                    </Grid>
                    <Grid item>
                        {this.loadRating()}
                    </Grid>
                </Grid >
            )
        } else {
            return <div> IpointShow loading </div>
        }
    }

    render() {
        return(
            <Grid container justify="center" direction="column" alignItems="center" spacing={5}>
                <Grid item>
                    <div ref={this.googlePlaceShow}></div>
                </Grid>
                <Grid item>
                    {this.renderIpointsShow()}
                </Grid>
                <Grid item>
                    <GoogleMaps lat={this.state.lat} long={this.state.long} name={this.state.name}/>
                </Grid>
                
            </Grid>
        )
    }
}

const mapStateToProps = state => {
    return {
        ipoint: state.ipoints.ipoint
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showIpoint: (ipoint_id) => dispatch(showIpoint(ipoint_id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IpointShow)