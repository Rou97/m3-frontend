import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';
import searchService from '../lib/search-service';

class Navbar extends Component {

  state = {
    user: "",
    userFound: null,
  }

  componentDidMount() {
    searchService.getPage(this.state.user)
        .then(userFound => {
          this.setState({
            redirectUser:userFound[0]
          })
        })
        .catch(err => console.log(err));
  }

  


  render() {
    const { isLogged, logout } = this.props;
    const { redirectUser } = this.state;
    if (isLogged) {
      return <div>
        <p onClick={logout}>Logout</p>
        <Link to='/search'>Search</Link>
        <Link to={{ pathname: `/profile/${this.props.user.username}`, state:{profile:redirectUser}}}>Profile</Link>
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