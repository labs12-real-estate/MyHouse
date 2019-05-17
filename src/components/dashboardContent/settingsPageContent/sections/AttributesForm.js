import React from 'react';
import { connect } from 'react-redux';
import { useForm, useValidation, validateEmail, validateLength, diffObjects } from '../../../../helper-functions/form-logic-functions';
import { updateUserAttributes } from '../../../../actions/authActions';

import ErrorContainer from './ErrorContainer';

function AttributesForm({ user, updateUserAttributes }) {
  const initialState = { name: user.name, email: user.email };
  const [formState, handleChange, hasChanged] = useForm(initialState);
  const [errorState, validate, hasErrors] = useValidation({
    name: [validateLength({ min: 3 }), 'Name must be at least 3 characters long'],
    email: [validateEmail, 'Please enter a valid email']
  });
  const handleSubmit = e => {
    e.preventDefault();
    const changes = diffObjects(initialState, formState);
    updateUserAttributes(changes);
  };
  return (
    <form className="attributes" onSubmit={handleSubmit}>
      <ErrorContainer error={errorState.name} />
      <label className="inline-grid">
        <div>Full Name</div>
        <div>
          <input name="name" type="text" value={formState.name} onChange={handleChange} onBlur={validate(formState)} />
        </div>
      </label>
      <ErrorContainer error={errorState.email} />
      <label className="inline-grid">
        <div>Email</div>
        <div>
          <input name="email" type="text" value={formState.email} onChange={handleChange} onBlur={validate(formState)} />
        </div>
      </label>
      <button disabled={!hasChanged || hasErrors}>Submit</button>
    </form>
  );
}

export default connect(
  ({ authReducer }) => ({
    user: authReducer.user
  }),
  { updateUserAttributes }
)(AttributesForm);
