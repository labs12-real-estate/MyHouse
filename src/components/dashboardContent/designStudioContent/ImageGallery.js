import React from 'react';
import { connect } from 'react-redux';
import ImageCard from './ImageCard';
import { getNextPage } from '../../../actions/designStudioActions';
import { useInfiniteScroll } from '../../../helper-functions/display-functions';
import decorateSvg from '../../../assets/icons/decorating.svg';
import Loader from 'react-loader-spinner';
import Button from '../../buttons/Button';

function ImageGallery({ searchResults, getNextPage, currentSearch, currentPage, fetching }) {
  const getNext = () => {
    if (currentSearch === '') {
      setIsFetching(false);
    } else {
      getNextPage(currentSearch, currentPage + 1);
      setIsFetching(!isFetching);
    }
  };
  const [isFetching, setIsFetching] = useInfiniteScroll(getNext);

  const filteredImgs = Array.from(new Set(searchResults.map(JSON.stringify)))
    .map(JSON.parse)
    .filter(i => i.id !== '5GS27oQNFkI');

  return (
    <>
      {currentSearch === '' && <img src={decorateSvg} alt="" className="decorate_svg" />}
      <div className="design_studio_img_container">
        {searchResults &&
          filteredImgs.map(result => {
            return <ImageCard result={result} key={`${result.id}}`} />;
          })}
      </div>
      <div style={{ margin: '0 auto', width: '80px', paddingBottom: '40px' }}>
        {fetching ? <Loader height={80} width={80} type="TailSpin" color="#2868d9" /> : null}
      </div>
      {searchResults.length > 0 && <Button buttonText="Load More" buttonStyle="pagination_btn" clickEvent={getNext} />}
    </>
  );
}

const mapStateToProps = state => {
  return {
    searchResults: state.designStudioReducer.searchResults,
    currentSearch: state.designStudioReducer.currentSearch,
    currentPage: state.designStudioReducer.currentPage,
    fetching: state.designStudioReducer.fetching
  };
};

export default connect(
  mapStateToProps,
  { getNextPage }
)(ImageGallery);
