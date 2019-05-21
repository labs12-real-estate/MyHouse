import React, { useState } from 'react';
import { acreToSqFtConversion } from '../../../helper-functions/display-functions';
import { connect } from 'react-redux';
import { saveHouseInfo } from '../../../actions/houseActions';
import { toast } from 'react-toastify';
import HouseProfileParcelInput from './HouseProfileParcelInput';
import { parcelDataTitles } from '../../../dummy-data-structures/house-profile-parcel-dummy-data';

function HouseProfileParcel({ saveHouseInfo, id, parcelData }) {
  const [selectedInput, setSelectedInput] = useState(null);
  const inputSubmit = (key, _value) => e => {
    e.preventDefault();
    // If the key is `lotSquareFootage`, we have to convert user input (acres) to
    // match what we have in the backend (square feet)
    if (_value > -1) {
      const value = key === 'lotSquareFootage' ? acreToSqFtConversion(_value) : _value;
      const newParcelData = {
        ...parcelData,
        [key]: value
      };
      saveHouseInfo({ changes: { parcelData: newParcelData }, id });
      setSelectedInput(null);
    } else {
      toast.error(`Parcel data cannot be a negative number.`, { className: 'toastify_error' });
    }
  };

  const inputBlur = e => {
    if (e.target.value > -1) {
      const value = e.target.name === 'lotSquareFootage' ? acreToSqFtConversion(e.target.value) : e.target.value;
      const newParcelData = {
        ...parcelData,
        [e.target.name]: value
      };
      saveHouseInfo({ changes: { parcelData: newParcelData }, id });
      setSelectedInput(null);
    } else {
      toast.error(`Parcel data cannot be a negative number.`, { className: 'toastify_error' });
    }
  };

  const handleSelect = key => _e => {
    setSelectedInput(key);
  };
  return (
    <div className="house_profile_form width">
      <div className="house_profile_form_title">
        <h2>Parcel Data</h2>
      </div>
      {Object.entries(parcelDataTitles).map(([key, value]) => {
        return (
          parcelData[key] > -1 && (
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
        );
      })}
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
