import React, { useState } from 'react';

function HouseProfileForm(props) {
  const [editing, setEditing] = useState(false);
  const [content, setContent] = useState(props.content);

  return (
    <div className="house_profile_form">
      <div className="house_profile_form_title">
        <h2>
          {props.title} <span style={{ color: 'red' }}>{`${editing}`}</span>
        </h2>

        {!editing ? <i className="fas fa-pen" onClick={() => setEditing(!editing)} /> : <i className="fas fa-check" style={{ color: 'green' }} />}
      </div>

      {!editing ? <p>{props.content}</p> : <textarea value={content} onChange={e => setContent(e.target.value)} style={{ width: '100%', height: '300px' }} />}
    </div>
  );
}

export default HouseProfileForm;
