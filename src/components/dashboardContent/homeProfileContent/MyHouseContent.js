import React from 'react';
import Backdrop from './Backdrop';
import UserProfileSection from './UserProfileSection';
import HouseProfileForms from './HouseProfileForms';

function MyHouseContent() {
  return (
    <div className="dashboard_content_container">
      <Backdrop />
      <UserProfileSection />
      <HouseProfileForms />
    </div>
  );
}

export default MyHouseContent;
