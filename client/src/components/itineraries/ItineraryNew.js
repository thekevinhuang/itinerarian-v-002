import React, {Component} from 'react'

import Typography from '@material-ui/core/Typography'
//import {withStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const initialState = {
    name: "",
    description: "",
    start_date: "",
    end_date: "",
    currentUser: ''
}

class ItineraryNew extends Component {
    constructor () {
        super()
        this.state=initialState
    }

    componentDidMount() {
        if(typeof localStorage==='object') {
            try {
                const current_user_string = localStorage.getItem('current_user')
                var currentUser = JSON.parse(current_user_string)
                this.setState({
                    currentUser: currentUser
                })
            } catch (e) {
                alert('Itinerary New component error')
            }
        }
    }

    itineraryNewSubmit = event => {
        event.preventDefault()
        const itinerary = {
            name: this.state.name,
            description: this.state.description,
            user_id: this.state.currentUser.id,
            start_date: this.state.start_date,
            end_date: this.state.end_date
        }
        
        this.props.addItinerary(itinerary)

        this.setState({
            name: "",
            description: "",
            start_date: "",
            end_date: "",
        })
    }

    itineraryNewChange = name=>event => {
        this.setState({
            [name] : event.target.value
        })
    }

    render() {
            return (
                <form onSubmit={this.itineraryNewSubmit}>
                    <Typography component="h6" variant="h6">Create a new Itinerary</Typography>
                    <TextField 
                        label="Name" 
                        value={this.state.name} 
                        onChange={this.itineraryNewChange("name")} 
                        margin="normal"
                        /><br/>
                    
                    <TextField 
                        label="Start Date" 
                        value={this.state.start_date} 
                        onChange={this.itineraryNewChange("start_date")} 
                        type="date" 
                        margin="normal"
                        InputLabelProps={{shrink:true}}
                    /><br/>
                    
                    <TextField 
                        label="End Date" 
                        value={this.state.end_date} 
                        onChange={this.itineraryNewChange("end_date")} 
                        type="date" 
                        margin="normal"
                        InputLabelProps={{shrink:true}}
                    /><br/>

                    <TextField 
                        label="Description" 
                        value={this.state.description} 
                        onChange={this.itineraryNewChange("description")} 
                        margin="normal"
                    /><br/><br/>

                    <Button type="submit" variant="contained">
                        Create new Itinerary!
                    </Button>
                </form>
            )
        
    }
}

export default ItineraryNew