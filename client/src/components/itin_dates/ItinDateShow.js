import React, {Component} from 'react'
import {connect} from 'react-redux'
import {showItinDate} from '../../actions/itinDateActions'

class ItinDateShow extends Component {
    componentDidMount() {
        this.props.showItinDate(this.props.match.params.itin_date_id)
    }

    render() {
        return(
            <div>{this.props.itinDate.date}</div>
        )
    }
}

const mapStateToProps = state => {
    return {
        itinDate : state.itinDates.itinDate
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showItinDate : (itin_date_id) => dispatch(showItinDate(itin_date_id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItinDateShow)