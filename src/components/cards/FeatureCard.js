import React from 'react';

function FeatureCard({ url, text, value }) {
  return (
    <div className="feature_card">
      <img src={url} alt="" />
      <div className="text_box">
        <h3>{text}</h3>
        <h1>{value}</h1>
      </div>
    </div>
  );
}

export default FeatureCard;
