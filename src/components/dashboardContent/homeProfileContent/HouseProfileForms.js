import React from 'react';
import { houseProfileData } from '../../../dummy-data-structures/house-profile-dummy-data';
import { houseProfileDataFinishes } from '../../../dummy-data-structures/house-profile-finishes-dummy-data';
import { houseProfileDataParcel } from '../../../dummy-data-structures/house-profile-parcel-dummy-data';
import HouseProfileForm from './HouseProfileForm';
import HouseProfileFinishes from './HouseProfileFinishes';
import HouseProfileParcel from './HouseProfileParcel';
import { connect } from 'react-redux';

function HouseProfileForms({ house }) {
  return (
    <div className="house_profile_forms_container">
      <div className="house_profile_forms_left">
        <HouseProfileForm title="House Bio" content={house.description} id={1} defaultValue="Enter your house bio" field="description" />
        <HouseProfileForm title="Recent Remodeling" content={house.recentRemodel} id={2} defaultValue="Enter any recent upgrades" field="recentRemodel" />
      </div>
      <div className="house_profile_forms_right">
        {houseProfileDataFinishes.map((i, index) => (
          <HouseProfileFinishes key={index} title={i.title} countertops={i.countertops} furnaceAge={i.furnaceAge} roofAge={i.roofAge} acAge={i.acAge} />
        ))}
        {houseProfileDataParcel.map((i, index) => (
          <HouseProfileParcel key={index} title={i.title} squareFt={i.squareFt} numBedrooms={i.numBedrooms} numBathrooms={i.numBathrooms} lotSize={i.lotSize} />
        ))}
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
