import React from 'react';
import LandingTopBar from '../components/navigation/LandingTopBar';

function LandingPage() {
  return (
    <div className="landing_body">
      <LandingTopBar />
      <h1>LandingPage</h1>
      <div className="cloud_top" />
    </div>
  );
}

export default LandingPage;
