import React from 'react';
import { connect } from 'react-redux';
import ImageCard from './ImageCard';
import { getNextPage } from '../../../actions/designStudioActions';
import { useInfiniteScroll } from '../../../helper-functions/display-functions';
import decorateSvg from '../../../assets/icons/decorating.svg';

function ImageGallery({ searchResults, getNextPage, currentSearch, currentPage }) {
  const getNext = () => {
    if (currentSearch === '') {
      setIsFetching(false);
    } else {
      getNextPage(currentSearch, currentPage + 1);
      setIsFetching(!isFetching);
    }
  };
  const [isFetching, setIsFetching] = useInfiniteScroll(getNext);

  console.log('isFetching', isFetching);
  return (
    <>
      {currentSearch === '' && <img src={decorateSvg} alt="" className="decorate_svg" />}
      <div className="design_studio_img_container">
        {searchResults &&
          searchResults.map(result => {
            return <ImageCard result={result} key={`${result.id}}`} />;
          })}

        {/* {isFetching && <Loader height={50} width={50} type="TailSpin" color="#2868d9" />} */}
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    searchResults: state.designStudioReducer.searchResults,
    currentSearch: state.designStudioReducer.currentSearch,
    currentPage: state.designStudioReducer.currentPage
  };
};

export default connect(
  mapStateToProps,
  { getNextPage }
)(ImageGallery);
