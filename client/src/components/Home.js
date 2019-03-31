import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'
import GoogleButton from './users/GoogleButton'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'


const styles = theme => ({
    root: {
        width:'50%',
        maxWidth: 500,
    }
})

const HomeDisplay = () =>
    <React.Fragment>
        <Grid item xs={12} >
            <Typography component="h2" variant="h2">Welcome to Itinerarian!</Typography>
        </Grid>
        <Grid item xs={12}>
            <Typography variant="body1">Please <Link to={`/login`}>Login</Link> or <Link to={`/signup`}>Signup</Link>!</Typography>
        </Grid>
    </React.Fragment>
    

class Home extends Component {

    constructor(){
        super()
        this.state={
            currentUser:'',
            loggedin: false
        }
    }

    renderPage() {
        if(this.state.currentUser||this.props.currentUser){
            return (
            <Grid container justify="center" alignItems="center" direction="column" spacing={32} style={{ minHeight: '100vh' }}>
                <Redirect to="/itineraries"/>
            </Grid>
            )
        } else {
            return(
                <Grid container justify="center" alignItems="center" direction="column" spacing={32} style={{ minHeight: '100vh' }}>
                    <HomeDisplay/>
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

const mapStateToProps = state => {
    return {
        currentUser: state.user.currentUser,
    }
}


export default connect(mapStateToProps)(withStyles(styles)(Home))