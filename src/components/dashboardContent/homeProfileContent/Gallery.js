import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { uploadToGallery, deleteFromGallery } from 'actions/storageActions';
import { openGalleryModal } from 'actions/displayActions';

function Gallery({ gallery, uploadToGallery, openGalleryModal, deleteFromGallery }) {
  const ref = useRef();
  const handleClick = _event => {
    ref.current.click();
  };
  const handleDeleteFromGallery = key => e => {
    e.stopPropagation();
    deleteFromGallery(key);
  };
  return (
    <div className="house_profile_gallery_container">
      <h2>Gallery</h2>
      <div className="gallery">
        {gallery.length === 0 ? (
          <h3>Add images to your gallery</h3>
        ) : (
          gallery.map(({ photoURL, key }) => (
            <figure className="gallery-figure" key={key} onClick={() => openGalleryModal(photoURL)}>
              <button className="trash" onClick={handleDeleteFromGallery(key)}>
                <i className="fas fa-trash" />
              </button>
              <img alt="" src={photoURL} />
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
  { openGalleryModal, uploadToGallery, deleteFromGallery }
)(Gallery);
