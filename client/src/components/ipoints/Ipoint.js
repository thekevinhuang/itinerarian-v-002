import React from 'react'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'

const google = window.google

class Ipoint extends React.Component {

    constructor(props) {
        super(props)
        this.googleNameButton = React.createRef()
        this.state = {
            name: '',
            address: ''
        }
        this.gmapSetState = this.gmapSetState.bind(this)
    }

    gmapSetState(place) {
        this.setState({
            name: place.name,
            address: place.formatted_address
        })
    }

    componentDidMount() {
        const ipointComp = this
        if (this.props.ipoint && this.props.ipoint.gmaps_id)
        {
            let gmap_id = this.props.ipoint.gmaps_id
            var request = {
                fields: ['name', 'formatted_address'],
                placeId: gmap_id
            }
            
            var service = new google.maps.places.PlacesService(this.googleNameButton.current)
            service.getDetails(request, function(place, status) {
                
                if(status===google.maps.places.PlacesServiceStatus.OK) {
                    ipointComp.gmapSetState(place)
                }
            })
        }
        
    }
    
    deleteIpoint = () => {
        this.props.deleteIpoint(this.props.ipoint.id)
    }

    render() {
        
        if(this.props.ipoint) {
            return(
                <div id={`ipoint-${this.props.ipoint.id}-holder`}>
                    <div id={`ipoint-${this.props.ipoint.id}-goog`} ref={this.googleNameButton}>

                    </div>
                    <Button 
                        component={Link}
                        id={`ipoint-${this.props.ipoint.id}`}
                        to={`/points/${this.props.ipoint.id}`}
                    >
                        {this.state.name}
                    </Button>
                    <Button onClick={this.deleteIpoint} style={{color:'red'}}>X</Button>
                    <br/>
                </div >
            )
        } else {
            return (
                <div>
                    Hello
                </div>
            )
        }
        
    }
}


export default Ipoint