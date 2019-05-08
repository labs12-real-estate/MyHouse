import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/authActions';
import { loginModalStyle } from '../../styles/inlineStyles/modalStyles';
import LoginInput from '../inputs/LoginInput';
import Modal from 'react-responsive-modal';

function LoginModal({ isOpen, closeModal }) {
  return (
    <div>
      <Modal open={isOpen} onClose={closeModal} closeIconSize={25} styles={loginModalStyle()}>
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
