import React, { Component } from 'react';
import logo from '../img/image.png';

class HomePage extends Component {
    render() {
        return (
            <div className="logo-home">
                { <img src={logo} alt="Logo" /> }
            </div>
        );
    }
}

export default HomePage;