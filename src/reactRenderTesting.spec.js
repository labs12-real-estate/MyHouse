import React, { useState, useEffect } from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import rootReducer from './reducers';
import App from './App.js';
import DashboardContainer from './views/DashboardContainer.js';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import ValuationPlaygroundMobileUpgradeList from 'components/dashboardContent/valuationPlaygroundContent/ValuationPlaygroundMobileUpgradeList';
import ValuationPlaygroundContent from 'components/dashboardContent/valuationPlaygroundContent/ValuationPlaygroundContent';
import SettingsPageContent from 'components/dashboardContent/settingsPageContent/SettingsPageContent';
import { UserInfo, NewPasswordForm, AttributesForm } from 'components/dashboardContent/settingsPageContent/sections';
import ErrorContainer from 'components/dashboardContent/settingsPageContent/sections/ErrorContainer';
import OverviewContent from 'components/dashboardContent/overviewContent/OverviewContent';
import CardsContainer from 'components/dashboardContent/overviewContent/CardsContainer';
import Table from 'components/dashboardContent/mortgageCalculatorContent/Table';
import MortgageCalculatorContent from 'components/dashboardContent/mortgageCalculatorContent/MortgageCalculatorContent';
import MortgageCalculator from 'components/dashboardContent/mortgageCalculatorContent/MortgageCalculator';
import Chart from 'components/dashboardContent/mortgageCalculatorContent/Chart';
import UserProfileSection from 'components/dashboardContent/homeProfileContent/UserProfileSection';
import MyHouseContent from 'components/dashboardContent/homeProfileContent/MyHouseContent';
import HouseProfileParcelInput from 'components/dashboardContent/homeProfileContent/HouseProfileParcelInput';
import HouseProfileParcel from 'components/dashboardContent/homeProfileContent/HouseProfileParcel';
import HouseProfileForms from 'components/dashboardContent/homeProfileContent/HouseProfileForms';
import HouseProfileForm from 'components/dashboardContent/homeProfileContent/HouseProfileForm';
import HouseProfileFinishes from 'components/dashboardContent/homeProfileContent/HouseProfileFinishes';
import Gallery from 'components/dashboardContent/homeProfileContent/Gallery';
import Backdrop from 'components/dashboardContent/homeProfileContent/Backdrop';
import SearchButtons from 'components/dashboardContent/designStudioContent/SearchButtons';
import ImageGallery from 'components/dashboardContent/designStudioContent/ImageGallery';
import ImageCard from 'components/dashboardContent/designStudioContent/ImageCard';
import DesignStudioContent from 'components/dashboardContent/designStudioContent/DesignStudioContent';
import UpgradeCard from 'components/cards/UpgradeCard';
import ShadowBox from 'components/cards/ShadowBox';
import ReviewCard from 'components/cards/ReviewCard';
import MarketingCard from 'components/cards/MarketingCard';
import FeatureCard from 'components/cards/FeatureCard';
import ValuationPlaygroundSelector from 'components/dashboardContent/valuationPlaygroundContent/ValuationPlaygroundSelector';
import ValuationPlaygroundUpgradeLists from 'components/dashboardContent/valuationPlaygroundContent/ValuationPlaygroundUpgradeLists';
import AddressInput from 'components/inputs/AddressInput';
import ForgotPasswordInput from 'components/inputs/ForgotPasswordInput';
import Input from 'components/inputs/Input';
import InputStatusMessages from 'components/inputs/InputStatusMessages';
import LoginInput from 'components/inputs/LoginInput';
import RadioInput from 'components/inputs/RadioInput';
import RegisterInput from 'components/inputs/RegisterInput';
import SetNewPasswordInput from 'components/inputs/SetNewPasswordInput';
import DashboardJumbo from 'components/jumbotrons/DashboardJumbo';
import LandingPageJumbo from 'components/jumbotrons/LandingPageJumbo';
import ValuationPlaygroundJumbo from 'components/jumbotrons/ValuationPlaygroundJumbo';
import LandingBottomCTA from 'components/landingPageContent/LandingBottomCTA';
import LandingHero from 'components/landingPageContent/LandingHero';
import LandingMiddle from 'components/landingPageContent/LandingMiddle';
import LandingReviews from 'components/landingPageContent/LandingReviews';
import DashboardWelcome from 'components/modals/DashboardWelcome';
import LoginContent from 'components/modals/LoginContent';
import LoginModal from 'components/modals/LoginModal';
import RegisterModal from 'components/modals/RegisterModal';
import DashboardTopBar from 'components/navigation/DashboardTopBar';
import LandingTopBar from 'components/navigation/LandingTopBar';
import SideBar from 'components/navigation/SideBar';
import SideBarNavItem from 'components/navigation/SideBarNavItem';
import TeamMembers from 'components/teamPageContent/TeamMembers';
import TeamPageBottom from 'components/teamPageContent/TeamPageBottom';
import TeamPageTitle from 'components/teamPageContent/TeamPageTitle';
import FeatureList from 'components/textBoxes/FeatureList';
import HomeStory from 'components/textBoxes/HomeStory';
import ParcelList from 'components/textBoxes/ParcelList';
import RecentRemodelStory from 'components/textBoxes/RecentRemodelStory';
import UpgradesList from 'components/textBoxes/UpgradesList';
import WizardFormConfirmation from 'components/wizardForm/WizardFormConfirmation';
import WizardFormInitialData from 'components/wizardForm/WizardFormInitialData';
import WizardFormProgress from 'components/wizardForm/WizardFormProgress';
import WizardFormQA from 'components/wizardForm/WizardFormQA';
import OverviewPage from 'views/OverviewPage';
import ReactJoyride from 'react-joyride';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, logger)));

