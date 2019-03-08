import React, {Component} from 'react'
import Ipoint from './Ipoint'

class Ipoints extends Component {

    renderIpoints = () => {
        if(this.props.ipoints){
            return this.props.ipoints.map((ipoint, index) => <Ipoint ipoint={ipoint} deleteIpoint={this.props.deleteIpoint}/>)
        } else {
            return <div>Create some Points!</div>
        }
        
    }

    render() {
        return(
            <div>
                {this.renderIpoints()}
            </div>
        )
    }
}

export default Ipoints