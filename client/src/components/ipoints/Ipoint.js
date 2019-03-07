import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Ipoint extends Component {
    render() {
        return(
            <React.Fragment>
                <Link key={this.props.ipoint.id} to={`/points/${this.props.ipoint.id}`}>{this.props.ipoint.name}</Link><br/>
            </React.Fragment>
        )
    }
}

export default Ipoint