import React, {Component} from 'react'

class Ipoint extends Component {
    render() {
        return(
            <div>
                {this.props.ipoint.name}
            </div>
        )
    }
}

export default Ipoint