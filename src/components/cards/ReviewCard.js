import React from 'react';

function ReviewCard({ author, comment, avatar }) {
  return (
    <div className="review_card">
      <img src={avatar} alt="avatar" />
      <div className="review_text">
        <p>{comment}</p>
        <h5>{author}</h5>
      </div>
    </div>
  );
}

export default ReviewCard;
