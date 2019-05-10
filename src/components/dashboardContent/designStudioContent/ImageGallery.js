import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ImageCard from './ImageCard';
import { getNextPage } from '../../../actions/designStudioActions';
import Button from '../../buttons/Button';

function ImageGallery({ searchResults, getNextPage, currentSearch, nextPage }) {
  const [page, setPage] = useState(1);
  const [images, setImages] = useState(searchResults);
  const [isFetching, setIsFetching] = useState(false);
  const getNext = () => {
    setPage(page + 1);
    getNextPage(currentSearch, page);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setImages(searchResults);
  }, [searchResults]);

  useEffect(() => {
    if (!isFetching) {
      return;
    }
    fetchMoreListItems();
  }, [isFetching]);

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching) {
      return;
    }
    setIsFetching(true);
  }

  function fetchMoreListItems() {
    getNext();
    setImages(prevState => {
      console.log('fetchMoreListItems');
      console.log(nextPage);
      return [...new Set(searchResults)];
    });

    setIsFetching(false);
  }

  console.log(images);
  return (
    <div className="design_studio_img_container">
      {searchResults &&
        searchResults.map(result => {
          return <ImageCard result={result} key={`${result.id}}`} />;
        })}

      {isFetching && 'Fetching more list items...'}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    searchResults: state.designStudioReducer.searchResults,
    currentSearch: state.designStudioReducer.currentSearch,
    nextPage: state.designStudioReducer.nextPage
  };
};

export default connect(
  mapStateToProps,
  { getNextPage }
)(ImageGallery);
