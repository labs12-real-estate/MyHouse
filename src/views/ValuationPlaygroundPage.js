import React from 'react';
import { connect } from 'react-redux';
import DashboardContainer from './DashboardContainer';
import ValuationPlaygroundContent from '../components/dashboardContent/valuationPlaygroundContent/ValuationPlaygroundContent';

function ValuationPlaygroundPage() {
  return (
    <DashboardContainer>
      <ValuationPlaygroundContent />
    </DashboardContainer>
  );
}

export default connect(
  null,
  {}
)(ValuationPlaygroundPage);
