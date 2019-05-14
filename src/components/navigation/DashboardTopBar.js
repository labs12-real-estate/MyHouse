import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '../buttons/Button';
import { signOut, closeModal } from '../../actions/authActions';
import { handleSignOut } from '../../helper-functions/onClick-logic';

function DashboardTopBar({ toggleSideBar, signOut, history, closeModal }) {
  const path = history.location.pathname;
  return (
    <div className="dashboard_nav_container" style={path === '/wizard-form' ? { justifyContent: 'center' } : {}}>
      {path !== '/wizard-form' && <i onClick={toggleSideBar} className="sidebar_toggle fas fa-bars fa-3x phone_only" />}
      <div className="dashboard_nav_home_icon">
        <Link to="/">
          <i className="fas fa-home fa-2x" />
          <h1>MyHouse</h1>
        </Link>
      </div>
      <div className="dashboard_nav_item_container">
        {path !== '/wizard-form' && (
          <Button buttonText="Logout" buttonStyle="dashboard_nav_button" clickEvent={e => handleSignOut(e, closeModal, signOut, history)} />
        )}
      </div>
    </div>
  );
}

export default withRouter(
  connect(
    null,
    { signOut, closeModal }
  )(DashboardTopBar)
);
