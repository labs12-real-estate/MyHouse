import React from 'react';
import ValuationPlaygroundJumbo from '../../jumbotrons/ValuationPlaygroundJumbo';
import ValuationPlaygroundUpgradeLists from './ValuationPlaygroundUpgradeLists';

function ValuationPlaygroundContent() {
  return (
    <div className="dashboard_content_container">
      <h1 className="valuation_playground_title">Valuation Playground</h1>
      <div className="valuation_playground_content_container">
        <ValuationPlaygroundUpgradeLists />
        <ValuationPlaygroundJumbo />
      </div>
    </div>
  );
}

export default ValuationPlaygroundContent;
