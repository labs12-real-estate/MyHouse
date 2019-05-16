import React from 'react';
import { connect } from 'react-redux';
import { useForm, useValidation, validateEmail } from 'helper-functions/form-logic-functions.js';
import ErrorContainer from './ErrorContainer';

function AttributesForm({ user }) {
  const [formState, handleChange, hasChanged] = useForm({ name: user.name, email: user.email });
  const [errorState, validate, hasErrors] = useValidation({ email: [validateEmail, 'Please enter a valid email'] });
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <form className="attributes" onSubmit={handleSubmit}>
      <label className="inline-grid">
        <div>Name</div>
        <div>
          <input name="name" type="text" value={formState.name} onChange={handleChange} />
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

export default connect(({ authReducer }) => ({
  user: authReducer.user
}))(AttributesForm);
