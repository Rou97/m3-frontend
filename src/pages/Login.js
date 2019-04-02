import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';

class Login extends Component {
  state = {
    username: "",
    password: "",
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state

    this.props.login({ username, password })
      .then(() => {})
      .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { username, password } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div class="form-group">
          <label>Username:</label>
          <input class="form-control" type="text" name="username" value={username} onChange={this.handleChange}/>
          <label>Password:</label>
          <input class="form-control" type="password" name="password" value={password} onChange={this.handleChange} />
          <input class="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
    )
  }
}

export default withAuth(Login);
