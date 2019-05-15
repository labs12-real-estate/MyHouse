import { useState } from 'react';

export function useForm(initialState) {
  const [state, setState] = useState(initialState);
  const handleChange = e => {
    const {
      target: { name, value }
    } = e;
    setState({ ...state, [name]: value });
  };
  return [state, handleChange];
}

export function useInput(initialString = '') {
  const [state, setState] = useState(initialString);
  const handleChange = e => {
    setState(e.target.value);
  };
  return [state, handleChange, setState];
}

export function validateEmail(email) {
  let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
export function validatePassword(password) {
  let re = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})');
  return re.test(String(password));
}
