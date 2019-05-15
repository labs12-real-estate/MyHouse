import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { getValuationv2 } from '../../actions/landingpageActions';

function AddressInputv2({ history, getValuationv2 }) {
  const [sessionToken, setSessionToken] = useState('');
  const [address, setAddress] = useState('');
  const [predictions, setPredictions] = useState([]);

  // Variables for Google Place API
  const google = window.google;
  const location = new google.maps.LatLng(43.3148, -85.6024); // Latitude, longtitude of Michigan

  // Get session token on first render
  useEffect(() => {
    setSessionToken(new google.maps.places.AutocompleteSessionToken());
  }, []);

  const displaySuggestions = (predictions, status) => {
    if (status !== google.maps.places.PlacesServiceStatus.OK) {
      alert(status);
      return;
    }
    setPredictions(predictions);
  };

  const handleInputChange = e => {
    const string = e.target.value;
    setAddress(string);
    var service = new google.maps.places.AutocompleteService();
    console.log(string.length);
    if ([3, 6, 10, 15].includes(string.length)) {
      service.getQueryPredictions({ input: string, sessionToken: sessionToken, location: location, radius: 500, types: ['address'] }, displaySuggestions);
    }
  };

  const getValue = e => {
    e.preventDefault();
    getValuationv2(address, history);
  };

  const fillAddress = (address, e) => {
    e.preventDefault();
    setAddress(address);
  };

  return (
    <div>
      <div className="address_searchbar">
        <form onSubmit={getValue}>
          <input onChange={handleInputChange} placeholder="Enter address..." value={address} name="address" autoComplete="off" />
          <button className="form-button">Get Started</button>
        </form>
        <div className="search_result_container">
          {predictions.length > 0 && address ? (
            <div className="search_result_dropdown">
              {predictions.map(prediction => (
                <button key={prediction.id} onClick={e => fillAddress(prediction.description, e)}>
                  {prediction.description}
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default withRouter(
  connect(
    null,
    {
      getValuationv2
    }
  )(AddressInputv2)
);
