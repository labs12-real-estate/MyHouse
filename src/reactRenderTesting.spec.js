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
});
