import React, { Component } from 'react';

class WrapFollows extends Component {
    render() {
        console.log('test', this.props.follow.following.username);
        const { username, name, image } = this.props.follow.following;
        return (
            <div>
                <img src={`${image}`} alt="img" height="42" width="42" /> 
                <h1>{username}</h1>
                <h1>{name}</h1>
            </div>
        );
    }
}

export default WrapFollows;