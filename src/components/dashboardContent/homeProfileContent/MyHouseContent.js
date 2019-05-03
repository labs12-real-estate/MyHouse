import React from 'react';
import Backdrop from './Backdrop';
import UserProfileSection from './UserProfileSection';

function MyHouseContent() {
  return (
    <div className="dashboard_content_container">
      <Backdrop />
      <UserProfileSection />
    </div>
  );
}

export default MyHouseContent;
