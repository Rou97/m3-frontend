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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="info" value={this.state.info }onChange={this.handleChange}/>
                    <input type="submit" value="Create" />
                </form>
            </div>
        );
    }
}

export default CreateTuit;