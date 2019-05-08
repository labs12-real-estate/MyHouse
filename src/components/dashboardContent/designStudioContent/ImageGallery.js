import React from 'react';
import { connect } from 'react-redux';

function ImageGallery(props) {
  return (
    <div>
      <h1>Image Gallery</h1>
      {props.searchResults &&
        props.searchResults.map(result => {
          return <img src={result.urls.thumb} key={result.id} alt={result.description} />;
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
