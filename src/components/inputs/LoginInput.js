import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { useForm } from '../../helper-functions/form-logic-functions';
import { signIn, toggleForgotPassword } from '../../actions/authActions';
import { handleSignIn } from '../../helper-functions/onClick-logic';
import { loginModalButtonRender } from '../../helper-functions/display-functions';
import { incorrectCreds, loginAttemptsExceeded } from '../../helper-functions/error-handling-functions';

const initialCreds = {
  username: '',
  password: ''
};

function LoginInput({ signIn, history, fetching, toggleForgotPassword, error }) {
  const [creds, handleChange] = useForm(initialCreds);
  return (
    <div>
      <h1>Login</h1>
      <div className="login_gradient" />
      <form onSubmit={e => handleSignIn(e, signIn, creds, history)}>
        {error ? incorrectCreds(error, 'login_modal_error') : <h4>Not a user yet? Enter your address on the homepage to register!</h4>}
        {error ? loginAttemptsExceeded(error, 'login_modal_error') : null}
        <input placeholder="Username" name="username" value={creds.username} onChange={handleChange} className="login_input" type="text" />
        <input placeholder="Password" name="password" value={creds.password} onChange={handleChange} className="login_input" type="password" />
        {loginModalButtonRender(fetching, 'Login', 'modal_login_button')}
        <p onClick={toggleForgotPassword}>Forgot your password?</p>
      </form>
    </div>
  );
}

export default withRouter(
  connect(
    ({ authReducer: { fetching, error } }) => {
      return {
        fetching,
        error
      };
    },
    { signIn, toggleForgotPassword }
  )(LoginInput)
);
