import React from 'react';
import { houseProfileData } from '../../../dummy-data-structures/house-profile-dummy-data';
import { houseProfileDataFinishes } from '../../../dummy-data-structures/house-profile-finishes-dummy-data';
import { houseProfileDataParcel } from '../../../dummy-data-structures/house-profile-parcel-dummy-data';
import HouseProfileForm from './HouseProfileForm';
import HouseProfileFinishes from './HouseProfileFinishes';
import HouseProfileParcel from './HouseProfileParcel';

function HouseProfileForms() {
  return (
    <div className="house_profile_forms_container">
      <div className="house_profile_forms_left">
        {houseProfileData.map((i, index) => (
          <HouseProfileForm key={index} title={i.title} content={i.content} />
        ))}
      </div>
      <div className="house_profile_forms_right">
      {houseProfileDataFinishes.map((i, index) => (
          <HouseProfileFinishes key={index} title={i.title} countertops={i.countertops} furnaceAge={i.furnaceAge} roofAge={i.roofAge} acAge={i.acAge} />
        ))}
        {houseProfileDataParcel.map((i, index) => (
          <HouseProfileParcel key={index} title={i.title} squareFt={i.squareFt} numBedrooms={i.numBedrooms} numBathrooms={i.numBathrooms} lotSize= {i.lotSize}/>
        ))}
          
      </div>
    </div>
  );
}

export default HouseProfileForms;
