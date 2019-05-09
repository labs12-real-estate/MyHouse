import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { useForm } from '../../helper-functions/form-logic-functions';
import { toggleForgotPassword } from '../../actions/authActions';
import Button from '../buttons/Button';

const initialCreds = {
  username: '',
  code: '',
  new_password: ''
};

function SetNewPasswordInput({ toggleForgotPassword }) {
  const [creds, handleChange] = useForm(initialCreds);
  return (
    <div>
      <h2>Forgot Password?</h2>
      <div className="login_gradient" />
      <form>
        <h3>Enter the below details to change your password.</h3>
        <input placeholder="Username" name="username" value={creds.username} onChange={handleChange} className="login_input" type="text" />
        <input placeholder="Confirmation Code" name="code" value={creds.username} onChange={handleChange} className="login_input" type="text" />
        <input placeholder="New Password" name="new_password" value={creds.username} onChange={handleChange} className="login_input" type="text" />
        <Button buttonStyle="modal_login_button" buttonText="Submit" />
      </form>
    </div>
  );
}

export default withRouter(
  connect(
    ({ authReducer: { fetching } }) => {
      return {
        fetching
      };
    },
    { toggleForgotPassword }
  )(SetNewPasswordInput)
);
