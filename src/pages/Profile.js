import React, { Component } from 'react'
import { withAuth } from '../providers/AuthProvider';
import CreateTuit from '../components/CreateTuit';
import WrapTuits from '../components/WrapTuits';
import tuitService from '../lib/tuit-service';
import followService from '../lib/follow-service';
import '../App.css';

class Profile extends Component {

  state = {
    tuits: []
  }

  componentDidMount() {
    this.getTuits();
  }

  getTuits = () => {
    tuitService.getAllByUser()
      .then(tuits => {
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
        const newTuits = this.state.tuits.concat([result]);
        this.setState({
          tuits: newTuits,
        })
      })
      .catch(err => console.log(err));
  }

  handleDelete = (id) => {
    tuitService.deleteTuit(id)
      .then(data => {
        console.log("DATA Tuit delete", data);
        const deletedTuit = data.tuit;
        const newTuits = this.state.tuits.filter((tuit) => {
          return tuit._id !== deletedTuit._id;
        });
        this.setState({
          tuits: newTuits,
        })
      })
      .catch(err => console.log(err));
  }

  render() {
    const { user } = this.props
    const { tuits } = this.state;

    if (this.props.location.state.profile) {
      const { profile } = this.props.location.state;
      return (
        <div>

          <div>
            <h1>PROFILE</h1>
            <h1>Welcome {profile.username}</h1>
            <h1>{profile.name}</h1>
            <h1>{profile.email}</h1>
            <button onClick={() => followService.follow()}>Follow</button>
          </div>

          <div>
            <ul>
              {profile.tuits.map(tuit => (
                <WrapTuits
                  key={tuit._id}
                  id={tuit._id}
                  data={tuit.info}
                />
              ))}
            </ul>
          </div>

          <CreateTuit
            onSubmit={this.handleSubmit}
          />
        </div>
      )
    }

    return (
      <div>

        <div>
          <h1>PROFILE</h1>
          <h1>Welcome {user.username}</h1>
          <h1>{user.name}</h1>
          <h1>{user.email}</h1>
        </div>

        <div className="container-fluid block">
          <ul>
            {tuits.map(tuit => (
              <WrapTuits
                key={tuit._id}
                id={tuit._id}
                data={tuit.info}
                onDelete={this.handleDelete}
              />
            ))}
          </ul>
        </div>

        <CreateTuit
          onSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default withAuth(Profile);