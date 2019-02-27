import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Home extends Component {

    constructor(){
        super()
        this.state={
            currentUser:'',
            loggedin: false
        }
    }

    renderPage() {
        if (this.state.loggedin) {
            return(
                <div>
                    <h3>Hello {this.state.currentUser.username}!</h3>
                </div>
            )
        } else {
            return(
                <h3>Please <Link to={`/login`}>Login</Link> or <Link to={`/signup`}>Signup</Link>!</h3>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderPage()}
            </div>
        )
    }
}

export default Home