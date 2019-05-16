import React from 'react';
import { connect } from 'react-redux';
import isEqual from 'lodash/fp/isEqual';
import { useForm, useValidation, validatePassword } from 'helper-functions/form-logic-functions.js';
import ErrorContainer from './ErrorContainer';

function NewPasswordForm({ user }) {
  const [formState, handleChange, hasChanged] = useForm({ oldPassword: '', newPassword: '', confirmNewPassword: '' });
  const [errorState, validate, hasErrors] = useValidation({
    newPassword: [validatePassword, 'Password must be at least 8 characters long, contain upper and lowercase letters, a number and a special character'],
    confirmNewPassword: [isEqual(formState.newPassword), 'Passwords must match']
  });
  return (
    <form className="password">
      <label className="inline-grid">
        <div>Old Password</div>
        <div>
          <input name="oldPassword" type="password" value={formState.oldPassword} onChange={handleChange} />
        </div>
      </label>
      <ErrorContainer error={errorState.newPassword} />
      <label className="inline-grid">
        <div>New Password</div>
        <div>
          <input name="newPassword" type="password" value={formState.newPassword} onChange={handleChange} onBlur={validate(formState)} />
        </div>
      </label>
      <ErrorContainer error={errorState.confirmNewPassword} />
      <label className="inline-grid">
        <div>Confirm New Password</div>
        <div>
          <input name="confirmNewPassword" type="password" value={formState.confirmNewPassword} onChange={handleChange} />
        </div>
      </label>
      <button disabled={!hasChanged || hasErrors}>Submit</button>
    </form>
  );
}

export default connect(({ authReducer }) => ({
  user: authReducer.user
}))(NewPasswordForm);
