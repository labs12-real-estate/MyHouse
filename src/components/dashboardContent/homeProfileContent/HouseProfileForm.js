import React from 'react';
import { connect } from 'react-redux';
import { isEditing } from '../../../actions/houseActions';

function HouseProfileForm(props) {
  const handleClick = () => props.isEditing(props.id);
  const isEditing = props.editing === props.id;

  console.log(props.id);
  return (
    <div className="house_profile_form">
      <div className="house_profile_form_title">
        <h2>
          {props.title} <span style={{ color: 'red' }}>{`${!isEditing}`}</span>
        </h2>
        {!isEditing ? <i className="fas fa-pen" onClick={handleClick} title="Edit" /> : <i className="fas fa-check" />}
      </div>

      {!isEditing ? <p>{props.content}</p> : <textarea value={props.content} />}
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
