import React from 'react';
import { connect } from 'react-redux';
import { useForm, validatePassword } from '../../../../helper-functions/form-logic-functions.js';

function NewPasswordForm({ user }) {
  const [formState, handleChange] = useForm({ oldPassword: '', newPassword: '', confirmNewPassword: '' });
  return (
    <form>
      <label className="inline-grid">
        Old Password
        <input name="oldPassword" type="password" value={formState.oldPassword} onChange={handleChange} />
      </label>
      <label className="inline-grid">
        New Password
        <input name="newPassword" type="password" value={formState.newPassword} onChange={handleChange} />
      </label>
      <label className="inline-grid">
        Confirm New Password
        <input name="confirmNewPassword" type="password" value={formState.confirmNewPassword} onChange={handleChange} />
      </label>
      <button>Submit</button>
    </form>
  );
}

export default connect(({ authReducer }) => ({
  user: authReducer.user
}))(NewPasswordForm);
