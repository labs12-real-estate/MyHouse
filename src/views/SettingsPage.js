import React from 'react';
import DashboardContainer from './DashboardContainer';
import SettingsPageContent from '../components/dashboardContent/settingsPageContent/SettingsPageContent';

function SettingsPage() {
  return (
    <DashboardContainer>
      <SettingsPageContent />
    </DashboardContainer>
  );
}

export default SettingsPage;
