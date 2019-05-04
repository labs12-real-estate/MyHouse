import React from 'react';
import Select from './Select';

function HouseProfileSelect(props) {
  return (
    <div className="house_profile_form">
      <div className="house_profile_form_title">
        <h2>{props.title}</h2>
        <i className="fas fa-pen" />
      </div>
      <p>{props.options}</p>
      {props.options.map((option, index) => (
        <Select key={index} option={option} />
      ))}
    </div>
  );
}

export default HouseProfileSelect;
