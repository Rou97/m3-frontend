import React, { Component } from 'react';
import tuitService from '../lib/tuit-service';

class WrapTuits extends Component {

    
    
    
    render() {

        console.log('pr', this.props);
        // const {data, _id, onDelete} = this.props;
        const {id} = this.props;
        console.log('idddddd', id);
        return (
            <div>
                <p>{this.props.data}</p>
                <button onClick={() => tuitService.deleteTuit(id) }>Delete</button>
            </div>
        );
    }
}

export default WrapTuits;