import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../buttons/Button';

function DashboardTopBar() {
  return (
    <div className="dashboard_nav_container">
      <div className="dashboard_nav_home_icon">
        <Link to="/">
          <i className="fas fa-home fa-2x" />
        </Link>
      </div>
      <div className="dashboard_nav_item_container">
        <Button buttonText="Login" buttonStyle="dashboard_nav_button" />
      </div>
    </div>
  );
}

export default DashboardTopBar;
