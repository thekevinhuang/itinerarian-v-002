import React, {Component} from 'react'
import {connect} from 'react-redux'
import {signupUser} from '../../actions/userActions'
import {Redirect} from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
//import {withStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'


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

    componentDidMount() {
        if(typeof localStorage==='object') {
            try {
                const currentUser = localStorage.getItem('current_user')
                if (currentUser.id >= 0){
                    this.setState({
                        redirect: true
                    })
                }
            } catch (e) {
                //alert('Signup component error')
            }
        }
    }

    signupSubmitHandle = event => {
        event.preventDefault()
        const user = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        this.props.signupUser(user)
    }

    signupChange = name => event => {
        this.setState({
            [name] : event.target.value
        })
    }

    signupErrorDisplay = () => {
        if(this.props.user.errors) {
            return(
                <div>
                    {this.props.user.errors}
                </div>
            )
        } else {
            return <div></div>
        }
    }

    render() {
        if(this.props.user.redirect) {
            return (
                <Grid container justify="center" alignItems="center" direction="column" spacing={32} style={{ minHeight: '100vh' }}>
                    <Redirect to="/login"/>
                </Grid>
            )
        } else {
            return(
                <Grid container justify="center" alignItems="center" direction="column" spacing={32} style={{ minHeight: '100vh' }}>
                    <Typography component="h2" variant="h4">Sign-up for your Itinerarian</Typography>

                    <form onSubmit={this.signupSubmitHandle}>
                        <TextField label="Username" onChange={this.signupChange("username")} value={this.state.username} margin="normal"/><br/>

                        <TextField label="Email"  onChange={this.signupChange("email")} value={this.state.email} margin="normal"/><br/>

                        <TextField type="password" label="Password" onChange={this.signupChange("password")} value={this.state.password} margin="normal"/><br/>
                        <br/>
                        <Button type="submit" variant="contained">Signup!</Button>
                    </form>
                </Grid>
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