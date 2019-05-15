import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { isLoggedInAction } from './actions/authActions';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import PrivateRouteWF from './components/privateRoute/PrivateRouteWF';
import LandingPage from './views/LandingPage';
import WizardFormPage from './views/WizardFormPage';
import OverviewPage from './views/OverviewPage';
import MyHousePage from './views/MyHousePage';
import ValuationPlaygroundPage from './views/ValuationPlaygroundPage';
import MortgageCalculatorPage from './views/MortgageCalculatorPage';
import DesignStudioPage from './views/DesignStudioPage';
import TeamPage from './views/TeamPage';
import SettingsPage from './views/SettingsPage'

// Note: onUpdate on Routes sends the user back to the top of the page on route switch.
function App({ isLoggedInAction }) {
  useEffect(() => {
    isLoggedInAction();
  }, [isLoggedInAction]);
  return (
    <div>
      <Switch>
        <Route onUpdate={window.scrollTo(0, 0)} path="/" exact component={LandingPage} />
        <Route onUpdate={window.scrollTo(0, 0)} path="/ourteam" exact component={TeamPage} />
        <PrivateRouteWF onUpdate={window.scrollTo(0, 0)} path="/wizard-form" component={WizardFormPage} />
        <PrivateRoute onUpdate={window.scrollTo(0, 0)} path="/overview" component={OverviewPage} />
        <PrivateRoute onUpdate={window.scrollTo(0, 0)} path="/myhouse" component={MyHousePage} />
        <PrivateRoute onUpdate={window.scrollTo(0, 0)} path="/valuation-playground" component={ValuationPlaygroundPage} />
        <PrivateRoute onUpdate={window.scrollTo(0, 0)} path="/mortgage-calculator" component={MortgageCalculatorPage} />
        <PrivateRoute onUpdate={window.scrollTo(0, 0)} path="/design-studio" component={DesignStudioPage} />
        <PrivateRoute onUpdate={window.scrollTo(0, 0)} path="/settings" component={SettingsPage} />
      </Switch>
    </div>
  );
}

export default connect(
  null,
  { isLoggedInAction }
)(App);
