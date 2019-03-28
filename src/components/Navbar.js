import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';

class Navbar extends Component {
  render() {
    const { isLogged, user, logout } = this.props;
    const { username } = user;
    console.log('e', user);
    if (isLogged) {
      return <div>
        <p onClick={logout}>Logout</p>
        <Link to='/search'>Search</Link>
      </div>
    } else {
      return <div>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Signup</Link>
      </div>
    }
  
  }
}

export default withAuth(Navbar);