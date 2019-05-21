import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { uploadToGallery } from 'actions/storageActions';

function Gallery({ gallery, uploadToGallery }) {
  const ref = useRef();
  const handleClick = _event => {
    ref.current.click();
  };
  return (
    <div className="house_profile_gallery_container">
      <h2>Gallery</h2>
      <div className="gallery">
        {gallery.length === 0 ? (
          <h3>Add images to your gallery</h3>
        ) : (
          gallery.map(imageURL => (
            <figure>
              <img alt="" src={imageURL} />
            </figure>
          ))
        )}
      </div>
      <div className="button-container">
        <button onClick={handleClick}>
          <i className="fas fa-plus" /> Add an Image
        </button>
      </div>
      <input hidden name="" type="file" accept="image/jpeg" ref={ref} onChange={uploadToGallery} />
    </div>
  );
}

export default connect(
  ({ storageReducer }) => ({
    gallery: storageReducer.photoURLs.gallery
  }),
  { uploadToGallery }
)(Gallery);
