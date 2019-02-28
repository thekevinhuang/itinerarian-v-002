import React, {Component} from 'react'

const initialState = {
    name: "",
    description: "",
    start_date: "",
    end_date: "",
}

class ItineraryNew extends Component {
    constructor () {
        super()
        this.state=initialState
    }


    itineraryNewSubmit = event => {
        event.preventDefault()
        const itinerary = {
            name: this.state.name,
            description: this.state.description
        }
        this.props.addItinerary(itinerary)
        this.setState(initialState)
    }

    itineraryNewChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render() {
        if(this.props.currentUser) {
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
        }else {
            return( <div>You need to be logged in to view this page.</div>)
        }
        
    }
}

export default ItineraryNew