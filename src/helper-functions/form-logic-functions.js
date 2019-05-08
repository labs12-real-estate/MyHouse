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
  return [state, handleChange];
}
