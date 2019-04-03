import React, { Component } from 'react';
import tuitService from '../lib/tuit-service';

class LinePage extends Component {

    state = {
        tuits: []
    }

    componentDidMount() {
        this.getTuits(this.props.match.params.username);
    }

    getTuits = (username) => {
        tuitService.getTuitsByUser(username)
          .then(tuits => {
            this.setState({
              tuits
            })
          })
          .catch(err => console.log(err));
      }

    render() {
        console.log('props', this.props.match.params.username);
        return (
            <div>
                Hola
            </div>
        );
    }
}

export default LinePage;