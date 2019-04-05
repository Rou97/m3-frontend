import React, { Component } from 'react';
import followService from '../lib/follow-service';
import 'bootstrap/dist/css/bootstrap.css';
import WrapFollows from '../components/WrapFollows';

class FollowPage extends Component {

    state = {
        follows: []
      }

    componentDidMount() {
        this.getFollows();
    }

    getFollows() {
        followService.getFollows()
      .then(follows => {
        this.setState({
            follows
        })
      })
      .catch(err => console.log(err));
    }

    render() {
        const { follows } = this.state;
        return (
          <div className="container-fluid block">
          <ul>
            {follows.map(follow => (
              <WrapFollows
                key={follow._id}
                follow={follow}
              />
            ))}
          </ul>
        </div>
        );
    }
}

export default FollowPage;