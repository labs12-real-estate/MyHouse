import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { uploadToGallery, deleteFromGallery } from 'actions/storageActions';
import { openGalleryModal } from 'actions/displayActions';
import ImageCard from './ImageCard';

function Gallery({ gallery, uploadToGallery, openGalleryModal, deleteFromGallery }) {
  const ref = useRef();
  const handleClick = _event => {
    ref.current.click();
  };
  const handleDeleteFromGallery = key => e => {
    console.log('click');
    e.stopPropagation();
    deleteFromGallery(key);
  };
  return (
    <div className="house_profile_gallery_wrapper">
      <div className="house_profile_gallery_container">
        <h2>Gallery</h2>
        <div className="gallery">
          {gallery.length === 0 ? (
            <h3>Add images to your gallery</h3>
          ) : (
            gallery.map(({ photoURL, key }) => (
              <ImageCard
                photoURL={photoURL}
                key={key}
                handleModalOpen={() => openGalleryModal(photoURL)}
                handleDeleteFromGallery={handleDeleteFromGallery(key)}
              />
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
    </div>
  );
}

export default connect(
  ({ storageReducer }) => ({
    gallery: storageReducer.photoURLs.gallery
  }),
  { openGalleryModal, uploadToGallery, deleteFromGallery }
)(Gallery);
