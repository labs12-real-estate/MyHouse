import React from 'react';
import Modal from 'react-modal';
import Button from '../buttons/Button';
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
        <div className="login_inputs_container">
          <label className="login_label">Username</label>
          <input className="login_input" />
          <label className="login_label">Password</label>
          <input className="login_input" />
          <Button buttonStyle="modal_login_button" buttonText="Login" />
        </div>
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
