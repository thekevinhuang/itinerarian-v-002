import React, {Component} from 'react'
import {connect} from 'react-redux'
import {showIpoint} from '../../actions/ipointActions'

class IpointShow extends Component {

    componentDidMount() {
        this.props.showIpoint(this.props.match.params.ipoint_id)
    }

    renderIpointsShow= () => {
        if (this.props.ipoint) {
            return (
                <div>
                    <h1>{this.props.ipoint.name}</h1>
                </div>
            )
        } else {
            return <div> IpointShow loading </div>
        }
    }

    render() {
        return(
            <div>
                {this.renderIpointsShow()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ipoint: state.ipoints.ipoint
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showIpoint: (ipoint_id) => dispatch(showIpoint(ipoint_id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IpointShow)