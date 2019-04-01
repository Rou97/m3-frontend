import React, { Component } from 'react';

class WrapTuits extends Component {

    
    handleSubmit = (event) => {
        event.preventDefault();
    }
    
    render() {
        console.log(this.props);

        return (
            <div>
                <p>{this.props.data}</p>
                {/* <form onSubmit={this.handleSubmit}>
                    <input type="submit" value="Edit" />
                </form> */}
            </div>
        );
    }
}

export default WrapTuits;