import React, { Component } from 'react';

class Wrap extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <input type="text" name="info" value="" onChange={this.handleChange}/>
                    <input type="submit" value="" />
                </form>
            </div>
        );
    }
}

export default Wrap;