import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { uploadPhoto } from '../../../actions/storageActions';

function Backdrop({ uploadPhoto, housePhotoURL }) {
  const ref = useRef();
  const handleClick = _event => {
    ref.current.click();
  };
  return (
    <div className="house_profile_backdrop_image">
      {housePhotoURL && (
        <figure className="backdrop_figure">
          <img alt="" src={housePhotoURL} className="backdrop_img" />
        </figure>
      )}
      {/* <button onClick={handleClick}>Upload Image</button> */}
      <div className="camera-overlay">
        <button onClick={handleClick}>
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
