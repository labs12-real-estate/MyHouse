import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut, openModal } from '../../actions/authActions';
import Button from '../buttons/Button';
import LoginModal from '../modals/LoginModal';

function LandingTopBar({ isLoggedIn, signOut, openModal }) {
  return (
    <div className="landing_nav_container">
      <div className="landing_nav_home_icon">
        <Link to="/">
          <i className="fas fa-home fa-2x" />
        </Link>
      </div>
      <div className="landing_nav_item_container">
        <Link to="#">Team</Link>
        {isLoggedIn && <Link to="/overview">Dashboard</Link>}
        {isLoggedIn ? (
          <Button buttonText="Logout" buttonStyle="landing_nav_button" clickEvent={signOut} />
        ) : (
          <>
            <Button buttonText="Login" buttonStyle="landing_nav_button" clickEvent={openModal} />
            <LoginModal />
          </>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = ({ authReducer: { isLoggedIn } }) => {
  return {
    isLoggedIn
  };
};

export default connect(
  mapStateToProps,
  { signOut, openModal }
)(LandingTopBar);
