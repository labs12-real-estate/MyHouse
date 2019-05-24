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
import SettingsPage from './views/SettingsPage';

// Note: onEnter on Routes sends the user back to the top of the page on route switch.
function App({ isLoggedInAction }) {
  useEffect(() => {
    isLoggedInAction();
  }, [isLoggedInAction]);
  return (
    <div>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/ourteam" exact component={TeamPage} />
        <PrivateRouteWF path="/wizard-form" component={WizardFormPage} />
        <PrivateRoute path="/overview" component={OverviewPage} />
        <PrivateRoute path="/myhouse" component={MyHousePage} />
        <PrivateRoute path="/valuation-playground" component={ValuationPlaygroundPage} />
        <PrivateRoute path="/mortgage-calculator" component={MortgageCalculatorPage} />
        <PrivateRoute path="/design-studio" component={DesignStudioPage} />
        <PrivateRoute path="/settings" component={SettingsPage} />
      </Switch>
    </div>
  );
}

export default connect(
  null,
  { isLoggedInAction }
)(App);
