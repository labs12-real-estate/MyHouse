import React, { useState } from 'react';
import { acreToSqFtConversion } from '../../../helper-functions/display-functions';
import { connect } from 'react-redux';
import { saveHouseInfo } from '../../../actions/houseActions';
import HouseProfileParcelInput from './HouseProfileParcelInput';
import { parcelDataTitles } from '../../../dummy-data-structures/house-profile-parcel-dummy-data';

function HouseProfileParcel({ saveHouseInfo, id, parcelData }) {
  const [selectedInput, setSelectedInput] = useState(null);
  const inputSubmit = (k, v) => e => {
    e.preventDefault();
    const value = k === 'lotSquareFootage' ? acreToSqFtConversion(v) : v;
    const newParcelData = {
      ...parcelData,
      [k]: value
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
