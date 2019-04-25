import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../buttons/Button';

function LandingTopBar() {
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
        <Button />
      </div>
    </div>
  );
}

export default LandingTopBar;
