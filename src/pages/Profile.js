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
                <Link className="nav-link" to='/follows'><p>Followers</p></Link>
              </div>
            )
        } else  {
            console.log('userFound', this.state.userDisplay);
            console.log('userLogged', this.props.user);
            return (
              <button  onClick={() => followService.follow(userFoundId, username) }>
                  Following
              </button>
            )
        }
  }

  showDeleteButton(userLoggedId, userFoundId) {
    if(userLoggedId === userFoundId) {
        return true
    } else  {
        return false
    }
}

  render() {
    const { tuits, userDisplay } = this.state;

    const userLoggedId = this.props.user._id;
    const userFoundId = userDisplay._id;
    const username = userDisplay.username;

    let showDelete = this.showDeleteButton(userLoggedId, userFoundId);

    return (
      <div>
        <div className="jumbotron">
          <div className="justify-profile">
            <span className="profile-image">
              <img className="rounded-circle" src={`${userDisplay.image}`} alt="img-profile" height="42" width="42" /> 
            </span>
            <span className="profile-names">
              <h5>{userDisplay.username}</h5>
            </span>
          </div>

          <div>
            <span className="profile-follow">
              {this.showFollowButton(userLoggedId, userFoundId, username)}
            </span>
          </div>

        </div>
        <div className="container-fluid block">
          <ul>
            <div className="container-order">
              {tuits.length>0 && tuits.map(tuit => (
                <WrapTuits
                  key={tuit._id}
                  id={tuit._id}
                  tuit={tuit}
                  onDelete={this.handleDelete}
                  showDelete={showDelete}
                />
              ))}
            </div>
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