import React, {Component} from 'react'


class GoogleButton extends Component {

    render() {
        return(
            <div className="g-signin2" data-onsuccess="onSignIn"></div>
        )
    }

}

export default GoogleButton