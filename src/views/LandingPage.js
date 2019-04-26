import React from 'react';
import LandingTopBar from '../components/navigation/LandingTopBar';
import AddressInput from '../components/inputs/AddressInput';
import housePng from '../assets/images/isometric-house.png';

function LandingPage() {
  return (
    <div className="landing_body">
      <LandingTopBar />
      <div className="address_input_container">
        <AddressInput />
      </div>
      <div className="cloud_top">
        <img src={housePng} alt="isometric-house" />
      </div>
    </div>
  );
}

export default LandingPage;
