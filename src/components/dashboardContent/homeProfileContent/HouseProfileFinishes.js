import React from 'react';

function HouseProfileFinishes(props) {
  return (
    <div className="house_profile_form">
      <div className="house_profile_form_title">
        <h2>{props.title}</h2>
      </div>
      <h3><span>Countertops:</span> {props.countertops}</h3>
      <h3><span>Furnace Age: </span>{props.furnaceAge}</h3>
      <h3><span>Roof Age: </span>{props.roofAge}</h3>
      <h3><span>A/C Age:</span> {props.acAge}</h3>
    </div>
  );
}

export default HouseProfileFinishes;