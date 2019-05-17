import React, { useEffect } from 'react';
import LandingTopBar from '../components/navigation/LandingTopBar';
import Footer from '../components/footer/Footer';
import LandingHero from '../components/landingPageContent/LandingHero';
import LandingMiddle from '../components/landingPageContent/LandingMiddle';
import LandingReviews from '../components/landingPageContent/LandingReviews';
import LandingBottomCTA from '../components/landingPageContent/LandingBottomCTA';

function LandingPage() {
  useEffect(() => {
    localStorage.removeItem('wizardForm');
    localStorage.removeItem('initialData');
    // This is used to track if it's the users first time entering the Overview Page.
    localStorage.removeItem('registering');
  }, []);
  return (
    <div className="landing_body">
      <LandingTopBar />
      <LandingHero />
      <LandingMiddle />
      <div className="landing_cloud_3" />
      <LandingReviews />
      <LandingBottomCTA />
      <Footer />
    </div>
  );
}

export default LandingPage;
