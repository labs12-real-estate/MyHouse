import React, { useRef } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { uploadToGallery, deleteFromGallery } from 'actions/storageActions';
import { openGalleryModal } from 'actions/displayActions';

function Gallery({ gallery, uploadToGallery, openGalleryModal, deleteFromGallery }) {
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
          gallery.map(({ photoURL, key, isSpinner }) => (
            <figure className="gallery-figure" key={key} onClick={() => openGalleryModal(photoURL)}>
              {isSpinner ? (
                <Loader height={25} width={25} type="TailSpin" color="black" />
              ) : (
                <>
                  <button className="red-x" onClick={() => deleteFromGallery(key)}>
                    <i className="fas fa-times-circle" />
                  </button>
                  <img alt="" src={photoURL} />
                </>
              )}
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
