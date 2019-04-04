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
    followed: true,
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
    
    if (this.props.location.state.profile) {
      this.getFollowState();
    }
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

  getFollowState = async () => {

    // const { _id: userLoggedId } = this.props.user;
    // const { _id: userDisplayId } = this.state.userDisplay;

    let newData = await followService.getFollows();
    newData = newData.filter((follow)=>follow.following.username===this.props.location.state.profile.username)

    this.setState({
      followed: newData.length>0,
    })
  }

  toggleFollow= async ()=>{

    const { _id : userFoundId, username } = this.state.userDisplay;
    const { followed } = this.state;

    await followService.follow(userFoundId, username);

    this.setState({
      followed: !followed
    })
  }

  showDeleteButton(userLoggedId, userFoundId) {
    if (userLoggedId === userFoundId) {
      return true
    } else {
      return false
    }
  }

  render() {
    const { tuits, userDisplay, followed } = this.state;

    const userLoggedId = this.props.user._id;
    const userFoundId = userDisplay._id;
    // const username = userDisplay.username;

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
              {
                userLoggedId === userFoundId ?
                  <div>
                    <Link className="nav-link" to='/follows'><p>Followers</p></Link>
                  </div>
                  :
                  <button onClick={this.toggleFollow}>
                    {followed ? "followed" : "follow"}
                  </button>
              }
            </span>
          </div>

        </div>
        <div className="container-fluid block">
          <ul>
            <div className="container-order">
              {tuits.length > 0 && tuits.map(tuit => (
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