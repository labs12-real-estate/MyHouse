import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { isEditing, saveHouseInfo, cancelSaveHouseInfo } from '../../../actions/houseActions';
import { useInput } from '../../../helper-functions/form-logic-functions';

function HouseProfileForm(props) {
	const [ content, setContent, setContentDirect ] = useInput(props.content);
	useEffect(
		() => {
			setContentDirect(props.content);
		},
		[ props.content ]
	);
	const handleEdit = () => props.isEditing(props.field);
	const handleCancel = () => {
		props.cancelSaveHouseInfo(props.field);
	};
	const handleSave = () =>
		props.saveHouseInfo({ changes: { [props.field]: content }, field: props.field, id: props.id });
	const isEditing = props.editingFields.includes(props.field);
	return (
		<div className="house_profile_form">
			<div className="house_profile_form_title">
				<h2>{props.title}</h2>
				{!isEditing ? (
					<i className="fas fa-pen" onClick={handleEdit} title="Edit" />
				) : (
					<span>
						<i className="fas fa-times" onClick={handleCancel} />
						<i className="fas fa-check" title="Save" onClick={handleSave} />
					</span>
				)}
			</div>

			{!isEditing ? (
				<p>{content || props.defaultValue}</p>
			) : (
				<textarea value={content || ''} onChange={setContent} />
			)}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		editingFields: state.houseReducer.editingFields,
		id: state.houseReducer.house.id
	};
};

export default connect(mapStateToProps, { isEditing, saveHouseInfo, cancelSaveHouseInfo })(HouseProfileForm);
