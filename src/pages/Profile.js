import React, { Component } from 'react'
import { withAuth } from '../providers/AuthProvider';
import Wrap from '../components/Wrap';

class Profile extends Component {
  render() {
    const { user } = this.props
    return (
      <div>
        <h1>PROFILE</h1>
        <h1>Welcome {user.username}</h1>
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
        <Wrap />
      </div>
    )
  }
}

export default withAuth(Profile);