import React from 'react';
import ReviewCard from '../cards/ReviewCard';

export default function LandingReviews() {
  return (
    <div>
      <section className="landing_mid">
        <div className="reviews">
          <h2>Reviews</h2>
          <div className="review_cards">
            <ReviewCard comment="I love how easy it is to use and being able to get inspiration in the Design Studio is amazing!" author="Aleen" />
            <ReviewCard
              comment="I'm a real estate agent, and I know how often owners can get manipulated into selling their home for less than it's worth. With MyHouse you get a true valuation which takes into consideration more than just parcel data."
              author="Anthony"
            />
            <ReviewCard
              comment="I'm an older gentleman and when my son told me to check out this new app, I'll admit I was hesitant. But it was actually very intuitive and easy to use."
              author="Jeff"
            />
            <ReviewCard
              comment="The Valuation Playground is such an interesting tool! So cool to be able to see how upgrades on my home will affect it's value."
              author="Ashley"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
