import React, { useState } from 'react';
import { connect } from 'react-redux';
import { isEditing } from '../../../actions/houseActions';
import { useInput } from '../../../helper-functions/form-logic-functions';

function HouseProfileForm(props) {
  const handleEdit = () => props.isEditing(props.id);
  const handleSave = () => props.isEditing(-1);
  const isEditing = props.editing === props.id;
  const [state, setState] = useInput(props.content);

  console.log(props.id);
  return (
    <div className="house_profile_form">
      <div className="house_profile_form_title">
        <h2>
          {props.title} <span style={{ color: 'red' }}>{`${!isEditing}`}</span>
        </h2>
        {!isEditing ? (
          <i className="fas fa-pen" onClick={handleEdit} title="Edit" />
        ) : (
          <span>
            <i className="fas fa-times" />
            <i className="fas fa-check" title="Save" onClick={handleSave} />
          </span>
        )}
      </div>

      {!isEditing ? <p>{state}</p> : <textarea value={state} onChange={setState} />}
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {
    editing: state.houseReducer.isEditing
  };
};

export default connect(
  mapStateToProps,
  { isEditing }
)(HouseProfileForm);
