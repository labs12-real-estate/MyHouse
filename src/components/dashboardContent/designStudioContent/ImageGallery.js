import React from 'react';
import { connect } from 'react-redux';
import ImageCard from './ImageCard';
import { nextPage } from '../../../actions/designStudioActions';

function ImageGallery({ searchResults, nextPage, currentSearch }) {
  return (
    <div className="design_studio_img_container">
      {searchResults &&
        searchResults.map(result => {
          return <ImageCard result={result} key={result.id} />;
        })}

      <button onClick={() => nextPage(currentSearch)}>NEXT</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    searchResults: state.designStudioReducer.searchResults.results,
    currentSearch: state.designStudioReducer.currentSearch
  };
};

export default connect(
  mapStateToProps,
  { nextPage }
)(ImageGallery);
