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
import {userLogout} from './actions/userActions'

import Grid from '@material-ui/core/Grid'

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
        <Grid container direction="column" justify="center" align-items="center" spacing={40}>
          <Grid item>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/signup" component={Signup}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/logout" render={()=><Logout userLogout={this.props.userLogout}/>}/>
              <Route path="/:other" component={Navbar}/>
            </Switch>
          </Grid>
          <Grid item>
            <Route path="/itineraries" render={(routerProps) => <ItinerariesContainer {...routerProps}/>}/>
            <Route path="/dates" render={(routerProps)=> <ItinDatesContainer {...routerProps}/>}/>
            <Route path="/points" render={(routerProps)=> <IpointsContainer{...routerProps}/>}/>
          </Grid>
        </Grid>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userLogout: () => dispatch(userLogout())
  }
}


export default connect(null, mapDispatchToProps)(App);
