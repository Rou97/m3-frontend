import React, { Component } from 'react'
import { withAuth } from '../providers/AuthProvider';
import CreateTuit from '../components/CreateTuit';
import tuitService from '../lib/auth-service';

class Profile extends Component {

  handleSubmit = (data) => {
    tuitService.createTuit(data)
      .then((result) => {
        console.log('result', result);
        this.props.history.push('/profile/admin');
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.props);
    const { user } = this.props
    return (
      <div>
        <h1>PROFILE</h1>
        <h1>Welcome {user.username}</h1>
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
        <CreateTuit onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default withAuth(Profile);