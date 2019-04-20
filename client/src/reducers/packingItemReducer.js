function packingItemReducer (state={}, action) {
    switch(action.type) {
        case 'ADD_PACKING_ITEM' :
            return {...state, packingItems:[...state.packingItems, action.packingItem]}
        case 'SHOW_PACKING_ITEM':
            return {...state, packingItem:action.packingItem}
        case 'FETCH_PACKING_ITEMS' :
            return {...state, packingItems:[action.packingItems]}
        default:
            return state
    }
}

export default packingItemReducer