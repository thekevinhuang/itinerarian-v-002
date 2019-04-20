import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'


const initialState = {
    name: "",
    description: "",
    quantity: 0
}

class PackingItemNew extends Component {
    constructor() {
        super()
        this.state= initialState
    }

    newPackingItemSubmit = (event) => {
        event.preventDefault()

        let itinerary_id = this.props.itinerary.id 

        const packing_item = {
            name: this.state.name,
            description: this.state.description,
            quantity: this.state.quantity,
            itinerary_id: itinerary_id
        }

        this.props.addPackingItem(packing_item)
        this.setState(initialState)
    }

    packingItemChange = name => event => {
        this.setState({
            [name] : event.target.value
        })
    }

    render() {
        return (
            <div>
                <Grid container justify="center">
                    <form onSubmit={this.newPackingItemSubmit}>
                        <TextField
                            label = "Item"
                            value = {this.state.name}

                            onChange= {this.packingItemChange("name")}
                            margin="normal"
                        /><br/>

                        <TextField
                            label = "Description"
                            value = {this.state.description}

                            onChange= {this.packingItemChange("description")}
                            margin="normal"
                        /><br/>

                        <TextField
                            id="standard-number"
                            type="number"
                            label = "Quantity"
                            value = {this.state.quantity}

                            onChange= {this.packingItemChange("quantity")}
                            margin="normal"
                        />
                        <br/><br/>

                        <Button variant="contained" type="submit">
                            Add Item to Pack
                        </Button>

                    </form>
                </Grid>
            </div>
        )
    }
}

export default PackingItemNew
