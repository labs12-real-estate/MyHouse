import React from 'react';
import userProfilePic from '../../../assets/images/house-profile/tonystark.jpg';

function UserProfileSection() {
  return (
    <div className="house_profile_user_section_container">
      <img src={userProfilePic} alt="user" />
      <div className="house_profile_name_and_address">
        <h1>Tony Stark</h1>
        <h3>
          <i className="fas fa-map-marker-alt" /> 48592 Jerome, Shelby, Township, MI 48315
        </h3>
      </div>
      <div>
        <span>
          <i className="far fa-envelope" /> <span>tony@starkindustries.com</span>
        </span>
      </div>
    </div>
  );
}

export default UserProfileSection;
