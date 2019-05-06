import React from 'react';

function HouseProfileForm(props) {
  return (
    <div className="house_profile_form">
      <div className="house_profile_form_title">
        <h2>{props.title}</h2>
        <i className="fas fa-pen" />
      </div>
      <p>{props.content}</p>
    </div>
  );
}

export default HouseProfileForm;
