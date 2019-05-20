import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { uploadToGallery } from 'actions/storageActions';

function Gallery({ gallery, uploadToGallery }) {
  const ref = useRef();
  const handleClick = _event => {
    ref.current.click();
  };
  return (
    <div className="gallery-container">
      <div className="gallery">{gallery.length === 0 ? 'Add images to your gallery' : gallery.map(imageURL => <img src={imageUrl} />)}</div>
      <button onClick={handleClick} />
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
