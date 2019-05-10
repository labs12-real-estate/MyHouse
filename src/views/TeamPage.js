import React from 'react';
import LandingTopBar from '../components/navigation/LandingTopBar';
import Footer from '../components/footer/Footer';
import TeamPageTitle from '../components/teamPageContent/TeamPageTitle';
import TeamPageBottom from '../components/teamPageContent/TeamPageBottom';
import TeamMembers from '../components/teamPageContent/TeamMembers';

function TeamPage() {
  return (
    <div className="team_page_body">
      <LandingTopBar />
      <TeamPageTitle />
      <TeamMembers />
      <TeamPageBottom />
      <Footer />
    </div>
  );
}

export default TeamPage;
