import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRouteWF({ component: Component, ...rest }) {
  const initialData = JSON.parse(localStorage.getItem('initialData'));
  return <Route {...rest} render={props => (initialData ? <Component {...props} /> : <Redirect to="/" />)} />;
}

export default PrivateRouteWF;
