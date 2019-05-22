import React from 'react';
import Modal from 'react-responsive-modal';
import { connect } from 'react-redux';
import { closeGalleryModal } from 'actions/displayActions';

function GalleryModal({ closeGalleryModal, galleryModalImageURL, isGalleryModalOpen }) {
  return (
    <Modal open={isGalleryModalOpen} onClose={closeGalleryModal} center>
      <figure className="modal-figure">
        <img alt="" src={galleryModalImageURL} />
      </figure>
    </Modal>
  );
}

export default connect(
  ({ displayReducer }) => ({
    isGalleryModalOpen: displayReducer.isGalleryModalOpen,
    galleryModalImageURL: displayReducer.galleryModalImageURL
  }),
  { closeGalleryModal }
)(GalleryModal);
