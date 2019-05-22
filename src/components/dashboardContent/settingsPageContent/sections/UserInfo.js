import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { uploadPhoto } from 'actions/storageActions';
import Skeleton from 'react-loading-skeleton';
import UserPlaceholder from 'assets/icons/UserPlaceholder';

function UserInfo({ user, profilePhotoURL, uploadPhoto }) {
  const ref = useRef();
  const handleClick = _event => {
    ref.current.click();
  };
  return (
    <div className="user-info">
      <figure>
        {profilePhotoURL === null ? (
          <Skeleton height={100} width={100} />
        ) : profilePhotoURL.length ? (
          <img src={profilePhotoURL} alt="user" />
        ) : (
          <UserPlaceholder />
        )}
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
    profilePhotoURL: storageReducer.photoURLs.profile,
    fetching: storageReducer.fetching
  }),
  { uploadPhoto }
)(UserInfo);
