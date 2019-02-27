import React, {Component} from 'react'
import {connect} from 'redux'
import {loginUser} from '../../actions/userActions'

const initialState={
    username: '',
    password: '',
    currentUser: ''
}

class Login extends Component {
    constructor() {
        super()
        this.state=initialState
    }

    componentDidMount() {
        if(typeof localStorage==='object') {
            try {
                const currentUser = localStorage.getItem('current_user')
                this.setState({
                    currentUser: currentUser
                })
            } catch (e) {
                alert('Login component error')
            }
        }
    }

    loginSubmitHandle = event => {
        event.preventDefault()
        const user = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.loginUser(user)
    }

    loginChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render() {
        if(this.state.currentUser||this.props.currentUser){
            return <div>Time to Redirect!</div>
        } else {
            return (
                <div>
                    <h1>Login to your Itinerarian</h1>
                    <form onSubmit={this.loginSubmitHandle}>
                        <label>Username</label><br/>
                        <input type="text" name="username" onChange={this.loginChange} value={this.state.username}/><br/>

                        <label>Password</label><br/>
                        <input type="text" name="password" onChange={this.loginChange} value={this.state.password}/><br/>

                        <input type="submit" value="Login!"/>
                    </form>
                </div>
            )
            
        }
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.user.currentUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginUser : (user) => dispatch(loginUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
