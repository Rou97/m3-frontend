import React, { Component } from 'react'
import { withAuth } from '../providers/AuthProvider';
import CreateTuit from '../components/CreateTuit';
import WrapTuits from '../components/WrapTuits';
import tuitService from '../lib/tuit-service';
import followService from '../lib/follow-service';
import '../App.css';

class Profile extends Component {

  state = {
    tuits: [],
    userDisplay: this.props.user,
  }

  componentDidMount() {

    const { username: paramsUsername } = this.props.match.params;
    const { username: loggedUsername } = this.props.user;

    if (paramsUsername !== loggedUsername) {
      this.setState({
        userDisplay: this.props.location.state.profile,
      })
    } 

    this.getTuits(paramsUsername);
  }

  getTuits = (username) => {
    tuitService.getAllByUser(username)
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
    console.log('a ver', id)
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
    const { tuits, userDisplay } = this.state;
    const { username: loggedUsername } = this.props.user;

    console.log(userDisplay);


    return (
      <div>
        <div className="jumbotron">
          <h5>{userDisplay.username}</h5>
          <h6>{userDisplay.name}</h6>
        </div>
        <div className="container-fluid block">
          <ul>
            {tuits.map(tuit => (
              <WrapTuits
                key={tuit._id}
                tuit={tuit}
                onDelete={this.handleDelete}
              />
            ))}
          </ul>
        </div>
        <div>
          <CreateTuit
            onSubmit={this.handleSubmit}
          />
        </div>
      </div >
    )
  }
}

export default withAuth(Profile);