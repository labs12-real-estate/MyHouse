import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut, openModal } from '../../actions/authActions';
import { useWindowScrollY } from '../../helper-functions/display-functions';
import Button from '../buttons/Button';
import LoginModal from '../modals/LoginModal';

const stickyStyle = {
  position: 'sticky',
  top: '0px',
  backgroundImage: 'radial-gradient(931.35px at 85.76% 50%, #0045CB 0%, #0049D7 100%)',
  zIndex: '900',
  boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.25)'
};

function LandingTopBar({ isLoggedIn, signOut, openModal }) {
  return (
    <div style={useWindowScrollY() > 0 ? stickyStyle : {}} className="landing_nav_container">
      <div className="landing_nav_home_icon">
        <Link to="/">
          <i className="fas fa-home fa-2x" />
          <h1>MyHouse</h1>
        </Link>
      </div>
      <div className="landing_nav_item_container">
        <Link to="/ourteam">Team</Link>
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
