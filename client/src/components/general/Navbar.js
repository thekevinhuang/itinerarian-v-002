import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

const link={
    width: '100px',
    padding: '12px',
    margin: '0 2px 2px',
    background: 'lightgrey',
    textDecoration: 'none',
    color: 'darkblue'
  }


class Navbar extends Component {

    render() {
        return (
            <div>
                <NavLink
                    to="/"
                    exact
                    style={link}
                    activeStyle={{
                      background: 'darkgrey'
                    }}
                >Home</NavLink>
                <NavLink
                    to="/itineraries"
                    exact
                    style={link}
                    activeStyle={{
                      background: 'darkgrey'
                    }}
                >Itineraries</NavLink>
            </div>
        )
    }
}

export default Navbar