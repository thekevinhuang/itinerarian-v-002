import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import {withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import AutoComplete from './autoComplete'

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    }
})


const initialState={
    name: "",
    description: "",
    location: "",
    place: {}
}

class IpointNew extends Component {

    constructor() {
        super()
        this.state=initialState
    }

    newIpointSubmit = (event) =>{
        event.preventDefault()
        
        const ipoint = {
            name: this.state.name,
            description: this.state.description,
            location: this.state.location,
            itin_date_id: this.props.itinDate.id,
            gmaps_id: this.state.place.place_id
        }
        this.props.addIpoint(ipoint)
        this.setState(initialState)
    }

    ipointChange = name => event => {
        this.setState({
            [name] : event.target.value
        })
    }

    onPlaceChange(place) {
        this.setState({place: place})
    }

    render() {
        return(
            <div>  
                <Grid container justify="center">
                    
                    <form onSubmit={this.newIpointSubmit}>
                        <AutoComplete onPlaceChange={this.onPlaceChange.bind(this)}/>
                        <br/>
                        
                        <TextField
                            label="Description"

                            value={this.state.description}
                            onChange={this.ipointChange('description')}
                            margin="normal"
                        />

                        <br/>
                        <br/>

                        <Button variant="contained" type="submit">
                            Create a Point of Interest
                        </Button>
                    </form>

                </Grid>
                
            </div>
        )
    }
}

export default withStyles(styles)(IpointNew)