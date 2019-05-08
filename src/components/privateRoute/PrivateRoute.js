import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function PrivateRoute({ component: Component, ...rest }) {
  const localToken = localStorage.getItem('aws.cognito.identity-providers.us-east-2:21818a34-2d9d-4734-adc4-ab2c45986a9b');
  return <Route {...rest} render={props => (localToken ? <Component {...props} /> : <Redirect to="/" />)} />;
}

export default connect(({ authReducer }) => ({
  isLoggedIn: authReducer.isLoggedIn
}))(PrivateRoute);
