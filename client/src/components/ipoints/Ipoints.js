import React, {Component} from 'react'
import Ipoint from './Ipoint'

class Ipoints extends Component {

    renderIpoints = () => {
        this.props.ipoints.map((ipoint, index)=><Ipoint ipoint={ipoint}/>)
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