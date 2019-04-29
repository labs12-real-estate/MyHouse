import React from 'react';
import LandingTopBar from '../components/navigation/LandingTopBar';
import housePng from '../assets/images/isometric-house.png';

function LandingPage() {
  return (
    <div className="landing_body">
      <LandingTopBar />
      <div className="hero">
        <h1>MyHouse</h1>
        <p>
          We have the most precise home
          <br /> valuation techniques in the industry
        </p>
      </div>
      <div className="cloud_top">
        <img src={housePng} alt="isometric-house" />
      </div>
    </div>
  );
}

export default LandingPage;
