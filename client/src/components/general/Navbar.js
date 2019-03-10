import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

class Navbar extends Component {

    render() {
        return (
            <Grid container justify="center">
                <Button
                    component={Link}
                    to="/"
                    
                >Home</Button>
                <Button
                    component={Link}
                    to="/itineraries"
                    
                >Itineraries</Button>
                <Button
                    component={Link}
                    to="/logout"
                    
                >Logout</Button>
            </Grid>
        )
    }
}

export default Navbar