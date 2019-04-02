import React, { Component } from 'react';
import tuitService from '../lib/tuit-service';

class CreateTuit extends Component {

    state = {
        info: "",
    }
    
    handleChange = (event) => {
        this.setState({
            info: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // this.props.onSubmit(this.state);
        this.handleCreate(this.state);
        this.setState({
          info:""
        })
    }

    handleCreate = (data) => {
        tuitService.createTuit(data)
          .then((result) => {
            console.log('result', result);
            const newTuits = this.state.tuits.concat([result]);
            this.setState({
              tuits: newTuits,
            })
          })
          .catch(err => console.log(err));
      }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group create-tuit">
                    <input className="form-control" type="text" name="" value={this.state.info }onChange={this.handleChange}/>
                    <input type="submit" value="Create" />
                </div>
            </form>
        );
    }
}

export default CreateTuit;