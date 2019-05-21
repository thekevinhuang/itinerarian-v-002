import React, {Component} from 'react'
import Typography from '@material-ui/core/Typography'

class PackingItem extends Component {
    
    render() {
        
        return (
            <React.Fragment>
                <Typography variant="subtitle2">{this.props.packingItem.name} - {this.props.packingItem.quantity}</Typography>
            </React.Fragment>
        )
    }
}

export default PackingItem