const setupGoogleMock = () => {
  /*** Mock Google Maps JavaScript API ***/
  window.google = {
    maps: {
      Marker: class {},
      Map: class {
        setTilt() {}
        fitBounds() {}
      },
      LatLngBounds: class {},
      places: {
        Autocomplete: class {},
        AutocompleteService: class {},
        AutocompleteSessionToken: class {},
        PlacesServiceStatus: {
          INVALID_REQUEST: 'INVALID_REQUEST',
          NOT_FOUND: 'NOT_FOUND',
          OK: 'OK',
          OVER_QUERY_LIMIT: 'OVER_QUERY_LIMIT',
          REQUEST_DENIED: 'REQUEST_DENIED',
          UNKNOWN_ERROR: 'UNKNOWN_ERROR',
          ZERO_RESULTS: 'ZERO_RESULTS'
        },
        PlacesAutocomplete: {
          INVALID_REQUEST: 'INVALID_REQUEST',
          NOT_FOUND: 'NOT_FOUND',
          OK: 'OK',
          OVER_QUERY_LIMIT: 'OVER_QUERY_LIMIT',
          REQUEST_DENIED: 'REQUEST_DENIED',
          UNKNOWN_ERROR: 'UNKNOWN_ERROR',
          ZERO_RESULTS: 'ZERO_RESULTS'
        }
      },

      MarkerClusterer: class {},
      Geocoder: class {}
    }
  };
};

// in test file.
beforeAll(() => {
  setupGoogleMock();
});

