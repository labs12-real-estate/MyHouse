import React from 'react';

// For LoginInput
export const incorrectCreds = (error, className) => {
  return (error.message && error.message.includes('Incorrect username or password.')) ||
    (error.message && error.message.includes('User does not exist.')) ||
    (error.message && error.message.includes('The username should either be a string')) ||
    (error.message && error.message.includes('null failed with error Generate callenges lambda cannot be called')) ? (
    <span className={className}>Username or password is incorrect.</span>
  ) : null;
};

export const loginAttemptsExceeded = (error, className) => {
  return error.message && error.message.includes('Password attempts exceeded') ? (
    <span className={className}>Attempt limit exceeded. Try again later.</span>
  ) : null;
};

// For ForgotPasswordInput
export const forgotPasswordAttemptsExceeded = (error, className) => {
  return error.message && error.message.includes('Attempt limit exceeded, please try after some time.') ? (
    <span className={className}>Attempt limit exceeded. Try again later.</span>
  ) : null;
};

export const incorrectForgotPasswordCreds = function(error, className) {
  if (error.message) {
    return error.message.includes('Username/client id combination not found.') ? (
      <span className={className}>Please enter a valid MyHouse username.</span>
    ) : null;
  }
  return error && error === 'Username cannot be empty' ? <span className={className}>Please enter a valid MyHouse username.</span> : null;
};

// For SetNewPasswordInput

export const incorrectSetPasswordCreds = function(error, className) {
  if (error.message) {
    return error.message.includes('Username/client id combination not found.') ? (
      <span className={className}>Please enter a valid MyHouse username.</span>
    ) : null;
  }
  return error && error === 'Username cannot be empty' ? <span className={className}>Please enter a valid MyHouse username.</span> : null;
};

export const incorrectSetPasswordCode = function(error, className) {
  if (error.message) {
    return error.message.includes('Invalid verification code provided') ? (
      <span className={className}>
        Either code expired, invalid code or incorrect username. <br />
        Please try again.
      </span>
    ) : null;
  }
  return error && error === 'Code cannot be empty' ? <span className={className}>Please enter a confirmation code.</span> : null;
};

export const incorrectSetPasswordPassword = function(error, className) {
  if (error.code) {
    return error.code.includes('InvalidParameterException') ? (
      <span className={className}>New password must include uppercase & lowercase letter, number, symbol and be longer than 8 characters.</span>
    ) : null;
  }
  return error && error === 'Password cannot be empty' ? <span className={className}>Password field cannot be empty.</span> : null;
};

// For RegisterInput

export const emptyCreds = function(error, className) {
  return (error && error === 'Username cannot be empty') || (error && error === 'Password cannot be empty') ? (
    <span className={className}>Please enter username and password.</span>
  ) : null;
};

export const invalidPassword = function(error, className) {
  return (error.message && error.name.includes('InvalidParameterException')) || (error.message && error.name.includes('InvalidPasswordException')) ? (
    <span className={className}>Password must have at least 8 characters, 1 lower case, 1 upper case, and 1 symbol.</span>
  ) : null;
};

export const existingUser = function(error, className) {
  return error.message && error.message.includes('User already exists') ? <span className={className}>This username already exists.</span> : null;
};

export const emptyNameEmail = function(error, className) {
  return error && error === 'Please enter name and email address.' ? <span className={className}>Please enter name and valid email address.</span> : null;
};

export const wrongCode = function(error, className) {
  return error ? <span className={className}>{error.message}</span> : null;
};
