import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'
import GoogleButton from '../components/users/GoogleButton'

const styles = theme => ({
    root: {
        width:'50%',
        maxWidth: 500,
    }
})

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
                <Grid container justify="center" alignItems="center" direction="column" spacing={32} style={{ minHeight: '100vh' }}>
                    <Grid item xs={12} >
                        <Typography component="h2" variant="h2">Welcome to Itinerarian!</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1">Please <Link to={`/login`}>Login</Link> or <Link to={`/signup`}>Signup</Link>!</Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <GoogleButton/>
                    </Grid>
                </Grid>
            )
        }
    }

    render() {
        return (
            
            <React.Fragment>
                {this.renderPage()}
            </React.Fragment>
            
        )
    }
}

export default withStyles(styles)(Home)