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
import FollowPage from './pages/FollowPage';
import LinePage from './pages/LinePage';
import HomePage from './pages/HomePage';
import Error from './pages/Error';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div>
        <AuthProvider>
          <div className="container">
            <Switch>

              <AnonRoute exact path="/" component={HomePage} />
              <AnonRoute exact path="/signup" component={Signup} />
              <AnonRoute exact path="/login" component={Login} />
              <PrivateRoute exact path="/profile/:username" component={Profile} />
              <PrivateRoute exact path="/profile/:username/tuit" component={CreateTuit} />
              <PrivateRoute exact path="/search" component={SearchPage} />
              <PrivateRoute exact path="/follows" component={FollowPage} />
              <PrivateRoute exact path="/line/:username" component={LinePage} />
              <PrivateRoute path="*" component={Error} />
            </Switch>
            <Navbar />
          </div>
        </AuthProvider>
      </div>
    )
  }
}

export default App;
