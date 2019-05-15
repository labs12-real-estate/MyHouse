import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/authActions';
import { registerModalStyle } from '../../styles/inlineStyles/modalStyles';
import RegisterInput from '../inputs/RegisterInput';
import Modal from 'react-responsive-modal';

function RegisterModal({ getHouseInput, isOpen, closeModal }) {
  return (
    <div>
      <Modal open={isOpen} onClose={closeModal} closeIconSize={25} styles={registerModalStyle()}>
        <RegisterInput houseInput={getHouseInput()} />
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
)(RegisterModal);
