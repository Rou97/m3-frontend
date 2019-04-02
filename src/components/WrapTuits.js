import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';
import cross from '../img/delete.png';
import '../App.css'; 

class WrapTuits extends Component {

    test(a, b, id){
        console.log('props', this.props);
        console.log('nid', id);
        if(a === b) {
            console.log('entra dentro del if')
            return(
            <button  onClick={() => this.props.onDelete(id) }>
                <img src={`${cross}`} alt="icon" className="rounded-circle" />
            </button>)
        } else  {
            console.log('no entra');
            return null
        }
    }
    
    
    render() {

        const a = this.props.user._id;
        const b = this.props.tuit.creator;
        // const {data, _id, onDelete} = this.props;
        const {_id, info} = this.props.tuit;
        return (
            <div className="card text-white bg-primary mb-3">

                <div className="card-header">ADMIN
                    {this.test(a,b, _id)}
                </div>
                <div className="card-body">
                    <p className="card-text">{info}</p>    
                </div>
            </div>
        );
    }
}

export default withAuth(WrapTuits);