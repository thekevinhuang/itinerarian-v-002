import React, {Component} from 'react'
import {connect} from 'react-redux'
import {showIpoint} from '../../actions/ipointActions'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

class IpointShow extends Component {

    componentDidMount() {
        this.props.showIpoint(this.props.match.params.ipoint_id)
    }

    renderIpointsShow= () => {
        if (this.props.ipoint) {
            return (
                <Grid container justify="center" direcion="column" alignItems="center">
                    <Typography variant="h4">{this.props.ipoint.name}</Typography>
                </Grid >
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