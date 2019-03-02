import React, { Component } from 'react';
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Navbar from './components/general/Navbar'
import Home from './components/Home'
import Signup from './components/users/Signup'
import Login from './components/users/Login'
import ItinerariesContainer from './containers/ItinerariesContainer'
import ItinDatesContainer from './containers/ItinDatesContainer'

import './App.css';
import ItinDatesContainer from './containers/ItinDatesContainer';

class App extends Component {

  constructor() {
    super()
    this.state={
      currentUser: '',
      loggedin: false
    }
  }

  componentDidMount() {
    if(typeof localStorage==='object') {
        try {
            const currentUser = localStorage.getItem('current_user')
            this.setState({
                currentUser: currentUser
            })
        } catch (e) {
            alert('App error')
        }
    }
}

  render() {
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/login" component={Login}/>
          </Switch>
            <Route path="/itineraries" render={(routerProps) => <ItinerariesContainer {...routerProps}/>}/>
            <Route path="/dates" render={(routerProps)=> <ItinDatesContainer {...routerProps}/>}/>
            
        </React.Fragment>
      </Router>
    );
  }
}

export default connect()(App);
