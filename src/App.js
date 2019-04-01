import React, { Component } from 'react';
import {Switch} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AuthProvider from './providers/AuthProvider';
import CreateTuit from './components/CreateTuit';
import SearchPage from './pages/SearchPage';


class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="container">
          <Navbar />
          <Switch>
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
            {/* <PrivateRoute exact path="/profile" component={Profile} /> */}
            <PrivateRoute exact path="/profile/:username" component={Profile} />
            <PrivateRoute exact path="/profile/:username/tuit" component={CreateTuit} />
            <PrivateRoute exact path="/search" component={SearchPage} />
          </Switch>
        </div>
      </AuthProvider>
    )
  }
}

export default App;
