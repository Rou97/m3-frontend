import React, { Component } from 'react';
import tuitService from '../lib/tuit-service';
import WrapTuits from '../components/WrapTuits';
import '../App.css';

class LinePage extends Component {

    state = {
        tuits: []
    }

    componentDidMount() {
        this.getTuits(this.props.match.params.username);
    }

    getTuits = (username) => {
        tuitService.getTuitsByFollowers(username)
          .then(tuits => {
            this.setState({
              tuits
            })
          })
          .catch(err => console.log(err));
      }

    render() {
        console.log('ahora', this.state.tuits);
        const { tuits } = this.state;
        return (
            <div className="tuit-line">
                <ul>
                    {tuits.map(tuit => (
                    <WrapTuits
                        key={tuit._id}
                        tuit={tuit}
                    />
                    ))}
                </ul>
            </div>
        );
    }
}

export default LinePage;