import React from 'react';
import { connect } from 'react-redux';
import Backdrop from './Backdrop';
import Loader from 'react-loader-spinner';
import UserProfileSection from './UserProfileSection';
import HouseProfileForms from './HouseProfileForms';
import Gallery from './Gallery';
import GalleryModal from './GalleryModal';

function MyHouseContent({ housePhotoURL }) {
  return housePhotoURL === null ? (
    <div className="container-spinner">
      <Loader height={100} width={100} type="TailSpin" color="#2868d9" />
    </div>
  ) : (
    <div className="dashboard_content_container">
      <Backdrop />
      <UserProfileSection />
      <Gallery />
      <GalleryModal />
      <HouseProfileForms />
    </div>
  );
}

const mapStateToProps = ({ storageReducer }) => ({
  housePhotoURL: storageReducer.photoURLs.house
});

export default connect(mapStateToProps)(MyHouseContent);
