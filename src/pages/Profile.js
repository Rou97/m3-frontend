import React, { Component } from 'react'
import { withAuth } from '../providers/AuthProvider';
import CreateTuit from '../components/CreateTuit';
import WrapTuits from '../components/WrapTuits';
import tuitService from '../lib/tuit-service';

class Profile extends Component {

  state = {
    tuits: []
  }

  componentDidMount() {
      this.getTuits();
    }

  getTuits = () => {
      tuitService.getAll()
        .then(tuits => {
          console.log('tuits', tuits);
          this.setState({
            tuits
          })
        })
        .catch(err => console.log(err));
  }

  handleSubmit = (data) => {
    tuitService.createTuit(data)
      .then((result) => {
        console.log('result', result);
      })
      .catch(err => console.log(err));
  }

  render() {
    const { user } = this.props
    const {tuits} = this.state;
    console.log('render', tuits)
    return (
      <div>
        <h1>PROFILE</h1>
        <h1>Welcome {user.username}</h1>
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
        <ul>
          {tuits.map(tuit => (
              <WrapTuits
              key={tuit._id}
              data={tuit.info}
              />
          ))}
        </ul>
        <CreateTuit onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default withAuth(Profile);