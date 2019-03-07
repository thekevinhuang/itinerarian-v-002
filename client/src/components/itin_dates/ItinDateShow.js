import React, {Component} from 'react'
import {connect} from 'react-redux'
import {showItinDate} from '../../actions/itinDateActions'
import IpointsContainer from '../../containers/IpointsContainer'

class ItinDateShow extends Component {

    componentDidMount() {
        this.props.showItinDate(this.props.match.params.itin_date_id)
    }

    renderItinDateShow = () => {
        if(this.props.itinDate){
            let itindate = this.props.itinDate
            return(
                <div>
                    <h1>{itindate.date}</h1>
                    <IpointsContainer itinDate={itindate}/>
                </div>
            )
        }else {
            return <div>Itinerary Date Loading</div>
        }
    }

    render() {
        
        return(
            <div>{this.renderItinDateShow()}</div>
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