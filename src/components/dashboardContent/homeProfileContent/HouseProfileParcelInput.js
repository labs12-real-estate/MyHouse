import React from 'react';
import { sqFtToAcreConversion } from '../../../helper-functions/display-functions';
import { useInput } from '../../../helper-functions/form-logic-functions';

export default function HouseProfileParcelInput({ initialValue: _initialValue, inputBlur, inputSubmit, name, selected }) {
  const initialValue = name === 'lotSquareFootage' ? sqFtToAcreConversion(_initialValue) : _initialValue;
  const [value, updateValue, setValue] = useInput(initialValue);
  return selected ? (
    <form onSubmit={inputSubmit(name, value)}>
      <input
        value={value}
        onChange={updateValue}
        type="number"
        max={'999999'}
        onBlur={
          value >= 0
            ? inputBlur
            : e => {
                setValue(Math.abs(value));
                inputBlur(e);
              }
        }
        name={name}
        step={name === 'lotSquareFootage' ? 0.01 : name === 'numBathrooms' ? 0.1 : 1}
      />
    </form>
  ) : (
    <span className="house_parcel_input">{value < 0 ? 'No negatives.' : name === 'lotSquareFootage' && value > 49000 ? 'Error: 49k+' : value}</span>
  );
}
