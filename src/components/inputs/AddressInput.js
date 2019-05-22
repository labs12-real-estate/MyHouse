import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getValuation, clearError } from '../../actions/landingpageActions';
import { useWindowWidth } from '../../helper-functions/display-functions';
import Loader from 'react-loader-spinner';

function AddressInput({ history, getValuation, fetching, isLoggedIn, zillow_error, clearError }) {
  const [sessionToken, setSessionToken] = useState('');
  const [address, setAddress] = useState('');
  const [predictions, setPredictions] = useState([]);
  const [error, setError] = useState(['']);
  const [cursor, setCursor] = useState(0);
  let node = useRef(null);

  // Variables for Google Place API
  const google = window.google;
  // const location = new google.maps.LatLng(43.3148, -85.6024); // Latitude, longtitude of Michigan
  // Get session token on first render
  /* eslint-disable */
  useEffect(() => {
    clearError();
    setError('');
    setSessionToken(new google.maps.places.AutocompleteSessionToken());
  }, []);
  /* eslint-enable */
  useEffect(() => {
    document.addEventListener('mousedown', handleClick, false);
    return () => {
      document.removeEventListener('mousedown', handleClick, false);
    };
  }, []);

  const handleClick = e => {
    if (node.current.contains(e.target)) {
      return null;
    } else {
      setPredictions([]);
    }
  };

  const displaySuggestions = (predictions, status) => {
    if (status !== google.maps.places.PlacesServiceStatus.OK) {
      alert('We were unable to find an address with your input, please try again.');
      return;
    }
    setPredictions(predictions);
  };

  const handleInputChange = e => {
    const string = e.target.value;
    setAddress(string);
    var service = new google.maps.places.AutocompleteService();
    if ([3, 6, 10, 15].includes(string.length)) {
      service.getPlacePredictions(
        { input: string, sessionToken: sessionToken, componentRestrictions: { country: 'us' }, types: ['address'] },
        displaySuggestions
      );
    }
  };

  const handleKeyDown = e => {
    if (e.keyCode === 38 && cursor > 0) {
      setCursor(cursor - 1);
      setAddress(predictions[cursor - 1].description);
    } else if (e.keyCode === 40 && cursor < predictions.length - 1) {
      setCursor(cursor + 1);
      setAddress(predictions[cursor + 1].description);
    }
  };

  const getValue = e => {
    e.preventDefault();
    setPredictions([]);
    if (isLoggedIn) {
      setError('Please log out and try again.');
    } else {
      getValuation(address, history);
    }
  };

  const fillAddress = (address, e) => {
    e.preventDefault();
    setAddress(address);
    setPredictions([]);
  };

  return (
    <div>
      <div className="address_searchbar">
        <form onSubmit={getValue}>
          {zillow_error && <div className="error_container">{zillow_error}</div>}
          {error && isLoggedIn && <div className="error_container">{error}</div>}
          <input onKeyDown={handleKeyDown} onChange={handleInputChange} placeholder="Enter address..." value={address} name="address" autoComplete="off" />
          {useWindowWidth() >= 600 && (
            <button className="form-button">{fetching ? <Loader height={25} width={25} type="TailSpin" color="#FFF" /> : 'Get Started'}</button>
          )}
          {useWindowWidth() <= 600 && (
            <button className="form-button">
              {fetching ? <Loader height={25} width={25} type="TailSpin" color="#FFF" /> : <i className="fas fa-search" />}
            </button>
          )}
        </form>
        <div className="search_result_container">
          <div ref={node} className="search_result_dropdown">
            {predictions.length > 2 && address
              ? predictions.map((prediction, i) => (
                  <button key={prediction.id} className={cursor === i ? 'active' : null} onClick={e => fillAddress(prediction.description, e)}>
                    {prediction.description}
                  </button>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ landingpageReducer, authReducer }) => {
  return {
    fetching: landingpageReducer.fetching,
    isLoggedIn: authReducer.isLoggedIn,
    zillow_error: landingpageReducer.error
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      getValuation,
      clearError
    }
  )(AddressInput)
);
