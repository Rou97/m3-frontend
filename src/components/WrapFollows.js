import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

class WrapFollows extends Component {
    render() {
        console.log('test', this.props.follow.following);
        const { username, name, image } = this.props.follow.following;
        return (
            <div className="card-follow">
                <div className="wrap-image">
                    <img src={`${image}`} alt="img" /> 
                </div>
                <div className="body-follow card-body">
                    <h5 className="card-title">{username}</h5>
                    <h5 className="card-subtitle mb-2 text-muted">{name}</h5>

                </div>
            </div>
        );
    }
}

export default WrapFollows;