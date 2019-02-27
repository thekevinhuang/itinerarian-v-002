import React, {Component} from 'react'
import {connect} from 'react-redux'
import {signupUser} from '../../actions/userActions'
import {Redirect} from 'react-router-dom'


const initialState = {
    username: "",
    email: "",
    password: "",
    redirect: false
}

class Signup extends Component {

    constructor() {
        super()
        this.state=initialState
    }

    signupSubmitHandle = (event) => {
        event.preventDefault()
        const user = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        this.props.signupUser(user)
        
    }

    signupChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render() {
        if(this.props.user.redirect) {
            return <div><Redirect to="/login"/></div>
        } else if(this.props.user.error){
            return <div>Error!</div>
        } else {
            return(
                <div>
                    <h1>Sign up for your Itinerarian!</h1>
                    <form onSubmit={this.signupSubmitHandle}>
                        <label>Username</label><br/>
                        <input type="text" name="username" onChange={this.signupChange} value={this.state.username}/><br/>

                        <label>Email</label><br/>
                        <input type="text" name="email" onChange={this.signupChange} value={this.state.email}/><br/>

                        <label>Password</label><br/>
                        <input type="password" name="password" onChange={this.signupChange} value={this.state.password}/><br/>

                        <input type="submit" value="Signup!"/>
                    </form>
                </div>
            )
        }
        
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signupUser : (user) => dispatch(signupUser(user))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Signup)