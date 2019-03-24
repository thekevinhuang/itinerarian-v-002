import React from 'react'

import {GoogleApiWrapper, Map, Marker} from 'google-maps-react'

const google = window.google

class GoogleMaps extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeMarker:{}
        }
    }

    render() {
        const style = {
            width: '50%',
            height: '75%',
            transform: 'translate(-50%, 0)'
        }

        const start = {lat: this.props.lat, lng: this.props.long}

        return (
            <Map
                item
                xs={12}
                style = {style}
                center={start}
                google = {google}
                zoom={15}
                
            >
                <Marker
                    title = {this.props.name}
                    position = {start}
                    name = {this.props.name}
                />
            </Map>
        )
    }

}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDroCQQnjlLw_O5wKx7QBfO-mtTuh67js0")
})(GoogleMaps)