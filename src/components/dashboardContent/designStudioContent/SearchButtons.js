import React from 'react';
import Button from '../../buttons/Button';
import { designSearch } from '../../../actions/designStudioActions';
import { connect } from 'react-redux';

const searchTerms = ['Bedroom', 'Bathroom', 'Kitchen', 'Dining Room', 'Living Room', 'Office'];

function SearchButtons(props) {
  return (
    <div className="design_studio_btn_container">
      {searchTerms.map((term, index) => (
        <Button
          key={index}
          buttonText={term}
          buttonStyle={`design_studio_btn ${props.currentSearch === term ? 'active_btn' : ''}`}
          clickEvent={e => props.designSearch(term)}
        />
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    searchResults: null,
    currentSearch: state.designStudioReducer.currentSearch
  };
};

export default connect(
  mapStateToProps,
  { designSearch }
)(SearchButtons);
