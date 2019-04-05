import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

class WrapFollows extends Component {
    render() {
        const { username, image } = this.props.follow.following;
        return (
            <div className="text-white bg-primary card-center card">
                <div className="wrap-image card-header">
                    <img className="rounded-circle" src={`${image}`} alt="img" /> 
                </div>
                <div className="body-follow card-body center-text-card card-body card-margin">
                    <div className="text-card">
                        You are following:
                    </div>

                    <div className="text-card">
                        <h5 className="card-title block">{username}</h5>
                    </div>
                    

                </div>
            </div>
        );
    }
}

export default WrapFollows;