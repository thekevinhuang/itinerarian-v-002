import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const gapi = window.gapi

class Logout extends Component {

    componentDidMount() {
        localStorage.clear()
        this.props.userLogout()
        this.googleLogout()
    }

    googleLogout() {
        var auth2 = gapi.auth2.getAuthInstance()
        auth2.signOut()
    }

    render() {
        return(
            <Grid container justify="center" alignItems="center" direction="column" spacing={32} style={{ minHeight: '100vh' }}>
                <Grid item>
                    <Typography variant="h2">Goodbye!</Typography>
                </Grid>
                
                <Grid item>
                    <Typography>You are logged out.</Typography>
                </Grid>
                
                <Grid item>
                    <Button component={Link} to="/">
                        Click here to Login or Signup!
                    </Button>
                </Grid>
                
            </Grid>
        )
    }
}

export default Logout