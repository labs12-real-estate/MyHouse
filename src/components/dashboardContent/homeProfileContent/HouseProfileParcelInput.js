import React from 'react';
import { sqFtToAcreConversion, numberWithCommas } from '../../../helper-functions/display-functions';
import { useInput } from '../../../helper-functions/form-logic-functions';

export default function HouseProfileParcelInput({ initialValue: _initialValue, inputBlur, inputSubmit, name, selected }) {
  const initialValue = name === 'lotSquareFootage' ? sqFtToAcreConversion(_initialValue) : 'squareFootage' ? numberWithCommas(_initialValue) :  _initialValue;
  const [value, updateValue] = useInput(initialValue);
  return selected ? (
    <form onSubmit={inputSubmit(name, value)}>
      <input  value={value} onChange={updateValue} type="number" min={ name === 'lotSquareFootage' ? 0 : 1 } maxLength='6' onBlur={inputBlur} name={name} step= { name === 'lotSquareFootage' ? .01 : name === 'numBathrooms' ? .1 : 1 }/>
    </form>
  ) : (
    <span className= 'house_parcel_input'>{value}</span>
  );
}
