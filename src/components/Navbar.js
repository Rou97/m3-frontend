import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';
import searchService from '../lib/search-service';
import 'bootstrap/dist/css/bootstrap.css';

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
      return <div className="navbar navbar-expand-lg navbar-dark bg-primary">
        
        <ul className="nav">
          <li className="nav-item">
            <p className="nav-link" onClick={logout}>Logout</p>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/search'><p>Search</p></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={{ pathname: `/line/${this.props.user.username}`, query:{username:this.props.user.username}}}><p>Tuitline</p></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={{ pathname: `/profile/${this.props.user.username}`, state:{profile:redirectUser}}}><p>Profile</p></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`/profile/${this.props.user.username}/tuit`}><p>Create</p></Link>
          </li>
        </ul>
        
      </div>
    } else {
      
      return( 
      <div className="login-container">
        <Link to='/login'>
          Login
        </Link>

        <small>or</small>

        <Link to='/signup'>
          Signup
        </Link>
      </div>
      )}
  
  }
}

export default withAuth(Navbar);