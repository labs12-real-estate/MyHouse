import React from 'react';

function HouseProfileParcel(props) {
  return (
    <div className="house_profile_form">
      <div className="house_profile_form_title">
        <h2>{props.title}</h2>
      </div>
      <h3><span>Square Feet: </span>{props.squareFt}</h3>
      <h3><span>Number of Bedrooms:</span> {props.numBedrooms}</h3>
      <h3><span>Number of Bathrooms:</span> {props.numBathrooms}</h3>
      <h3><span>Lot Size:</span> {props.lotSize}</h3>
    </div>
  );
}

export default HouseProfileParcel;