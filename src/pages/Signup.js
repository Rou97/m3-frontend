import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';

class Signup extends Component {

  state = {
    username: "",
    password: "",
    name: "",
    email: "",
    image: ""
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const name = this.state.name;
    const email = this.state.email;
    const image = this.state.image;

    this.props.signup({ username, password, name, email, image })
      .then(() => {
        this.setState({
            username: "",
            password: "",
            name: "",
            email: "",
            image: ""
        });
      })
      .catch(error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { username, password, name, email, image } = this.state;
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <div class="form-group">
            <label className="label-form">Username:</label>
            <input class="form-control" type="text" name="username" value={username} onChange={this.handleChange}/>
            <label className="label-form">Password:</label>
            <input class="form-control" type="password" name="password" value={password} onChange={this.handleChange} />
            <label className="label-form">Name:</label>
            <input class="form-control" type="text" name="name" value={name} onChange={this.handleChange}/>
            <label className="label-form">Email:</label>
            <input class="form-control" type="email" name="email" value={email} onChange={this.handleChange}/>
            <label className="label-form">Image:</label>
            <input class="form-control" type="text" name="image" value={image} onChange={this.handleChange}/>

            <div className="button-form">
              <input class="btn btn-primary" type="submit" value="Signup" />
            </div>

          </div>
        </form>

        {/* <p>Already have account? 
          <Link to={"/login"}> Login</Link>
        </p> */}

      </div>
    )
  }
}

export default withAuth(Signup);