import React from 'react';
import Loader from 'react-loader-spinner';
import jumboImg from '../../assets/images/overview/Drone-Photo-2.jpg';
import lazyJumboImg from '../../assets/images/overview/Drone-Photo-2-lazy.jpg';
import { LazyImage } from 'react-lazy-images';
import { connect } from 'react-redux';
import { commaSeparator } from '../../helper-functions/display-functions';

function DashboardJumbo({ address, valuation, fetching }) {
  return (
    <div className="dashboard_jumbo">
      <LazyImage
        src={jumboImg}
        alt="home feature"
        placeholder={({ imageProps, ref }) => <img ref={ref} className="house_image" alt="house" src={lazyJumboImg} />}
        actual={({ imageProps }) => <img {...imageProps} className="house_image" alt="house" src={jumboImg} />}
      />
      <div className="address_value_flex">
        <div className="address">
          <i className="fas fa-map-marker-alt" />
          <h3>{address}</h3>
        </div>
        <div className="value">
          <h4>Valuation</h4>
          <h1>{fetching ? <Loader height={25} width={25} type="TailSpin" color="#22ab00" /> : commaSeparator(valuation)}</h1>
        </div>
      </div>
    </div>
  );
}

export default connect(
  ({ houseReducer: { fetching } }) => {
    return {
      fetching
    };
  },
  {}
)(DashboardJumbo);
