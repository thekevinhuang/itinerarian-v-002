import React, {Component} from 'react'
import {connect} from 'react-redux'
import {loginUser} from '../../actions/userActions'
import {Redirect} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
//import {withStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

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
        this.setState(initialState)
    }

    loginChange = name => event => {
        this.setState({
            [name] : event.target.value
        })
    }

    loginErrorDisplay = () => {
        if(this.props.loginError) {
            return(
                <div>
                    {this.props.loginError}
                </div>
            )
        } else {
            return <div></div>
        }
        
    }

    render() {
        if(this.state.currentUser||this.props.currentUser){
            return (
            <Grid container justify="center" alignItems="center" direction="column" spacing={32} style={{ minHeight: '100vh' }}>
                <Redirect to="/itineraries"/>
            </Grid>
            )
        } else {
            return (
                <Grid container justify="center" alignItems="center" direction="column" spacing={8} style={{ minHeight: '100vh' }}>
                    
                    <Typography component="h2" variant="h4">Login to your Itinerarian</Typography>
                    
                    <Grid item xs={12}>{this.loginErrorDisplay()}</Grid>
                    
                    <form onSubmit={this.loginSubmitHandle}>
                        <TextField label="Username" onChange={this.loginChange("username")} value={this.state.username}  margin="normal"/><br/>

                        <TextField label="Password" type="password" onChange={this.loginChange("password")} value={this.state.password} margin="normal"/><br/>

                        <Button variant="contained" type="submit">
                            Login!
                        </Button>
                    </form>
                </Grid>
            )
            
        }
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.user.currentUser,
        loginError: state.user.errors
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginUser : (user) => dispatch(loginUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
