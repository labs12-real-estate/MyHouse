import React from 'react';
import { connect } from 'react-redux';
import ImageCard from './ImageCard';
import { getPage } from '../../../actions/designStudioActions';
import { useInfiniteScroll } from '../../../helper-functions/display-functions';

function ImageGallery({ searchResults, getPage, currentSearch, currentPage }) {
  const getNext = () => {
    getPage(currentSearch, currentPage + 1);
    setIsFetching(!isFetching);
  };
  const [isFetching, setIsFetching] = useInfiniteScroll(getNext);
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
    searchResults: state.designStudioReducer.searchResults,
    currentSearch: state.designStudioReducer.currentSearch,
    currentPage: state.designStudioReducer.page
  };
};

export default connect(
  mapStateToProps,
  { getPage }
)(ImageGallery);
