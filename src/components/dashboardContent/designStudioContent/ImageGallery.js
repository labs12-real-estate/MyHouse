import React from 'react';
import { connect } from 'react-redux';
import ImageCard from './ImageCard';

function ImageGallery({ searchResults }) {
  return (
    <div className="design_studio_img_container">
      {searchResults &&
        searchResults.map(result => {
          return <ImageCard result={result} key={result.id} />;
        })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    searchResults: state.designStudioReducer.searchResults.results
  };
};

export default connect(mapStateToProps)(ImageGallery);
