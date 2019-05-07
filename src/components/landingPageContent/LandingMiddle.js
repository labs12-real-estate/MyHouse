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
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <MarketingCard
            icon={calculator}
            title="Transparent"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <MarketingCard
            icon={statistics}
            title="Simple"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </section>
    </div>
  );
}
