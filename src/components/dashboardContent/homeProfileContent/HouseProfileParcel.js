import React, { useState } from 'react';
import { acreToSqFtConversion } from '../../../helper-functions/display-functions';
import { connect } from 'react-redux';
import { saveHouseInfo } from '../../../actions/houseActions';
import HouseProfileParcelInput from './HouseProfileParcelInput';
import { parcelDataTitles } from '../../../dummy-data-structures/house-profile-parcel-dummy-data';

function HouseProfileParcel({ saveHouseInfo, id, parcelData }) {
  const [selectedInput, setSelectedInput] = useState(null);
  const inputSubmit = (key, _value) => e => {
    e.preventDefault();
    // If the key is `lotSquareFootage`, we have to convert user input (acres) to
    // match what we have in the backend (square feet)
    const value = key === 'lotSquareFootage' ? acreToSqFtConversion(_value) : _value;
    const newParcelData = {
      ...parcelData,
      [key]: value
    };
    saveHouseInfo({ changes: { parcelData: newParcelData }, id });
    setSelectedInput(null);
  };

  const inputBlur = e => {
    const value = e.target.name === 'lotSquareFootage' ? acreToSqFtConversion(e.target.value) : e.target.value;
    const newParcelData = {
      ...parcelData,
      [e.target.name]: value
    };
    saveHouseInfo({ changes: { parcelData: newParcelData }, id });
    setSelectedInput(null);
  };

  const handleSelect = key => _e => {
    console.log(key);
    setSelectedInput(key);
  };

  return (
    <div className="house_profile_form">
      {Object.entries(parcelDataTitles).map(
        ([key, value]) =>
          parcelData[key] && (
            <label style={{ display: 'block' }} key={key} onClick={handleSelect(key)}>
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

const mapStateToProps = state => {
  return {
    id: state.houseReducer.house.id,
    parcelData: state.houseReducer.house.parcelData
  };
};

export default connect(
  mapStateToProps,
  { saveHouseInfo }
)(HouseProfileParcel);
