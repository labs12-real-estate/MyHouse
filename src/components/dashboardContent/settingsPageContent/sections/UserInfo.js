import React, { useRef } from 'react';
import { connect } from 'react-redux';
import profilePhoto from 'assets/images/house-profile/tonystark.jpg';
import { uploadPhoto } from 'actions/storageActions';
import Skeleton from 'react-loading-skeleton';

function UserInfo({ user, profilePhotoURL, uploadPhoto, fetching }) {
  const ref = useRef();
  const handleClick = _event => {
    ref.current.click();
  };
  return (
    <div className="user-info">
      <figure>{profilePhotoURL === null ? <Skeleton height={100} width={100} /> : <img src={profilePhotoURL || profilePhoto} alt="user" />}</figure>
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
    profilePhotoURL: storageReducer.photoURLs.profile,
    fetching: storageReducer.fetching
  }),
  { uploadPhoto }
)(UserInfo);
