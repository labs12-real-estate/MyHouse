import React from 'react';

function ReviewCard(props) {
  return (
    <div className="review_card">
      <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" />
      <div className="review_text">
        <p>{props.comment}</p>
        <h5>{props.author}</h5>
      </div>
    </div>
  );
}

export default ReviewCard;
