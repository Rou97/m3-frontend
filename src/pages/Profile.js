import React, { Component } from 'react'
import { withAuth } from '../providers/AuthProvider';

class Profile extends Component {
  render() {
    const { user } = this.props
    console.log('props', this.props);
    return (
      <div>
        <h1>PROFILE</h1>
        <h1>Welcome {user.username}</h1>
      </div>
    )
  }
}

export default withAuth(Profile);