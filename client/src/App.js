import React, { Component } from 'react';
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Navbar from './components/general/Navbar'
import Home from './components/Home'
import Signup from './components/users/Signup'

import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state={
      currentUser: '',
      loggedin: false
    }
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/signup" component={Signup}/>
            
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default connect()(App);
