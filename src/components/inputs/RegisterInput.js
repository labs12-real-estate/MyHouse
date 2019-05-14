import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { useForm } from '../../helper-functions/form-logic-functions';
import { confirmSignUp, signUp, sendRegisterError } from '../../actions/authActions';
import Button from '../buttons/Button';
import { emptyCreds, invalidPassword, existingUser, emptyNameEmail } from '../../helper-functions/error-handling-functions';
import { validateEmail } from '../../helper-functions/form-logic-functions';

const initialForm = {
  username: '',
  password: '',
  email: '',
  name: ''
};

// @TODO: This could be refactored into subcomponents
function RegisterInput({ history, houseInput, confirmSignUp, signUp, pendingConfirmation, submittedConfirmation, error, sendRegisterError }) {
  const [formState, handleChange] = useForm(initialForm);
  const [{ code }, handleChangeCode] = useForm({
    code: ''
  });
  const formatUser = ({ username, password, email, name }) => ({
    username,
    password,
    attributes: {
      email,
      name
    }
  });
  const { username, password, email, name } = formState;

  const handleSignUp = e => {
    e.preventDefault();
    if (formState.email && formState.name && validateEmail(formState.email)) {
      signUp(formatUser(formState));
    } else {
      sendRegisterError('Please enter name and email address.');
    }
  };

  const handleConfirmSubmit = e => {
    e.preventDefault();
    confirmSignUp({ username, password, code }, history, houseInput).then(_data => {
      localStorage.removeItem('wizardForm');
      localStorage.removeItem('initialData');
    });
  };

  return !(pendingConfirmation || submittedConfirmation) ? (
    <div className="register_inputs_container">
      <form onSubmit={handleSignUp}>
        <h1>Register</h1>
        <div className="login_gradient" />
        {error && invalidPassword(error, 'register_modal_error')}
        {error && emptyCreds(error, 'register_modal_error')}
        {error && existingUser(error, 'register_modal_error')}
        {error && emptyNameEmail(error, 'register_modal_error')}
        <input name="name" value={name} onChange={handleChange} placeholder="  Full Name" className="register_input" type="text" />
        <input name="email" value={email} onChange={handleChange} placeholder="  Email" className="register_input" type="text" />
        <input name="username" value={username} onChange={handleChange} placeholder="  Username" className="register_input" type="text" />
        <input name="password" value={password} onChange={handleChange} placeholder="  Password" className="register_input" type="password" />
        <Button buttonStyle="modal_register_button" buttonText="Register" />
      </form>
    </div>
  ) : (
    <div className="register_inputs_container">
      <form onSubmit={handleConfirmSubmit}>
        <h1>Register</h1>
        <div className="login_gradient" />
        <p className="confirmation_code">Confirmation Code</p>
        <input name="code" value={code} onChange={handleChangeCode} className="register_input" type="text" />
        <Button buttonStyle="modal_register_button" buttonText="Confirm" />
      </form>
    </div>
  );
}

const mapStateToProps = ({ authReducer }) => ({
  pendingConfirmation: authReducer.pendingConfirmation,
  submittedConfirmation: authReducer.submittedConfirmation,
  error: authReducer.error,
  fetching: authReducer.fetching
});

export default withRouter(
  connect(
    mapStateToProps,
    { confirmSignUp, signUp, sendRegisterError }
  )(RegisterInput)
);
