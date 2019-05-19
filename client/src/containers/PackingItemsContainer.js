import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {connect} from 'react-redux'

import PackingItems from '../components/packing_items/PackingItems'
import PackingItemNew from '../components/packing_items/PackingItemNew'
import {addPackingItem, fetchPackingItems} from '../actions/packingItemActions'

class PackingItemsContainer extends Component {

    componentDidMount() {
        this.props.fetchPackingItems(this.props.itinerary.id)
    }
    
    render() {
        return (
            <Grid container justify="flex-start" alignItems="center" direction="column" spacing={16} style={{ minHeight: '50vh' }}>
                <Grid item>
                    <Typography component="h6" variant="h6">Packing List</Typography>
                </Grid>
                <Grid item>
                    <Route path="/itineraries" render={(routerProps) => (
                        <Grid container direction="column" justify="space-between" alignItems="center" spacing={16}>
                            <Grid item>
                                <PackingItems packingItems={this.props.packingItems}{...routerProps}/>
                            </Grid>
                            <Grid item>
                                <PackingItemNew addPackingItem={this.props.addPackingItem} itinerary={this.props.itinerary}/>
                            </Grid>
                        </Grid>
                    )}/> 
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = state => {
    return {
        packingItems: state.packingItems.packingItems
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addPackingItem: (packing_item) => dispatch(addPackingItem(packing_item)),
        fetchPackingItems: (itinerary_id) => dispatch(fetchPackingItems(itinerary_id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PackingItemsContainer)