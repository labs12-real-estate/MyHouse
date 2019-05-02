import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { isLoggedInAction } from './actions/authActions';
import LandingPage from './views/LandingPage';
import WizardFormPage from './views/WizardFormPage';
import OverviewPage from './views/OverviewPage';
import MyHousePage from './views/MyHousePage';
import ValuationPlaygroundPage from './views/ValuationPlaygroundPage';
import MortgageCalculatorPage from './views/MortgageCalculatorPage';
import DesignStudioPage from './views/DesignStudioPage';

// Note: onUpdate sends the user back to the top of the page on route switch.
function App({ isLoggedInAction }) {
  useEffect(isLoggedInAction, []);
  return (
    <div>
      <Switch>
        <Route onUpdate={window.scrollTo(0, 0)} path="/" exact component={LandingPage} />
        <Route onUpdate={window.scrollTo(0, 0)} path="/wizard-form" component={WizardFormPage} />
        <Route onUpdate={window.scrollTo(0, 0)} path="/overview" component={OverviewPage} />
        <Route onUpdate={window.scrollTo(0, 0)} path="/myhouse" component={MyHousePage} />
        <Route onUpdate={window.scrollTo(0, 0)} path="/valuation-playground" component={ValuationPlaygroundPage} />
        <Route onUpdate={window.scrollTo(0, 0)} path="/mortgage-calculator" component={MortgageCalculatorPage} />
        <Route onUpdate={window.scrollTo(0, 0)} path="/design-studio" component={DesignStudioPage} />
      </Switch>
    </div>
  );
}

export default connect(
  null,
  { isLoggedInAction }
)(App);
