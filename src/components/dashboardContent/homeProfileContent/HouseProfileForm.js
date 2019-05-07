import React, { useState } from 'react';

function HouseProfileForm(props) {
  const [editMode, setEditMode] = useState(false);
  const [content, setContent] = useState(props.content);

  return (
    <div className="house_profile_form">
      <div className="house_profile_form_title">
        <h2>
          {props.title} <span style={{ color: 'red' }}>{`${editMode}`}</span>
        </h2>
        <i className="fas fa-pen" onClick={() => setEditMode(!editMode)} />
      </div>

      {!editMode ? <p>{props.content}</p> : <textarea value={content} onChange={e => setContent(e.target.value)} style={{ width: '100%', height: '300px' }} />}
    </div>
  );
}

export default HouseProfileForm;
