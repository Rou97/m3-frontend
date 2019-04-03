import React, { Component } from 'react';
import searchService from '../lib/search-service';
import { Redirect } from 'react-router-dom';

class SearchPage extends Component {
    state = {
        user: "",
        userFound: null,
    }
    
    handleChange = (event) => {
        this.setState({
            user: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        searchService.getPage(this.state.user)
        .then(userFound => {
          this.setState({
            redirectUser:userFound[0]
          })
        })
        .catch(err => console.log(err));

        this.setState({
          user:""
        })

        
    }
    

    render() {
        const { redirectUser } = this.state;
        console.log("redirect",redirectUser);

        if (redirectUser) {
            return <Redirect to={{ pathname: `/profile/${redirectUser.username}`, state:{profile:redirectUser}}}/>;
        }

        return (
            <div className="form-group search-wrap">
                <form onSubmit={this.handleSubmit}>
                    <h1 className="title">Search an user</h1>
                    <input className="form-control" type="text" name="user" value={this.state.user }onChange={this.handleChange}/>
                    <input className="btn btn-primary search" type="submit" value="Search" />
                </form>         
            </div>
        );
    }
}

export default SearchPage;