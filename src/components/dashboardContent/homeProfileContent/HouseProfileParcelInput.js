import React from 'react';
import {useInput} from '../../../helper-functions/form-logic-functions';

export default function HouseProfileParcelInput({initialValue, inputSubmit, name}) {
  const [value, updateValue] = useInput(initialValue)
  return (
    <input value={value} onChange={updateValue} type='text' onBlur={inputSubmit} name={name}></input>
  )
}
