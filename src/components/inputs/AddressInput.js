import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { getValuation } from '../../actions/landingpageActions';

function AddressInput({ history, getValuation }) {
  const [sessiontoken, setSessiontoken] = useState('');
  const [address, setAddress] = useState('');
  const [predictions, setPredictions] = useState([]);

  // Variables for Google Place API
  const location = '43.3148,-85.6024'; // Latitude, longtitude of Michigan
  const types = 'address';
  const key = 'AIzaSyBQG-Y3BtowkEvTBq3dPPROa-GuMm1Rfpk';

  // Get session token on first render
  useEffect(() => {
    axios
      .get('https://www.uuidgenerator.net/api/version4')
      .then(res => {
        setSessiontoken(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleInputChange = e => {
    const string = e.target.value;
    setAddress(string);

    // Autocomplete request is called every few keystrokes
    if ([3, 6, 10, 15].includes(string.length)) {
      const url = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${string}&types=${types}&location=${location}&radius=500&key=${key}&sessiontoken=${sessiontoken}`;
      axios
        .get(url)
        .then(res => {
          setPredictions(res.data.predictions);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  const getValue = e => {
    e.preventDefault();
    getValuation(address, history);
    // axios
    //   .post('https://labs12-real-estate.herokuapp.com/api/houses/getvalue', {
    //     address
    //   })
    //   .then(state => {
    //     localStorage.setItem('initialData', JSON.stringify(state));
    //     history.push('/wizard-form');
    //   })
    //   .catch(console.error);
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
      getValuation
    }
  )(AddressInput)
);
