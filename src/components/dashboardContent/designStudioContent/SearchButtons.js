import React from 'react';
import Button from '../../buttons/Button';
import { designSearch } from '../../../actions/designStudioActions';
import { connect } from 'react-redux';

const searchTerms = ['Bedroom', 'Bathroom', 'Kitchen', 'Dining Room', 'Living Room', 'Office'];

function SearchButtons(props) {
  return (
    <div className="design_studio_btn_container">
      {searchTerms.map(term => (
        <Button buttonText={term} buttonStyle="design_studio_btn" clickEvent={e => props.designSearch(term)} />
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    searchResults: null
  };
};

export default connect(
  mapStateToProps,
  { designSearch }
)(SearchButtons);
