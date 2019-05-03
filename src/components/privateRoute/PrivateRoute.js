import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
  const checkLocalStorage = localStorage.getItem('aws.cognito.identity-id.us-east-2:0b1cd1b4-9317-4db9-8797-88b669850445');
  return <Route {...rest} render={props => (checkLocalStorage ? <Component {...props} /> : <Redirect to="/" />)} />;
}

export default PrivateRoute;
