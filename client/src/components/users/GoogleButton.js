import React, {Component} from 'react'
import {connect} from 'react-redux'
import {googleLogin} from '../../actions/userActions'

const gapi = window.gapi

class GoogleButton extends Component {

    componentDidMount() {
        gapi.signin2.render('google-signin2', {
            'scope': 'profile email',
            'width': 120,
            'height': 36,
            'longtitle': false,
            'theme': 'dark',
            'onsuccess': this.onSignIn,
        })
    }
    
    onSignIn = (googleUser) => {
        var auth_info = googleUser.getAuthResponse().id_token
        this.props.googleLogin({code: auth_info})
    }

    render() {
        return(
            <div id="google-signin2"></div>
        )
    }

}

const mapDispatchToProps = dispatch => {
    return {
        googleLogin : (authResult)=> dispatch(googleLogin(authResult))
    }
}

export default connect(null, mapDispatchToProps)(GoogleButton)