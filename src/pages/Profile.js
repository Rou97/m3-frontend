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
          this.setState({
            tuits
          })
          console.log('aqui', tuits);
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

  handleDelete = (id) => {
    // console.log('ahora', id)
    tuitService.deleteTui(id)
      .then(result => {
        console.log(result);
        this.getTuits();
      })
      .catch(err => console.log(err));
  }

  render() {
    const { user } = this.props
    const {tuits} = this.state;

    if(this.props.location.state.profile){
      const {profile} = this.props.location.state;
      return (
        <div>
          <h1>PROFILE</h1>
          <h1>Welcome {profile.username }</h1>
          <h1>{profile.name }</h1>
          <h1>{profile.email }</h1>
          <ul>
            {profile.tuits.map(tuit => (
                <WrapTuits
                  key={tuit._id}
                  id={tuit._id}
                  data={tuit.info}
                  onDelete={this.handleDelete}
                />
            ))}
          </ul>
          <CreateTuit 
            onSubmit={this.handleSubmit} 
          />
        </div>
      )
    }

    return (
      <div>
        <h1>PROFILE</h1>
        <h1>Welcome { user.username}</h1>
        <h1>{user.name}</h1>
        <h1>{ user.email}</h1>
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
        <CreateTuit />
      </div>
    )
  }
}

export default withAuth(Profile);