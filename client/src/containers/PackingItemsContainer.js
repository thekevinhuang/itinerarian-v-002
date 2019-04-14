import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {addPackingItem} from '../actions/packingItemActions'
import PackingItems from '../components/packing_items/PackingItems'
import PackingItemNew from '../components/packing_items/PackingItemNew'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const initialState = {
    name: '',
    description: '',
    quantity: 0
}


class PackingItemsContainer extends Component {
    constructor() {
        super()
        this.state=initialState
    }

    render() {
        return (
            <Grid container justify="flex-start" alignItems="center" direction="column" spacing={24} style={{ minHeight: '100vh' }}>
                <Grid item>
                    <Typography>Items to Pack</Typography>
                </Grid>
                <Grid item>
                    <Route exact path={} render={(props)=> (
                        <Grid container direction="row" justify="space-between" alignItems="center" spacing={16}>
                            <Grid item>
                                <PackingItemNew/>
                            </Grid>

                            <Grid item>
                                <PackingItems/>
                            </Grid>
                        </Grid>
                    )}/>
                    <Route path={} render={(props)=> (
                      <div><PackingItemsShow/></div>  
                    )}/>
                </Grid>

            </Grid>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PackingItemsContainer)