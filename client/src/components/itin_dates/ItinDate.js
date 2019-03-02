import React, {Component} from 'react'
import {Link} from 'react-router-dom'

const dateDisplay = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}

class ItinDate extends Component {
    render() {
        return (
            <React.Fragment>
                <Link key={this.props.itinDate.id} to={`/dates/${this.props.itinDate.id}`}>{this.props.itinDate.date.toLocaleDateString("en-US", dateDisplay)}</Link><br/>
            </React.Fragment>
        )
    }
}

export default ItinDate