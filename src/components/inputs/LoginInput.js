import React from 'react';
import { connect } from 'react-redux';
import { useForm } from '../../helper-functions/form-logic-functions';
import { signIn } from '../../actions/authActions';
import Button from '../buttons/Button';

const initialCreds = {
  username: '',
  password: ''
};

function LoginInput({ signIn }) {
  const [creds, handleChange] = useForm(initialCreds);

  return (
    <form onSubmit={e => signIn(creds, e)}>
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

export default connect(
  null,
  { signIn }
)(LoginInput);
