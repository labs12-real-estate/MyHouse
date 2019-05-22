import React, { useRef } from 'react';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { uploadPhoto } from 'actions/storageActions';
import placeholderBackdrop from 'assets/illustrations/default-cover-photo.png';

function Backdrop({ uploadPhoto, housePhotoURL }) {
  const ref = useRef();
  const handleClick = _event => {
    ref.current.click();
  };
  return (
    <div className="house_profile_backdrop_image">
      {housePhotoURL === null ? (
        <Loader height={100} width={100} type="TailSpin" color="#22ab00" />
      ) : (
    <div className="house_profile_backdrop_image" onClick={handleClick}>
      {housePhotoURL && (
        <figure className="backdrop_figure">
          <img alt="" src={housePhotoURL || placeholderBackdrop} className="backdrop_img" />
        </figure>
      )}
      <div className="camera-overlay">
        <button>
          <i className="fas fa-camera" />
        </button>
      </div>
      <input hidden name="house" type="file" accept="image/jpeg" ref={ref} onChange={uploadPhoto} />
    </div>
  );
}

const mapStateToProps = ({ storageReducer }) => ({
  housePhotoURL: storageReducer.photoURLs.house
});

export default connect(
  mapStateToProps,
  { uploadPhoto }
)(Backdrop);
