import React, { Component } from 'react';
import tuitService from '../lib/tuit-service';
import cross from '../img/delete.png';
import '../App.css'; 

class WrapTuits extends Component {

    
    
    
    render() {

        console.log('pr', this.props);
        // const {data, _id, onDelete} = this.props;
        const {id} = this.props;
        console.log('idddddd', id);
        return (
            <div className="card text-white bg-primary mb-3">
                <div class="card-header">ADMIN
                    <button  onClick={() => tuitService.deleteTuit(id) }>
                            <img src={`${cross}`} alt="icon" class="rounded-circle" />
                    </button>
                </div>
                <div class="card-body">
                    <p className="card-text">{this.props.data}</p>    
                </div>
            </div>
        );
    }
}

export default WrapTuits;