import React, { useState } from 'react';

function HouseProfileForm(props) {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="house_profile_form">
      <div className="house_profile_form_title">
        <h2>
          {props.title} <span style={{ color: 'red' }}>{`${editMode}`}</span>
        </h2>
        <i className="fas fa-pen" onClick={() => setEditMode(!editMode)} />
      </div>
      <p>{props.content}</p>
    </div>
  );
}

export default HouseProfileForm;
