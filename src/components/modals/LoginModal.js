import React from 'react';
import Modal from 'react-modal';
import LoginInput from '../inputs/LoginInput';
import { connect } from 'react-redux';
import { loginModalStyle } from '../../styles/inlineStyles/modalStyles';
import { closeModal } from '../../actions/authActions';

// For accessibility
Modal.setAppElement('#root');

// Modal Compoent props: isOpen T/F value
// onRequestClose is required for closing modal when clicking anywhere besides inside the modal.
function LoginModal({ isOpen, closeModal }) {
  return (
    <div>
      <Modal style={loginModalStyle()} isOpen={isOpen} onRequestClose={closeModal}>
        <LoginInput />
      </Modal>
    </div>
  );
}

const mapStateToProps = ({ authReducer: { isOpen } }) => {
  return {
    isOpen
  };
};

export default connect(
  mapStateToProps,
  { closeModal }
)(LoginModal);
