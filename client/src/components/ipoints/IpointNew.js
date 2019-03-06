import React, {Component} from 'react'

const initialState={
    name: "",
    description: "",
    location: ""
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
            itin_date_id: this.props.itinDate.id
        }

        this.props.addIpoint(ipoint)
        this.setState=initialState
    }

    ipointChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.newIpointSubmit}>
                    <label>Name</label><br/>
                    <input type="text" name="name" value={this.state.name} onChange={this.ipointChange}/><br/><br/>

                    <label>Description</label><br/>
                    <input type="text" name="description" value={this.state.description} onChange={this.ipointChange}/><br/><br/>

                    <label>Location</label><br/>
                    <input type="text" name="location" value={this.state.location} onChange={this.ipointChange}/><br/><br/>

                    <input type="submit" value="Create new Point of Interest"/>
                </form>
            </div>
        )
    }
}

export default IpointNew