import React from 'react'
import TextField from '@material-ui/core/TextField'


const google = window.google

class AutoComplete extends React.Component {
    constructor(props) {
        super(props)
        this.autoCompleteInput = React.createRef()
        this.autoComplete = null
        this.handlePlaceChange = this.handlePlaceChange.bind(this)
    }


    componentDidMount() {
        this.autoComplete = new google.maps.places.Autocomplete(
            this.autoCompleteInput.current
        )
        this.autoComplete.addListener("place_changed", this.handlePlaceChange)
    }

    handlePlaceChange() {
        const place = this.autoComplete.getPlace()
        this.props.onPlaceChange(place)
    }

    render() {
        return (
            <TextField
                InputLabelProps={{shrink:true}}
                fullWidth
                label="Search for Point of Interest"
                inputRef={this.autoCompleteInput}
                id="autocomplete"
                placeholder="Places..."
            />
        )
    }
}

export default AutoComplete