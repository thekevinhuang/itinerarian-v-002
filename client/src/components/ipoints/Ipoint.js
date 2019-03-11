import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'

class Ipoint extends Component {

    deleteIpoint = () => {
        this.props.deleteIpoint(this.props.ipoint.id)
    }
    
    render() {
        
        return(
            <React.Fragment>
                <Button component={Link} to={`/points/${this.props.ipoint.id}`}>{this.props.ipoint.name}</Button>
                <Button onClick={this.deleteIpoint} style={{color:'red'}}>X</Button>
                <br/>
            </React.Fragment>
        )
    }
}

export default Ipoint