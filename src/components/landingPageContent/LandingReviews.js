import React from 'react';
import ReviewCard from '../cards/ReviewCard';

export default function LandingReviews() {
  return (
    <div>
      <section className="landing_mid">
        <div className="reviews">
          <h2>Reviews</h2>
          <div className="review_cards">
            <ReviewCard
              comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              author="Lorem Ipsum"
            />
            <ReviewCard
              comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              author="Lorem Ipsum"
            />
            <ReviewCard
              comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              author="Lorem Ipsum"
            />
            <ReviewCard
              comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              author="Lorem Ipsum"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
