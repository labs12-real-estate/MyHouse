import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { openModal } from '../../actions/authActions';
import Button from '../buttons/Button';
import LoginModal from '../modals/LoginModal';

function LandingTopBar(props) {
  return (
    <div className="landing_nav_container">
      <div className="landing_nav_home_icon">
        <Link to="/">
          <i className="fas fa-home fa-2x" />
        </Link>
      </div>
      <div className="landing_nav_item_container">
        <Link to="/">Home</Link>
        <Link to="#">Team</Link>
        <Button buttonText="Login" buttonStyle="landing_nav_button" clickEvent={props.openModal} />
        <LoginModal />
      </div>
    </div>
  );
}

export default connect(
  null,
  { openModal }
)(LandingTopBar);
