import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { isEditing, saveHouseInfo, cancelSaveHouseInfo } from '../../../actions/houseActions';
import { useInput } from '../../../helper-functions/form-logic-functions';
import { normalizeContent } from '../../../helper-functions/display-functions';

function HouseProfileForm(props) {
  const [content, updateContent, setContent] = useInput(normalizeContent(props.content));
  useEffect(() => {
    setContent(props.content);
  }, [props.content, setContent]);
  const handleEdit = () => {
    props.isEditing(props.field);
  };
  const handleSave = () => props.saveHouseInfo({ changes: { [props.field]: normalizeContent(content) }, field: props.field, id: props.id });
  const isEditing = props.editingFields.includes(props.field);
  return (
    <div className="house_profile_form">
      <div className="house_profile_form_title">
        <h2>{props.title}</h2>
        {!isEditing ? (
          <i className="fas fa-pen" onClick={handleEdit} title="Edit" />
        ) : (
          <span>
            <i className="fas fa-check" title="Save" onClick={handleSave} />
          </span>
        )}
      </div>
      <div className="house_profile_form_content" onClick={handleEdit} onBlur={handleSave}>
        <div className="house_profile_form_content_gutter">
          {isEditing ? <textarea maxLength="450" autoFocus value={content || ''} onChange={updateContent} /> : <pre>{content || props.defaultValue}</pre>}
          <div style={{ textAlign: 'right', fontFamily: 'Roboto, sans-serif', fontWeight: '600' }}>{content ? content.length : 0} / 450</div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    editingFields: state.houseReducer.editingFields,
    id: state.houseReducer.house.id
  };
};

export default connect(
  mapStateToProps,
  { isEditing, saveHouseInfo, cancelSaveHouseInfo }
)(HouseProfileForm);
