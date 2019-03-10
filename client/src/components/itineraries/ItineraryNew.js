import React, {Component} from 'react'
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

    itineraryNewChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render() {
            return (
                <form onSubmit={this.itineraryNewSubmit}>
                    <label>Name</label><br/>
                    <input type="text" name="name" value={this.state.name} onChange={this.itineraryNewChange}/><br/>

                    <label>Description</label><br/>
                    <input type="text" name="description" value={this.state.description} onChange={this.itineraryNewChange}/><br/>

                    <label>Start Date</label><br/>
                    <input type="date" name="start_date" value={this.state.start_date} onChange={this.itineraryNewChange}/><br/>

                    <label>End Date</label><br/>
                    <input type="date" name="end_date" value={this.state.end_date} onChange={this.itineraryNewChange}/><br/><br/>

                    <input type="submit" value="Create new Itinerary"/>
                </form>
            )
        
    }
}

export default ItineraryNew