import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';

const AnonRoute = ({ component: Component, isLogged, user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (!isLogged) {
          return <Component {...props} />
        } else {
          return <Redirect to={{ pathname: `/profile/${user.username}`, state: { from: props.location } }} />
        }
      }
      }
    />
  )
}
export default withAuth(AnonRoute);