import Button from '@material-ui/core/Button'
import React from 'react'

const DeleteButton = (props) => 
    <Button onClick={props.clickFunction} style={{color:'red'}}>X</Button>

export default DeleteButton