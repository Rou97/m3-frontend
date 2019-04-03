import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';
import cross from '../img/delete.png';
import '../App.css'; 

class WrapTuits extends Component {

    showButtonFollow(a, b, id){
        if(a === b) {
            return(
            <button  onClick={() => this.props.onDelete(id) }>
                <img src={`${cross}`} alt="icon" className="rounded-circle" />
            </button>)
        } else  {
            return null
        }
    }
    
    showCorrectImage(imageSomeUser, imageLoggedInUser){
        const userId = this.props.user._id;
        const creatorId = this.props.tuit.creator;
        if(userId === creatorId) {
            return(
                <div className="tuit-image">
                    <img  src={`${imageLoggedInUser}`} alt="if" height="100" width="100" className="rounded-circle"/> 
                </div>
            )
        } else  {
            return (
                <div className="tuit-image">
                    <img src={`${imageSomeUser}`} alt="else" height="100" width="100" className="rounded-circle"/>
                </div>
            )
        }
    }
    
    render() {

        const userId = this.props.user._id;
        const creatorId = this.props.tuit.creator;

        console.log(this.props.tuit);

        const {_id, info} = this.props.tuit;

        return (
            <div className="card text-white bg-primary mb-3">

                <div className="card-header">
                    {this.showCorrectImage(this.props.tuit.creator.image,this.props.user.image)}
                    {/* <img src={`${this.props.user.image}`} alt="img-tuit" height="100" width="100" />  */}
                    <h1>{this.props.tuit.creator.username}</h1>
                    {this.showButtonFollow(userId, creatorId, _id)}
                </div>
                <div className="card-body">
                    <p className="card-text">{info}</p>    
                </div>
            </div>
        );
    }
}

export default withAuth(WrapTuits);