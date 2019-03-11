import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'

const options = {weekday:'long', year: 'numeric', month: 'long', day: 'numeric'}

class ItinDate extends Component {

    dateFormat = date => {
        let newDate = new Date (date)
        return newDate.toLocaleDateString('en-US', options)
    }

    render() {
        return (
            <React.Fragment>
                <Button component={Link} to={`/dates/${this.props.itinDate.id}`}>{this.dateFormat(this.props.itinDate.date)}</Button><br/>
            </React.Fragment>
        )
    }
}

export default ItinDate