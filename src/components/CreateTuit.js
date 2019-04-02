import React, { Component } from 'react';

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
        this.props.onSubmit(this.state);
        this.setState({
          info:""
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group create-tuit">
                    <input type="text" name="" value={this.state.info }onChange={this.handleChange}/>
                    <input type="submit" value="Create" />
                </div>
            </form>
        );
    }
}

export default CreateTuit;