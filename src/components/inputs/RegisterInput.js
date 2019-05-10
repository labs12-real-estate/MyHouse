import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { useForm } from '../../helper-functions/form-logic-functions';
import { confirmSignUp, signUp } from '../../actions/authActions';
import Button from '../buttons/Button';

const initialForm = {
  username: '',
  password: '',
  email: '',
  name: ''
};

// @TODO: This could be refactored into subcomponents
function RegisterInput({ history, houseInput, confirmSignUp, signUp, pendingConfirmation, submittedConfirmation }) {
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
    signUp(formatUser(formState));
  };

  const handleConfirmSubmit = e => {
    e.preventDefault();
    confirmSignUp({ username, password, code }, history, houseInput).then(_data => {
      localStorage.removeItem('wizardForm');
      localStorage.removeItem('initialData');
    });
  };

  return !(pendingConfirmation || submittedConfirmation) ? (
    <form onSubmit={handleSignUp}>
      <div className="register_inputs_container">
        <h1>Register</h1>
        <textarea name="name" value={name} onChange={handleChange} placeholder="  Full Name" className="register_input" type="text" />
        <input name="email" value={email} onChange={handleChange} placeholder="  Email" className="register_input" type="text" />
        <textarea name="username" value={username} onChange={handleChange} placeholder="  Username" className="register_input" type="text" />
        <input name="password" value={password} onChange={handleChange} placeholder="  Password" className="register_input" type="password" />
        <Button buttonStyle="register_button" buttonText="Register" />
      </div>
    </form>
  ) : (
    <form onSubmit={handleConfirmSubmit}>
      <div className="register_inputs_container">
        <p className="register_label">Confirmation Code</p>
        <textarea name="code" value={code} onChange={handleChangeCode} className="register_input" type="text" />
        <Button buttonStyle="register_button" buttonText="Confirm" />
      </div>
    </form>
  );
}

const mapStateToProps = ({ authReducer }) => ({
  pendingConfirmation: authReducer.pendingConfirmation,
  submittedConfirmation: authReducer.submittedConfirmation
});

export default withRouter(
  connect(
    mapStateToProps,
    { confirmSignUp, signUp }
  )(RegisterInput)
);
