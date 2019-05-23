import React, { useState } from 'react';
import { connect } from 'react-redux';
import Backdrop from './Backdrop';
import Loader from 'react-loader-spinner';
import UserProfileSection from './UserProfileSection';
import HouseProfileForms from './HouseProfileForms';
import Gallery from './Gallery';
import GalleryModal from './GalleryModal';

function MyHouseContent({ housePhotoURL }) {
  const [loaded, setLoaded] = useState(false);
  const handleLoad = _e => {
    setLoaded(true);
  };
  // If the housePhotoURL (coming from redux store) does have a value and it hasn't loaded yet, show spinner.
  const showSpinner = housePhotoURL !== '' && !loaded;
  return (
    <>
      {showSpinner ? (
        <div className="container-spinner">
          <Loader height={100} width={100} type="TailSpin" color="#2868d9" />
        </div>
      ) : null}
      <div style={showSpinner ? { visibility: 'hidden' } : {}} className="dashboard_content_container">
        <Backdrop handleLoad={handleLoad} />
        <UserProfileSection />
        <Gallery />
        <GalleryModal />
        <HouseProfileForms />
      </div>
    </>
  );
}

const mapStateToProps = ({ storageReducer }) => ({
  housePhotoURL: storageReducer.photoURLs.house
});

export default connect(mapStateToProps)(MyHouseContent);