afterEach(cleanup);


 
describe('Render Suite', () => {
  it('should render App', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
  });

  it('should render DashboardContainer', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <DashboardContainer />
        </BrowserRouter>
      </Provider>
    );
  });
  // it('should render FeatureCard', () => {
  //   render(
  //     <Provider store={store}>
  //       <BrowserRouter>
  //         <FeatureCard />
  //       </BrowserRouter>
  //     </Provider>
  //   );
  // });
  it('should render MarketingCard', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <MarketingCard />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render ReviewCard', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ReviewCard />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render ShadowBox', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ShadowBox />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render UpgradeCard', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <UpgradeCard />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render DesignStudioContent', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <DesignStudioContent />
        </BrowserRouter>
      </Provider>
    );
  });

  it('should render ImageGallery', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ImageGallery>
            <ImageCard />
          </ImageGallery>
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render SearchButtons', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SearchButtons />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render Backdrop', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Backdrop />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render Gallery', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Gallery />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render HouseProfileFinishes', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <HouseProfileFinishes />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render HouseProfileForm', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <HouseProfileForm />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render HouseProfileForms', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <HouseProfileForms />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render HouseProfileParcel', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <HouseProfileParcel />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render HouseProfileParcelInput', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <HouseProfileParcelInput />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render MyHouseContent', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <MyHouseContent />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render UserProfileSection', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <UserProfileSection />
        </BrowserRouter>
      </Provider>
    );
  });

  it('should render MortgageCalculator', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <MortgageCalculator>
            <Chart />
            <Table />
          </MortgageCalculator>
        </BrowserRouter>
      </Provider>
    );
  });

  it('should render MortgageCalculatorContent', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <MortgageCalculatorContent />
        </BrowserRouter>
      </Provider>
    );
  });

  // it('should render CardsContainer', () => {
  //   render(
  //     <Provider store={store}>
  //       <BrowserRouter>
  //         <CardsContainer />
  //       </BrowserRouter>
  //     </Provider>
  //   );
  // });
  // it('should render OverviewPage', () => {
  //   render(
  //     <Provider store={store}>
  //       <BrowserRouter>
  //         <OverviewPage>
  //           <OverviewContent>
  //             <CardsContainer />
  //           </OverviewContent>
  //         </OverviewPage>
  //       </BrowserRouter>
  //     </Provider>
  //   );
  // });
  // it('should render OverviewContent', () => {
  //   render(
  //     <Provider store={store}>
  //       <BrowserRouter>
  //         <OverviewContent />
  //       </BrowserRouter>
  //     </Provider>
  //   );
  // });
  it('should render AttributesForm', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AttributesForm />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render ErrorContainer', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ErrorContainer />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render NewPasswordForm', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <NewPasswordForm />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render UserInfo', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <UserInfo />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render SettingsPageContent', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SettingsPageContent />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render ValuationPlaygroundContent', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ValuationPlaygroundContent />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render ValuationPlaygroundMobileUpgradeList', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ValuationPlaygroundMobileUpgradeList>
          <ValuationPlaygroundSelector />

            </ValuationPlaygroundMobileUpgradeList> 
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render ValuationPlaygroundSelector', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render ValuationPlaygroundUpgradeLists', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ValuationPlaygroundUpgradeLists />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render AddressInput', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AddressInput />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render ForgotPasswordInput', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ForgotPasswordInput />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render InputStatusMessages', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <InputStatusMessages />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render LoginInput', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginInput />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render RegisterInput', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <RegisterInput />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render SetNewPasswordInput', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SetNewPasswordInput />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render LandingPageJumbo', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <LandingPageJumbo />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render ValuationPlaygroundJumbo', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ValuationPlaygroundJumbo />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render LandingBottomCTA', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <LandingBottomCTA />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render LandingHero', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <LandingHero />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render LandingMiddle', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <LandingMiddle />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render LandingReviews', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <LandingReviews />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render DashboardWelcome', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <DashboardWelcome />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render LoginContent', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginContent />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render LoginModal', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginModal />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render DashboardTopBar', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <DashboardTopBar />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render LandingTopBar', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <LandingTopBar />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render SideBar', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SideBar>
          <SideBarNavItem />
          </SideBar>
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render TeamMembers', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <TeamMembers />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render TeamPageBottom', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <TeamPageBottom />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render TeamPageTitle', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <TeamPageTitle />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render FeatureList', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <FeatureList />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render HomeStory', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <HomeStory />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render ParcelList', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ParcelList />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render RecentRemodelStory', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <RecentRemodelStory />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render UpgradesList', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <UpgradesList />
        </BrowserRouter>
      </Provider>
    );
  });

  it('should render WizardFormProgress', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <WizardFormProgress />
        </BrowserRouter>
      </Provider>
    );
  });
});
