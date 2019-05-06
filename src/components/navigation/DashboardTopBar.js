import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '../buttons/Button';
import { signOut, closeModal } from '../../actions/authActions';
import { handleSignOut } from '../../helper-functions/onClick-logic';

function DashboardTopBar({ signOut, history, closeModal }) {
  console.log(history);
  return (
    <div className="dashboard_nav_container">
      <div className="dashboard_nav_home_icon">
        <Link to="/">
          <i className="fas fa-home fa-3x" />
        </Link>
      </div>
      <div className="dashboard_nav_item_container">
        {history.location.pathname !== '/wizard-form' && (
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
