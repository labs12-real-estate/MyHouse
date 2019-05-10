import React from 'react';
import macBook from '../../assets/images/macbook.png';
import laptop from '../../assets/icons/laptop.svg';
import statistics from '../../assets/icons/statistics.svg';
import calculator from '../../assets/icons/calculator.svg';
import MarketingCard from '../cards/MarketingCard';

export default function LandingMiddle() {
  return (
    <div>
      <section className="landing_mid">
        <h2>Skip the Middleman</h2>
        <p>
          Coupled with the best machine learning algorithms in real estate technology, MyHouse’s data provides homeowners and buyers the most accurate decision
          making information on the market.
        </p>
      </section>

      <section className="macbook">
        <img src={macBook} alt="macbook with demo" />
      </section>

      <div className="landing_cloud_2" />

      <section className="landing_mid_grey">
        <h2>Why MyHouse?</h2>
        <div className="marketing_cards">
          <MarketingCard
            icon={laptop}
            title="Customized"
            description="Create an account and gain access to your MyHouse profile page, which allows you to customize your homeowner story and all of the changes you've made since purchase!"
          />
          <MarketingCard
            icon={calculator}
            title="Transparent"
            description="We believe the homeowner should have all the tools and information necessary to make good decisions in home ownership. So we give it all to you."
          />
          <MarketingCard
            icon={statistics}
            title="Simple"
            description="If it's so complicated no one can use it, then it doesn't really serve a purpose. We strive to make all of our tools user friendly so everyone can benefit."
          />
        </div>
      </section>
    </div>
  );
}
