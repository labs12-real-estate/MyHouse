import React from 'react';

function FeatureCard(props) {
  return (
    <div className="feature_card">
      <img src={props.props.url} alt="" />
      <div className="text_box">
        <h3>{props.props.text}</h3>
        <h1>{props.props.value}</h1>
      </div>
    </div>
  );
}

export default FeatureCard;
