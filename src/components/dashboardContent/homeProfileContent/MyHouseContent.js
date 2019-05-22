import React from 'react';
import Backdrop from './Backdrop';
import UserProfileSection from './UserProfileSection';
import HouseProfileForms from './HouseProfileForms';
import Gallery from './Gallery';
import GalleryModal from './GalleryModal';

function MyHouseContent() {
  return (
    <div className="dashboard_content_container">
      <Backdrop />
      <UserProfileSection />
      <Gallery />
      <GalleryModal />
      <HouseProfileForms />
    </div>
  );
}

export default MyHouseContent;
