import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useForm, validateEmail } from '../../../../helper-functions/form-logic-functions.js'
import ErrorContainer from './ErrorContainer';

function AttributesForm({ user }) {
  const [formState, handleChange] = useForm({ name: user.name, email: user.email });
  const [errorState, setErrorState] = useState({ email: '' });
  const handleSubmit = e => {
    e.preventDefault();
    setErrorState(errorState => ({ ...errorState, email: 'Please enter a valid email' }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <label className="inline-grid">
        Name
        <input name="name" type="text" value={formState.name} onChange={handleChange} />
      </label>
      <ErrorContainer error={errorState.email} />
      <label className="inline-grid">
        Email
        <input name="email" type="text" value={formState.email} onChange={handleChange} />
      </label>
      <button>Submit</button>
    </form>
  );
}

export default connect(({ authReducer }) => ({
  user: authReducer.user
}))(AttributesForm);
