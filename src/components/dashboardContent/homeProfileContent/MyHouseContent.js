import React from 'react';
import Backdrop from './Backdrop';
import UserProfileSection from './UserProfileSection';
import HouseProfileForms from './HouseProfileForms';
import Gallery from './Gallery';

function MyHouseContent() {
  return (
    <div className="dashboard_content_container">
      <Backdrop />
      <UserProfileSection />
      <Gallery />
      <HouseProfileForms />
    </div>
  );
}

export default MyHouseContent;
