import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { useForm } from '../../helper-functions/form-logic-functions';
import { signIn } from '../../actions/authActions';
import Button from '../buttons/Button';

const initialCreds = {
  username: '',
  password: ''
};

function LoginInput({ history, signIn }) {
  const [creds, handleChange] = useForm(initialCreds);

  const handleSignIn = e => {
    e.preventDefault();
    signIn(creds, history);
  };

  return (
    <form onSubmit={handleSignIn}>
      <div className="login_inputs_container">
        <label className="login_label">Username</label>
        <input name="username" value={creds.username} onChange={handleChange} className="login_input" type="text" />
        <label className="login_label">Password</label>
        <input name="password" value={creds.password} onChange={handleChange} className="login_input" type="password" />
        <Button buttonStyle="modal_login_button" buttonText="Login" />
      </div>
    </form>
  );
}

export default withRouter(
  connect(
    null,
    { signIn }
  )(LoginInput)
);
