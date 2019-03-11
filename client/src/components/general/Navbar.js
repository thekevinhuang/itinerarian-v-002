import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

class Navbar extends Component {

    render() {
        return (
            <Grid container direction="row" justify="center" align-items="center" spacing={16}>
                <Grid item>
                    <Button
                        component={Link}
                        to="/"
                    >Home</Button>
                </Grid>
                <Grid item>
                    <Button
                        component={Link}
                        to="/itineraries"

                    >Itineraries</Button>
                </Grid>
                <Grid item>
                    <Button
                        component={Link}
                        to="/logout"

                    >Logout</Button>
                </Grid>
            </Grid>
        )
    }
}

export default Navbar