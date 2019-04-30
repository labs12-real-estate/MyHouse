import React from 'react';

function MarketingCard(props) {
  return (
    <div className="marketing_card">
      <img src={props.icon} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default MarketingCard;
