import React, {Component} from 'react'
import Typography from '@material-ui/core/Typography'
import DeleteButton from '../general/DeleteButton'

class PackingItem extends Component {

    deleteItem = () => {
        this.props.deletePackingItem(this.props.packingItem.id)
    }
    
    render() {
        
        return (
            <React.Fragment>
                <Typography variant="subtitle2">{this.props.packingItem.name} - {this.props.packingItem.quantity}</Typography>
                <DeleteButton clickFunction={this.deleteItem}/>
            </React.Fragment>
        )
    }
}

export default PackingItem