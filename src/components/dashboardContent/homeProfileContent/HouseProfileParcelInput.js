import React from 'react';
import { sqFtToAcreConversion } from '../../../helper-functions/display-functions';
import { useInput } from '../../../helper-functions/form-logic-functions';

export default function HouseProfileParcelInput({
	initialValue: _initialValue,
	inputBlur,
	inputSubmit,
	name,
	selected
}) {
	const initialValue = name === 'lotSquareFootage' ? sqFtToAcreConversion(_initialValue) : _initialValue;
	const [ value, updateValue ] = useInput(initialValue);
	return selected ? (
		<form onSubmit={inputSubmit(name, value)}>
			<input value={value} onChange={updateValue} type="text" onBlur={inputBlur} name={name} />
		</form>
	) : (
		<span>{value}</span>
	);
}
