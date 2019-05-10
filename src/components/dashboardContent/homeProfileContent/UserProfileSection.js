import React from 'react';
import userProfilePic from '../../../assets/images/house-profile/tonystark.jpg';
import { connect } from 'react-redux';

function UserProfileSection({ house, user }) {
  return (
    <div className="house_profile_user_section_container">
      <div className="house_profile_name_and_address">
        <div className="house_profile_user_section_sub_container">
          <img src={userProfilePic} alt="user" />
          <h1>{user.name}</h1>
          <h3>
            <i className="fas fa-map-marker-alt" /> {house.address}
          </h3>
        </div>
      </div>
      <div className="house_profile_user_section_sub_container">
        <span className="house_profile_links house_profile_left_padding">
          <span>
            <i className="far fa-envelope" />
            {user.email}
          </span>
        </span>
        <div className="house_profile_links house_profile_features">
          <span>
            <i className="fas fa-print" /> Print house profile
          </span>
          <span>
            <i className="fas fa-file-pdf" /> Export as PDF
          </span>
          <span>
            <i className="fas fa-share" /> Share public link
          </span>
          <span>
            <i className="fas fa-file-csv" /> Export as CSV
          </span>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ houseReducer, authReducer }) => {
  return {
    user: authReducer.user,
    house: houseReducer.house
  };
};

export default connect(
  mapStateToProps,
  {}
)(UserProfileSection);
