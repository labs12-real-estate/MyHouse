import React, { useRef } from 'react';
import { connect } from 'react-redux';
import profilePhoto from '../../../../assets/images/house-profile/tonystark.jpg';
import { uploadPhoto } from '../../../../actions/storageActions';

function UserInfo({ user, profilePhotoURL, uploadPhoto }) {
  const ref = useRef();
  const handleClick = _event => {
    ref.current.click();
  };
  return (
    <div className="inline-grid user-info">
      <figure>
        <img src={profilePhotoURL || profilePhoto} alt="" />
      </figure>
      <div>
        <h4>{user.username}</h4>
        <button onClick={handleClick}>Change user profile photo</button>
        <input hidden name="profile" type="file" accept="image/jpeg" ref={ref} onChange={uploadPhoto} />
      </div>
    </div>
  );
}

export default connect(
  ({ authReducer, storageReducer }) => ({
    user: authReducer.user,
    profilePhotoURL: storageReducer.photoURLs.profile
  }),
  { uploadPhoto }
)(UserInfo);
