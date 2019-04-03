import React, { Component } from 'react'
import { withAuth } from '../providers/AuthProvider';
// import CreateTuit from '../components/CreateTuit';
import WrapTuits from '../components/WrapTuits';
import tuitService from '../lib/tuit-service';
import followService from '../lib/follow-service';
import { Link } from 'react-router-dom';
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

  showFollowButton(userLoggedId, userFoundId, username) {;
        if(userLoggedId === userFoundId) {
            return (
              <div>
                <Link className="nav-link" to='/follows'>Follows</Link>
              </div>
            )
        } else  {
            return (
              <button  onClick={() => followService.follow(userFoundId, username) }>
                  Follow
              </button>
            )
        }
  }

  render() {
    const { tuits, userDisplay } = this.state;

    const userLoggedId = this.props.user._id;
    const userFoundId = userDisplay._id;
    const username = userDisplay.username;

    return (
      <div>
        <div className="jumbotron">

          <span className="profile-image">
            <img className="rounded-circle" src={`${userDisplay.image}`} alt="img-profile" height="42" width="42" /> 
          </span>
          <span className="profile-names">
            <h5>{userDisplay.username}</h5>
          </span>
          <span className="profile-follow">
            {this.showFollowButton(userLoggedId, userFoundId, username)}
          </span>

        </div>
        <div className="container-fluid block">
          <ul>
            {tuits.length>0 && tuits.map(tuit => (
              <WrapTuits
                key={tuit._id}
                tuit={tuit}
                onDelete={this.handleDelete}
              />
            ))}
          </ul>
        </div>
        {/* <div>
          <CreateTuit
            onSubmit={this.handleSubmit}
          />
        </div> */}
      </div >
    )
  }
}

export default withAuth(Profile);