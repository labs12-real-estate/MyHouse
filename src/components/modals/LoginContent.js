import React from 'react';
import { connect } from 'react-redux';
import LoginInput from '../inputs/LoginInput';
import ForgotPasswordInput from '../inputs/ForgotPasswordInput';

function LoginContent({ forgotPassword }) {
  if (!forgotPassword) {
    return (
      <div className="login_inputs_container">
        <LoginInput />
      </div>
    );
  } else if (forgotPassword) {
    return (
      <div className="login_inputs_container">
        <ForgotPasswordInput />
      </div>
    );
  }
}

export default connect(
  ({ authReducer: { forgotPassword } }) => {
    return { forgotPassword };
  },
  {}
)(LoginContent);
