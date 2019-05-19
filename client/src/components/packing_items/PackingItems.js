import React, {Component} from 'react'
import PackingItem from './PackingItem'


class PackingItems extends Component {

    renderPackingItems = () => {
        if (this.props.packingItems) {
            if (!this.props.packingItems.length) {
                return <div>You need to add some items!</div>
            } else {
                return this.props.packingItems.map((packingItem, index)=> <PackingItem packingItem={packingItem}/>)
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