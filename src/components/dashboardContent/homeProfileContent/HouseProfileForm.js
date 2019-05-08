import React from 'react';
import { connect } from 'react-redux';
import { isEditing, saveHouseInfo, cancelSaveHouseInfo } from '../../../actions/houseActions';
import { useInput } from '../../../helper-functions/form-logic-functions';

function HouseProfileForm(props) {
  const [state, setState] = useInput(props.content);
  const handleEdit = () => props.isEditing(props.id);
  const handleCancel = () => {
    props.cancelSaveHouseInfo(props.id);
    // setState({ target: { value: props.content } });
  };
  const handleSave = () => props.saveHouseInfo({ changes: { [props.field]: state }, id: props.id });
  const isEditing = props.editingIds.includes(props.id);

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
            <i className="fas fa-times" onClick={handleCancel} />
            <i className="fas fa-check" title="Save" onClick={handleSave} />
          </span>
        )}
      </div>

      {!isEditing ? <p>{state || props.defaultValue}</p> : <textarea value={state} onChange={setState} />}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    editingIds: state.houseReducer.editingIds
  };
};

export default connect(
  mapStateToProps,
  { isEditing, saveHouseInfo, cancelSaveHouseInfo }
)(HouseProfileForm);
