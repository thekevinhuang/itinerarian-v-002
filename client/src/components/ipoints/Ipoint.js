import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Ipoint extends Component {

    deleteIpoint = () => {
        this.props.deleteIpoint(this.props.ipoint.id)
    }
    
    render() {
        
        return(
            <React.Fragment>
                <Link key={this.props.ipoint.id} to={`/points/${this.props.ipoint.id}`}>{this.props.ipoint.name}</Link><br/> 
                <button onClick={this.deleteIpoint}>Delete!</button>
                <br/>
            </React.Fragment>
        )
    }
}

export default Ipoint