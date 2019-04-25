import React, { Component } from 'react';
import axios from 'axios';

class AddressInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      predictions: []
    };

    // Variables for Google Place API
    this.location = '43.3148,-85.6024'; // Latitude, longtitude of Michigan
    this.types = 'address';
    this.key = 'AIzaSyBQG-Y3BtowkEvTBq3dPPROa-GuMm1Rfpk';
    this.sessiontoken = '';
  }

  // Free api to generate version 4 UUID session token as Google recommends
  generateSessionToken() {
    axios
      .get('https://www.uuidgenerator.net/api/version4')
      .then(res => {
        this.sessiontoken = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    // Generate session token after page loaded
    this.generateSessionToken();
  }

  handleInputChange = e => {
    e.persist();
    let string = e.target.value;
    this.setState(prevState => ({
      ...prevState,
      [e.target.name]: string
    }));

    // Autocomplete request is called every few keystrokes
    if ([3, 6, 10, 15].includes(string.length)) {
      console.log(this.sessiontoken);
      const url = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${string}&types=${
        this.types
      }&location=${this.location}&radius=500&key=${this.key}&sessiontoken=${this.sessiontoken}`;
      axios
        .get(url)
        .then(res => {
          this.setState(prevState => ({
            ...prevState,
            predictions: res.data.predictions
          }));
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  getValue = e => {
    e.preventDefault();
    this.generateSessionToken(); // New session token when search button clicked
  };

  fillAddress = (address, e) => {
    e.preventDefault();
    this.setState(prevState => ({
      ...prevState,
      address: address
    }));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.getValue}>
          <input onChange={this.handleInputChange} placeholder="address" value={this.state.address} name="address" />
          <button className="form-button">Search</button>
        </form>

        {this.state.predictions.map(prediction => (
          <button key={prediction.id} onClick={e => this.fillAddress(prediction.description, e)}>
            {prediction.description}
          </button>
        ))}
      </div>
    );
  }
}

export default AddressInput;
