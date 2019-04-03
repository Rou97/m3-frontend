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
        <div className="form-group">
          <label className="label-form">Username:</label>
          <input className="form-control" type="text" name="username" value={username} onChange={this.handleChange}/>
          <label className="label-form">Password:</label>
          <input className="form-control" type="password" name="password" value={password} onChange={this.handleChange} />
          
          <div className="button-form">
            <input className="btn btn-primary" type="submit" value="Login" />
          </div>

        </div>
      </form>
    )
  }
}

export default withAuth(Login);
