import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Logout extends Component {

    componentDidMount() {
        localStorage.clear()
    }

    render() {
        return(
            <div>
                <h1>You are logged out!</h1>
                <Link to="/">Click here to Login or signup!</Link>
            </div>
        )
    }
}

export default Logout