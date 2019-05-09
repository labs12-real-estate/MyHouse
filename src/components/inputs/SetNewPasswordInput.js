import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { useForm } from '../../helper-functions/form-logic-functions';
import { confirmForgotPassword } from '../../actions/authActions';
import { loginModalButtonRender } from '../../helper-functions/display-functions';

const initialCreds = {
  username: '',
  code: '',
  new_password: ''
};

function SetNewPasswordInput({ fetching, confirmForgotPassword }) {
  const [creds, handleChange] = useForm(initialCreds);
  return (
    <div>
      <h2>Forgot Password?</h2>
      <div className="login_gradient" />
      <form onSubmit={e => confirmForgotPassword(e, creds)}>
        <h3>Enter the below details to change your password.</h3>
        <input placeholder="Username" name="username" value={creds.username} onChange={handleChange} className="login_input" type="text" />
        <input placeholder="Confirmation Code" name="code" value={creds.code} onChange={handleChange} className="login_input" type="text" />
        <input placeholder="New Password" name="new_password" value={creds.new_password} onChange={handleChange} className="login_input" type="password" />
        {loginModalButtonRender(fetching, 'Submit', 'modal_login_button_2')}
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
    { confirmForgotPassword }
  )(SetNewPasswordInput)
);
