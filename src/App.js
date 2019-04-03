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
import 'bootstrap/dist/css/bootstrap.css';
// import { Link } from 'react-router-dom';
// import logo from './img/image.png';

class App extends Component {
  render() {
    return (
      <div>
        {/* <img src={logo} alt="Logo" /> */}
        <AuthProvider>
          <div className="container">
            <Switch>
              <AnonRoute path="/signup" component={Signup} />
              <AnonRoute path="/login" component={Login} />
              {/* <PrivateRoute exact path="/profile" component={Profile} /> */}
              <PrivateRoute exact path="/profile/:username" component={Profile} />
              <PrivateRoute exact path="/profile/:username/tuit" component={CreateTuit} />
              <PrivateRoute exact path="/search" component={SearchPage} />
              <PrivateRoute exact path="/follows" component={FollowPage} />
              <PrivateRoute exact path="/line/:username" component={LinePage} />
            </Switch>
            <Navbar />
          </div>
        </AuthProvider>
      </div>
    )
  }
}

export default App;
