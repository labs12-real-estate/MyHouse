import React from 'react';
import { connect } from 'react-redux';
import { LazyImage } from 'react-lazy-images';

function FeatureCard({ lazyUrl, url, text, value, fetching }) {
  return (
    <div className="feature_card">
      <LazyImage
        src={url}
        alt="home feature"
        placeholder={({ imageProps, ref }) => <img ref={ref} src={lazyUrl} alt="placeholder" />}
        actual={({ imageProps }) => <img {...imageProps} alt={text} />}
      />
      <div className="text_box">
        <h3>{text}</h3>
        <h1>{value}</h1>
      </div>
    </div>
  );
}

export default connect(
  ({ houseReducer: { fetching } }) => {
    return { fetching };
  },
  {}
)(FeatureCard);
