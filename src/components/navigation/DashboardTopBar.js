import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '../buttons/Button';
import { signOut, closeModal } from '../../actions/authActions';

function DashboardTopBar({ signOut, history, closeModal }) {
  const handleSignOut = e => {
    e.preventDefault();
    closeModal(e);
    signOut(history);
  };
  return (
    <div className="dashboard_nav_container">
      <div className="dashboard_nav_home_icon">
        <Link to="/">
          <i className="fas fa-home fa-3x" />
        </Link>
      </div>
      <div className="dashboard_nav_item_container">
        <Button buttonText="Logout" buttonStyle="dashboard_nav_button" clickEvent={handleSignOut} />
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
