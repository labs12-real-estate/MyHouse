import React from 'react';
import { connect } from 'react-redux';
import LoginInput from '../inputs/LoginInput';
import ForgotPasswordInput from '../inputs/ForgotPasswordInput';
import SetNewPasswordInput from '../inputs/SetNewPasswordInput';

function LoginContent({ forgotPassword, pendingConfirmation }) {
  if (!forgotPassword) {
    return (
      <div className="login_inputs_container">
        <LoginInput />
      </div>
    );
  } else if (pendingConfirmation) {
    return (
      <div className="login_inputs_container">
        <SetNewPasswordInput />
      </div>
    );
  } else {
    return (
      <div className="login_inputs_container">
        <ForgotPasswordInput />
      </div>
    );
  }
}

export default connect(
  ({ authReducer: { forgotPassword, pendingConfirmation } }) => {
    return { forgotPassword, pendingConfirmation };
  },
  {}
)(LoginContent);
