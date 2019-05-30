import React, {Component} from 'react'
import PackingItem from './PackingItem'


class PackingItems extends Component {

    renderPackingItems = () => {
        if (this.props.packingItems) {
            if (!this.props.packingItems[0]) {
                return <div>You need to add some items!</div>
            } else {
                return this.props.packingItems[0].map((packingItem, index)=> <PackingItem packingItem={packingItem} deletePackingItem={this.props.deletePackingItem}/>)
            }
        }
    }

    render() {
        return(
            <div>{this.renderPackingItems()}</div>
        )
    }
}

export default PackingItems