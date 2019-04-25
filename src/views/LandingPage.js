import React from 'react';
import LandingTopBar from '../components/navigation/LandingTopBar';

import housePng from '../assets/images/isometric-house.png';

function LandingPage() {
  return (
    <div className="landing_body">
      <LandingTopBar />
      <h1>LandingPage</h1>
      <div className="cloud_top">
        <img src={housePng} alt="isometric-house" />
      </div>
    </div>
  );
}

export default LandingPage;
