import React, { Component } from 'react';

class WrapTuits extends Component {

    render() {

        console.log('hola', this.props.data);

        return (
            <div>
                <p>{this.props.data}</p>
            </div>
        );
    }
}

export default WrapTuits;