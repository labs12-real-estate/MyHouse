import React from 'react';
import profilePhoto from '../../../../assets/images/house-profile/tonystark.jpg';
import { connect } from 'react-redux';

function UserInfo({ user }) {
  return (
    <div className="inline-grid user-info">
      <img src={profilePhoto} alt="" />
      <div>
        <h4>{user.username}</h4>
        <button onClick={() => {}}>Change user profile photo</button>
      </div>
    </div>
  );
}

export default connect(({ authReducer }) => ({
  user: authReducer.user
}))(UserInfo);
