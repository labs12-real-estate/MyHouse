import React from 'react';
import { houseProfileData } from '../../../dummy-data-structures/house-profile-dummy-data';
import HouseProfileForm from './HouseProfileForm';

function HouseProfileForms() {
  return (
    <div className="house_profile_forms_container">
      <div className="house_profile_forms_left">
        {houseProfileData.map((i, index) => (
          <HouseProfileForm key={index} title={i.title} content={i.content} />
        ))}
      </div>
      <div className="house_profile_forms_right">HouseProfileForms</div>
    </div>
  );
}

export default HouseProfileForms;
