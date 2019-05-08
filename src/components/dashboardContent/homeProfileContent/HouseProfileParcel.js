import React from 'react';
import { sqFtToAcreConversion } from '../../../helper-functions/display-functions';
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
	const handleCommitChanges = (qIx) => (e) => {
		// props.saveHouseInfo({changes, id:props.id})
	};

	const inputSubmit = (e) => {
		const changes = {
      ...parcelData, [e.target.name]:e.target.value
    }
    console.log(changes)
	};

	return (
		<div className="house_profile_form">
			{Object.entries(parcelDataTitles).map(([ key, value ]) => (
        parcelData[key] &&
				<label style={{ display: 'block' }} key={key}>
					{value}:{' '}
					<HouseProfileParcelInput initialValue={parcelData[key]} inputSubmit={inputSubmit} name={key} />
				</label>
			))}
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
