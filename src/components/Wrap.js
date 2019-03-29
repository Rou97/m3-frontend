import React, { Component } from 'react';

class Wrap extends Component {

    state = {
        info: "",
      }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.setState({
            info: "",
        });
        console.log(this.state);
    }
    
    handleChange = (event) => {
        this.setState({
            info: event.target.value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <input type="text" name="info" value={this.state.info }onChange={this.handleChange}/>
                    <input type="submit" value="Create" />
                </form>
            </div>
        );
    }
}

export default Wrap;