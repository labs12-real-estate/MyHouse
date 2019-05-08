import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { useForm } from '../../helper-functions/form-logic-functions';
import { signIn } from '../../actions/authActions';
import { handleSignIn } from '../../helper-functions/onClick-logic';
import Button from '../buttons/Button';

const initialCreds = {
  username: '',
  password: ''
};

function LoginInput({ history, signIn }) {
  const [creds, handleChange] = useForm(initialCreds);

  return (
    <div className="login_inputs_container">
      <h1>Login</h1>
      <div className="login_gradient" />
      <form onSubmit={e => handleSignIn(e, signIn, creds, history)}>
        <input placeholder="Username" name="username" value={creds.username} onChange={handleChange} className="login_input" type="text" />
        <input placeholder="Password" name="password" value={creds.password} onChange={handleChange} className="login_input" type="password" />
        <Button buttonStyle="modal_login_button" buttonText="Login" />
        <a>Forgot your password?</a>
      </form>
    </div>
  );
}

export default withRouter(
  connect(
    null,
    { signIn }
  )(LoginInput)
);
