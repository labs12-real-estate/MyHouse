import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getValuation } from '../../actions/landingpageActions';
import { useWindowWidth } from '../../helper-functions/display-functions';
import Loader from 'react-loader-spinner';

function AddressInput({ history, getValuation, fetching, isLoggedIn }) {
  const [sessionToken, setSessionToken] = useState('');
  const [address, setAddress] = useState('');
  const [predictions, setPredictions] = useState([]);
  const [error, setError] = useState(['']);
  const [cursor, setCursor] = useState(0);

  // Variables for Google Place API
  const google = window.google;
  const location = new google.maps.LatLng(43.3148, -85.6024); // Latitude, longtitude of Michigan

  // Get session token on first render
  /* eslint-disable */
  useEffect(() => {
    setError('');
    setSessionToken(new google.maps.places.AutocompleteSessionToken());
  }, []);
  /* eslint-enable */

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
    if ([3, 6, 10, 15].includes(string.length)) {
      service.getQueryPredictions({ input: string, sessionToken: sessionToken, location: location, radius: 500, types: ['address'] }, displaySuggestions);
    }
  };

  const handleKeyDown = e => {
    if (e.keyCode === 38 && cursor > 0) {
      setCursor(cursor - 1);
      setAddress(predictions[cursor].description);
    } else if (e.keyCode === 40 && cursor < predictions.length - 1) {
      setCursor(cursor + 1);
      setAddress(predictions[cursor].description);
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
        {error && isLoggedIn && <p>{error}</p>}
        <form onSubmit={getValue}>
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
          {predictions.length > 2 && address ? (
            <div className="search_result_dropdown">
              {predictions.map((prediction, i) => (
                <button key={prediction.id} className={cursor === i ? 'active' : null} onClick={e => fillAddress(prediction.description, e)}>
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

const mapStateToProps = ({ landingpageReducer, authReducer }) => {
  return {
    fetching: landingpageReducer.fetching,
    isLoggedIn: authReducer.isLoggedIn
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      getValuation
    }
  )(AddressInput)
);

// import React, { useState, useEffect } from 'react';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import { getValuation } from '../../actions/landingpageActions';
// import { useWindowWidth } from '../../helper-functions/display-functions';
// import Loader from 'react-loader-spinner';

// function AddressInput({ history, getValuation, fetching }) {
//   const [sessionToken, setSessionToken] = useState('');
//   const [address, setAddress] = useState('');
//   const [predictions, setPredictions] = useState([]);
//   const [cursor, setCursor] = useState(0);

//   // Variables for Google Place API
//   const google = window.google;
//   const location = new google.maps.LatLng(43.3148, -85.6024); // Latitude, longtitude of Michigan

//   /*eslint-disable */
//   // Get session token on first render
//   useEffect(() => {
//     setSessionToken(new google.maps.places.AutocompleteSessionToken());
//   }, []);
//   /*eslint-enable */
//   const displaySuggestions = (predictions, status) => {
//     if (status !== google.maps.places.PlacesServiceStatus.OK) {
//       alert(status);
//       return;
//     }
//     setPredictions(predictions);
//   };

//   const handleKeyDown = e => {
//     if (e.keyCode === 38 && cursor > 0) {
//       setCursor(cursor - 1);
//       setAddress(predictions[cursor].description);
//     } else if (e.keyCode === 40 && cursor < predictions.length - 1) {
//       setCursor(cursor + 1);
//       setAddress(predictions[cursor].description);
//     }
//   };

//   const handleInputChange = e => {
//     const string = e.target.value;
//     setAddress(string);
//     var service = new google.maps.places.AutocompleteService();
//     if ([3, 6, 10, 15].includes(string.length)) {
//       service.getQueryPredictions({ input: string, sessionToken: sessionToken, location: location, radius: 500, types: ['address'] }, displaySuggestions);
//     }
//   };

//   const getValue = e => {
//     e.preventDefault();
//     getValuation(address, history);
//   };

//   const fillAddress = (address, e) => {
//     e.preventDefault();
//     setAddress(address);
//     setPredictions([]);
//   };

//   return (
//     <div>
//       <div className="address_searchbar">
//         <form onSubmit={getValue}>
//           <input onKeyDown={handleKeyDown} onChange={handleInputChange} placeholder="Enter address..." value={address} name="address" autoComplete="off" />
//           {useWindowWidth() >= 600 && (
//             <button className="form-button">{fetching ? <Loader height={25} width={25} type="TailSpin" color="#FFF" /> : 'Get Started'}</button>
//           )}
//           {useWindowWidth() <= 600 && (
//             <button className="form-button">
//               {fetching ? <Loader height={25} width={25} type="TailSpin" color="#FFF" /> : <i className="fas fa-search" />}
//             </button>
//           )}
//         </form>
//         <div className="search_result_container">
//           {predictions.length > 2 && address ? (
//             <div className="search_result_dropdown">
//               {predictions.map((prediction, i) => (
//                 <button key={prediction.id} className={cursor === i ? 'active' : null} onClick={e => fillAddress(prediction.description, e)}>
//                   {prediction.description}
//                 </button>
//               ))}
//             </div>
//           ) : null}
//         </div>
//       </div>
//     </div>
//   );
// }

// const mapStateToProps = ({ landingpageReducer: { fetching } }) => {
//   return {
//     fetching
//   };
// };

// export default withRouter(
//   connect(
//     mapStateToProps,
//     {
//       getValuation
//     }
//   )(AddressInput)
// );
