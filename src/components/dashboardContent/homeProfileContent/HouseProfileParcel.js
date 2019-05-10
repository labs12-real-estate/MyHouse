import React, { useState } from 'react';
import { acreToSqFtConversion } from '../../../helper-functions/display-functions';
import { connect } from 'react-redux';
import { saveHouseInfo } from '../../../actions/houseActions';
import { useForm } from '../../../helper-functions/form-logic-functions';
import HouseProfileParcelInput from './HouseProfileParcelInput';
import { ConsoleLogger } from '@aws-amplify/core';

const parcelDataTitles = {
	homeSquareFootage: 'Square Feet',
	numBathrooms: 'Bathrooms',
	numBedrooms: 'Bedrooms',
	lotSquareFootage: 'Acres'
};

function HouseProfileParcel({ saveHouseInfo, id, parcelData }) {
	const [ selectedInput, setSelectedInput ] = useState(null);
	const inputSubmit = (k, v) => (e) => {
		e.preventDefault();
		const value = k === 'lotSquareFootage' ? acreToSqFtConversion(v) : v;
		const newParcelData = {
			...parcelData,
			[k]: value
		};
		saveHouseInfo({ changes: { parcelData: newParcelData }, id });
		setSelectedInput(null);
	};

	const inputBlur = (e) => {
		const value = e.target.name === 'lotSquareFootage' ? acreToSqFtConversion(e.target.value) : e.target.value;
		const newParcelData = {
			...parcelData,
			[e.target.name]: value
		};
		saveHouseInfo({ changes: { parcelData: newParcelData }, id });
		setSelectedInput(null);
	};

	const handleSelect = (key) => (_e) => {
		console.log(key);
		setSelectedInput(key);
	};

	return (
		<div className="house_profile_form width">
			<div className="house_profile_form_title">
				<h2>Parcel Data</h2>
			</div>
			{Object.entries(parcelDataTitles).map(
				([ key, value ]) =>
					parcelData[key] && (
						<label className="house_parcel_container" key={key} onClick={handleSelect(key)}>
							{value}:{' '}
							<HouseProfileParcelInput
								initialValue={parcelData[key]}
								inputSubmit={inputSubmit}
								inputBlur={inputBlur}
								name={key}
								selected={selectedInput === key}
							/>
						</label>
					)
			)}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		id: state.houseReducer.house.id,
		parcelData: state.houseReducer.house.parcelData
	};
};

export default connect(mapStateToProps, { saveHouseInfo })(HouseProfileParcel);
