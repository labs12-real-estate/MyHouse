import React from 'react';
import HouseProfileForm from './HouseProfileForm';
import HouseProfileFinishes from './HouseProfileFinishes';
import HouseProfileParcel from './HouseProfileParcel';
import { connect } from 'react-redux';

function HouseProfileForms({ house }) {
  return (
    <div className="house_profile_forms_container">
      <div className="house_profile_forms_left">
        <HouseProfileForm title="House Bio" content={house.description} defaultValue="Enter your house bio" field="description" />
        <HouseProfileForm title="Recent Remodeling" content={house.recentRemodel} defaultValue="Enter any recent upgrades" field="recentRemodel" />
      </div>
      <div className="house_profile_forms_right">
        <HouseProfileFinishes countertops={house.countertops} furnaceAge={house.furnaceAge} roofAge={house.roofAge} flooring={house.flooring} />
        <HouseProfileParcel
          squareFt={house.parcelData.homeSquareFootage}
          numBedrooms={house.parcelData.numBedrooms}
          numBathrooms={house.parcelData.numBathrooms}
          lotSize={house.parcelData.lotSquareFootage}
        />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    house: state.houseReducer.house
  };
};

export default connect(
  mapStateToProps,
  null
)(HouseProfileForms);
