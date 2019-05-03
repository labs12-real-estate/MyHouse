import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '../buttons/Button';
import { signOut } from '../../actions/authActions';

function DashboardTopBar({ signOut }) {
  return (
    <div className="dashboard_nav_container">
      <div className="dashboard_nav_home_icon">
        <Link to="/">
          <i className="fas fa-home fa-3x" />
        </Link>
      </div>
      <div className="dashboard_nav_item_container">
        <Button buttonText="Logout" buttonStyle="dashboard_nav_button" clickEvent={signOut} />
      </div>
    </div>
  );
}

export default connect(
  null,
  { signOut }
)(DashboardTopBar);
