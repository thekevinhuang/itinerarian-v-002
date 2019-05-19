import React, {Component} from 'react'
import Typography from '@material-ui/core/Typography'

class PackingItem extends Component {
    render() {
        return (
            <React.Fragment>
                <Typography variant="h5">{this.props.packingItem.name}</Typography>
            </React.Fragment>
        )
    }
}

export default PackingItem