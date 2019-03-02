import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class ItinDate extends Component {


    render() {
        return (
            <React.Fragment>
                <Link key={this.props.itinDate.id} to={`/dates/${this.props.itinDate.id}`}>{this.props.itinDate.date}</Link><br/>
            </React.Fragment>
        )
    }
}

export default ItinDate