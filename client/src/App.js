import React, { Component } from 'react';
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Navbar from './components/general/Navbar'
import Home from './components/Home'
import Signup from './components/users/Signup'
import Login from './components/users/Login'
import Logout from './components/users/Logout'
import ItinerariesContainer from './containers/ItinerariesContainer'
import ItinDatesContainer from './containers/ItinDatesContainer'
import IpointsContainer from './containers/IpointsContainer'

import './App.css';


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
            <Route exact path="/logout" component={Logout}/>
            <Route path="/:other" component={Navbar}/>
          </Switch>
            
            <Route path="/itineraries" render={(routerProps) => <ItinerariesContainer {...routerProps}/>}/>
            <Route path="/dates" render={(routerProps)=> <ItinDatesContainer {...routerProps}/>}/>
            <Route path="/points" render={(routerProps)=> <IpointsContainer{...routerProps}/>}/>
            
        </React.Fragment>
      </Router>
    );
  }
}

export default connect()(App);
