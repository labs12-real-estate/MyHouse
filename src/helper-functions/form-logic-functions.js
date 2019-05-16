import { useState } from 'react';
import isEqual from 'lodash/isEqual';

export function useForm(initialState) {
  const [state, setState] = useState(initialState);
  const handleChange = e => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const hasChanged = !isEqual(state, initialState);
  return [state, handleChange, hasChanged];
}

export function useValidation(validators) {
  const initialState = Object.keys(validators).reduce((obj, key) => ({ ...obj, [key]: '' }), {});
  const [errorState, setErrorState] = useState(initialState);
  const validate = state => _event => {
    setErrorState(
      Object.entries(validators).reduce(
        // `validators` is a pair of a validation function and an error message
        (acc, [key, [validatorFn, errorMessage]]) => ({
          ...acc,
          // For each validation, we are running the function on state value
          // if it returns false (failure) we set the error message at that key
          [key]: validatorFn(state[key]) ? '' : errorMessage
        }),
        {}
      )
    );
  };
  const hasErrors = !isEqual(errorState, initialState);
  return [errorState, validate, hasErrors];
}

export function useInput(initialString = '') {
  const [state, setState] = useState(initialString);
  const handleChange = e => {
    setState(e.target.value);
  };
  return [state, handleChange, setState];
}

export function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function validatePassword(password) {
  const isLongEnough = password.length >= 8;
  const containsMixedCase = /[a-z]/.test(password) && /[A-Z]/.test(password);
  const containsNumber = /[0-9]/.test(password);
  const containsSpecialCharacter = /[^a-z|0-9]/i.test(password);
  return [isLongEnough, containsMixedCase, containsNumber, containsSpecialCharacter].every(Boolean);
}
